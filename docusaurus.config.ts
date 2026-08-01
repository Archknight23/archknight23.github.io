import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'The Chaos Foundry',
  tagline: 'Security Research · Streaming · Chaos',
  favicon: 'img/favicon.ico',

  url: 'https://archknight23.github.io',
  baseUrl: '/',

  organizationName: 'Archknight23',
  projectName: 'archknight23.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    navbar: {
      title: 'CHAOS FOUNDRY',
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/Archknight23',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://twitch.tv/archknight23',
          label: 'Twitch',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {label: 'Twitch', href: 'https://twitch.tv/archknight23'},
            {label: 'YouTube', href: 'https://www.youtube.com/channel/UCX62Y3HCvVsqEKvG-wEaQdA'},
            {label: 'Kick', href: 'https://www.kick.com/ChaosFoundry'},
            {label: 'Discord', href: 'https://discord.gg/brKphTJc55'},
          ],
        },
        {
          title: 'Code',
          items: [
            {label: 'GitHub', href: 'https://github.com/Archknight23'},
            {label: 'Chaos Foundry', href: 'https://chaosfoundry.digital'},
            {label: 'Bluesky', href: 'https://witchsky.app/profile/did:plc:nsyrfbhyzndt54airpmuynod'},
          ],
        },
      ],
      copyright: `Pax Chaosica Et Gloria Infinitum.<br/>EST. 2020 · THE CHAOS FOUNDRY · ALL REALITIES RESERVED`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
