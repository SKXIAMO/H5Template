// 详情信息
export default [
  {
    dynamicId: '1', // 根据 /xxx?id=1 来匹配
    userId: 'u24', // 根据该 id 去查询传入过来的 json 用户的信息
    dynamicType: 0,
    dynamicDesc: '这是一段描述',
    dynamicTitleType: 0, // 动态标题类型
    // 标签列表
    dynamicTag: ['标签1'],
    dynamicPic: ['', ''],
    dynamicVideo: '',
    dynamicLikeCount: 2,
    dynamicCommentCount: 0
  },
  {
    dynamicId: '2', // 根据 /xxx?id=1 来匹配
    userId: 'u99', // 根据该 id 去查询传入过来的 json 用户的信息
    dynamicType: 1,
    dynamicDesc: '这s是一段描述',
    dynamicTitleType: 0, // 动态标题类型
    // 标签列表
    dynamicTag: ['标签3'],
    dynamicPic: ['https://img2.baidu.com/it/u=3024075546,1738530747&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1391', ''],
    dynamicVideo: 'http://huanniuchat.oss-accelerate.aliyuncs.com/template_development/1765178538523_2a48b42e3b1aaf6313116b0d681754e3.MP4',
    dynamicLikeCount: 2,
    dynamicCommentCount: 0
  },
    {
    dynamicId: '4', // 根据 /xxx?id=1 来匹配
    userId: 'u24', // 根据该 id 去查询传入过来的 json 用户的信息
    dynamicType: 1,
    dynamicDesc: '这s是一段描述',
    dynamicTitleType: 0, // 动态标题类型
    // 标签列表
    dynamicTag: ['标签3'],
    dynamicPic: [],
    dynamicVideo: 'http://huanniuchat.oss-accelerate.aliyuncs.com/template_development/1765178538523_2a48b42e3b1aaf6313116b0d681754e3.MP4',
    dynamicLikeCount: 2,
    dynamicCommentCount: 0
  },
  {
    dynamicId: '2', // 根据 /xxx?id=1 来匹配
    userId: 'u99', // 根据该 id 去查询传入过来的 json 用户的信息
    dynamicType: 1,
    dynamicDesc: '这s是一段描述',
    dynamicTitleType: 0, // 动态标题类型
    // 标签列表
    dynamicTag: ['标签3'],
    dynamicPic: [],
    dynamicVideo: 'http://huanniuchat.oss-accelerate.aliyuncs.com/template_development/1765178538523_2a48b42e3b1aaf6313116b0d681754e3.MP4',
    dynamicLikeCount: 2,
    dynamicCommentCount: 0
  }
] as DynamicInfo[]
