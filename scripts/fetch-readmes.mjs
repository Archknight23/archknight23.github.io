#!/usr/bin/env node
/**
 * Fetches each featured repo's README at build time and writes a snippet map
 * to src/data/readmes.json. Runs on publish, not in the browser: visitors make
 * zero GitHub API calls, so nothing here can be rate-limited at view time.
 *
 * In CI, GITHUB_TOKEN raises the limit from 60/hr to 5000/hr.
 * If a fetch fails, the existing JSON is left alone rather than clobbered —
 * a flaky network must not silently empty the homepage.
 */
import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'src/data/readmes.json');
const OWNER = 'Archknight23';

const REPOS = [
  'SonicEncoder',
  'Suno-Encrypted-Messaging-PoC',
  'chat-aggregator-terminal',
  'crucix-cf',
  'asm-nightmare-core-demo',
];

const MAX = 320;

/** Reduce README markdown to one readable paragraph. */
function toSnippet(md) {
  const body = md
    .replace(/```[\s\S]*?```/g, '') // fenced code
    .replace(/<[^>]+>/g, '') // raw html
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images and badges
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/^\s*[-*+]\s+/gm, '') // list bullets
    .replace(/[*_`>#]/g, '');

  const para = body
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .find((p) => p.length > 40);

  if (!para) {
    return null;
  }
  if (para.length <= MAX) {
    return para;
  }
  // Cut on a sentence boundary where possible, else a word boundary.
  const cut = para.slice(0, MAX);
  const stop = cut.lastIndexOf('. ');
  return stop > MAX * 0.5
    ? cut.slice(0, stop + 1)
    : `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

async function main() {
  const headers = {
    accept: 'application/vnd.github.raw+json',
    'user-agent': 'archknight23.github.io-build',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const snippets = {};
  let failures = 0;

  for (const repo of REPOS) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${OWNER}/${repo}/readme`,
        {headers},
      );
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const snippet = toSnippet(await res.text());
      if (!snippet) {
        throw new Error('no prose paragraph found');
      }
      snippets[repo] = snippet;
      console.log(`  ok   ${repo} (${snippet.length} chars)`);
    } catch (err) {
      failures += 1;
      console.warn(`  warn ${repo}: ${err.message}`);
    }
  }

  if (failures === REPOS.length) {
    console.warn('All README fetches failed — keeping the committed snapshot.');
    return;
  }

  // Merge over the previous snapshot so one failed repo keeps its old text.
  let previous = {};
  try {
    previous = JSON.parse(await readFile(OUT, 'utf8'));
  } catch {
    // First run; nothing to merge.
  }

  await mkdir(dirname(OUT), {recursive: true});
  await writeFile(OUT, `${JSON.stringify({...previous, ...snippets}, null, 2)}\n`);
  console.log(`Wrote ${OUT}`);
}

main();
