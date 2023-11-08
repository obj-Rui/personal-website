<template>
  <div class="app-container">
    文章{{ $route.params.id }}
    <router-link to="/">返回</router-link>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(); // 路由实例
const route = useRoute(); // 当前路由信息
console.log('%c [ {{ $route.params }} ]: ', 'color: #bf2c9f; background: pink; font-size: 13px;', router);
console.log('%c [ {{ $route.useRoute }} ]: ', 'color: #bf2c9f; background: pink; font-size: 13px;', route);
</script>
<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  background-color: #d01111;
}
</style>
