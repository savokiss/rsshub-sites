<template>
  <div class="RulesContainer">
    <Rule v-for="rule in rules" :vm="rule" :key="rule.link"></Rule>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { onMounted } from 'vue';
import Rule from './Rule.vue';

const { page } = useData();
const { rules } = page.value;


console.log('page', page.value);
console.log('rules', rules);

onMounted(() => {
  console.log('rulesList', rules);
});
</script>

<style>
.RulesContainer {}
</style>
