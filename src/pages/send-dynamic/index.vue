<script setup lang="ts">
  import { showLoadingToast, showSuccessToast, showToast, closeToast } from 'vant'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'SendDynamic'
  })

  const { userInfo } = useUserStore()
  const { appParams } = useJump()
  const { winDynamicData, winPublishImageListData } = useWindow()
  const listData = ref<DynamicInfo[]>(winDynamicData)

  const formData = reactive({
    userId: userInfo.userId,
    dynamicType: 0,
    dynamicDesc: '',
    dynamicTitleType: 0,
    dynamicPic: []
  })

  const onSubmit = async () => {
    if (!formData.dynamicDesc) {
      return showToast('Please enter the content')
    }
    if (formData.dynamicPic.length === 0) {
      return showToast('Please upload at least one picture')
    }
    if (formData.dynamicPic[0].status === 'uploading') {
      return showToast('Please wait for the picture to upload')
    }

    const data = {
      ...formData,
      dynamicTag: [],
      dynamicVideo: '',
      dynamicLikeCount: 0,
      dynamicCommentCount: 0,
      dynamicId: `${Date.now()}_image`,
      dynamicPic: formData.dynamicPic.map(v => v.url)
    } as DynamicInfo

    listData.value.unshift(data)

    // 1. 显示 Loading（手动控制）
    showLoadingToast({
      message: 'Loading...',
      forbidClick: true,
      duration: 0
    })

    // 2. 随机延迟 500–2000ms
    await new Promise(resolve =>
      setTimeout(
        resolve,
        Math.floor(Math.random() * (2000 - 500 + 1)) + 500
      )
    )

    // 3. 关闭 Loading
    closeToast()

    // 4. 成功提示
    showSuccessToast('Published successfully.')

    // 5. 延迟 1 秒再执行后续逻辑
    setTimeout(() => {
      appParams({
        key: 'updatePost',
        value: listData.value,
        state: 0
      })
    }, 1000)
  }
</script>

<template>
  <div safe-area-inset-top px-layout-padding class="send-dynamic_box">
    <!-- 输入框 -->
    <text-box v-model="formData.dynamicDesc" />

    <div mt-9>
      <!-- 主题选项 -->
      <div>
        <div ai-input-title>Topic</div>
        <ul flex justify-between>
          <li
            v-for="item in winPublishImageListData"
            :key="item.value"
            ai-default-btn
            :class="{
              'ai-selected-btn': formData.dynamicTitleType === item.value
            }"
            @click="formData.dynamicTitleType = item.value"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 图片上传 -->
      <div mt-6>
        <div ai-input-title>Upload(Pic)</div>
        <uploader-box v-model:list="formData.dynamicPic" />
      </div>

      <!-- 底部按钮 -->
      <div mt-20 flex justify-center class="public-btoom-btn">
        <div ai-gradient-btn class="public_btn" @click="onSubmit">
          Release
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .send-dynamic_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    background: var(--ai-send-dynamic-bg-color);
    min-height: 100vh;
  }
</style>
