<script setup lang=ts>
import Head from '@/assets/public/Head.png'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'
import { detailId } from '@/hooks/useDetail'
import { useJump } from '@/hooks/useJump'
import { useWindow } from '@/hooks/useWindow'

defineOptions({
  name: 'other-home'
})

const { reportIcon, otherHomeAddIcon, otherHomeMessageIcon, otherHomeLikeIcon } = useAppImgStyle()
const { queryId } = useJump()
const { winUserListData, winDynamicData } = useWindow()

// 举报弹框
const isReport = ref(false)
const userInfo = ref<UserInfo>(null)
const bottomList = ref<DynamicInfo[]>([])
const loading = ref(true)

const getData = () => {
  userInfo.value = winUserListData.find(v => v.userId === queryId.value)

  detailId.value = userInfo.value.userId

  bottomList.value = winDynamicData.filter(v => v.userId === userInfo.value.userId)

  loading.value = false
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div v-if="!loading" class="other-home_box">
    <div class="top-user-info">
      <div class="avatar-info">
        <van-image round ai-avatar :src="userInfo.avator || Head" fit="cover" class="user-head" />
        <div h-2 w-20 relative>
          <van-image round bottom-2 left-14 absolute :src="otherHomeAddIcon" fit="cover" />
        </div>
        <span mt-1 ai-user-name>{{ userInfo.name }}</span>
      </div>
      <ul text-white flex justify-around class="number-box">
        <li>
          <span>未知</span>
          <span>Posts</span>
        </li>
        <li>
          <span>{{ userInfo.fans.length }}</span>
          <span>Fans</span>
        </li>
        <li>
          <span>{{ userInfo.follow.length }}</span>
          <span>Follow</span>
        </li>
      </ul>
      <ul px-layout-padding class="bottom-box">
        <li>{{ userInfo.about }}</li>
        <li>
          <van-image :src="otherHomeMessageIcon" class="icon-box" />
          <span ml-3 class="public-number !mt-0">Chat</span>
        </li>
      </ul>
    </div>

    <div p-layout-padding class="bottom-card">
      <!-- 内容卡片 -->
      <div v-for="(item, index) in bottomList" :key="index" class="card-item">
        <ul class="top-info">
          <!-- <li>
            <van-image round ai-avatar :src="Head" fit="cover" />
            <span mx-2 ai-user-name>Apien</span>
            <span ai-tag-btn class="tag"># Theme</span>
          </li> -->
          <li />
          <li>
            <van-image :src="reportIcon" @click="() => {
              isReport = true
              detailId = item.userId
            }"
/>
          </li>
        </ul>
        <ul class="bottom-img">
          <li w-full>
            <van-image rounded-2 h-50 w-full overflow-hidden :src="Head" fit="cover" />
          </li>
          <!-- <li>
            <van-image rounded-2 h-23.5 w-22 overflow-hidden :src="Head" fit="cover" />
            <van-image rounded-2 h-23.5 w-22 overflow-hidden :src="Head" fit="cover" />
          </li> -->
        </ul>
        <span class="bottom-text">{{ item.dynamicDesc }}</span>
        <div class="like-box">
          <van-image :src="otherHomeLikeIcon" class="icon-box" />
          <span class="public-number">{{ item.dynamicLikeCount }}</span>
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
