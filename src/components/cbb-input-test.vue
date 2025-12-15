<script setup lang="ts">
  import { showNotify } from 'vant'

  const inputValue = defineModel<string>({
    type: String,
    required: true,
    default: ''
  })

  // 复制函数（兼容移动端）
  const handleCopy = async () => {
    const text = inputValue.value

    // 方法1：现代 API（推荐）
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text)
        showNotify({ type: 'success', message: '已复制' })
        return
      } catch (err) {
        console.warn('Clipboard API 失败，尝试降级方案:', err)
      }
    }

    // 方法2：降级方案（适用于 iOS/Android WebView）
    try {
      // 创建临时 textarea 元素
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.setAttribute('readonly', '')
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      document.body.appendChild(textarea)

      // 选中内容
      textarea.select()
      textarea.setSelectionRange(0, text.length) // 兼容 iOS

      // 执行复制
      const success = document.execCommand('copy')
      document.body.removeChild(textarea)

      if (success) {
        showNotify({ type: 'success', message: '已复制' })
      } else {
        throw new Error('execCommand 复制失败')
      }
    } catch (err) {
      console.error('复制失败:', err)
      showNotify({ type: 'danger', message: '复制失败，请手动长按选择' })
    }
  }
</script>

<template>
  <div @click="handleCopy">
    <p class="cbb-input_btn">{{ inputValue }}</p>
  </div>
</template>

<style lang="less" scoped>
  .cbb-input_btn {
    // 文本超过宽度换行
    width: 90%;
    color: rgb(194, 99, 99);
    overflow-wrap: break-word;
    word-wrap: break-word; /* 兼容 IE */
    word-break: normal;
    white-space: normal;
  }
</style>
