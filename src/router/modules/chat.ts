export default [
  {
    path: '/private-chat',
    name: 'PrivateChat',
    meta: {
      title: '私聊'
    },
    component: () => import('@/pages/private-chat/index.vue')
  }
]
