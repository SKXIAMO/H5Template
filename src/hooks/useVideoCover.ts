export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<Blob | null>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}

/**
 * 从视频文件中提取第一帧作为封面图（Blob）
 */
export function useVideoCover(): UseVideoCoverReturn {
  const isExtracting = ref(false)
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

      const video = document.createElement('video')
      video.preload = 'auto'
      video.muted = true
      video.playsInline = true

      const url = URL.createObjectURL(file)

      const cleanup = () => {
        URL.revokeObjectURL(url)
        video.remove()
      }

      let isDone = false
      const finish = (blob: Blob | null) => {
        if (isDone) return
        isDone = true
        isExtracting.value = false
        cleanup()
        resolve(blob)
      }

      video.onerror = () => {
        error.value = '视频加载失败'
        finish(null)
      }

      // 关键：iOS 上必须等待 loadeddata，代表第一帧已经可绘制
      video.onloadeddata = () => {
        try {
          video.currentTime = 0.2
        } catch {
          // 即使失败也继续尝试绘制
          draw()
        }
      }

      // 尝试绘制
      const draw = () => {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        if (!canvas.width || !canvas.height) {
          error.value = '无法获取视频尺寸'
          finish(null)
          return
        }

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          error.value = 'Canvas 上下文不可用'
          finish(null)
          return
        }

        try {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        } catch {
          error.value = '绘制失败（iOS 解码问题）'
          finish(null)
          return
        }

        canvas.toBlob(
          blob => {
            if (!blob) {
              error.value = 'Canvas 转 Blob 失败'
              finish(null)
            } else {
              finish(blob)
            }
          },
          'image/jpeg',
          0.85
        )
      }

      // iOS 有时不会触发 seeked，所以准备一个兜底计时器
      video.onseeked = () => draw()

      // 200ms 兜底（某些 iOS 不会触发 seeked）
      setTimeout(() => {
        if (!isDone) draw()
      }, 300)

      video.src = url
    })
  }

  return {
    extractCoverFromVideo,
    isExtracting,
    error
  }
}