export default [
  {
    path: '/',
    name: 'Home',
    meta: {},
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/report-index',
    name: 'ReportIndex',
    meta: {
      title: 'Report' // 举报
    },
    component: () => import('@/pages/report-index/index.vue')
  }
]
