<script setup lang="ts">
  import { showSuccessToast } from 'vant'
  import { reactive } from 'vue'
  import defaultHead from '@/assets/public/default-head.png'
  import upImg from '@/assets/public/up-img.png'
  import { useFile } from '@/hooks/useFile'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  defineOptions({
    name: 'EditInfo'
  })

  const { userInfo } = useUserStore()
  const { imgUrl, clickElement } = useFile()
  const { winUserListData } = useWindow()
  const { appParams } = useJump()

  const formData = reactive({
    name: '',
    about: '',
    avator: ''
  })

  const onSubmit = () => {
    const data = {
      ...userInfo,
      name: formData.name || userInfo.name,
      about: formData.about || userInfo.about,
      avator: imgUrl.value || userInfo.avator
    }

    const list = winUserListData.map(v => {
      if (v.userId === data.userId) {
        v = data
      }
      return v
    })
    showSuccessToast('success')
    appParams({ key: 'updateUser', value: list, state: 0 })
  }
</script>

<template>
  <div safe-area-inset-top class="edit-info_box">
    <!-- 头像编辑 -->
    <div mb-16 mt-6 flex justify-center relative>
      <van-image
        round
        h-20
        w-20
        :src="imgUrl || defaultHead"
        fit="cover"
        @click="clickElement"
      />
      <van-image
        round
        h-7
        w-7
        bottom-0
        right-36
        absolute
        :src="upImg"
        fit="cover"
        @click="clickElement"
      />
    </div>

    <div px-layout-padding>
      <div ai-input-title style="margin-bottom: 16px">Name</div>
      <van-field
        v-model="formData.name"
        placeholder="Please enter"
        class="public-input"
      />
    </div>

    <div px-layout-padding pt-6>
      <div ai-input-title style="margin-bottom: 16px">About me</div>
      <van-field
        v-model="formData.about"
        placeholder="Please enter"
        class="public-input"
      />
    </div>

    <!-- 底部按钮 -->
    <div mt-50 flex justify-center>
      <div ai-gradient-btn @click="onSubmit">Save</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .edit-info_box {
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-edit-bg-color);
  }
</style>
