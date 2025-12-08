<script setup lang="ts">
import Head from '@/assets/public/Head.png'

const props = withDefaults(defineProps<{
  /**
   * 列表类型 follow: 关注 | fans: 粉丝 | blackList: 黑名单
   */
  type?: 'follow' | 'fans' | 'blackList'
}>(), {
  type: 'follow'
})

const rightIcon = computed(() => {
  switch (props.type) {
    case 'follow':
      return 'minus'
    case 'fans':
      return 'plus'
    case 'blackList':
      return 'cross'
    default:
      return 'minus'
  }
})
</script>

<template>
  <div p-layout-padding>
    <div px-4 py-3 flex items-center justify-between class="rounded-[20px] bg-[#282329cc]">
      <ul>
        <li flex items-center>
          <van-image round ai-avatar :src="Head" fit="cover" />
          <span ml-4 ai-user-name>Apien</span>
        </li>
        <li mt-2>
          <span ai-text-desc>阿士大夫阿士大夫</span>
        </li>
      </ul>
      <van-icon color="#fff" :name="rightIcon" />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
