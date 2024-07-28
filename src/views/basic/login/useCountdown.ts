import { ref, unref } from 'vue';

// 倒计时hook
export function useCountdown(count: number) {
  const currentCount = ref(count);

  const isStart = ref(false);

  let timerId: ReturnType<typeof setInterval> | null = null;

  function clear() {
    timerId && clearInterval(timerId);
  }

  function stop() {
    isStart.value = false;
    clear();
    timerId = null;
  }

  function start() {
    if (unref(isStart) || !!timerId) return;

    isStart.value = true;

    const leftTime = count * 1000;
    const endTime = Date.now() + leftTime;
    timerId = setInterval(() => {
      const now = Date.now();
      const timeDiff = Math.round((endTime - now) / 1000);
      console.log('[ timeDiff ]-31', timeDiff);
      if (timeDiff <= 1) {
        stop();
      }
      currentCount.value = timeDiff;
    }, 1000);
  }

  function reset() {
    currentCount.value = count;
    stop();
  }

  function restart() {
    reset();
    start();
  }
  return { currentCount, isStart, start, stop, clear, reset, restart };
}
