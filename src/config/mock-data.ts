import CommentJson from '~root/mock/modules/comment.mock'
import DynamicJson from '~root/mock/modules/dynamic.mock'
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
