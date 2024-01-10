<template>
  <div class="app-container">
    文章{{ $route.params.id }}

    <!-- ... -->
    <Starport :port="`my-id${$route.params.id}`" style="width: 300px">
      <n-image :height="300" lazy :src="`https://source.unsplash.com/random?${$route.params.id}`" />
    </Starport>
    <!-- 返回 -->
    <RouterLink to="/">返回</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Starport } from 'vue-starport';
import { NImage } from 'naive-ui';
const router = useRouter(); // 路由实例
const route = useRoute(); // 当前路由信息
const id = ref<string>('');
onMounted(() => {
  id.value = route.params.id as string;
});
console.log('%c [ {{ $route.params }} ]: ', 'color: #bf2c9f; background: pink; font-size: 13px;', router);
</script>
<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: #d01111;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
</style>
