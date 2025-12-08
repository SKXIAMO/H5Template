/** 路由跳转 */
export const useJump = () => {
  const router = useRouter()
  const route = useRoute()

  /**
   * 返回
   */
  const onBack = () => {
    // 判断是否有 window.flutter_inappwebview.callHandler('close')
    if (window?.flutter_inappwebview?.callHandler('close')) {
      window.flutter_inappwebview.callHandler('close')
    } else {
      if (window.history.state.back) {
        history.back()
      } else {
        router.replace('/')
      }
    }
  }

  /** 接收路由参数 id */
  const queryId = computed<string>(() => (route?.query?.id as string) || '1')

  return {
    onBack,
    queryId
  }
}
