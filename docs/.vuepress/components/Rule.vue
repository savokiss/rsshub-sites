<template>
  <div class="Rule">
    <h2 class="Rule__title">{{vm.category}}</h2>
    <a :href="vm.link" target="_blank">{{vm.name}} - {{vm.link}}</a>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  vm: {
    type: Object,
    required: true,
    default () {
      return {
        link: '',
        name: '',
        category: '',
      };
    }
  },
});

onMounted(() => {
  console.log('rule', props.vm);
})
</script>

<style>

</style>
