export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<Blob | null>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}
export function useVideoCover(): UseVideoCoverReturn {
  const isExtracting = ref(true)
  const error = ref<string | null>(null)

  const extractCoverFromVideo = (file: File): Promise<Blob | null> => {
    return new Promise(resolve => {
      if (!file || !file.type.startsWith('video/')) {
        error.value = '文件不是有效的视频'
        resolve(null)
        return
      }

      isExtracting.value = true
      error.value = null

      // ✅ 关键修复1：创建临时挂载容器
      const tempContainer = document.createElement('div')
      tempContainer.style.display = 'none' // 隐藏
      document.body.appendChild(tempContainer)

      // 创建 video 元素（纯 JS，不挂载到 DOM）
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.muted = true
      video.playsInline = true

      // 显式设置 attributes，确保 iOS 正确识别
      video.setAttribute('playsinline', 'true')
      video.setAttribute('webkit-playsinline', 'true') // 旧版 iOS 兼容

      // ✅ 关键修复2：将video挂载到临时容器
      tempContainer.appendChild(video)

      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        video.src = fileReader.result as string
      }

      const cleanup = () => {
        if (tempContainer && tempContainer.parentNode) {
          tempContainer.parentNode.removeChild(tempContainer) // 移除临时容器
        }

        video.remove() // 虽未挂载，但安全起见
      }

      video.onerror = () => {
        error.value = '视频加载失败'
        cleanup()
        isExtracting.value = false
        resolve(null)
      }

      video.onloadedmetadata = () => {
        // 设置到第 0 秒（有些浏览器需微小偏移）
        video.currentTime = 1 // 避免某些设备卡在 0s 无法渲染

        // ✅ 关键3：iOS 17必须用重试机制
        let retryCount = 0
        const tryPlay = () => {
          video
            .play()
            .then(() => {
              // 播放成功，等待onseeked
            })
            .catch(e => {
              if (retryCount < 3 && e.name === 'NotAllowedError') {
                retryCount++
                setTimeout(tryPlay, 100) // 100ms重试
              } else {
                error.value = `播放失败: ${e.message} (iOS 17+ 修复)`
                cleanup()
                isExtracting.value = false
                resolve(null)
              }
            })
        }
        tryPlay()
      }

      video.onseeked = () => {
        // 创建离屏 canvas
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        if (canvas.width === 0 || canvas.height === 0) {
          error.value = '无法获取视频尺寸'
          cleanup()
          isExtracting.value = false
          resolve(null)
          return
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          error.value = 'Canvas 上下文不可用'
          cleanup()
          isExtracting.value = false
          resolve(null)
          return
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

        // 转为 Blob（JPEG，质量 0.8）
        canvas.toBlob(
          blob => {
            cleanup()
            isExtracting.value = false
            if (blob) {
              resolve(blob)
            } else {
              error.value = 'Canvas 转 Blob 失败'
              resolve(null)
            }
          },
          'image/jpeg',
          0.8
        )
      }
    })
  }

  return {
    extractCoverFromVideo,
    isExtracting,
    error
  }
}
