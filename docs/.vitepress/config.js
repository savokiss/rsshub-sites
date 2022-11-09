import { fetchFormatedRules } from '../../scripts/rules';

export default {
  title: 'RSSHub Sites',
  description: 'Just some useful documents',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  themeConfig: {
    repo: 'savokiss/rsshub-sites',
    docsDir: 'docs',
    lastUpdated: 'Last Updated',
    nav: [{ text: 'Home', link: '/' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/savokiss/rsshub-sites' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present savokiss',
    },
    sidebar: [
      {
        text: 'Get Started',
        items: [{ text: 'Sites', link: '/sites/index.md' }],
      },
    ],
  },
  async transformPageData(pageData) {
    const rules = await fetchFormatedRules();
    pageData.rules = rules;
  }
};
