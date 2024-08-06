<template>
  <!-- 轮播 -->
  <div class="carousel-box">
    <template v-for="i in 3">
      <div class="item">
        <img :style="{ '--index-num': i - 1, '--z-index': -i }" class="img" :src="`https://picsum.photos/id/12${i}/200/600`" alt="" />
        <div :style="{ '--index-num': i - 1, '--z-index': -i }"></div>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.carousel-box {
  width: 600px;
  height: 400px;
  position: relative;
  /* 开启3d */
  perspective: 1000px;
  /* 透视原点 */
  perspective-origin: 50% bottom; /* 设置透视原点 */
  border: 1px solid red;
}
.item {
  width: 200px;
  height: 400px;
  position: absolute;
}

img {
  transform-style: preserve-3d;
  transition: 1s;
  width: 200px;
  height: 400px;
  object-fit: cover;
  transform: translateZ(calc(var(--index-num) * -100px)) translateX(calc(var(--index-num) * 100px));
  background-image: linear-gradient(to left, red, rgb(15, 15, 20));
  z-index: var(--z-index);
}
.clap {
  transition: 1s;
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: rgba(0, 255, 106, 0.176);
  transform-origin: center center;
  z-index: var(--z-index);
  transform: translateZ(calc((var(--index-num) - 1) * -100px)) translateX(calc((var(--index-num)) * 100px)) rotateY(240deg);
  transform-origin: center center;
  transition: 1s;
}

.carousel-box:hover {
  .clap {
    transform: translateZ(calc(var(--index-num) * -100px));
  }
  .img {
    transform: translateZ(calc((var(--index-num) - 1) * -100px));
  }
}
</style>
