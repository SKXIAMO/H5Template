/**
 * 根级别路由名称的列表
 */
export const rootRouteList: readonly string[] = ['Home', 'Profile']

/** 顶部导航栏不需要填充的路由 */
export const routeTopNavBar: readonly string[] = ['ArticleDetail', 'ChatView', 'ChatDetails', 'ShortVideo', 'OtherHome']

/** 不显示右边按钮路由 */
export const routeNoRightBtn: readonly string[] = ['SendDynamic', 'ChatView', 'ChatDetails', 'ShortVideo', 'PublishVideo', 'ReportIndex', 'PrivateChat', 'SetupPage', 'Follow', 'Fans', 'BlackList', 'EditInfo', 'GoldCoin']

/** 不显示导航栏 */
export const routeNoNavBar: readonly string[] = ['PrivateChat']

/** 显示标题的路由 */
export const routeShowTitle: readonly string[] = ['SetupPage', 'Follow', 'Fans', 'BlackList', 'EditInfo', 'GoldCoin', 'ReportIndex']
