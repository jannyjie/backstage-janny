<template>
  <div class="nav">
    <div class="menu">
      <div class="menu-title">
        <h1 v-if="titleOpen">1111人力銀行</h1>
        <h1 v-else>活動網站</h1>
      </div>
      <a-button  @click="toggleCollapsed" >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
      </a-button>
    </div>
    <div class="box">
        <a-menu
          mode="inline"
          :inline-collapsed="collapsed"
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          :style="'width:'+ num * 3.3 +'%;'"
        >
        <Navbar/>
        </a-menu>

      <div :style="'width:'+ (100 - num * 3.3) +'%;'" >
        <router-view  class="boxa" />
      </div>
    </div>
  </div>
</template>
<script >
import { reactive, toRefs, watch, ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import Navbar from './components/Navbar.vue'
export default ({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const num = ref(4);
    const titleOpen = ref(true);
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
      titleOpen.value = !titleOpen.value;
      
      (titleOpen.value === false) ?  num.value = 1 :  num.value = 4;
    };

    

    return {
      ...toRefs(state),
      toggleCollapsed,
      titleOpen,
      num
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    Navbar

  },
});
</script>
