<template>
  <!--  <h1>MicroApp</h1>-->
  <!--  {{ route }} {{ currentMicroApp }}-->
  <micro-app
    v-if="currentMicroApp.name"
    :name="currentMicroApp.name"
    :url="currentMicroApp.url"
    :base-route="`/${currentMicroApp.name}/`"
    iframe
    class="micro-app"
    disable-memory-router
    @mounted="currentMicroApp.mounted"
    @unmounted="currentMicroApp.unmounted"
  />
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from '@shared/router';
  import { computed, onMounted, watch } from 'vue';
  import microApp from '@micro-zoe/micro-app';
  import { getAppConfig } from '@/views/micro-app/indexData';
  const router = useRouter();
  const route = useRoute();

  onMounted(() => {
    console.log('micro-app mounted');
    getAppConfig();
  });

  const app = getAppConfig();

  // currentMicroApp 的配置
  const currentMicroApp = computed(() => {
    const name = route.params?.path?.[0] as string;
    return app.find((item) => item.name === `base-${name}`) ?? {};
  });

  // 监听路由 下发路径
  watch(
    () => route.fullPath,
    () => {
      console.log('router path', route.path);
      microApp.setData(currentMicroApp.value.name, {
        path: route.path.replace(`/${currentMicroApp.value.name}/`.replace('-', '/'), '/'),
      });
    },
    {
      deep: true,
    },
  );

  watch(
    () => route,
    () => {
      console.log('currentMicroApp', route.path);
    },
    {
      immediate: true,
      deep: true,
    },
  );
</script>

<style scoped lang="less">
  .micro-app {
    width: 100%;
    height: 100%;
  }
</style>
