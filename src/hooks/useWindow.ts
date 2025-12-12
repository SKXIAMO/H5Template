/** 控制修改传入 window 数据 */
export const useWindow = () => {
  /** 当前登录人用户信息 */
  const winUserData: UserInfo = window?.userJson ?? null

  /** 所有用户数据 */
  const winUserListData: UserInfo[] = window?.userListJson ?? []

  /** 评论数据 */
  const winCommentData: CommentInfo[] = window?.commentJson ?? []

  /** 动态数据 */
  const winDynamicData: DynamicInfo[] = window?.dynamicJson ?? []

  /** 聊天机器人说明 */
  const winChatBotDesc: ChatBotInfo = window?.chatBotDesc

  /** 聊天列表数据 */
  const winChatListData: ChatInfo[] = window?.chatListJson ?? []

  /** 消息数据 */
  const winMessageData: MessageInfo[] = window?.messageListJson ?? []

  /** 金币数据 */
  const winCoinData: CoinInfo[] = window?.coinListJson ?? []

  /** 隐私协议 */
  const winPrivacyAgreement: string = window?.privacyAgreementJson
  const winUserAgreement: string = window?.userAgreementJson

  /** 举报选项 */
  const winReportListData: ReportInfo[] = window?.reportListJson ?? []

  /** 发布图片选项 */
  const winPublishImageListData: PublishImageInfo[] = window?.publishImageListJson ?? []

  return { winUserData, winUserListData, winCommentData, winDynamicData, winChatBotDesc, winChatListData, winMessageData, winCoinData, winPrivacyAgreement, winUserAgreement, winReportListData, winPublishImageListData }
}
