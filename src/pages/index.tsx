import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const FEATURED_PROJECTS = [
  {
    name: 'SonicEncoder',
    desc: 'Steganographic encoder — hide messages in songs.',
    lang: 'Python',
    url: 'https://github.com/Archknight23/SonicEncoder',
    badge: 'bio',
  },
  {
    name: 'Suno-Encrypted-Messaging-PoC',
    desc: 'Subversive messaging via AI-generated audio.',
    lang: 'PoC',
    url: 'https://github.com/Archknight23/Suno-Encrypted-Messaging-PoC',
    badge: 'ember',
  },
  {
    name: 'chat-aggregator-terminal',
    desc: 'Streaming chat reader in your terminal.',
    lang: 'Python',
    url: 'https://github.com/Archknight23/chat-aggregator-terminal',
    badge: 'aurora',
  },
  {
    name: 'asm-nightmare-core-demo',
    desc: 'CPU burner & exfil demo. ASM/Python/C++.',
    lang: 'C',
    url: 'https://github.com/Archknight23/asm-nightmare-core-demo',
    badge: 'plasma',
  },
];

function Hero() {
  return (
    <header className={clsx('hero', styles.hero)}>
      <div className="container">
        <img
          src="/img/cf-nexus-banner.svg"
          alt="CHAOS FOUNDRY — CF-NEXUS"
          className={styles.banner}
        />
        <p className={styles.tagline}>
          Security Research · Streaming · Chaos
        </p>
        <p className={styles.subtitle}>
          Operated by Archknight & Yuki. Breaking things on stream so you don't have to break them in prod.
        </p>
        <div className={styles.buttons}>
          <a
            className="button button--primary button--lg"
            href="/projects"
          >
            View Projects
          </a>
          <a
            className="button button--secondary button--lg"
            href="https://twitch.tv/archknight23"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Live →
          </a>
        </div>
      </div>
    </header>
  );
}

function FeaturedProjects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <h2 className="cf-section-title">Featured Work</h2>
        <div className={styles.projectGrid}>
          {FEATURED_PROJECTS.map((project) => (
            <a
              key={project.name}
              href={project.url}
              className={clsx('cf-card', styles.projectCard)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.projectHeader}>
                <h3>{project.name}</h3>
                <span className={`cf-badge cf-badge-${project.badge}`}>
                  {project.lang}
                </span>
              </div>
              <p>{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Home" description="The Chaos Foundry — Security Research, Streaming, Chaos">
      <Hero />
      <FeaturedProjects />
    </Layout>
  );
}
