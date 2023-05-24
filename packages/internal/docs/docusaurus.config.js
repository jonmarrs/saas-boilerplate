module.exports = {
  title: 'SaaS Boilerplate by Apptension',
  tagline: 'SaaS Boilerplate is not a boiler on a plate',
  url: 'https://docs.demo.saas.apptoku.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'Apptension',
  projectName: 'saas-boilerplate',
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: false,
      },
    },
    navbar: {
      title: 'SaaS Boilerplate by Apptension',
      logo: {
        alt: 'SaaS Boilerplate by Apptension',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'SaaS Boilerplate website',
          href: 'https://apptension.com/saas-boilerplate',
          position: 'right',
        },
        {
          href: 'https://github.com/apptension/saas-boilerplate',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} SaaS Boilerplate by <a href="https://apptension.com" target="_blank">Apptension</a>.`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
  customFields: {
    projectName: 'SaaS Boilerplate',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'typedoc-webapp-api-client',
        entryPoints: [
          '../../webapp-libs/webapp-api-client/src/hooks/index.ts',
          '../../webapp-libs/webapp-api-client/src/providers/index.ts',
          '../../webapp-libs/webapp-api-client/src/tests/utils/rendering.tsx',
          '../../webapp-libs/webapp-api-client/src/tests/utils/fixtures.ts',
        ],
        tsconfig: '../../webapp-libs/webapp-api-client/tsconfig.lib.json',
        out: 'v2/api-reference/webapp-api-client/generated',
        readme: 'none',
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'typedoc-webapp-core',
        entryPoints: [
          '../../webapp-libs/webapp-core/src/utils/index.ts',
          '../../webapp-libs/webapp-core/src/hooks/index.ts',
          '../../webapp-libs/webapp-core/src/theme/index.ts',
          '../../webapp-libs/webapp-core/src/components/buttons/index.ts',
          '../../webapp-libs/webapp-core/src/components/forms/index.ts',
          '../../webapp-libs/webapp-core/src/tests/utils/rendering.tsx',
        ],
        tsconfig: '../../webapp-libs/webapp-core/tsconfig.lib.json',
        out: 'v2/api-reference/webapp-core/generated',
        readme: 'none',
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'typedoc-webapp',
        entryPoints: [
          '../../webapp/src/app/providers/index.ts',
          '../../webapp/src/shared/components/routes/index.ts',
          '../../webapp/src/shared/utils/storybook.tsx',
          '../../webapp/src/tests/utils/rendering.tsx',
        ],
        tsconfig: '../../webapp/tsconfig.app.json',
        out: 'v2/api-reference/webapp/generated',
        readme: 'none',
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
  ],
};
