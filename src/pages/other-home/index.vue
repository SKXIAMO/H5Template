<script setup lang=ts>
import Head from '@/assets/public/Head.png'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'

defineOptions({
  name: 'other-home'
})

const { reportIcon, otherHomeAddIcon, otherHomeMessageIcon, otherHomeLikeIcon } = useAppImgStyle()

// 举报弹框
const isReport = ref(false)
</script>

<template>
  <div class="other-home_box">
    <div class="top-user-info">
      <div class="avatar-info">
        <van-image round ai-avatar :src="Head" fit="cover" class="user-head" />
        <div h-2 w-20 relative>
          <van-image round bottom-2 left-14 absolute :src="otherHomeAddIcon" fit="cover" />
        </div>
        <span mt-1 ai-user-name>Apien</span>
      </div>
      <ul text-white flex justify-around class="number-box">
        <li>
          <span>1</span>
          <span>Posts</span>
        </li>
        <li>
          <span>1</span>
          <span>Fans</span>
        </li>
        <li>
          <span>1</span>
          <span>Follow</span>
        </li>
      </ul>
      <ul px-layout-padding class="bottom-box">
        <li>阿士大夫阿斯蒂发撒的撒撒的发撒的发撒的</li>
        <li>
          <van-image :src="otherHomeMessageIcon" class="icon-box" />
          <span ml-3 class="public-number !mt-0">Chat</span>
        </li>
      </ul>
    </div>

    <div p-layout-padding class="bottom-card">
      <!-- 内容卡片 -->
      <div class="card-item">
        <ul class="top-info">
          <li>
            <van-image round ai-avatar :src="Head" fit="cover" />
            <span mx-2 ai-user-name>Apien</span>
            <span ai-tag-btn class="tag"># Theme</span>
          </li>
          <li>
            <van-image :src="reportIcon" @click="isReport = true" />
          </li>
        </ul>
        <ul class="bottom-img">
          <li>
            <van-image rounded-2 h-50 w-50 overflow-hidden :src="Head" fit="cover" />
          </li>
          <li>
            <van-image rounded-2 h-23.5 w-22 overflow-hidden :src="Head" fit="cover" />
            <van-image rounded-2 h-23.5 w-22 overflow-hidden :src="Head" fit="cover" />
          </li>
        </ul>
        <span class="bottom-text">说明说说明说明说明说明说明说明明</span>
        <div class="like-box">
          <van-image :src="otherHomeLikeIcon" class="icon-box" />
          <span class="public-number">1.2K</span>
        </div>
      </div>
    </div>

    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
.other-home_box {
  min-height: 100vh;
  background: var(--ai-other-home-bg-color);
}

.top-user-info {
  background: url('@/assets/public/top-home.png');
  background-size: cover;
  width: 100%;
  height: 346px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bottom-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      color: var(--ai-other-home-right-desc-text-color);
      font-size: var(--ai-other-home-right-desc-text-weight);
      font-weight: var(--ai-other-home-right-desc-text-size);

      &:nth-child(2) {
        margin-left: 10px;
        width: var(--ai-other-home-right-btn-style-width);
        height: var(--ai-other-home-right-btn-style-height);
        flex-shrink: 0;
        border-radius: var(--ai-other-home-right-btn-style-border-radius);
        background: var(--ai-other-home-right-btn-style-bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .number-box {
    margin: 6px 0;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: var(--ai-other-home-top-data-desc-text-size);
        font-weight: var(--ai-other-home-top-data-desc-text-weight);
        color: var(--ai-other-home-top-data-desc-text-color);

        &:nth-child(2) {
          font-size: var(--ai-other-home-top-data-text-text-size);
          font-weight: var(--ai-other-home-top-data-text-text-weight);
          color: var(--ai-other-home-top-data-text-text-color);
        }
      }
    }
  }
}

.avatar-info {
  padding: 96px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-head {
    width: 83px;
    height: 83px;
    border: 3px solid #fff;
  }
}

.bottom-card {
  .card-item+.card-item {
    margin-top: 20px;
  }

  .card-item {
    background: rgba(40, 35, 41, 0.8);
    border-radius: 20px;
    position: relative;
    overflow: hidden;

    .top-info {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      li {
        display: flex;
        align-items: center;

        .tag {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }

    .bottom-img {
      padding: 0 16px 16px;
      display: flex;
      justify-content: space-between;

      li {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .bottom-text {
      position: absolute;
      bottom: 0;
      background: linear-gradient(90deg, #0e080f78 0%, rgba(14, 8, 15, 0) 100%);
      height: 42px;
      width: 100%;
      line-height: 42px;
      padding: 0 16px;
      font-size: var(--ai-other-home-card-desc-text-size);
      font-weight: var(--ai-other-home-card-desc-text-weight);
      color: var(--ai-other-home-card-desc-text-color);
      text-align: var(--ai-other-home-card-desc-text-sort);
    }

    .like-box {
      position: absolute;
      bottom: 26px;
      right: 10px;
      display: flex;
      flex-direction: column;
      align-self: center;
    }
  }
}
</style>
