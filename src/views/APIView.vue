<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "../components/ImageBox/index.vue";
import LoadingBar from "../components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    store.dispatch("handInit").then(res => {
        console.log(res);
    });
 
    // const init = () => {
    //   store.dispatch("handInit").then(res => {
    //     console.log(3);
    //     handImgLoad(res);
    //   });
    // };

    // onMounted(() => {
    //   init();
    // });

    return {};
  },
};
</script>

<template>
  <div >
    <!-- <LoadingBar /> -->
    <!-- <ImageBox /> -->
  </div>
</template>

