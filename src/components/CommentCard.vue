<script setup lang="ts">
import Head from '@/assets/public/Head.png'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'

const { reportIcon } = useAppImgStyle()

const props = withDefaults(defineProps<{
  list?: CommentInfo[]
}>(), {
  list: () => []
})

console.log(props.list, '==22')
</script>

<template>
  <div safe-area-inset-bottom>
    <div v-for="(item, index) in props.list" :key="index" p-4 ai-fill-bg ai-rounded class="card-comment">
      <ul flex items-center justify-between>
        <li flex items-center>
          <van-image round ai-avatar :src="item?.avator || Head" fit="cover" />
          <span ml-3 ai-user-name>{{ item?.name || '' }}</span>
        </li>
        <li flex items-center>
          <van-image :src="reportIcon" />
        </li>
      </ul>
      <span mt-2 ai-text-desc>{{ item?.content || '' }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-comment+.card-comment {
  margin-top: 12px;
}
</style>
