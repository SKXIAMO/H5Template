<script setup lang=ts>
import Head from '@/assets/public/Head.png'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'

defineOptions({
  name: 'ShortVideo'
})

const { reportIcon, addIcon, messageIcon, likeIcon } = useAppImgStyle()

const videoRef = ref(null)
const isPlaying = ref(false)
const isPopup = ref(false)

const togglePlay = async () => {
  if (!videoRef.value) return

  if (isPlaying.value) {
    videoRef.value.pause()
    isPlaying.value = false
  } else {
    try {
      await videoRef.value.play()
      isPlaying.value = true
    } catch (error) {
      console.warn('自动播放被阻止:', error)
    }
  }
}
</script>

<template>
  <div class="video-box">
    <video ref="videoRef" src="https://media.w3.org/2010/05/sintel/trailer.mp4" width="100%" height="100%"
      @click="togglePlay"
/>
    <van-icon v-if="!isPlaying" :name="isPlaying ? 'pause-circle' : 'play-circle'" class="play-box"
      @click="togglePlay"
/>
    <div p-layout-padding class="bottom-box">
      <div mb-5 flex>
        <div h-12 w-12 relative>
          <van-image round ai-avatar :src="Head" fit="cover" class="user-head" />
          <van-image round right-3.3 top-9.5 absolute :src="addIcon" fit="cover" />
        </div>
        <ul ml-3 shrink w-full>
          <li flex justify-between>
            <span ai-user-name>Apien</span>
            <van-image :src="reportIcon" />
          </li>
          <li>
            <span mt-1 ai-text-desc>
              评论内容评论内容评论内容评论内容
            </span>
          </li>
        </ul>
      </div>
      <ul class="bottom-btn">
        <li @click="isPopup = true">
          <van-image :src="messageIcon" class="icon-box" />
          <span class="public-number">1.2K</span>
        </li>
        <li>
          <van-image :src="likeIcon" class="icon-box" />
          <span class="public-number">1.2K</span>
        </li>
      </ul>
    </div>

    <popup-box v-model:show="isPopup">
      <div p-layout-padding>
        <van-divider content-position="left">Comments</van-divider>
        <div class="h-[56vh] overflow-y-auto">
          <comment-card pb-16 />
        </div>
        <input-box />
      </div>
    </popup-box>
  </div>
</template>

<style lang="less" scoped>
.video-box {
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100%;
    background: var(--ai-short-video-bg-color);
  }

  .play-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    color: rgba(255, 255, 255, 0.7);
  }

  .bottom-box {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    // background: linear-gradient(180deg, rgba(14, 8, 15, 0.8) 0%, rgba(14, 8, 15, 0) 100%);
  }

  .user-head {
    width: var(--ai-short-video-avatar-width);
    height: var(--ai-short-video-avatar-height);
  }

  .bottom-btn {
    display: flex;
    justify-content: space-between;

    li {
      position: relative;
      width: var(--ai-short-video-bottom-btn-width);
      height: var(--ai-short-video-bottom-btn-height);
      border-radius: var(--ai-short-video-bottom-btn-border-radius);
      background: var(--ai-short-video-bottom-btn-bg-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .icon-box {
        position: absolute;
        bottom: 26px;
        z-index: 1;
      }

      .public-number {
        font-size: 20px !important;
        margin-top: 22px;
      }
    }
  }
}
</style>
