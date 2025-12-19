/**
 * 动态样式配置项
 */
export const applyDynamicTheme = () => {
  const styleJson = window.styleJson
  const root = document.documentElement.style

  //返回图片大小
  root.setProperty('--back-image-width', styleJson?.backImageSize?.width || '24px')
  root.setProperty('--back-image-height', styleJson?.backImageSize?.height || '24px')

  //举报图片大小
  root.setProperty('--report-image-width', styleJson?.reportImageSize?.width || '24px')
  root.setProperty('--report-image-height', styleJson?.reportImageSize?.height || '24px')

  //帖子点赞图片大小（不高亮）
  root.setProperty('--unlike-image-width', styleJson?.unlikeImageSize?.width || '40px')
  root.setProperty('--unlike-image-height', styleJson?.unlikeImageSize?.height || '40px')

  //帖子发送评论图标
  root.setProperty('--comment-input-image-width', styleJson?.inputStyle?.sendIconWidth || '21px')
  root.setProperty('--comment-input-image-height', styleJson?.inputStyle?.sendIconHeight || '21px')

  //ai聊天按钮右箭头
  root.setProperty('--ai-btn-arr-image-width', styleJson?.chatViewStyle?.btnStyle?.rightIconWidth || '16px')
  root.setProperty('--ai-btn-arr-image-height', styleJson?.chatViewStyle?.btnStyle?.rightIconHeight || '16px')

  //他人主页关注图标
  root.setProperty('--other-home-follow-width', styleJson?.otherHomeStyle?.addIconWidth || '20px')
  root.setProperty('--other-home-follow-height', styleJson?.otherHomeStyle?.addIconHeight || '20px')

  //他人主页私聊图标
  root.setProperty('--other-home-chat-width', styleJson?.otherHomeStyle?.messageIconWidth || '40px')
  root.setProperty('--other-home-chat-height', styleJson?.otherHomeStyle?.messageIconHeight || '40px')

  //他人主页帖子喜欢图标
  root.setProperty('--other-home-like-post-width', styleJson?.otherHomeStyle?.likeIconWidth || '40px')
  root.setProperty('--other-home-like-post-height', styleJson?.otherHomeStyle?.likeIconHeight || '40px')

  //视频详情关注图标
  root.setProperty('--video-details-follow-width', styleJson?.shortVideoStyle?.addIconWidth || '20px')
  root.setProperty('--video-details-follow-height', styleJson?.shortVideoStyle?.addIconHeight || '20px')

  //视频详情评论图标
  root.setProperty('--video-details-comment-width', styleJson?.shortVideoStyle?.messageIconWidth || '40px')
  root.setProperty('--video-details-comment-height', styleJson?.shortVideoStyle?.messageIconHeight || '40px')

  // -------文本输入框（发送内容）样式
  root.setProperty('--ai-field-input-text-color', styleJson?.inputStyle?.color || '#ffffffcc')
  root.setProperty('--ai-field-placeholder-text-color', styleJson?.inputStyle?.placeholderCorlor || '#ffffff66')
  root.setProperty('--ai-field-input-bg-color', styleJson?.inputStyle?.backgroundColor || '#3e393fff')
  root.setProperty('--ai-field-input-border-radius', styleJson?.inputStyle?.borderRadius || '30px')
  root.setProperty('--ai-field-input-width', styleJson?.inputStyle?.width || '100%')
  root.setProperty('--ai-field-input-height', styleJson?.inputStyle?.height || '44px')
  root.setProperty('--ai-field-input-font-size', styleJson?.inputStyle?.fontSize || '14px')
  root.setProperty('--ai-field-input-font-weight', styleJson?.inputStyle?.fontWeight || '400')
  // ---------------

  // -------用户文本样式
  root.setProperty('--ai-user-name-text-color', styleJson?.userNameStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-user-name-font-size', styleJson?.userNameStyle?.fontSize || '16px')
  root.setProperty('--ai-user-name-weight', styleJson?.userNameStyle?.fontWeight || '400')
  // ---------------

  // -------作品文本样式（备注，说明）等文本
  root.setProperty('--ai-prose-text-color', styleJson?.proseTextStyle?.color || 'rgb(255, 255, 255)')
  root.setProperty('--ai-prose-text-font-size', styleJson?.proseTextStyle?.fontSize || '14px')
  root.setProperty('--ai-prose-text-font-weight', styleJson?.proseTextStyle?.fontWeight || '400')
  root.setProperty('--ai-prose-text-sort', styleJson?.proseTextStyle?.sort || 'left')
  // ---------------

  // -------头像样式
  root.setProperty('--ai-avatar-width', styleJson?.avatarStyle?.width || '32px')
  root.setProperty('--ai-avatar-height', styleJson?.avatarStyle?.height || '32px')
  // ---------------

  // -------标签样式
  root.setProperty('--ai-tag-text-color', styleJson?.tagStyle?.color || 'rgb(255, 255, 255)')
  root.setProperty('--ai-tag-font-size', styleJson?.tagStyle?.fontSize || '12px')
  root.setProperty('--ai-tag-font-weight', styleJson?.tagStyle?.fontWeight || '400')
  root.setProperty('--ai-tag-bg-color', styleJson?.tagStyle?.backgroundColor || 'rgb(35, 30, 36)')
  root.setProperty('--ai-tag-border-radius', styleJson?.tagStyle?.borderRadius || '20px')
  root.setProperty('--ai-tag-width', styleJson?.tagStyle?.width || '65px')
  root.setProperty('--ai-tag-height', styleJson?.tagStyle?.height || '26px')
  // ---------------

  // -------表单标题
  root.setProperty('--ai-form-title-text-color', styleJson?.formTitleStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-form-title-font-size', styleJson?.formTitleStyle?.fontSize || '20px')
  root.setProperty('--ai-form-title-font-weight', styleJson?.formTitleStyle?.fontWeight || '400')
  root.setProperty('--ai-form-title-margin-bottom', styleJson?.formTitleStyle?.marginBottom || '30px')
  // ---------------

  // -------表单按钮
  root.setProperty('--ai-form-btn-text-color', styleJson?.formBtnStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-form-btn-bg-color', styleJson?.formBtnStyle?.backgroundColor || 'rgb(35, 30, 36)')
  root.setProperty('--ai-form-btn-font-size', styleJson?.formBtnStyle?.fontSize || '18px')
  root.setProperty('--ai-form-btn-font-weight', styleJson?.formBtnStyle?.fontWeight || '400')
  root.setProperty('--ai-form-btn-border-radius', styleJson?.formBtnStyle?.borderRadius || '20px')
  // ---------------

  // -------表单输入框
  root.setProperty('--ai-input-text-color', styleJson?.inputTextStyle?.color || 'rgba(255, 255, 255, 0.8)')
  root.setProperty('--ai-input-text-font-size', styleJson?.inputTextStyle?.fontSize || '16px')
  root.setProperty('--ai-input-text-font-weight', styleJson?.inputTextStyle?.fontWeight || '400')
  root.setProperty('--ai-input-text-placeholder-text-color', styleJson?.inputTextStyle?.placeholderCorlor || 'rgba(255, 255, 255, 0.4)')
  root.setProperty('--ai-input-text-bg-color', styleJson?.inputTextStyle?.backgroundColor || '#231e24')
  root.setProperty('--ai-input-text-border-radius', styleJson?.inputTextStyle?.borderRadius || '16px')
  // -------------------

  // -------表单富文本样式
  root.setProperty('--ai-form-rich-text-text-color', styleJson?.formRichTextStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-form-rich-text-font-size', styleJson?.formRichTextStyle?.fontSize || '14px')
  root.setProperty('--ai-form-rich-text-font-weight', styleJson?.formRichTextStyle?.fontWeight || '400')
  root.setProperty('--ai-form-rich-text-placeholder-text-color', styleJson?.formRichTextStyle?.placeholderCorlor || 'rgba(255, 255, 255, 0.5)')
  root.setProperty('--ai-form-rich-text-bg-color', styleJson?.formRichTextStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------高亮按钮样式
  root.setProperty('--ai-highlight-btn-text-color', styleJson?.highlightBtnStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-highlight-btn-bg-color', styleJson?.highlightBtnStyle?.backgroundColor || 'linear-gradient(151.23deg, rgba(71, 252, 255, 1) 0%, rgba(255, 94, 135, 1) 100%)')
  // ---------------

  // -------确认按钮样式
  root.setProperty('--ai-confirm-btn-border-radius', styleJson?.confirmBtnStyle?.borderRadius || '20px')
  root.setProperty('--ai-confirm-btn-width', styleJson?.confirmBtnStyle?.width || '182px')
  root.setProperty('--ai-confirm-btn-height', styleJson?.confirmBtnStyle?.height || '46px')
  root.setProperty('--ai-confirm-btn-font-size', styleJson?.confirmBtnStyle?.fontSize || '16px')
  root.setProperty('--ai-confirm-btn-font-weight', styleJson?.confirmBtnStyle?.fontSize || '400')
  // ---------------

  // -------动态详情页 - articleDetail
  root.setProperty('--ai-article-detail-bg-color', styleJson?.articleDetailStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------发布动态 - SendDynamic
  root.setProperty('--ai-send-dynamic-bg-color', styleJson?.sendDynamicStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------聊天机器人 - ChatView
  root.setProperty('--ai-chat-view-bg-color', styleJson?.chatViewStyle?.backgroundColor || '#0e080f')
  root.setProperty('--ai-chat-view-text-color', styleJson?.chatViewStyle?.btnStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-chat-view-btn-width', styleJson?.chatViewStyle?.btnStyle?.width || '227px')
  root.setProperty('--ai-chat-view-btn-height', styleJson?.chatViewStyle?.btnStyle?.height || '56px')
  root.setProperty('--ai-chat-view-text-color', styleJson?.chatViewStyle?.textCorlor || 'rgba(255, 255, 255, 0.6)')
  // ----弹框
  root.setProperty('--ai-chat-view-popup-title-text-color', styleJson?.chatViewStyle?.popupStyle?.titleTextStyle?.color || '#0e080f')
  root.setProperty('--ai-chat-view-popup-title-font-size', styleJson?.chatViewStyle?.popupStyle?.titleTextStyle?.fontSize || '20px')
  root.setProperty('--ai-chat-view-popup-title-font-weight', styleJson?.chatViewStyle?.popupStyle?.titleTextStyle?.fontWeight || '400')
  root.setProperty('--ai-chat-view-popup-desc-text-color', styleJson?.chatViewStyle?.popupStyle?.descTextStyle?.color || '#0e080f99')
  root.setProperty('--ai-chat-view-popup-desc-text-size', styleJson?.chatViewStyle?.popupStyle?.descTextStyle?.fontSize || '14px')
  root.setProperty('--ai-chat-view-popup-desc-text-weight', styleJson?.chatViewStyle?.popupStyle?.descTextStyle?.fontWeight || '400')
  // 背景图
  root.setProperty('--ai-chat-view-popup-bg-img-height', styleJson?.chatViewStyle?.popupStyle?.bgImageStyle?.height || '212px')
  root.setProperty('--ai-chat-view-popup-bg-img-width', styleJson?.chatViewStyle?.popupStyle?.bgImageStyle?.width || '280px')
  // ---------------

  // -------聊天详情 - ChatDetails
  root.setProperty('--ai-chat-details-bg-color', styleJson?.chatDetailsStyle?.backgroundColor || '#0e080f')

  root.setProperty('--ai-chat-details-top-border-radius', styleJson?.chatDetailsStyle?.topTextStyle?.borderRadius || '20px')
  root.setProperty('--ai-chat-details-top-width', styleJson?.chatDetailsStyle?.topTextStyle?.width || '190px')
  root.setProperty('--ai-chat-details-top-height', styleJson?.chatDetailsStyle?.topTextStyle?.height || '36px')
  root.setProperty('--ai-chat-details-top-text-color', styleJson?.chatDetailsStyle?.topTextStyle?.color || 'rgba(255, 255, 255, 1)')
  root.setProperty('--ai-chat-details-top-text-font-size', styleJson?.chatDetailsStyle?.topTextStyle?.fontSize || '14px')
  root.setProperty('--ai-chat-details-top-text-font-weight', styleJson?.chatDetailsStyle?.topTextStyle?.fontWeight || '400')
  root.setProperty('--ai-chat-details-top-text-bg-color', styleJson?.chatDetailsStyle?.topTextStyle?.backgroundColor || '#0d080d33')
  // ---------------

  // -------聊天列表样式
  root.setProperty('--ai-chat-list-avatar-width', styleJson?.chatListStyle?.avatarWidth || '44px')
  root.setProperty('--ai-chat-list-avatar-height', styleJson?.chatListStyle?.avatarHeight || '44px')
  root.setProperty('--ai-chat-list-avatar-border-radius', styleJson?.chatListStyle?.borderRadius || '24px')
  root.setProperty('--ai-chat-list-send-bg-color', styleJson?.chatListStyle?.sendBgColor || '#434044')
  root.setProperty('--ai-chat-list-receive-bg-color', styleJson?.chatListStyle?.receiveBgColor || 'linear-gradient(157.71deg, rgba(255, 94, 135, 1) 0%, rgba(71, 252, 255, 1) 100%)')
  // ---------------

  // -------短视频 - ShortVideo
  root.setProperty('--ai-short-video-bg-color', styleJson?.shortVideoStyle?.backgroundColor || '#0e080f')
  root.setProperty('--ai-short-video-avatar-width', styleJson?.shortVideoStyle?.avatarWidth || '48px')
  root.setProperty('--ai-short-video-avatar-height', styleJson?.shortVideoStyle?.avatarHeight || '48px')
  root.setProperty('--ai-short-video-bottom-btn-width', styleJson?.shortVideoStyle?.btnStyle?.width || '162px')
  root.setProperty('--ai-short-video-bottom-btn-height', styleJson?.shortVideoStyle?.btnStyle?.height || '53px')
  root.setProperty('--ai-short-video-bottom-btn-border-radius', styleJson?.shortVideoStyle?.btnStyle?.borderRadius || '20px')
  root.setProperty('--ai-short-video-bottom-btn-bg-color', styleJson?.shortVideoStyle?.btnStyle?.backgroundColor || 'rgba(255, 255, 255, 0.2)')
  // ---------------

  // -------发布视频 - PublishVideo
  root.setProperty('--ai-publish-video-bg-color', styleJson?.publishVideoStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------其他主页 - OtherHome
  root.setProperty('--ai-other-home-bg-color', styleJson?.otherHomeStyle?.backgroundColor || '#0e080f')
  // 顶部数据样式
  root.setProperty('--ai-other-home-top-data-desc-text-color', styleJson?.otherHomeStyle?.topDataStyle?.descTextStyle?.color || '#fff')
  root.setProperty('--ai-other-home-top-data-desc-text-size', styleJson?.otherHomeStyle?.topDataStyle?.descTextStyle?.fontSize || '20px')
  root.setProperty('--ai-other-home-top-data-desc-text-weight', styleJson?.otherHomeStyle?.topDataStyle?.descTextStyle?.fontWeight || '400')
  root.setProperty('--ai-other-home-top-data-text-text-color', styleJson?.otherHomeStyle?.topDataStyle?.textTextStyle?.color || 'rgba(255, 255, 255, .7)')
  root.setProperty('--ai-other-home-top-data-text-text-size', styleJson?.otherHomeStyle?.topDataStyle?.textTextStyle?.fontSize || '14px')
  root.setProperty('--ai-other-home-top-data-text-text-weight', styleJson?.otherHomeStyle?.topDataStyle?.textTextStyle?.fontWeight || '400')

  root.setProperty('--ai-other-home-right-desc-text-color', styleJson?.otherHomeStyle?.leftDescStyle?.color || '#fff')
  root.setProperty('--ai-other-home-right-desc-text-size', styleJson?.otherHomeStyle?.leftDescStyle?.fontSize || '16px')
  root.setProperty('--ai-other-home-right-desc-text-weight', styleJson?.otherHomeStyle?.leftDescStyle?.fontWeight || '400')

  root.setProperty('--ai-other-home-right-btn-style-width', styleJson?.otherHomeStyle?.rightBtnStyle?.width || '162px')
  root.setProperty('--ai-other-home-right-btn-style-height', styleJson?.otherHomeStyle?.rightBtnStyle?.height || '53px')
  root.setProperty('--ai-other-home-right-btn-style-bg-color', styleJson?.otherHomeStyle?.rightBtnStyle?.backgroundColor || 'rgba(255, 255, 255, 0.2)')
  root.setProperty('--ai-other-home-right-btn-style-border-radius', styleJson?.otherHomeStyle?.rightBtnStyle?.borderRadius || '20px')

  root.setProperty('--ai-other-home-card-desc-text-color', styleJson?.otherHomeStyle?.cardDescStyle?.color || '#fff')
  root.setProperty('--ai-other-home-card-desc-text-size', styleJson?.otherHomeStyle?.cardDescStyle?.fontSize || '14px')
  root.setProperty('--ai-other-home-card-desc-text-weight', styleJson?.otherHomeStyle?.cardDescStyle?.fontWeight || '400')
  root.setProperty('--ai-other-home-card-desc-text-sort', styleJson?.otherHomeStyle?.cardDescStyle?.sort || 'left')
  // ---------------

  // -------举报按钮
  // 选项按钮
  root.setProperty('--ai-report-btn-select-style-width', styleJson?.reportBtnStyle?.selectBtnStyle?.width || '260px')
  root.setProperty('--ai-report-btn-select-style-height', styleJson?.reportBtnStyle?.selectBtnStyle?.height || '46px')
  // 取消
  root.setProperty('--ai-report-btn-cancel-style-width', styleJson?.reportBtnStyle?.cancelBtnStyle?.width || '182px')
  root.setProperty('--ai-report-btn-cancel-style-height', styleJson?.reportBtnStyle?.cancelBtnStyle?.height || '46px')
  // ---------------

  // -------举报 - ReportIndex
  root.setProperty('--ai-report-index-bg-color', styleJson?.reportIndexStyle?.backgroundColor || '#0e080f')
  // 选项
  root.setProperty('--ai-report-index-select-style-width', styleJson?.reportIndexStyle?.selectBtnStyle?.width || '164px')
  root.setProperty('--ai-report-index-select-style-height', styleJson?.reportIndexStyle?.selectBtnStyle?.height || '115px')
  root.setProperty('--ai-report-index-select-style-bg-color', styleJson?.reportIndexStyle?.selectBtnStyle?.backgroundColor || 'rgba(35, 30, 36, 1)')
  root.setProperty('--ai-report-index-select-style-text-color', styleJson?.reportIndexStyle?.selectBtnStyle?.color || '#fff')
  root.setProperty('--ai-report-index-select-style-text-size', styleJson?.reportIndexStyle?.selectBtnStyle?.fontSize || '16px')
  root.setProperty('--ai-report-index-select-style-border-radius', styleJson?.reportIndexStyle?.selectBtnStyle?.borderRadius || '20px')
  root.setProperty('--ai-report-index-select-style-text-weight', styleJson?.reportIndexStyle?.selectBtnStyle?.fontWeight || '400')
  // ---------------

  // -------私聊 - PrivateChat
  root.setProperty('--ai-private-chat-bg-color', styleJson?.privateChatStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------设置 - Setting
  root.setProperty('--ai-setting-bg-color', styleJson?.settingStyle?.backgroundColor || '#0e080f')
  // 选项
  root.setProperty('--ai-setting-select-style-width', styleJson?.settingStyle?.selectBtnStyle?.width || '100%')
  root.setProperty('--ai-setting-select-style-height', styleJson?.settingStyle?.selectBtnStyle?.height || '46px')
  root.setProperty('--ai-setting-select-style-bg-color', styleJson?.settingStyle?.selectBtnStyle?.backgroundColor || '#231e24')
  root.setProperty('--ai-setting-select-style-text-color', styleJson?.settingStyle?.selectBtnStyle?.color || '#fff')
  root.setProperty('--ai-setting-select-style-text-size', styleJson?.settingStyle?.selectBtnStyle?.fontSize || '16px')
  root.setProperty('--ai-setting-select-style-border-radius', styleJson?.settingStyle?.selectBtnStyle?.borderRadius || '12px')
  root.setProperty('--ai-setting-select-style-text-weight', styleJson?.settingStyle?.selectBtnStyle?.fontWeight || '400')
  // 按钮颜色
  root.setProperty('--ai-setting-btn-color', styleJson?.settingStyle?.btnTextStyle?.backgroundColor || 'linear-gradient(136deg, rgba(255, 94, 135, 1) 60%, rgba(71, 252, 255, 1) 100%)')
  root.setProperty('--ai-setting-btn-text-color', styleJson?.settingStyle?.btnTextStyle?.color || '#fff')
  root.setProperty('--ai-setting-btn-text-size', styleJson?.settingStyle?.btnTextStyle?.fontSize || '16px')
  root.setProperty('--ai-setting-btn-text-weight', styleJson?.settingStyle?.btnTextStyle?.fontWeight || '400')
  // ---------------

  // -------关注 - Follow
  root.setProperty('--ai-follow-bg-color', styleJson?.followStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------粉丝 - Fans
  root.setProperty('--ai-fans-bg-color', styleJson?.fansStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------黑名单 - BlackList
  root.setProperty('--ai-black-list-bg-color', styleJson?.blackListStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------修改信息 - Edit
  root.setProperty('--ai-edit-bg-color', styleJson?.editStyle?.backgroundColor || '#0e080f')
  // ---------------

  // -------金币 - Coin
  root.setProperty('--ai-coin-bg-color', styleJson?.coinStyle?.backgroundColor || '#0e080f')
  // 选项设置
  root.setProperty('--ai-coin-select-style-width', styleJson?.coinStyle?.selectBtnStyle?.width || '105px')
  root.setProperty('--ai-coin-select-style-height', styleJson?.coinStyle?.selectBtnStyle?.height || '100px')
  root.setProperty('--ai-coin-select-style-bg-color', styleJson?.coinStyle?.selectBtnStyle?.backgroundColor || 'rgba(35, 30, 36, 1)')
  root.setProperty('--ai-coin-select-style-border-radius', styleJson?.coinStyle?.selectBtnStyle?.borderRadius || '24px')
  // 选中颜色
  root.setProperty('--ai-coin-select-style-selected-color', styleJson?.coinStyle?.selectBtnStyle?.selectedColor || 'linear-gradient(151.23deg, rgba(255, 94, 135, 1) 0%, rgb(71, 255, 80) 100%)')
  // ---------------
}
