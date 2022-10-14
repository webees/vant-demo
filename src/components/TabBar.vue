<template>
  <van-tabbar v-model="d_active" active-color="red" route>
    <van-tabbar-item v-for="(item, index) in d_tabbar" :icon="item.icon" :to="item.path" :dot="item.dot" :info="item.info" :key="index">
      {{ $t(item.text) }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

let d_active = 0

const d_tabbar = [
  {
    text: 'home',
    path: '/home',
    icon: 'points',
    dot: false,
    info: ''
  },
  {
    text: 'about',
    path: '/about',
    icon: 'balance-pay',
    dot: false,
    info: ''
  },
  {
    text: 'my',
    path: '/my',
    icon: 'user-o',
    dot: false,
    info: ''
  }
]

d_tabbar.forEach((item, i) => {
  if (useRoute().path === item.path) {
    d_active = i
    return false
  }
})
</script>

<style lang="less" scoped></style>
