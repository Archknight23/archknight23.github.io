import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './projects.module.css';

interface Repo {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  fork: boolean;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Ruby: '#701516',
  Rust: '#dea584',
  Go: '#00ADD8',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

function RepoCard({repo}: {repo: Repo}) {
  return (
    <a
      href={repo.html_url}
      className={clsx('cf-card', styles.repoCard)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.repoHeader}>
        <h3>{repo.name}</h3>
        {repo.fork && <span className="cf-badge cf-badge-plasma">fork</span>}
      </div>
      {repo.description && <p className={styles.repoDesc}>{repo.description}</p>}
      <div className={styles.repoMeta}>
        {repo.language && (
          <span className={styles.langDot}>
            <span
              className={styles.dot}
              style={{backgroundColor: LANGUAGE_COLORS[repo.language] || '#8B91B4'}}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span>★ {repo.stargazers_count}</span>
        )}
        {repo.forks_count > 0 && (
          <span>⑂ {repo.forks_count}</span>
        )}
      </div>
      {repo.topics?.length > 0 && (
        <div className={styles.topics}>
          {repo.topics.slice(0, 5).map((t) => (
            <span key={t} className="cf-badge cf-badge-aurora">{t}</span>
          ))}
        </div>
      )}
    </a>
  );
}

export default function Projects(): React.JSX.Element {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/Archknight23/repos?per_page=100&sort=updated')
      .then((r) => {
        // Unauthenticated calls are capped at 60/hr per IP; on 403 GitHub
        // returns a JSON object, not an array, so status has to be checked
        // before the body is treated as a list.
        if (!r.ok) {
          throw new Error(`GitHub API responded ${r.status}`);
        }
        return r.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error('Unexpected GitHub API payload');
        }
        const filtered = data
          .filter((r: Repo) => !r.fork)
          .sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
        setLoading(false);
      })
      .catch(() => {
        setFailed(true);
        setLoading(false);
      });
  }, []);

  return (
    <Layout title="Projects" description="Chaos Foundry projects and open source work">
      <header className={clsx('hero', styles.header)}>
        <div className="container">
          <span className="cf-kicker">Source Code</span>
          <h1>Projects</h1>
          <p>Open source work from The Chaos Foundry Security Division.</p>
        </div>
      </header>
      <main className="container" style={{padding: '2rem 0 4rem'}}>
        {loading && <p className={styles.loading}>Loading repositories…</p>}

        {!loading && failed && (
          <p className={styles.loading}>
            Repository feed unavailable — GitHub is rate-limiting us.{' '}
            <a href="https://github.com/Archknight23?tab=repositories">
              Browse the repos directly →
            </a>
          </p>
        )}

        {!loading && !failed && repos.length === 0 && (
          <p className={styles.loading}>No public repositories to show yet.</p>
        )}

        {!loading && !failed && repos.length > 0 && (
          <div className={styles.grid}>
            {repos.map((repo) => (
              <RepoCard key={repo.name} repo={repo} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
}
