<script setup lang="ts">
import Head from '@/assets/public/Head.png'
</script>

<template>
  <div text-red>
    <div p-layout-padding class="list-box">
      <div flex class="content">
        <van-image round mr-3 ai-avatar :src="Head" fit="cover" class="user-head" />
        <div class="user-chat">
          <p ai-text-desc>
            聊天聊天内容
          </p>
        </div>
      </div>
      <div flex justify-end class="content">
        <div class="user-chat">
          <p ai-text-desc class="send-box">
            聊天聊天内容
          </p>
        </div>
        <van-image round ml-3 ai-avatar :src="Head" fit="cover" class="user-head" />
      </div>
    </div>
    <input-box />
  </div>
</template>

<style lang="less" scoped>
.list-box {
  padding-bottom: 70px;

  .content+.content {
    margin-top: 40px;
  }
}

.user-head {
  width: var(--ai-chat-list-avatar-width);
  height: var(--ai-chat-list-avatar-height);
  flex-shrink: 0;
}

.user-chat {
  color: #fff;

  p {
    padding: 12px;
    border-radius: 0px var(--ai-chat-list-avatar-border-radius) var(--ai-chat-list-avatar-border-radius) var(--ai-chat-list-avatar-border-radius);
    background: var(--ai-chat-list-receive-bg-color);
  }
}

.send-box {
  background: var(--ai-chat-list-send-bg-color) !important;
  border-radius: var(--ai-chat-list-avatar-border-radius) 0px var(--ai-chat-list-avatar-border-radius) var(--ai-chat-list-avatar-border-radius) !important;
}
</style>
