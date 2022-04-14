<template>
  <a-sub-menu key="sub1">
    <template #icon>
      <MailOutlined />
    </template>
    <template #title>Navigation One</template>
    <a-menu-item key="5"><router-link to="/">Home</router-link></a-menu-item>
    <a-menu-item key="6"> <router-link to="/about">About</router-link></a-menu-item>
    <a-menu-item key="7"> <router-link to="/father">Father</router-link></a-menu-item>
    <a-menu-item key="8"> <router-link to="/children">Children</router-link></a-menu-item>
    <a-menu-item key="9"> <router-link to="/api">Api</router-link></a-menu-item>
  </a-sub-menu>
  <!-- <a-menu-item key="1">
            <template #icon>
              <PieChartOutlined />
            </template>
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <template #icon>
              <DesktopOutlined />
            </template>
            <span>Option 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <template #icon>
              <InboxOutlined />
            </template>
            <span>Option 3</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #icon>
              <MailOutlined />
            </template>
            <template #title>Navigation One</template>
            <a-menu-item key="5">Option 5</a-menu-item>
            <a-menu-item key="6">Option 6</a-menu-item>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #icon>
              <AppstoreOutlined />
            </template>
            <template #title>Navigation Two</template>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
            <a-sub-menu key="sub3" title="Submenu">
              <a-menu-item key="11">Option 11</a-menu-item>
              <a-menu-item key="12">Option 12</a-menu-item>
            </a-sub-menu>
          </a-sub-menu> -->
</template>

<script>
import {
  MailOutlined,
} from '@ant-design/icons-vue';
export default {
components: {
    MailOutlined,

  },
}
</script>

<style>

</style>