import { useUserStore } from '@/stores'
import { useJump } from './useJump'
import { useWindow } from './useWindow'

/** 对应详情的用户 id */
export const detailId = ref('')

/** 动态详情信息获取 */
export const useDetail = () => {
  const router = useRouter()
  const { queryId, appParams } = useJump()
  const { userInfo } = useUserStore()
  const { winCommentData, winDynamicData, winUserListData } = useWindow()

  const paramsList = ref<CommentInfo[]>(winCommentData)

  const allUserListData = ref<UserInfo[]>(winUserListData)

  const dynamicListData = ref<DynamicInfo[]>(winDynamicData)

  /** 动态信息 */
  const dynamicInfo = ref<DynamicInfo>()
  /** 评论列表 */
  const commentList = ref<CommentInfo[]>([])
  /** 点赞状态 */
  const isLike = ref(false)
  /** 是否可以关注 */
  const isFollow = ref(false)

  /** 视频点赞 */
  const isVideoLike = ref(false)

  const loding = ref(true)

  const getData = () => {
    const userList = window?.userListJson ?? []
    const dynamicList = window?.dynamicJson ?? []

    const userMap = new Map(userList.map(u => [u.userId, u]))

    const infoData = dynamicList.find(v => v.dynamicId === queryId.value)
    detailId.value = infoData?.userId

    const user = infoData ? userMap.get(infoData.userId) : null

    dynamicInfo.value = {
      ...(infoData),
      name: user?.name ?? '',
      avator: user?.avator ?? ''
    }
    isLike.value = userInfo?.picPostLikeIds?.includes(queryId.value)
    isVideoLike.value = userInfo?.videoPostLikeIds?.includes(queryId.value)
    isFollow.value = userInfo?.follow.includes(infoData?.userId)

    const blockSet = new Set(userInfo?.blockList || [])

    commentList.value = winCommentData.reduce((acc, v) => {
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

  /**
   * 发送功能
   * @param v 内容
   * @param type 0:图片 1:视频
   */
  const onSend = (v: string, _: 0 | 1 = 0) => {
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

      dynamicInfo.value.dynamicCommentCount += 1
      dynamicListData.value.forEach(v => {
        if (v.dynamicId === dynamicInfo.value.dynamicId) {
          v.dynamicCommentCount = dynamicInfo.value.dynamicCommentCount
        }
      })
      appParams({ key: 'updatePost', value: dynamicListData.value, state: 1 })
      appParams({ key: 'updateComment', value: paramsList.value, state: 1 })
    }
  }

  /**
   * 图片点赞
   */
  const onLike = () => {
    if (isLike.value) {
      userInfo.picPostLikeIds = userInfo.picPostLikeIds.filter(v => v !== queryId.value)
      dynamicInfo.value.dynamicLikeCount -= 1
      isLike.value = false
    } else {
      userInfo.picPostLikeIds.push(queryId.value)
      dynamicInfo.value.dynamicLikeCount += 1
      isLike.value = true
    }

    console.log(userInfo.picPostLikeIds, '==2')
    dynamicListData.value.forEach(v => {
      if (v.dynamicId === queryId.value) {
        v.dynamicLikeCount = dynamicInfo.value.dynamicLikeCount
      }
    })
    allUserListData.value.forEach(v => {
      if (v.userId === userInfo.userId) {
        v.picPostLikeIds = userInfo.picPostLikeIds
      }
    })
    appParams({ key: 'updateUser', value: allUserListData.value, state: 1 })
    appParams({ key: 'updatePost', value: dynamicListData.value, state: 1 })
  }

  /** 视频点赞 */
  const onVideoLike = () => {
    if (isVideoLike.value) {
      userInfo.videoPostLikeIds = userInfo.videoPostLikeIds.filter(v => v !== queryId.value)
      dynamicInfo.value.dynamicLikeCount -= 1
      isVideoLike.value = false
    } else {
      userInfo.videoPostLikeIds.push(queryId.value)
      dynamicInfo.value.dynamicLikeCount += 1
      isVideoLike.value = true
    }

    dynamicListData.value.forEach(v => {
      if (v.dynamicId === queryId.value) {
        v.dynamicLikeCount = dynamicInfo.value.dynamicLikeCount
      }
    })

    allUserListData.value.forEach(v => {
      if (v.userId === userInfo.userId) {
        v.videoPostLikeIds = userInfo.videoPostLikeIds
      }
    })
    appParams({ key: 'updateUser', value: allUserListData.value, state: 1 })
    appParams({ key: 'updatePost', value: dynamicListData.value, state: 1 })
  }

  /** 点击关注 */
  const onFollow = () => {
    if (userInfo.userId !== dynamicInfo.value.userId) {
      if (!userInfo.follow.includes(dynamicInfo.value.userId)) {
        userInfo.follow.push(dynamicInfo.value.userId)
        allUserListData.value.forEach(v => {
          if (v.userId === userInfo.userId) {
            v.follow = userInfo.follow
          }
        })
        isFollow.value = true
        appParams({ key: 'updateUser', value: allUserListData.value, state: 1 })
      }
    }
  }

  /** 点击头像跳转到对于主页 */
  const onAvator = () => {
    router.replace({
      path: '/other-home',
      query: { id: dynamicInfo.value.userId }
    })
  }

  onMounted(() => {
    getData()
  })

  return { loding, dynamicInfo, commentList, isLike, isVideoLike, isFollow, onFollow, onLike, onSend, onVideoLike, onAvator }
}
