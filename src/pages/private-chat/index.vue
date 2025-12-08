<script setup lang=ts>
import LeftIcon from '@/assets/nav-bar/back.svg'
import RightMore from '@/assets/nav-bar/more.svg'
import Head from '@/assets/public/Head.png'
import ImgIcon from '@/assets/public/img-icon.png'
import VideoIcon from '@/assets/public/video-icon.png'
import { useJump } from '@/hooks/useJump'

const { onBack } = useJump()

defineOptions({
  name: 'PrivateChat'
})
</script>

<template>
  <div class="private-chat_box">
    <VanNavBar :border="false" class="top-chat-navbar" @click-left="onBack">
      <template #left>
        <div flex items-center>
          <van-image :src="LeftIcon" h-6 w-6 />
          <van-image round mx-3 ai-avatar :src="Head" fit="cover" />
          <span mt-1 ai-user-name>Apien</span>
        </div>
      </template>
      <template #right>
        <van-image :src="ImgIcon" h-6 w-6 />
        <van-image mx-3 :src="VideoIcon" h-6 w-6 />
        <van-image :src="RightMore" h-6 w-6 />
      </template>
    </VanNavBar>

    <div>
      <chat-list />
    </div>
  </div>
</template>

<style lang="less" scoped>
.private-chat_box {
  min-height: 100vh;
  background: var(--ai-private-chat-bg-color);
}

.top-chat-navbar {
  background: url('@/assets/public/chat-nav-bar-bg.png');
  background-size: cover;
  --van-nav-bar-height: 104px;
}
</style>
