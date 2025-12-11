import { useUserStore } from '@/stores'
import { useWindow } from './useWindow'

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
  const { winUserListData } = useWindow()
  const { userInfo } = useUserStore()
  const router = useRouter()
  const route = useRoute()

  const userList = ref<UserInfo[]>(winUserListData)

  /** 接收路由参数 id */
  const queryId = computed<string>(() => (route?.query?.id as string) || 'c1')

  /**
   * 返回
   */
  const onBack = async () => {
    if (route.query?.name === 'otherHome') {
      router.replace({
        path: '/other-home',
        query: { id: route.query?.cid }
      })
      return
    }

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

  /** 跳转私聊 */
  const jumpToPrivateChat = (id: string, cid: string) => {
    router.replace({
      path: '/private-chat',
      query: { id, cid, name: 'otherHome', url: 'other-home' }
    })
  }

  /** 进入聊天详情 */
  const jumpToChatDetail = () => {
    router.replace({
      path: '/chat-details',
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

  /**
   * 跳转详情页
   * @param id 传入对应 id
   * @param type 0 图片 1 视频
   */
  const jumpToDetail = (id: string, type: 0 | 1) => {
    router.replace({
      path: type ? '/short-video' : '/article-detail',
      query: { id, url: 'other-home' }
    })
  }

  /**
   * 跳转到对应粉丝关注
   * @param id
   * @param type 0 粉丝 1 关注
   */
  const jumpToFans = (id: string, type: 0 | 1) => {
    router.replace({
      path: type ? '/follow' : '/fans',
      query: { id, url: 'other-home' }
    })
  }

  /** 跳转通话 */
  const jumpToCall = (id: string, cid: string) => {
    router.replace({
      path: '/call-index',
      query: { id, cid, url: 'private-chat' }
    })
  }

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
          userInfo.coins += v
          userList.value.forEach(v => {
            if (v.userId === userInfo.userId) {
              v.coins = userInfo.coins
            }
          })
          appParams({ key: 'updateUser', value: userList.value, state: 1 })
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
    jumpToDetail,
    jumpToFans,
    jumpToCall,
    jumpToChatDetail,
    jumpToPrivateChat,
    queryId
  }
}
