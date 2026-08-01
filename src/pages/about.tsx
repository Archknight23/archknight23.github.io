import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './about.module.css';

const DIVISIONS = [
  {
    name: 'Security Research',
    desc: 'Offensive tooling, red team PoCs, reverse engineering, OSINT.',
    badge: 'ember',
    icon: '🔧',
  },
  {
    name: 'Streaming',
    desc: 'Indie games, horror, dev chaos, KARAOKE. VTuber duo — Arch & Yuki.',
    badge: 'aurora',
    icon: '🔴',
  },
  {
    name: 'Tooling',
    desc: "TUIs, chat aggregators, steganography engines. Things that shouldn't work but do.",
    badge: 'bio',
    icon: '💻',
  },
  {
    name: 'Community',
    desc: 'Discord, Twitch chat, open source. Building with the community, not just for it.',
    badge: 'plasma',
    icon: '🌐',
  },
];

export default function About(): React.JSX.Element {
  return (
    <Layout title="About" description="About The Chaos Foundry Security Division">
      <header className={clsx('hero', styles.header)}>
        <div className="container">
          <span className="cf-kicker">CFSD // Identity</span>
          <h1>About</h1>
          <p>
            The Chaos Foundry Security Division — less "corporate pentest report,"
            more "what happens when you give two streamers a C compiler and zero supervision."
          </p>
        </div>
      </header>
      <main className="container" style={{padding: '2rem 0 4rem'}}>
        <div className={styles.grid}>
          {DIVISIONS.map((div) => (
            <div key={div.name} className={clsx('cf-card', styles.card)}>
              <div className={styles.cardIcon}>{div.icon}</div>
              <h3>{div.name}</h3>
              <p>{div.desc}</p>
            </div>
          ))}
        </div>

        <section className={styles.connect}>
          <h2 className="cf-section-title">Connect</h2>
          <div className={styles.links}>
            <a href="https://twitch.tv/archknight23" className="button button--primary">Twitch</a>
            <a href="https://discord.gg/brKphTJc55" className="button button--secondary">Discord</a>
            <a href="https://github.com/Archknight23" className="button button--secondary">GitHub</a>
            <a href="https://chaosfoundry.digital" className="button button--secondary">The Foundry</a>
          </div>
        </section>

        <p className={styles.signoff}>
          <code>Pax Chaosica Et Gloria Infinitum.</code>
        </p>
      </main>
    </Layout>
  );
}
