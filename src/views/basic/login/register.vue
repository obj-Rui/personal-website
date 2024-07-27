<template>
  <!-- 注册 -->
  <n-flex justify="center" items-center h-full>
    <n-card w-xl>
      <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules">
        <n-form-item label="账号" path="username">
          <n-input v-model:value="formValue.username" placeholder="输入账号" />
        </n-form-item>
        <n-form-item label="密码" path="password">
          <n-input v-model:value="formValue.password" placeholder="输入密码" />
        </n-form-item>
        <n-form-item label="邮箱" path="password">
          <n-auto-complete
            v-model:value="formValue.email"
            :input-props="{
              autocomplete: 'disabled',
            }"
            :options="emailOptions"
            placeholder="邮箱"
            clearable
          />
        </n-form-item>
        <n-form-item label="验证码" path="code">
          <n-input v-model:value="formValue.code" placeholder="输入验证码" />
        </n-form-item>
        <div w-full text-right>
          <!-- 跳转登录页面 -->
          <RouterLink to="/login" custom>
            <n-text type="success" decoration-underline> 已有账号去登陆 </n-text>
          </RouterLink>
        </div>
        <n-form-item>
          <n-button attr-type="button" @click="handleValidateClick"> 确认 </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-flex>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import type { FormInst } from 'naive-ui';
import { userLogin } from './api';

const formRef = ref<FormInst | null>(null);
const rules = {
  user: {
    username: {
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    },
    password: {
      required: true,
      message: '请输入年龄',
      trigger: ['input', 'blur'],
    },
  },
  phone: {
    required: true,
    message: '请输入电话号码',
    trigger: ['input'],
  },
};

const formValue = ref({
  username: '',
  password: '',
  email: '',
  code: '', // 验证码
});

// 邮箱自动后缀
const emailOptions = computed(() => {
  return ['@gmail.com', '@163.com', '@qq.com'].map((suffix) => {
    const prefix = formValue.value.email.split('@')[0];
    return {
      label: prefix + suffix,
      value: prefix + suffix,
    };
  });
});
function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      userLogin(formValue.value);
      // message.success('Valid');
    } else {
      console.log(errors);
      // message.error('Invalid');
    }
  });
}
</script>
