import { createRemToPxProcessor } from '@unocss/preset-wind4/utils'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-2 py-1 rounded-1 border-none inline-block bg-green-400 text-white cursor-pointer outline-hidden hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
    ]
  ],
  presets: [
    presetWind4({
      preflights: {
        theme: {
          process: createRemToPxProcessor()
        }
      }
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2
    })
  ],
  postprocess: [createRemToPxProcessor()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    spacing: {
      // 全局布局左右边距
      'layout-padding': '20px'
    }
  },
  rules: [
    // 头像样式
    ['ai-avatar', { width: 'var(--ai-avatar-width)', height: 'var(--ai-avatar-height)' }],
    // 用户名称样式
    [
      'ai-user-name',
      { 'font-size': 'var(--ai-user-name-font-size)', 'font-weight': 'var(--ai-user-name-weight)', color: 'var(--ai-user-name-text-color)' }
    ],
    // 文本描述样式
    [
      'ai-text-desc',
      {
        'font-size': 'var(--ai-prose-text-font-size)',
        'font-weight': 'var(--ai-prose-text-font-weight)',
        color: 'var(--ai-prose-text-color)',
        display: 'inline-block',
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        'text-align': 'var(--ai-prose-text-sort)'
      }
    ],
    // 标签
    [
      'ai-tag-btn',
      {
        'font-size': 'var(--ai-tag-font-size)',
        'font-weight': 'var(--ai-tag-font-weight)',
        width: 'var(--ai-tag-width)',
        height: 'var(--ai-tag-height)',
        'line-height': 'var(--ai-tag-height)',
        display: 'block',
        color: 'var(--ai-tag-text-color)',
        background: 'var(--ai-tag-bg-color)',
        'text-align': 'center',
        'border-radius': 'var(--ai-tag-border-radius)'
      }
    ],
    // 填充物背景色
    [
      'ai-fill-bg',
      {
        background: ' #282329cc'
      }
    ],
    // 通用的圆角
    [
      'ai-rounded',
      {
        'border-radius': '20px'
      }
    ],
    // 表单标题
    [
      'ai-input-title',
      {
        'font-size': 'var(--ai-form-title-font-size)',
        'font-weight': 'var(--ai-form-title-font-weight)',
        'margin-bottom': 'var(--ai-form-title-margin-bottom)',
        color: 'var(--ai-form-title-text-color)'
      }
    ],
    // 表单默认按钮
    [
      'ai-default-btn',
      {
        'font-size': 'var(--ai-form-btn-font-size)',
        width: '107px',
        height: '40px',
        'line-height': '40px',
        'font-weight': 'var(--ai-form-btn-font-weight)',
        'text-align': 'center',
        'border-radius': 'var(--ai-form-btn-border-radius)',
        background: 'var(--ai-form-btn-bg-color)',
        color: 'var(--ai-form-btn-text-color)'
      }
    ],
    // 选中按钮
    [
      'ai-selected-btn',
      {
        background:
          'var(--ai-highlight-btn-bg-color)',
        color: 'var(--ai-highlight-btn-text-color)'
      }
    ],
    // 通用渐变按钮
    [
      'ai-gradient-btn',
      {
        width: 'var(--ai-confirm-btn-width)',
        height: 'var(--ai-confirm-btn-height)',
        'line-height': 'var(--ai-confirm-btn-height)',
        'font-size': 'var(--ai-confirm-btn-font-size)',
        'text-align': 'center',
        'font-weight': 'var(--ai-confirm-btn-font-weight)',
        'border-radius': 'var(--ai-confirm-btn-border-radius)',
        background: 'var(--ai-highlight-btn-bg-color)',
        color: 'var(--ai-highlight-btn-text-color)'
      }
    ]
  ]
})
