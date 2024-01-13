<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useUserStore } from '@/store/modules';

  const userStore = useUserStore();

  onMounted(() => {
    console.log('home mounted');
  });
</script>

<template>
  <div>
    <h1> userStore{{ userStore }} core home </h1>
  </div>
</template>

<style scoped lang="less"></style>
