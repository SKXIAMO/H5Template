import { useUserStore } from '@/stores'

/**
 * app 通信值
 * updateComment: 更新评论
 * updateUser: 更新用户表
 * updatePost: 更新动态表
 * logout: 退出登录
 * deleteaccount: 删除账号
 * uploadMessage: 更新消息
 * uploadChat: 更新聊天室
 * Recharge: 充值选项
 */
export type AppCommunication = 'updateComment' | 'updateUser' | 'updatePost' | 'logout' | 'deleteaccount' | 'uploadMessage' | 'uploadChat' | 'Recharge'

/** 路由跳转 */
export const useJump = () => {
  const { userInfo } = useUserStore()
  const router = useRouter()
  const route = useRoute()

  /**
   * 返回
   */
  const onBack = async () => {
    if (route.query?.url) {
      router.replace(route.query.url as string)
      return
    }
    if (['ReportIndex'].includes(route.name)) {
      history.back()
    } else {
      try {
        await window.flutter_inappwebview.callHandler('close')
      } catch (e) {
        console.warn('Flutter handler close 调用失败', e)
        if (window.history.state.back) {
          history.back()
        } else {
          router.replace('/')
        }
      }
    }
  }

  /** 跳转到充值页面 */
  const jumpToRecharge = () => {
    router.replace({
      path: '/gold-coin',
      query: { url: 'chat-view' }
    })
  }

  /** 跳转到黑名单 */
  const jumpToBlackList = () => {
    router.replace({
      path: `/black-list`,
      query: { id: userInfo.userId, url: 'setup-page' }
    })
  }

  /** 用户协议跳转 */
  const jumpToUserAgreement = (path: string) => {
    router.replace({
      path,
      query: { url: 'setup-page' }
    })
  }

  /** 接收路由参数 id */
  const queryId = computed<string>(() => (route?.query?.id as string) || '1')

  /**
   * 传给 app 参数
   */
  const appParams = ({ key, value, state }: { key?: AppCommunication, value?: any, state?: 0 | 1 | 2 }) => {
    // state 0: 返回上一页 1: 只传值什么都不做 2: 只传 key
    if (state === 0) {
      window.flutter_inappwebview.callHandler(key, value)
      onBack()
    }

    if (state === 1) {
      window.flutter_inappwebview.callHandler(key, value).then(v => {
        if (key === 'Recharge') {
          userInfo.coins = v
        }
      })
    }

    if (state === 2) {
      window.flutter_inappwebview.callHandler(key)
    }
  }

  return {
    onBack,
    jumpToRecharge,
    appParams,
    jumpToBlackList,
    jumpToUserAgreement,
    queryId
  }
}
