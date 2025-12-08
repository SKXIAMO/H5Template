import { useUserStore } from '@/stores'
import { useJump } from './useJump'

/** 动态详情信息获取 */
export const useDetail = () => {
  const { queryId } = useJump()
  const { userInfo } = useUserStore()

  const commentJsonList: CommentInfo[] = window?.commentJson ?? []
  const paramsList = ref<CommentInfo[]>(commentJsonList)

  /** 动态信息 */
  const dynamicInfo = ref<DynamicInfo>()
  /** 评论列表 */
  const commentList = ref<CommentInfo[]>([])

  const loding = ref(true)

  const getData = () => {
    const userList = window?.userListJson ?? []
    const dynamicList = window?.dynamicJson ?? []

    const userMap = new Map(userList.map(u => [u.userId, u]))

    const infoData = dynamicList.find(v => v.dynamicId === queryId.value)

    const user = infoData ? userMap.get(infoData.userId) : null
    dynamicInfo.value = {
      ...(infoData),
      name: user?.name ?? '',
      avator: user?.avator ?? ''
    }

    const blockSet = new Set(userInfo?.blockList || [])

    commentList.value = commentJsonList.reduce((acc, v) => {
      // 筛选动态id
      if (v.dynamicId !== queryId.value) return acc
      // 筛选被屏蔽用户
      if (blockSet.has(v.userId)) return acc

      const user = userMap.get(v.userId)
      acc.push({
        ...v,
        name: user?.name ?? '',
        avator: user?.avator ?? ''
      })
      return acc
    }, [])

    loding.value = false
  }

  /** 发送功能 */
  const onSend = (v: string) => {
    if (v) {
      const id = Date.now()
      const item: CommentInfo = {
        dynamicId: queryId.value,
        commentId: id.toString(),
        userId: userInfo?.userId,
        content: v,
        name: userInfo?.name || '',
        avator: userInfo?.avator || ''
      }
      commentList.value.unshift(item)
      paramsList.value.unshift(item)
      window.flutter_inappwebview.callHandler('updateUser', paramsList.value)
    }
  }

  onMounted(() => {
    getData()
  })

  return { loding, dynamicInfo, commentList, onSend }
}
