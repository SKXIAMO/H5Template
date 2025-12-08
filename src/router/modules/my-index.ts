export default [
  {
    path: '/setup-page',
    name: 'SetupPage',
    meta: {
      title: 'Setting' // 设置
    },
    component: () => import('@/pages/my-modules/setup-page.vue')
  },
  {
    path: '/follow',
    name: 'Follow',
    meta: {
      title: 'Follow' // 关注
    },
    component: () => import('@/pages/my-modules/follow.vue')
  },
  {
    path: '/fans',
    name: 'Fans',
    meta: {
      title: 'Fans' // 粉丝
    },
    component: () => import('@/pages/my-modules/fans.vue')
  },
  {
    path: '/black-list',
    name: 'BlackList',
    meta: {
      title: 'BlackList' // 黑名单
    },
    component: () => import('@/pages/my-modules/black-list.vue')
  },
  {
    path: '/edit-info',
    name: 'EditInfo',
    meta: {
      title: 'Edit' // 修改信息
    },
    component: () => import('@/pages/my-modules/edit-info.vue')
  },
  {
    path: '/gold-coin',
    name: 'GoldCoin',
    meta: {
      title: 'My diamonds' // 我的金币
    },
    component: () => import('@/pages/my-modules/gold-coin.vue')
  }
]
