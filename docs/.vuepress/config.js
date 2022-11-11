import { defineUserConfig, defaultTheme } from 'vuepress'
import { fetchFormatedRules, getCategoryRulesMap } from '../../scripts/rules';

export default defineUserConfig({
  title: 'RSSHub Sites',
  description: 'Just some useful documents',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
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
  async extendsPage(page) {
    const rules = await fetchFormatedRules();
    page.data.rules = rules;
  }
});
