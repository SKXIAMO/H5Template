<script setup lang="ts">
import { useWindow } from '@/hooks/useWindow'

defineOptions({
  name: 'PrivacyAgreement'
})

const { winPrivacyAgreement } = useWindow()
</script>

<template>
  <div safe-area-inset-top p-layout-padding class="follow_box">
    <p>{{ winPrivacyAgreement }}</p>
  </div>
</template>

<style lang="less" scoped>
.follow_box {
  color: #fff;
  padding-top: var(--van-nav-bar-height);
  min-height: 100vh;
  background: var(--ai-follow-bg-color);
}
</style>
