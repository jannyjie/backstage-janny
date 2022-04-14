<template>
  <div class="about">
    <p>父傳子</p>
    {{fatherData}}
    <!-- 父傳子 -->
    <!-- 1、 在父組件的子組件標簽上通過 :傳遞到子組件的數據名="需要傳遞的數據" -->
    <children :sonData="fatherData"></children>
  </div>
</template>
 
<script>
import children from "../components/Children.vue"
import { defineComponent,reactive,toRefs } from "vue";
export default defineComponent({
  components:{
    children,
  },
name:"aboutPage",
setup(){
  const state = reactive({
    fatherData:"hello"
  })
  return {
    ...toRefs(state)
  }
}
 
})
</script>