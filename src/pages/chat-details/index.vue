<script setup lang="ts">
defineOptions({
  name: 'ChatDetails'
})
</script>

<template>
  <div text-red class="chat-details_box">
    <div class="top-box">
      <ul p-layout-padding>
        <li>
          <span>I'm feeling great today.</span>
          <van-icon name="chat-o" />
        </li>
        <li>
          <span>Do you like reading?</span>
          <van-icon name="chat-o" />
        </li>
        <li>
          <span>Can you comfort me?</span>
          <van-icon name="chat-o" />
        </li>
      </ul>
    </div>

    <chat-list />
  </div>
</template>

<style lang="less" scoped>
.chat-details_box {
  min-height: 100vh;
  background: var(--ai-chat-details-bg-color);
}

.top-box {
  height: 282px;
  background: url('@/assets/public/top-chat.png');
  background-size: cover;
  display: flex;
  align-items: flex-end;

  ul {
    li+li {
      margin-top: 16px;
    }

    li {
      border-radius: var(--ai-chat-details-top-border-radius);
      padding: 0 12px;
      width: var(--ai-chat-details-top-width);
      height: var(--ai-chat-details-top-height);
      line-height: var(--ai-chat-details-top-height);
      font-size: var(--ai-chat-details-top-text-font-size);
      font-weight: var(--ai-chat-details-top-text-font-weight);
      background: var(--ai-chat-details-top-text-bg-color);
      letter-spacing: 0;
      color: var(--ai-chat-details-top-text-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
