import { defineClientConfig } from '@vuepress/client'
import Rule from './components/Rule.vue';
import RulesContainer from './components/RulesContainer.vue';

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component('Rule', Rule);
    app.component('RulesContainer', RulesContainer);
  },
  setup() {},
})