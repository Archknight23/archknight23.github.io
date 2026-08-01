import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import readmes from '@site/src/data/readmes.json';
import styles from './index.module.css';

const FEATURED_PROJECTS = [
  {name: 'SonicEncoder', lang: 'Python', badge: 'bio'},
  {name: 'Suno-Encrypted-Messaging-PoC', lang: 'PoC', badge: 'ember'},
  {name: 'chat-aggregator-terminal', lang: 'Python', badge: 'aurora'},
  {name: 'crucix-cf', lang: 'Python', badge: 'plasma'},
  {name: 'asm-nightmare-core-demo', lang: 'C', badge: 'plasma'},
];

const SNIPPETS: Record<string, string> = readmes;

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="Home"
      description="The Chaos Foundry — Security Research, Streaming, Chaos">
      <header className={clsx('hero', styles.hero)}>
        <div className="container">
          <div className={styles.split}>
            <div className={styles.identity}>
              <img
                src="/img/cf-nexus-banner.svg"
                alt="CHAOS FOUNDRY — CF-NEXUS"
                className={styles.banner}
              />
              <p className={styles.tagline}>
                Security Research · Streaming · Chaos
              </p>
              <p className={styles.subtitle}>
                Archknight &amp; Yuki. Breaking things on stream so you don't
                have to break them in prod.
              </p>
            </div>

            <div className={styles.work}>
              <h2 className="cf-section-title">Featured Work</h2>
              <div className={styles.projectColumn}>
                {FEATURED_PROJECTS.map((project) => (
                  <a
                    key={project.name}
                    href={`https://github.com/Archknight23/${project.name}`}
                    className={clsx('cf-card', styles.projectPill)}
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className={styles.projectHeader}>
                      <h3>{project.name}</h3>
                      <span className={`cf-badge cf-badge-${project.badge}`}>
                        {project.lang}
                      </span>
                    </div>
                    {/* Collapsed to zero height until hover/focus; the inner
                        wrapper keeps its natural height so the grid row has
                        something to animate against. */}
                    <div className={styles.projectReveal}>
                      <div className={styles.projectRevealInner}>
                        <p className={styles.projectSnippet}>
                          {SNIPPETS[project.name] ??
                            'README unavailable at build time.'}
                        </p>
                        <span className={styles.projectCta}>Read further →</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}
