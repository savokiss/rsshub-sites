<template>
  <div class="RulesContainer">
    <h2>in container</h2>
    <Rule v-for="rule in rules" :vm="rule" :key="rule.link"></Rule>
  </div>
</template>

<script setup>
import { usePageData } from '@vuepress/client';
import { onMounted } from 'vue';
import Rule from './Rule.vue';

const page = usePageData();
const { rules } = page.value;

onMounted(() => {
  console.log('page', page.value);
  console.log('rulesList', rules);
});
</script>

<style>
.RulesContainer {}
</style>
