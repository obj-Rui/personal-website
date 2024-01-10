<template>
  <div class="content">
    <!-- 按钮 -->
    <div>
      <ul class="head">
        <li><button @click="isShowShop = !isShowShop">DEMO</button></li>
      </ul>
    </div>
    <ShopBox :show="isShowShop" />
    <router-view> </router-view>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ShopBox from './components/shopBox.vue';
const isShowShop = ref(true);
</script>

<style lang="scss" scoped>
.content {
  --color1: #e2a441;
  --color2: #efda8b;
  background: linear-gradient(to left, var(--color1), var(--color2));
  height: 100vh;
  width: 100svw;
  overflow: hidden;
}
.head {
  list-style: none;
  & li {
    width: 60px;
  }
}
</style>
