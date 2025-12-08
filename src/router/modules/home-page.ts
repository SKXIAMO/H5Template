export default [
  {
    path: '/article-detail',
    name: 'ArticleDetail',
    meta: {
      title: '动态详情'
    },
    component: () => import('@/pages/article-detail/index.vue')
  },
  {
    path: '/send-dynamic',
    name: 'SendDynamic',
    meta: {
      title: '发布动态'
    },
    component: () => import('@/pages/send-dynamic/index.vue')
  },
  {
    path: '/chat-view',
    name: 'ChatView',
    meta: {
      title: '聊天机器人'
    },
    component: () => import('@/pages/chat-view/index.vue')
  },
  {
    path: '/chat-details',
    name: 'ChatDetails',
    meta: {
      title: '聊天详情'
    },
    component: () => import('@/pages/chat-details/index.vue')
  }
]
