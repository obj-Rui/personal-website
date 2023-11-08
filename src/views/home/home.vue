<template>
  <div class="content" flex justify-center flex-items-center flex-col>
    <div>
      <label for="range">translageX:</label>
      <input type="range" defaultValue="0" name="range" id="" minlength="0" maxlength="360" @change="(e) => handleTranslate(e, 'X')" />
      <label for="range">translageY:</label>
      <input type="range" defaultValue="0" name="range" id="" minlength="0" maxlength="360" @change="(e) => handleTranslate(e, 'Y')" />
      <label for="range">translageZ:</label>
      <input type="range" defaultValue="0" name="range" id="" minlength="0" maxlength="360" @change="(e) => handleTranslate(e, 'Z')" />
    </div>

    <div class="car">
      <h1 class="title">商城</h1>
      <div class="header"></div>
      <div class="board">
        <div class="card" v-for="i in 10">
          <img :src="`https://source.unsplash.com/random?${i}`" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import './decorate';

// function handleRange(e: any, type: string) {
//   const value = e.target.value;
//   console.log(value);
//   // 获取根元素
//   var root = document.documentElement;
//   // 设置CSS变量值
//   root.style.setProperty(`--deg${type}`, `${value}deg`);
// }
// function handleTranslate(e: any, type: string) {
//   const value = e.target.value;
//   console.log(value);
//   // 获取根元素
//   var root = document.documentElement;
//   // 设置CSS变量值
//   root.style.setProperty(`--translage${type}`, `${value}px`);
// }
onMounted(() => {
  let timeout: number;
  const range = 30;
  const calcValue = (a: number, b: number) => ((a / b) * range - range / 2).toFixed(1);
  const cards: HTMLBodyElement = document.querySelector('.car') as HTMLBodyElement;
  document.addEventListener(
    'mousemove',
    ({ x, y }) => {
      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(() => {
        const yValue = calcValue(y, window.innerHeight);
        const xValue = calcValue(x, window.innerWidth);
        var root = document.querySelector('.content') as HTMLEmbedElement;
        // 设置CSS变量值
        root.style.setProperty(`--tramslateX`, `${xValue}px`);
        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
      });
    },
    false
  );
});
</script>
<style scoped>
@property --_l {
  syntax: '<length>';
  initial-value: 0px;
  inherits: true;
}
@property --_r {
  syntax: '<length>';
  initial-value: 0px;
  inherits: true;
}
.content {
  --tramslateX: 0px;
  --color1: #e2a441;
  --color2: #efda8b;
  --color3: #e4a94c;
  --color4: #f5dfbc;
  background-color: #e2a441;
  width: 100vw;
  height: 100svh;
  box-sizing: border-box;
  position: relative;

  .car {
    position: relative;
    width: 50%;
    --degX: 30deg;

    animation: move 0.5s ease-in-out;

    .header {
      transform: perspective(400px) rotateX(var(--degX));
      width: 100%;
      height: 80px;
      background-image: repeating-linear-gradient(to right, var(--color1) 0% 10%, var(--color2) 10% 20%);
      box-shadow: 0 20px 30px -10px rgb(38, 57, 77);
    }
    .title {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: -20px;
      transform: translateX(-50%);
      text-shadow: var(--tramslateX) 2px 24px rgba(225, 204, 172, 0.9);
      background-image: -webkit-linear-gradient(bottom, var(--color3), var(--color4));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .board {
      width: 100%;
      background-color: #ce9a74;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-gap: 5px 10px;
      justify-content: space-around;
      justify-items: center;
      align-content: start;
      box-sizing: border-box;
      padding: 10px;

      --x: 10px;
      --d: 5px; /* the depth */
      --a: 10deg; /* the angle */
      --_d: calc(100% - var(--d));
      --_l: 0px;
      --_r: 0px;
      outline: 40px solid red;

      clip-path: polygon(
        var(--_l) calc(var(--_d) - var(--x)),
        var(--_l) calc(var(--d) + var(--x)),
        var(--d) var(--d),
        var(--_d) var(--d),
        calc(var(--_d) + var(--_r)) calc(var(--d) + var(--x)),
        calc(var(--_d) + var(--_r)) calc(var(--_d) - var(--x)),
        var(--_d) var(--_d),
        var(--d) var(--_d)
      );
      cursor: pointer;
      .card {
        width: 100px;
        height: 120px;
        border-bottom: 5px solid var(--color1);
        padding: 10px;
        padding-bottom: 0;
        box-sizing: border-box;

        & img {
          width: 100%;
          height: 100%;
          box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
        }
      }
    }
  }
}
@layer move {
  @keyframes move {
    0% {
      transform: translateX(200px) skewX(-20deg);
    }
    70% {
      transform: skewX(10deg);
    }
    /* 80% {
      transform: skewX(-10deg);
    } */
    100% {
      transform: translateX(0) skewX(0deg);
    }
  }
}
</style>
