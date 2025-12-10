<script setup lang="ts">
  import LeftIcon from '@/assets/nav-bar/back.svg'
  import RightMore from '@/assets/nav-bar/more.svg'
  import Head from '@/assets/public/Head.png'
  import ImgIcon from '@/assets/public/img-icon.png'
  import VideoIcon from '@/assets/public/video-icon.png'
  import { detailId } from '@/hooks/useDetail'
  import { useFile } from '@/hooks/useFile'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  const { onBack, appParams, jumpToCall, queryId } = useJump()
  const { winChatListData, winMessageData, winUserListData } = useWindow()

  const { userInfo } = useUserStore()

  defineOptions({
    name: 'PrivateChat'
  })

  /**
   * chatId 根据这个 id 来查找
   * chatUserIds 通过这个数组去查询对面用户的名称跟头像
   */

  const viewInfo = ref<UserInfo>(null)
  const listData = ref<MessageInfo[]>([])
  const wholeListData = ref<MessageInfo[]>(winMessageData)
  const sendCount = ref(0)
  const chatListData = ref<ChatInfo[]>(winChatListData)
  const loading = ref(true)
  // 举报弹框
  const isReport = ref(false)

  const getData = () => {
    const { chatUserIds } = winChatListData.find(
      v => v.chatId === queryId.value
    )
    const index = chatUserIds.findIndex(v => v !== userInfo.userId)
    const siUserData = winUserListData.find(
      v => v.userId === chatUserIds[index]
    )
    listData.value = winMessageData
      .filter(v => v.chatId === queryId.value)
      .map(v => {
        if (v.userId === userInfo.userId) {
          v.name = userInfo.name
          v.avator = userInfo.avator
          v.position = 'right'
        }
        if (v.userId === siUserData.userId) {
          v.name = siUserData.name
          v.avator = siUserData.avator
          v.position = 'left'
        }
        return v
      })

    viewInfo.value = siUserData

    loading.value = false
  }

  const getCurrentDateTime = (): string => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0') // getMonth() 返回 0-11
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  const onSend = (sendContent: string, state: 0 | 1 = 0) => {
    if (!sendContent.trim()) return
    const item: MessageInfo = {
      msgId: `${Date.now()}_m`,
      chatId: queryId.value,
      userId: userInfo.userId,
      name: userInfo.name,
      avator: userInfo.avator,
      position: 'right',
      sendContent: state === 1 ? '' : sendContent,
      sendPicUrl: state === 1 ? sendContent : ''
    }
    sendCount.value++
    listData.value.push(item)
    wholeListData.value.push(item)

    chatListData.value.forEach(v => {
      if (v.chatId === queryId.value) {
        v.lastSendContent = state === 1 ? '[image]' : sendContent
        v.unreadMsgCount = sendCount.value
        v.lastSendUserId = userInfo.userId
        v.lastSendTime = getCurrentDateTime()
      }
    })

    appParams({
      key: 'uploadMessage',
      value: wholeListData.value,
      state: 1
    })
    appParams({ key: 'uploadChat', value: chatListData.value, state: 1 })
  }

  const { clickElement } = useFile(e => {
    console.log('上传成功回调:', e)
    onSend(e, 1)
  })

  onMounted(() => {
    getData()
  })
</script>

<template>
  <div v-if="!loading" safe-area-inset-bottom class="private-chat_box">
    <VanNavBar
      :border="false"
      safe-area-inset-top
      :clickable="false"
      class="top-chat-navbar"
      @click-left="onBack"
    >
      <template #left>
        <div flex items-center>
          <van-image :src="LeftIcon" h-6 w-6 />
          <van-image
            round
            mx-3
            ai-avatar
            :src="viewInfo.avator || Head"
            fit="cover"
          />
          <span mt-1 ai-user-name>{{ viewInfo.name }}</span>
        </div>
      </template>
      <template #right>
        <van-image :src="ImgIcon" h-6 w-6 @click="clickElement" />
        <van-image
          mx-3
          :src="VideoIcon"
          h-6
          w-6
          @click="jumpToCall(viewInfo.userId, queryId)"
        />
        <van-image
          :src="RightMore"
          h-6
          w-6
          @click="
            () => {
              detailId = viewInfo.userId
              isReport = true
            }
          "
        />
      </template>
    </VanNavBar>

    <div>
      <chat-list v-model:list="listData" @send="v => onSend(v)" />
    </div>

    <report-box v-model:show="isReport" />
  </div>
</template>

<style lang="less" scoped>
  .private-chat_box {
    min-height: 100vh;
    background: var(--ai-private-chat-bg-color);
    padding-bottom: 70px;
  }

  .top-chat-navbar {
    background: url('@/assets/public/chat-nav-bar-bg.png');
    background-size: cover;
    --van-nav-bar-height: 104px;
  }
</style>
