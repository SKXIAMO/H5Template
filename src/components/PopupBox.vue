<script setup lang="ts">
console.log('输入框')

const show = defineModel<boolean>('show', {
  type: Boolean,
  required: true,
  default: false
})
</script>

<template>
  <van-popup v-model:show="show" round closeable position="bottom">
    <slot />
  </van-popup>
</template>

<style lang="less" scoped></style>
