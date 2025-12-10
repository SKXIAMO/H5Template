export default [
  {
    path: '/private-chat',
    name: 'PrivateChat',
    meta: {
      title: '私聊'
    },
    component: () => import('@/pages/private-chat/index.vue')
  },
  {
    path: '/call-index',
    name: 'CallIndex',
    meta: {
      title: '通话'
    },
    component: () => import('@/pages/private-chat/call.vue')
  }
]
