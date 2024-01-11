import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Antd from 'ant-design-vue';
import { router } from './router';
import 'ant-design-vue/dist/antd.css';
import microApp from '@micro-zoe/micro-app';
try {
  microApp.start({
    lifeCycles: {
      created() {
        console.log('created 全局监听');
      },
      beforemount() {
        console.log('beforemount 全局监听');
      },
      mounted() {
        console.log('mounted 全局监听');
      },
      unmount() {
        console.log('unmount 全局监听');
      },
      error() {
        console.log('error 全局监听');
      },
    },
  });
} catch (error) {
  console.log(error);
}
const app = createApp(App);
app.use(Antd);
app.use(router);
app.mount('#app');

// 拦截异常错误
app.config.errorHandler = (err, vm, info) => {
  console.error(vm, err, info);
};
