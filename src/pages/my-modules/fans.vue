<script setup lang=ts>
defineOptions({
  name: 'Fans'
})
</script>

<template>
  <div class="fans_box">
    <my-list type="fans" />
  </div>
</template>

<style lang="less" scoped>
.fans_box {
  padding-top: var(--van-nav-bar-height);
  min-height: 100vh;
  background: var(--ai-fans-bg-color);
}
</style>
