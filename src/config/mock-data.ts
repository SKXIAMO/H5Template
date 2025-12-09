import chatJson from '~root/mock/modules/chat.mock'
import CoinsJson from '~root/mock/modules/coins.mock'
import CommentJson from '~root/mock/modules/comment.mock'
import DynamicJson from '~root/mock/modules/dynamic.mock'
import messageJson from '~root/mock/modules/message.mock'
import ReportJson from '~root/mock/modules/report.mock'
import StyleJson from '~root/mock/modules/style.mock'
import UserListJson from '~root/mock/modules/user-list.mock'
import UserJson from '~root/mock/modules/user.mock'

/** 全局样式配置 */
window.styleJson = window.styleJson || StyleJson

/** 当前登录人用户信息 */
window.userJson = window.userJson || UserJson

/** 动态数据列表 */
window.dynamicJson = window.dynamicJson || DynamicJson

/** 评论数据列表 */
window.commentJson = window.commentJson || CommentJson

/** 所有用户数据列表 */
window.userListJson = window.userListJson || UserListJson

/** 聊天列表数据 */
window.chatListJson = window.chatListJson || chatJson

/** 聊天消息列表 */
window.messageListJson = window.messageListJson || messageJson

/** 金币数据 */
window.coinListJson = window.coinListJson || CoinsJson

window.privacyAgreementJson = window.privacyAgreementJson || '说明'
window.userAgreementJson = window.userAgreementJson || '说明'

/** 举报选项 */
window.reportListJson = window.reportListJson || ReportJson

/** 聊天机器人说明 */
window.chatBotDesc = window.chatBotDesc || {
  title: '这个是标题',
  content: '内容说明',
  points: 100
}
