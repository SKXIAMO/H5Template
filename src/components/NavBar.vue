<script setup lang="ts">
  import {
    navBarStyle,
    rootRouteList,
    routeNoNavBar,
    routeNoRightBtn,
    routeShowTitle
    // routeTopNavBar
  } from '@/config/routes'
  import { useAppImgStyle } from '@/hooks/useAppImgStyle'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'
  import { useUserStore } from '@/stores'

  const { onBack, queryId } = useJump()

  const { backIcon, reportIcon } = useAppImgStyle()

  // 举报弹框
  const isReport = ref(false)

  const route = useRoute()
  const { t } = useI18n()

  const { userInfo } = useUserStore()
  const { winDynamicData } = useWindow()

  // 是否显示右侧按钮
  const showRightBtn = computed(() => {
    const show = ['ArticleDetail', 'ShortVideo'].includes(
      route.name as string
    )
    if (show) {
      const { userId } = winDynamicData.find(
        v => v.dynamicId === queryId.value
      )
      return userId !== userInfo.userId
    }
    return show
  })

  // 是否显示右侧按钮
  const isShowOther = computed(() => {
    const show = ['OtherHome'].includes(
      route.name as string
    )
    if (show) { 
      return queryId.value !== userInfo.userId
    }
    return show
  })

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

  /** 是否显示导航栏样式 */
  const showNavBarStyle = computed(
    () => !route.name || navBarStyle.includes(route.name)
  )
</script>

<template>
  <VanNavBar
    v-if="isNavBar"
    :title="showLeftArrow ? '' : title"
    :left-arrow="showLeftArrow"
    :fixed="true"
    :border="false"
    clickable
    safe-area-inset-top
    :class="{ 'top-nav-bar_box': showNavBarStyle }"
    @click-left="onBack"
  >
    <template v-if="showLeftArrow" #left>
      <div flex items-end justify-center>
        <van-image 
          :src="backIcon" 
          :style="{
            width: 'var(--back-image-width)',
            height: 'var(--back-image-height)',
          }"
        />
        <span v-if="showTitle" ml-2 ai-user-name>{{ title }}</span>
      </div>
    </template>
    <template #right>
      <van-image
        v-if="(showRightBtn || isShowOther) && showLeftArrow && showRight"
        :src="reportIcon"
        :style="{
          width: 'var(--report-image-width)',
          height: 'var(--report-image-height)'
        }"
        @click="isReport = true"
      />
    </template>
  </VanNavBar>

  <report-box v-model:show="isReport" />
</template>

<style lang="less" scoped>
  .top-nav-bar_box {
    opacity: 0.5;
    background: linear-gradient(
      180deg,
      rgba(14, 8, 15, 1) 0%,
      rgba(14, 8, 15, 0) 100%
    );
  }
</style>
