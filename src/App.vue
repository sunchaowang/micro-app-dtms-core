<template>
  <a-layout
    :style="{
      height: '100vh',
    }"
  >
    <a-layout-sider>
      <div class="logo"></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item v-for="item in menuItems" :key="item.key" @click="item.click">
          <template #icon>
            <UserOutlined />
          </template>
          <span class="nav-text"> {{ item.text }} </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }">
        Root Count: {{ count }} <button @click="count++">+</button>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <!--        <h1> APP </h1>-->
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
  import { ref, onMounted, watch } from 'vue';
  import { UserOutlined } from '@ant-design/icons-vue';
  import { useRouter } from '@shared/router';
  import microApp from '@micro-zoe/micro-app';

  const router = useRouter();

  const selectedKeys = ref<string[]>(['1']);
  const count = ref(0);

  const menuItems = ref([
    {
      key: '1',
      text: '首页',
      click: () => {
        selectedKeys.value = ['1'];
        router.push({ path: '/home' });
      },
    },
    {
      key: '2',
      text: '汽车',
      click: () => {
        selectedKeys.value = ['2'];
        router.push({ path: '/base/car' });
      },
    },
    {
      key: '3',
      text: '煤炭',
      click: () => {
        selectedKeys.value = ['3'];
        router.push({ path: '/base/coal' });
      },
    },
  ]);

  watch(count, () => {
    microApp.setGlobalData({
      rootCount: count.value,
    });
  });

  onMounted(() => {
    // 预加载
    // MicroApp.preFetch(() => {
    //   return [];
    // });
    console.log('mounted');
  });
</script>
<style scoped>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }

  [data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
  }
</style>
