// 详情信息
export default [
  {
    dynamicId: '1', // 根据 /xxx?id=1 来匹配
    userId: 'u22', // 根据该 id 去查询传入过来的 json 用户的信息
    dynamicType: 0,
    dynamicDesc: '这是一段描述',
    dynamicTitleType: 0, // 动态标题类型
    // 标签列表
    dynamicTag: ['标签1'],
    dynamicPic: ['', ''],
    dynamicVideo: '',
    dynamicLikeCount: 2,
    dynamicCommentCount: 0
  }
] as DynamicInfo[]
