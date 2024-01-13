<script setup lang="ts">
  import { ref } from 'vue';

  const form = ref({
    username: '',
    password: '',
  });

  const loading = ref(false);

  const labelCol = ref({
    span: 4,
  });

  const wrapperCol = ref({
    span: 20,
  });

  const onFinish = () => {
    console.log('onFinish');
  };
</script>

<template>
  <!-- 登录 -->
  <a-layout class="login-layout">
    <a-layout-content class="login-layout-content">
      <a-row class="login-row">
        <a-col :span="12" class="login-col">
          <a-form :form="form" :label-col="labelCol" :wrapper-col="wrapperCol" @finish="onFinish">
            <a-form-item label="用户名" name="username">
              <a-input
                v-model:value="form.username"
                placeholder="请输入用户名"
                prefix-icon="user"
              />
            </a-form-item>
            <a-form-item label="密码" name="password">
              <a-input-password
                v-model:value="form.password"
                placeholder="请输入密码"
                prefix-icon="lock"
              />
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" :loading="loading" :disabled="loading">
                登录
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-layout>
</template>

<style scoped></style>
