<script setup lang="ts">
defineOptions({
  name: 'BlackList'
})
</script>

<template>
  <div safe-area-inset-top class="black-list_box">
    <my-list type="blackList" />
  </div>
</template>

<style lang="less" scoped>
.black-list_box {
  padding-top: var(--van-nav-bar-height);
  min-height: 100vh;
  background: var(--ai-black-list-bg-color);
}
</style>
