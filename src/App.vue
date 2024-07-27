<script setup lang="ts">
import { StarportCarrier } from 'vue-starport';
</script>

<template>
  <StarportCarrier>
    <!-- 这里 -->
    <n-message-provider>
      <RouterView />
    </n-message-provider>
  </StarportCarrier>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
