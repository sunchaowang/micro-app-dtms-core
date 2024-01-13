<template>
  <h1>MicroApp</h1>
  {{ route.params }} {{ microApp }}
  <Component
    :is="'micro-app'"
    v-if="microApp.name"
    :name="microApp.name"
    :url="microApp.url"
    :baseRoute="'/car'"
    iframe
    @mounted="microApp.mounted"
    @unmounted="microApp.unmounted"
  />
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from '@shared/router';
  import { computed, watch } from 'vue';
  const router = useRouter();
  const route = useRoute();

  const app = [
    {
      name: 'module-car',
      url: 'http://localhost:17017/app-car',
      autoLoad: true,
      autoRender: true,
      style: {
        height: '100%',
      },
      props: {
        name: 'module-car',
      },
      events: () => {},
      mounted: () => {
        console.log('module-car mounted');
      },
      unmounted: () => {},
    },
    {
      name: 'module-coal',
      url: 'http://localhost:17018/app-coal',
      autoLoad: true,
      autoRender: true,
      style: {
        height: '100%',
      },
      props: {
        name: 'module-coal',
      },
      events: () => {},
      mounted: () => {
        console.log('module-coal mounted');
      },
      unmounted: () => {},
    },
  ];

  // microApp 的配置
  const microApp = computed(() => {
    const name = route.params?.path?.[0] as string;
    const appConfig = app.find((item) => item.name === `module-${name}`) ?? {};
    return appConfig;
  });

  watch(
    () => microApp,
    () => {
      console.log('microApp', microApp);
    },
  );
</script>

<style scoped></style>
