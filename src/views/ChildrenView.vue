<script>
import TimerBox from "../components/Father.vue";

export default {
  components: {
    TimerBox,
  },
  setup() {
    const handleTimeOut = (num) => {
      if (num.value === 0) {
        console.log("時間到：", num.value);
      }
    };
    return {
      handleTimeOut,
    };
  },
};
</script>

<template>
  <p>子傳父</p>
  <TimerBox @TimeOut="handleTimeOut" />
</template>

<style>
</style>
