<script setup lang="ts">
defineOptions({
  name: 'SendDynamic'
})

const themeList = [
  { name: 'Hobbies', value: '0' },
  { name: 'Passion', value: '1' },
  { name: 'Inspire', value: '2' }
]

const formData = reactive({
  theme: '0',
  title: '',
  content: '',
  fileList: []
})

const onSubmit = () => {
  console.log(formData)
}
</script>

<template>
  <div px-layout-padding class="send-dynamic_box">
    <!-- 输入框 -->
    <text-box />

    <div mt-9>
      <!-- 主题选项 -->
      <div>
        <div ai-input-title>Topic</div>
        <ul flex justify-between>
          <li v-for="item in themeList" :key="item.value" ai-default-btn
            :class="{ 'ai-selected-btn': formData.theme === item.value }" @click="formData.theme = item.value"
>
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 图片上传 -->
      <div mt-6>
        <div ai-input-title>Upload(Pic)</div>
        <uploader-box v-model:list="formData.fileList" />
      </div>

      <!-- 底部按钮 -->
      <div mt-20 flex justify-center>
        <div ai-gradient-btn @click="onSubmit">Release</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.send-dynamic_box {
  padding-top: var(--van-nav-bar-height);
  background: var(--ai-send-dynamic-bg-color);
  min-height: 100vh;
}
</style>
