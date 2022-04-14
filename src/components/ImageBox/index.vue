<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ImgShow from "../ImageBox/ImgShow.vue";
import ChangeBtn from "../ImageBox/ChangeBtn.vue";
export default {
  components: {
    ImgShow,
    ChangeBtn,
  },
  setup() {
    const store = useStore();
    console.log(store);
    const isLoad = computed(() => store.getters.isLoad);

    return { isLoad };
  },
};
</script>

<template>
  <div class="box" v-show="isLoad">
    <!-- <ImgShow />
    <ChangeBtn /> -->
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 500px;
}
</style>
