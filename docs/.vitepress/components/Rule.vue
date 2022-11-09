<template>
  <div class="Rule">
    <a :href="vm.link" target="_blank">{{vm.name}} - {{vm.link}}</a>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import { defineProps, onMounted } from 'vue';

const props = defineProps({
  vm: {
    type: Object,
    required: true,
    default () {
      return {
        link: '',
        name: '',
      };
    }
  },
});

const { page } = useData();

onMounted(() => {
  console.log('rule', props.vm);
})
</script>

<style></style>
