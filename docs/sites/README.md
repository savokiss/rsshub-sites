# Sites

<template v-for="cat in categoryList" :key="cat">
  <h2 class="cat-title">{{ cat }}</h2>
  <div class="rule-item" v-for="item in rulesMap[cat].items">
    <a :href="item.link" target="_blank">{{item.name}} - {{item.link}}</a>
  </div>
</template>

<script setup>
import { rulesMap } from '@temp/rules-map.js';
const categoryList = Object.keys(rulesMap).sort();
</script>

<style>
.cat-title {
  margin-bottom: 40px;
}
.rule-item {
  margin-bottom: 10px;
}
</style>