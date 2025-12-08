<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouteCacheStore } from '@/stores'
import { applyDynamicTheme } from './utils/applyDynamicTheme'

const { t } = useI18n()

useHead({
  title: () => t('app.name'),
  meta: [
    {
      name: 'description',
      content: () => t('app.description')
    },
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#0B0A0A' : '#ffffff')
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () =>
        preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'
    }
  ]
})

isDark.value = false

const routeCacheStore = useRouteCacheStore()

const keepAliveRouteNames = computed(() => {
  return routeCacheStore.routeCaches
})

const mode = computed(() => {
  return isDark.value ? 'dark' : 'light'
})

onMounted(() => {
  applyDynamicTheme()
})
</script>

<template>
  <van-config-provider :theme="mode">
    <nav-bar />
    <router-view v-slot="{ Component }">
      <section class="app-wrapper">
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" />
        </keep-alive>
      </section>
    </router-view>
    <tab-bar />
  </van-config-provider>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  position: relative;
}
</style>
