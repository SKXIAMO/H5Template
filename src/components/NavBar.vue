<script setup lang="ts">
import {
  rootRouteList,
  routeNoNavBar,
  routeNoRightBtn,
  routeShowTitle
  // routeTopNavBar
} from '@/config/routes'
import { useAppImgStyle } from '@/hooks/useAppImgStyle'
import { useJump } from '@/hooks/useJump'

const { onBack } = useJump()

const { backIcon, reportIcon } = useAppImgStyle()

// 举报弹框
const isReport = ref(false)

const route = useRoute()
const { t } = useI18n()

/**
 * Get page title
 * Located in src/locales/json
 */
const title = computed(() => {
  if (route.name) {
    return t(`${route.meta.title}`)
  }

  return t('navbar.Undefined')
})

/**
 * 显示左箭头
 * 如果路由名称在rootRouteList中，则隐藏左箭头
 */
// const showLeftArrow = computed(() => {
//   if (route.name && rootRouteList.includes(route.name)) {
//     return false
//   }

//   return true
// })

const showLeftArrow = computed(
  () => !route.name || !rootRouteList.includes(route.name)
)

/** 根据路由是否显示等高的占位元素 */
// const placeholder = computed(
//   () => !route.name || !routeTopNavBar.includes(route.name)
// )

/** 不显示右边按钮 */
const showRight = computed(
  () => !route.name || !routeNoRightBtn.includes(route.name)
)

/** 不显示该组件 */
const isNavBar = computed(
  () => !route.name || !routeNoNavBar.includes(route.name)
)

/** 是否显示标题 */
const showTitle = computed(
  () => !route.name || routeShowTitle.includes(route.name)
)
</script>

<template>
  <VanNavBar v-if="isNavBar" :title="showLeftArrow ? '' : title" :left-arrow="showLeftArrow" :fixed="true"
    :border="false" clickable @click-left="onBack"
>
    <template v-if="showLeftArrow" #left>
      <div flex items-end justify-center>
        <van-image :src="backIcon" />
        <span v-if="showTitle" ml-2 ai-user-name>{{ title }}</span>
      </div>
    </template>
    <template #right>
      <van-image v-if="showLeftArrow && showRight" :src="reportIcon" @click="isReport = true" />
    </template>
  </VanNavBar>

  <report-box v-model:show="isReport" />
</template>

<style scoped></style>
