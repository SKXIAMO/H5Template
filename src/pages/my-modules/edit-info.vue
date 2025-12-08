<script setup lang=ts>
import DefaultHead from '@/assets/public/default-head.png'
import UpImg from '@/assets/public/up-img.png'

defineOptions({
  name: 'EditInfo'
})

const formData = reactive({
  content: ''
})
</script>

<template>
  <div class="edit-info_box">
    <!-- 头像编辑 -->
    <div mb-16 mt-6 flex justify-center relative>
      <van-image round h-20 w-20 :src="DefaultHead" fit="cover" />
      <van-image round h-7 w-7 bottom-0 right-36 absolute :src="UpImg" fit="cover" />
    </div>

    <div px-layout-padding>
      <div ai-input-title style="margin-bottom: 16px;">Name</div>
      <van-field v-model="formData.content" placeholder="Please enter" class="public-input" />
    </div>

    <div px-layout-padding pt-6>
      <div ai-input-title style="margin-bottom: 16px;">About me</div>
      <van-field v-model="formData.content" placeholder="Please enter" class="public-input" />
    </div>

    <!-- 底部按钮 -->
    <div mt-50 flex justify-center>
      <div ai-gradient-btn>Save</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.edit-info_box {
  padding-top: var(--van-nav-bar-height);
  min-height: 100vh;
  background: var(--ai-edit-bg-color);
}
</style>
