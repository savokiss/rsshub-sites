import DefaultTheme from 'vitepress/theme';
import Rule from '../components/Rule.vue';
import RulesContainer from '../components/RulesContainer.vue';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('Rule', Rule);
    ctx.app.component('RulesContainer', RulesContainer);
    console.log('ctx', ctx);
  },
};
