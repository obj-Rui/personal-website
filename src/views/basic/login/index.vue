<template>
  <n-flex justify="center" items-center h-full>
    <n-card w-3xl>
      <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules">
        <n-form-item label="账号" path="user.username">
          <n-input v-model:value="formValue.user.username" placeholder="输入姓名" />
        </n-form-item>
        <n-form-item label="密码" path="user.password">
          <n-input v-model:value="formValue.user.password" placeholder="输入密码" />
        </n-form-item>
        <n-form-item items-end>
          <n-button attr-type="button" @click="handleValidateClick"> 确认 </n-button>
        </n-form-item>
      </n-form>
    </n-card>
  </n-flex>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { FormInst } from 'naive-ui';
import { useMessage } from 'naive-ui';
import { userLogin } from './api';
const message = useMessage();

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
  user: {
    username: '',
    password: '',
  },
  phone: null,
});
function handleValidateClick(e: MouseEvent) {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      userLogin(formValue.value.user);
      message.success('Valid');
    } else {
      console.log(errors);
      message.error('Invalid');
    }
  });
}
</script>
