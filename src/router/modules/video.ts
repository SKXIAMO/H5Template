export default [
  {
    path: '/short-video',
    name: 'ShortVideo',
    meta: {
      title: '短视频'
    },
    component: () => import('@/pages/short-video/index.vue')
  },
  {
    path: '/publish-video',
    name: 'PublishVideo',
    meta: {
      title: '发布视频'
    },
    component: () => import('@/pages/publish-video/index.vue')
  },
  {
    path: '/other-home',
    name: 'OtherHome',
    meta: {
      title: '其他主页'
    },
    component: () => import('@/pages/other-home/index.vue')
  }
]
