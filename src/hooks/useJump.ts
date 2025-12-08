/** 路由跳转 */
export const useJump = () => {
  const router = useRouter()
  const route = useRoute()

  /**
   * 返回
   */
  const onBack = async () => {
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

  /** 接收路由参数 id */
  const queryId = computed<string>(() => (route?.query?.id as string) || '1')

  return {
    onBack,
    queryId
  }
}
