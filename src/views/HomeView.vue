<template>
  <div class="home">
    <!-- <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Title"
      :breadcrumb="{ routes }"
      sub-title="This is a subtitle"
    /> -->
    <div class="header">
      <a-page-header
      title="活動列表"
      :breadcrumb="{ routes }" 
      />
      <a-divider orientation="left">總數量 : {{data.length}}筆</a-divider>
      <Table/>
    </div>
  </div>
</template>
<script>
import Table from '../components/Table.vue';
import { useState } from "../composition-api";
const routes = [
  {
    path: 'index',
    breadcrumbName: '首頁',
  },
  {
    path: 'first',
    breadcrumbName: '列表',
  }
];
export default ({
  name:"TablePage",
  components:{
    Table
  },
  setup() {
    const { data } = useState();
    return {
      routes,
      data,
    };
  },
});
</script>


