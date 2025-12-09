/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */

interface GeneralStyle {
  backgroundColor: string
}

/** 字体样式 */
interface FontStyle {
  fontSize?: string
  fontWeight?: string
  color?: string
}
/** 可排序的字体 */
interface SortFont extends FontStyle {
  sort: 'left' | 'right' | 'center'
}

/** 边框性质样式 */
interface BorderStyle extends FontStyle {
  backgroundColor?: string
  borderRadius?: string
  width?: string
  height?: string
}

/** 用户信息 */
interface UserInfo {
  /** 用户ID */
  userId: string
  /** 用户名称 */
  name: string
  /** 用户头像 */
  avator: string
  /** 用户邮箱 */
  email: string
  /** 用户金币 */
  coins: number
  /** 用户简介 */
  about: string
  /** 关注列表 */
  follow?: string[]
  /** 粉丝列表 */
  fans?: string[]
  /** 黑名单列表 */
  blockList?: string[]
  /** 喜欢的图片帖子 */
  picPostLikeIds?: string[]
  /** 喜欢的视频帖子 */
  videoPostLikeIds?: string[]
  /** 账号是否删除 0：未删除，1：已删除 */
  isdelete?: 0 | 1
  /** 密码 */
  password?: string
}

/** 动态信息 */
interface DynamicInfo {
  /** 动态ID */
  dynamicId: string
  /** 发布动态的用户id */
  userId: string
  /** 动态类型 0 表示图片动态 1 表示视频动态 */
  dynamicType: 0 | 1
  /** 动态描述 */
  dynamicDesc: string
  /** 动态标题类型: 0 1 2 */
  dynamicTitleType: 0 | 1 | 2
  /** 标签按钮列表 */
  dynamicTag: string[]
  /** 图片动态的图片列表 */
  dynamicPic: string[]
  /** 视频动态的视频链接 */
  dynamicVideo: string
  /** 点赞数 */
  dynamicLikeCount: number
  /** 评论数 */
  dynamicCommentCount: number
  /** 用户名称 */
  name?: string
  /** 用户头像 */
  avator?: string
  /** 创建时间 */
  dynamicCreateTime?: string
}

/** 评论信息 */
interface CommentInfo {
  /** 评论的动态id */
  dynamicId: string
  /** 评论ID */
  commentId: string
  /** 评论用户id */
  userId: string
  /** 评论内容 */
  content: string
  /** 用户名称 */
  name?: string
  /** 用户头像 */
  avator?: string
  /** 创建时间 */
  createTime?: string
}

/** 聊天机器人 */
interface ChatBotInfo {
  title: string
  content: string
  points: number
}

/** 聊天详情类型 */
interface ChatInfo {
  /** 聊天 id */
  chatId: string
  /** 聊天用户ID列表 通过用户ID查询用户信息 */
  chatUserIds: string[]
  /** 最后发送的消息内容 */
  lastSendContent: string
  /** 最后发送消息的时间 */
  lastSendTime?: string
  /** 未读消息数量 */
  unreadMsgCount?: number
  /** 最后发送消息的用户ID */
  lastSendUserId?: string
}

/** 消息类型 */
interface MessageInfo {
  /** 消息 id */
  msgId: string
  /** 聊天 id */
  chatId: string
  /** 用户 id */
  userId: string
  /** 用户名称 */
  name?: string
  /** 用户头像 */
  avator?: string
  /** 显示位置 */
  position?: 'left' | 'right'
  /** 内容 */
  sendContent: string
  /** 发送图片URL */
  sendPicUrl: string
  /** 发送时间 */
  sendTime?: string
}

/** 金币类型 */
interface CoinInfo {
  key: string
  cions: number
  meney: number
}

/** 举报选项属性 */
interface ReportInfo {
  reportContext: string
}

interface Window {
  /** 与 app 通信 */
  flutter_inappwebview: any
  /** 样式表 */
  styleJson: {
    /** 顶部左侧返回图片 */
    backImage: string
    /** 顶部右侧举报图片 */
    reportImage: string
    /** 点赞图标 */
    likeIcon: string
    /** 点赞数量文本样式 */
    likeNumTextStyle: FontStyle
    /** 用户名称样式 */
    userNameStyle: FontStyle
    /** 头像样式（页面通用头像，小型的） */
    avatarStyle: {
      width: string
      height: string
    }
    /** 作品文本样式(内容，备注项) */
    proseTextStyle: SortFont
    /** 标签样式（如：描述下面的标签） */
    tagStyle: BorderStyle
    /** 文本输入框（发送内容）样式 */
    inputStyle: BorderStyle & {
      /** 右侧发送图标 */
      sendIcon: string
      placeholderCorlor: string
    }
    /** 表单标题 */
    formTitleStyle: FontStyle & {
      marginBottom: string
    }
    /** 表单富文本 */
    formRichTextStyle: FontStyle & GeneralStyle & {
      placeholderCorlor: string
    }
    /** 表单按钮 */
    formBtnStyle: FontStyle & GeneralStyle & {
      borderRadius: string
    }
    /** 表单输入框 */
    inputTextStyle: FontStyle & GeneralStyle & {
      placeholderCorlor: string
      borderRadius: string
    }
    /** 高亮按钮样式 */
    highlightBtnStyle: GeneralStyle & {
      color: string
    }
    /** 确认按钮 */
    confirmBtnStyle: BorderStyle
    /** 聊天列表样式 */
    chatListStyle: {
      avatarWidth: string
      avatarHeight: string
      borderRadius: string
      /** 发送背景色 */
      sendBgColor: string
      /** 接收背景色 */
      receiveBgColor: string
    }

    /** 举报按钮 */
    reportBtnStyle: {
      /** 选择项按钮 */
      selectBtnStyle: BorderStyle
      /** 取消按钮 */
      cancelBtnStyle: BorderStyle
    }

    /** 动态详情页 - articleDetail 路由 */
    articleDetailStyle: GeneralStyle
    /** 发布动态 - SendDynamic 路由 */
    sendDynamicStyle: GeneralStyle
    /** 聊天机器人 - ChatView 路由 */
    chatViewStyle: GeneralStyle & {
      /** 描述文本颜色 */
      textCorlor: string
      /** 按钮 */
      btnStyle: {
        width: string
        height: string
        color: string
        rightIcon: string
      }
      /** 弹框样式 */
      popupStyle: {
        /** 标题文本 */
        titleTextStyle: FontStyle
        /** 描述文本样式 */
        descTextStyle: FontStyle
        /** 背景样式 */
        bgImageStyle: {
          width: string
          height: string
          bgImg: string
        }
      }
    }
    /** 聊天详情 - ChatDetails 路由 */
    chatDetailsStyle: GeneralStyle & {
      /** 顶部文本样式 */
      topTextStyle: BorderStyle
    }

    /** 短视频 - ShortVideo 路由 */
    shortVideoStyle: GeneralStyle & {
      /** 添加图标 */
      addIcon: string
      /** 留言图标 */
      messageIcon: string
      /** 点赞图标 */
      likeIcon: string
      avatarWidth: string
      avatarHeight: string
      /** 按钮样式 */
      btnStyle: BorderStyle
    }

    /** 发布视频 - PublishVideo 路由 */
    publishVideoStyle: GeneralStyle & {}
    /** 其他主页 - OtherHome */
    otherHomeStyle: GeneralStyle & {
      /** 添加图标 */
      addIcon: string
      /** 留言图标 */
      messageIcon: string
      /** 点赞图标 */
      likeIcon: string
      /** 顶部数据样式 */
      topDataStyle: {
        /** 说明 */
        descTextStyle: FontStyle
        /** 描述 */
        textTextStyle: FontStyle
      }
      /** 左侧描述样式 */
      leftDescStyle: FontStyle
      /** 右侧按钮样式 */
      rightBtnStyle: BorderStyle
      /** 卡片说明 */
      cardDescStyle: SortFont
    }

    /** 举报 - ReportIndex 路由 */
    reportIndexStyle: GeneralStyle & {
      /** 选项样式 */
      selectBtnStyle: BorderStyle
    }

    /** 私聊 - PrivateChat 路由 */
    privateChatStyle: GeneralStyle

    /** 设置 - Setting 路由 */
    settingStyle: GeneralStyle & {
      /** 选择项样式 */
      selectBtnStyle: BorderStyle
      /** 按钮文本样式 */
      btnTextStyle: BorderStyle
    }

    /** 关注 - Follow 路由 */
    followStyle: GeneralStyle
    /** 粉丝 - Fans 路由 */
    fansStyle: GeneralStyle
    /** 黑名单 - BlackList 路由 */
    blackListStyle: GeneralStyle
    /** 修改信息 - Edit 路由  */
    editStyle: GeneralStyle
    /** 我的金币 - Coin */
    coinStyle: GeneralStyle & {
      /** 选项设置 */
      selectBtnStyle: BorderStyle & {
        /** 选中颜色 */
        selectedColor: string
      }
    }
  }
  /** 用户信息 */
  userJson: UserInfo
  /** 动态数据列表 */
  dynamicJson: DynamicInfo[]
  /** 评论数据列表 */
  commentJson: CommentInfo[]
  /** 所有用户数据列表 */
  userListJson: UserInfo[]
  /** 聊天机器人 */
  chatBotDesc: ChatBotInfo
  /** 聊天列表 */
  chatListJson: ChatInfo[]
  /** 消息表 */
  messageListJson: MessageInfo[]
  /** 金币选项 */
  coinListJson: CoinInfo[]
  privacyAgreementJson: string
  userAgreementJson: string
  /** 举报选项 */
  reportListJson: ReportInfo[]
}
