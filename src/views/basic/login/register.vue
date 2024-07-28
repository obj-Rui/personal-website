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
        <n-form-item label="邮箱" path="email">
          <n-auto-complete
            v-model:value="formValue.email"
            :input-props="{
              autocomplete: 'disabled',
            }"
            :options="emailOptions"
            placeholder="邮箱"
            clearable
            type="email"
          />
        </n-form-item>
        <n-form-item label="验证码" path="code">
          <n-input v-model:value="formValue.code" placeholder="输入验证码" />
          <n-button @click="handleCaptcha" :disabled="isStart" ml-3 type="primary">{{ btnText }}</n-button>
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
  <ImgVerify :show="isShowCheckModel" @success="checkSuccess" @close="onClose" />
</template>

<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue';
import type { FormInst } from 'naive-ui';
import { getCaptcha, register, userLogin } from './api';
import { useCountdown } from './useCountdown';
import ImgVerify from '/@/components/imgVerify/index.vue';
import { useMessage } from 'naive-ui';
const message = useMessage();
const formRef = ref<FormInst | null>(null);
const rules = {
  username: {
    required: true,
    message: '请输入账号',
    trigger: 'blur',
  },
  password: {
    required: true,
    message: '请输入密码',
    trigger: 'blur',
  },
  email: {
    required: true,
    message: '请输入邮箱',
    trigger: 'blur',
  },
  code: {
    required: true,
    message: '请输入验证码',
    trigger: 'blur',
  },
};
const isShowCheckModel = ref(false);
const btnText = ref('获取验证码');
const { currentCount, start, isStart } = useCountdown(6);

const formValue = ref({
  username: '',
  password: '',
  email: '',
  code: '', // 验证码
});

// 邮箱自动后缀
const emailOptions = computed(() => {
  return ['@qq.com'].map((suffix) => {
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
      const { username, password, email, code } = formValue.value;
      register({ username, password, email, captcha: code });
      // message.success('Valid');
    } else {
      console.log(errors);
      // message.error('Invalid');
    }
  });
}

// 按钮文字内容
watchEffect(() => {
  if (isStart.value) {
    btnText.value = currentCount.value + 's后重新获取';
  } else {
    btnText.value = '获取验证码';
  }
});
// 验证码
function handleCaptcha() {
  if (formValue.value.email === '') {
    return message.warning('请输入邮箱');
  }
  isShowCheckModel.value = true;
}
// 获取验证码
function handleSendCode() {
  if (isStart.value) return;
  start();
  // 发送验证码
  getCaptcha({ address: formValue.value.email });
}
// 验证成功
function checkSuccess() {
  console.log('验证成功');
  isShowCheckModel.value = false;
  handleSendCode();
}
// 关闭验证码
function onClose() {
  console.log('close');
  isShowCheckModel.value = false;
}
</script>
