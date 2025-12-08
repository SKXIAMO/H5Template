<script setup lang="ts">
import ChatBack from '@/assets/public/chat-index.png'
import MasonryIcon from '@/assets/public/masonry-icon.png'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'

defineOptions({
  name: 'ChatView'
})

const { chatBtnIcon, chatBgImage } = useAppImgStyle()

/** 弹框  */
const show = ref(false)
</script>

<template>
  <div relative class="chat-view_box">
    <van-image :src="ChatBack" fit="cover" class="top-back" />
    <div class="text-center w-full top-34vh absolute">
      <ul p-layout-padding>
        <li ai-input-title>标题</li>
        <li ai-text-desc class="mt-7 !text-[var(--ai-chat-view-text-color)]">内容内容内容</li>
        <li mt-16 flex justify-center>
          <p ai-gradient-btn class="bottom-btn" @click="show = true">
            <van-image h-12 w-12 :src="MasonryIcon" fit="cover" />
            <span text-5 font-400 ml-1>X 200</span>
            <span text-4 font-400 ml-8 mr-1>Chat</span>
            <van-image :src="chatBtnIcon" fit="cover" />
          </p>
        </li>
      </ul>
    </div>

    <van-overlay :show="show" @click="show = false">
      <div flex h-full justify-center>
        <div class="block" @click.stop>
          <div :style="{ background: `url(${chatBgImage})` }" class="content" style="background-size: cover">
            <span mt-18>Sorry</span>
            <span mt-3>your current balance is insufficient</span>
          </div>
          <div mt-8 flex justify-center>
            <p ai-gradient-btn>Recharge</p>
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<style lang="less" scoped>
.chat-view_box {
  background: var(--ai-chat-view-bg-color);
  min-height: 100vh;
}

.top-back {
  width: 100%;
  height: 510px;
}

.bottom-btn {
  width: var(--ai-chat-view-btn-width);
  height: var(--ai-chat-view-btn-height);
  color: var(--ai-chat-view-text-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.block {
  margin-top: 20vh;
  height: 300px;

  .content {
    width: var(--ai-chat-view-popup-bg-img-width);
    height: var(--ai-chat-view-popup-bg-img-height);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      color: var(--ai-chat-view-popup-title-text-color);
      font-size: var(--ai-chat-view-popup-title-font-size);
      font-weight: var(--ai-chat-view-popup-title-font-weight);

      &:nth-child(2) {
        color: var(--ai-chat-view-popup-desc-text-color);
        font-size: var(--ai-chat-view-popup-desc-text-size);
        font-weight: var(--ai-chat-view-popup-desc-text-weight);
      }
    }
  }
}
</style>
