<script>
import { onMounted, ref } from "vue";

export default {
  name:"FatherProps",
  emits: {
    TimeOut: (num) => {
      return num.value === 0;
    },
  },
  setup( emit) {
    const num = ref(5);
    let timer = null;
    onMounted(() => {
      timer = setInterval(() => {
        num.value--;
        if (num.value === 0) {
          clearInterval(timer);
          emit("TimeOut", num);
        }
      }, 1000);
    });
    return {
      num,
    };
  },
};
</script>

<template>
  <h1>{{ num }}</h1>
</template>

<style lang="scss" scoped>
</style>