<script setup lang=ts>
defineOptions({
  name: 'publish-video'
})

const formData = reactive({
  content: '',
  fileList: []
})

const onSubmit = () => {
  console.log(formData)
}
</script>

<template>
  <div px-layout-padding class="publish-video_box">
    <text-box maxlength="50" rows="3" />

    <!-- 视频上传 -->
    <div my-6>
      <div ai-input-title>Upload(video)</div>
      <uploader-box v-model:list="formData.fileList" accept="video" />
    </div>

    <!-- 输入框 -->
    <div>
      <div ai-input-title>Payment(Optional)</div>
      <van-field v-model="formData.content" placeholder="Example 300" class="public-input" />
    </div>

    <!-- 底部按钮 -->
    <div mt-20 flex justify-center>
      <div ai-gradient-btn @click="onSubmit">Release</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.publish-video_box {
  min-height: 100vh;
  padding-top: var(--van-nav-bar-height);
  background: var(--ai-publish-video-bg-color);
}
</style>
