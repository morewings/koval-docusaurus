import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Koval UI',
  tagline: 'Let the browser do the work, resulting in simpler code and a more streamlined user experience.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://koval.support',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'morewings',
  projectName: 'koval-docs',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/morewings/koval-docusaurus/tree/master',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/morewings/koval-docusaurus/tree/master',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: ['./src/css/custom.css', 'node_modules/koval-ui/dist/index.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    image: 'img/social.png',
    colorMode: {
      respectPrefersColorScheme: false,
      // TODO: enable when Koval dark theme ready
      disableSwitch: true
    },
    navbar: {
      title: 'Koval UI: Developer Guide',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://morewings.github.io/koval-ui/',
          label: 'Storybook',
          position: 'left',
        },
        {
          href: 'https://github.com/morewings/koval-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Developer guide',
          items: [
            {
              label: 'Docs',
              to: '/docs/quickstart',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              href: 'https://morewings.github.io/koval-ui/',
              label: 'Storybook'
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Koval UI Github',
              href: 'https://github.com/morewings/koval-ui',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/koval-ui',
            },
            {
              label: 'Product hunt',
              href: 'https://www.producthunt.com/products/koval-ui-react-components-library',
            },
          ],
        },
        {
          title: 'Dima Vyshniakov',
          items: [
            {
              label: 'My links',
              href: 'https://links.morewings.dev/',
            },
            {
              label: 'My GitHub',
              href: 'https://github.com/morewings',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Koval UI, Dima Vyshniakov. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
