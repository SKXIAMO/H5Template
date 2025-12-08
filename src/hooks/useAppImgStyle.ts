/**
 * 全局图片配置项
 */

import loveIcon from '@/assets/images/love.svg'
import SendIcon from '@/assets/images/send.svg'
import LeftIcon from '@/assets/nav-bar/back.svg'
import RightMore from '@/assets/nav-bar/more.svg'
import Add from '@/assets/public/add.png'
import DialogBox from '@/assets/public/dialog-box.png'
import Like from '@/assets/public/like.png'
import Message from '@/assets/public/message.png'
import RightIcon from '@/assets/public/right-icon.png'

export const useAppImgStyle = () => {
  const styleJson = window.styleJson

  /** 输入框右侧图标 */
  const inputSendIcon = computed(() => styleJson?.inputStyle?.sendIcon || SendIcon)

  /** 首页详情页点赞图标 */
  const detailLikeIcon = computed(() => styleJson?.likeIcon || loveIcon)

  /** 举报图标 */
  const reportIcon = computed(() => styleJson?.reportImage || RightMore)

  /** 返回图标 */
  const backIcon = computed(() => styleJson?.backImage || LeftIcon)

  /** 聊天机器人页面底部按钮图标 */
  const chatBtnIcon = computed(() => styleJson?.chatViewStyle?.btnStyle?.rightIcon || RightIcon)
  /** 背景图 */
  const chatBgImage = computed(() => styleJson?.chatViewStyle?.popupStyle?.bgImageStyle?.bgImg || DialogBox)
  /** ========== */

  /** 短视频添加图标 */
  const addIcon = computed(() => styleJson?.shortVideoStyle?.addIcon || Add)
  /** 短视频留言图标 */
  const messageIcon = computed(() => styleJson?.shortVideoStyle?.messageIcon || Message)
  /** 短视频点赞图标 */
  const likeIcon = computed(() => styleJson?.shortVideoStyle?.likeIcon || Like)

  /** 其它主页添加图标 */
  const otherHomeAddIcon = computed(() => styleJson?.otherHomeStyle?.addIcon || Add)
  /** 其它主页留言图标 */
  const otherHomeMessageIcon = computed(() => styleJson?.otherHomeStyle?.messageIcon || Message)
  /** 其它主页点赞图标 */
  const otherHomeLikeIcon = computed(() => styleJson?.otherHomeStyle?.likeIcon || Like)

  return { inputSendIcon, detailLikeIcon, reportIcon, backIcon, chatBtnIcon, chatBgImage, addIcon, messageIcon, likeIcon, otherHomeAddIcon, otherHomeMessageIcon, otherHomeLikeIcon }
}
