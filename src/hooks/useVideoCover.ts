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

      let done = false
      const finish = (blob: Blob | null) => {
        if (done) return
        done = true
        cleanup()
        isExtracting.value = false
        resolve(blob)
      }

      video.onerror = () => {
        error.value = '视频加载失败'
        finish(null)
      }

      const capture = () => {
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        const ctx = canvas.getContext('2d')
        if (!ctx) {
          error.value = 'Canvas 上下文不可用'
          finish(null)
          return
        }

        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

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
          0.9
        )
      }

      // 关键：使用 requestVideoFrameCallback 捕获第一帧（iOS 100% 可用）
      if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
        video.requestVideoFrameCallback(() => {
          capture()
        })
      } else {
        // 老设备 fallback
        video.onloadeddata = () => capture()
      }

      video.src = url
    })
  }

  return {
    extractCoverFromVideo,
    isExtracting,
    error
  }
}