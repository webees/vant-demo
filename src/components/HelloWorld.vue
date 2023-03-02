<template>
  <span>
    <img src="@/assets/logo.png" />
    <br />
    <select v-model="locale">
      <option>zhCN</option>
      <option>enUS</option>
      <option>jaJP</option>
    </select>
    <br />
    <br />
    <van-button type="primary">{{ locale }} : {{ $t('hello') }}</van-button>
  </span>
</template>

<script lang="ts" setup>
import { app } from '@/stores'
import { ref, watch } from 'vue'
import { loadLocaleMessages } from '@/i18n'

const locale = ref(app().language)

watch(locale, newValue => {
  loadLocaleMessages(newValue)
})
</script>

<style></style>
