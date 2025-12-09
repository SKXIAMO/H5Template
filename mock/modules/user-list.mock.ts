// 所有用户列表
export default [
  {
    userId: 'u22',
    email: 'test@gmail.com',
    password: '',
    avator: '',
    name: 'laiyla1',
    about: '这个人很棒',
    coins: 0,
    follow: [],
    fans: [],
    blockList: [],
    picPostLikeIds: [],
    videoPostLikeIds: []
  },
  {
    userId: 'u23',
    email: 'test@gmail.com',
    password: '',
    avator: '',
    name: 'laiyla2',
    about: '这个人很棒',
    coins: 0,
    follow: [],
    fans: [],
    blockList: [],
    picPostLikeIds: [],
    videoPostLikeIds: []
  },
  {
    userId: 'u24',
    email: 'test@gmail.com',
    password: '',
    avator: '',
    name: 'laiyla3',
    about: '这个人很棒',
    coins: 0,
    follow: [],
    fans: [],
    blockList: [],
    picPostLikeIds: [],
    videoPostLikeIds: []
  },
  {
    userId: 'u99',
    email: 'test@gmail.com',
    password: '',
    avator: '',
    name: 'laiyla',
    about: '这个人很棒',
    coins: 101,
    follow: ['u24', 'u23'],
    fans: ['u22', 'u23'],
    blockList: ['u22'],
    picPostLikeIds: [],
    videoPostLikeIds: []
  }
] as UserInfo[]
