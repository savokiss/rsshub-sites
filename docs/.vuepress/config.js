import { defineUserConfig, defaultTheme } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { fetchFormatedRules, getCategoryRulesMap } from '../../scripts/rules';

export default defineUserConfig({
  title: 'RSSHub Sites',
  description: 'Just some useful documents',
  head: [
    ['link', { rel: 'icon', href: `https://rsshub-docs.netlify.app/logo.png` }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  theme: defaultTheme({
    repo: 'savokiss/rsshub-sites',
    docsDir: 'docs',
    navbar: [{ text: 'Home', link: '/' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/savokiss/rsshub-sites' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present savokiss',
    },
    sidebar: false,
  }),
  async onPrepared(app) {
    const rules = await fetchFormatedRules();
    const map = getCategoryRulesMap(rules);
    app.writeTemp('rules-map.js', `
      export const rulesMap = ${JSON.stringify(map)};`
    );
  },
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-1NDVCZBFVF',
    }),
  ],
});
