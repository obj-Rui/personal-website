<template>
  <div class="content" flex justify-center flex-items-center flex-col>
    <div class="car" :class="howClass">
      <h1 class="title">XIAO DI</h1>
      <div class="header"></div>
      <div class="board">
        <div class="card" v-for="i in 10" @click="goPage(i)">
          <div class="articleImg">
            <Starport :port="`my-id${i}`" easing="easeInOutSine">
              <n-image preview-disabled lazy :width="120" :height="120" object-fit="cover" :src="`https://picsum.photos/id/${i}/120/120`" alt="" srcset="" />
            </Starport>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { Starport } from 'vue-starport';
import { router } from '/@/router';
import { NImage } from 'naive-ui';
const props = defineProps<{
  show: boolean;
}>();
const howClass = computed(() => {
  return props.show ? 'car-show' : 'car-hide';
});
const goPage = (id: string | number) => {
  router.push('/article/' + id);
};
// onMounted(() => {
//   const car = document.querySelector('.car') as HTMLElement;
//   car.addEventListener('animationend', () => {
//     if (props.show) {
//       car.style.setProperty('transform', ' translateX(0)');
//     } else {
//       car.style.setProperty('transform', ' translateX(8000px)');
//     }
//   });
// });
</script>

<style scoped>
.content {
  --tramslateX: 0px;
  --color1: #e2a441;
  --color2: #efda8b;
  --color3: #e4a94c;
  --color4: #f5dfbc;
  background: linear-gradient(to left, var(--color1), var(--color2));
  width: 60vw;
  /* height: 100svh; */
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .car-show {
    animation: move 1s linear;
    transform: translateX(0);
  }
  .car-hide {
    animation: move2 1s linear;
    transform: translateX(8000px);
  }
  .car {
    position: relative;
    width: 50vw;
    --degX: 30deg;
    .header {
      transform: perspective(400px) rotateX(var(--degX));
      transform-origin: top;
      z-index: 2;
      position: relative;
      width: 100%;
      height: 100px;
      background-image: repeating-linear-gradient(to right, var(--color1) 0% 10%, var(--color2) 10% 20%);
      box-shadow: 0 20px 30px -10px rgb(38, 57, 77);
    }
    .title {
      position: absolute;
      z-index: 3;
      left: 50%;
      top: -40px;
      color: #fff;
      font-size: 72px;
      transform: translateX(-50%);
      /* background-image: -webkit-linear-gradient(bottom, var(--color3), var(--color4)); */
      /* -webkit-background-clip: text;
        -webkit-text-fill-color: transparent; */
      text-shadow: 1px 1px 1px var(--color1), 1px -1px 1px var(--color1), 1px 0 1px var(--color1), 1px 0 1px var(--color1), 7px 4px 0 var(--color1);
    }

    .board {
      position: relative;
      top: -10px;
      width: 100%;
      min-width: 480px;
      background-color: #ce9a74;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      grid-gap: 5px 10px;
      justify-content: space-around;
      justify-items: center;
      align-content: start;
      box-sizing: border-box;
      padding: 10px;
      .card {
        width: 120px;
        height: 140px;
        border-bottom: 5px solid var(--color1);
        padding: 10px;
        padding-bottom: 10;
        box-sizing: border-box;

        & img {
        }
      }
    }
  }
}
@layer move {
  @keyframes move {
    0% {
      transform: translateX(8000px) skewX(-40deg);
      scale: 0.2;
    }
    40% {
      scale: 0.2;
      transform: translateX(0) skewX(0deg);
    }
    60% {
      scale: 1.1;
    }
    75% {
      scale: 1;
    }
    100% {
      scale: 1;
      transform: translateX(0);
    }
  }
  @keyframes move2 {
    0% {
      scale: 1;
      transform: translateX(0);
    }
    25% {
      scale: 1;
    }
    40% {
      scale: 1.1;
    }
    60% {
      scale: 0.2;
      transform: translateX(0) skewX(0deg);
    }
    100% {
      transform: translateX(8000px) skewX(-40deg);
      scale: 0.2;
    }
  }
}

.articleImg {
  --d: 3px; /* the depth */
  --a: 20deg; /* the angle */
  --x: 10px;

  aspect-ratio: 1.1; /* you can use 1 as ratio but I found 1.1 a little better */
  object-fit: cover;
  padding-block: var(--d);
  transform: perspective(400px) rotateY(calc(var(--_i, 1) * var(--a))) translateY(calc(var(--_i, 1) * 2px));
  outline: var(--d) solid #0008;
  outline-offset: calc(-1 * var(--d));
  --_d: calc(100% - var(--d));
  --_l: 0px;
  --_r: 0px;
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
  transition: transform 0.3s, --_r 0.15s, --_l 0.15s 0.15s;
  transition-timing-function: linear;
  cursor: pointer;
  margin-bottom: 0px;
}
.articleImg:hover,
.articleImg.alt {
  --d: 1px;
  --_l: var(--d);
  --_r: var(--d);
  --_i: -1;
  transition-delay: 0s, 0.15s, 0s;
}
.articleImg {
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-shadow: 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.05);
}
</style>
