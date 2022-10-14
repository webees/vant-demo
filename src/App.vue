<template>
  <span>
    <b>{{ msg }}</b>
    <router-view />
    <!-- 导航栏 -->
    <tab-bar v-show="$route.meta.tabbar" />
  </span>
</template>

<script lang="ts" setup>
const msg = 'hello world!'
</script>

<style lang="less" scoped></style>
