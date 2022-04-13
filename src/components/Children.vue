<template>
  <div class="children">
    <!-- 3、在子組件模版中使用 -->
    <p>在子組件模版中使用</p>
    {{sonData}}
  </div>
</template>
<script>
export default {
    name:"Children",
// 2、子組件通過 props 來接收
  props:["sonData"],
  setup(props){
    // const childrenbut = () => {
    //  // props.sonData  可以訪問到父組件傳遞的數據
    //   console.log(props.sonData);
    // };

    // return {
    //   childrenbut
    // }
  }
}
</script>