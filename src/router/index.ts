import type { EnhancedRouteLocation } from './types'

import NProgress from 'nprogress'

import { createRouter, createWebHistory } from 'vue-router'
// import { handleHotUpdate, routes } from 'vue-router/auto-routes'

import { useRouteCacheStore
  // useUserStore
 } from '@/stores'

// import { isLogin } from '@/utils/auth'

import setPageTitle from '@/utils/set-page-title'

import 'nprogress/nprogress.css'

/** 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录 */
const modules: Record<string, any> = import.meta.glob(
  ['./modules/**/*.ts', '!./modules/**/remaining.ts'],
  {
    eager: true
  }
)

NProgress.configure({ showSpinner: true, parent: '#app' })

/** 原始静态路由（未做任何处理） */
const routes = []

Object.keys(modules).forEach(key => {
  const mod = modules[key].default
  if (Array.isArray(mod)) {
    routes.push(...mod)
  } else {
    routes.push(mod)
  }
})

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_PUBLIC_PATH),
  routes
})

// 这将在运行时更新路由，而不重新加载页面
// if (import.meta.hot) handleHotUpdate(router)

router.beforeEach(async (to: EnhancedRouteLocation) => {
  NProgress.start()

  const routeCacheStore = useRouteCacheStore()
  // const userStore = useUserStore()

  // Route cache
  routeCacheStore.addRoute(to)

  // 设置页面标题
  setPageTitle(to.name)
  // if (isLogin() && !userStore.userInfo?.uid) await userStore.info()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
