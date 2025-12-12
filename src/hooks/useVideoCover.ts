export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<Blob | null>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}

/**
 * 从视频文件中提取第一帧作为封面图（兼容 iOS，不黑屏）
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
      video.muted = true // iOS 必须静音才能自动播放
      video.playsInline = true
      video.setAttribute('webkit-playsinline', 'true')

      const url = URL.createObjectURL(file)

      const cleanup = () => {
        URL.revokeObjectURL(url)
        video.remove()
      }

      video.onerror = () => {
        error.value = '视频加载失败'
        cleanup()
        isExtracting.value = false
        resolve(null)
      }

      // 元数据加载完毕（知道宽高）
      video.onloadeddata = async () => {
        try {
          // ⭐ iOS 必须先播放一帧，否则黑屏
          await video.play()

          // 播放一帧就暂停
          video.pause()

          // ⭐ iOS 必须延迟等待渲染
          setTimeout(() => {
            const canvas = document.createElement('canvas')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight

            if (!canvas.width || !canvas.height) {
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

            canvas.toBlob(
              blob => {
                cleanup()
                isExtracting.value = false
                if (blob) resolve(blob)
                else resolve(null)
              },
              'image/jpeg',
              0.8
            )
          }, 150) // iOS 渲染延迟关键点
        } catch (e) {
          error.value = '视频提取失败'
          cleanup()
          isExtracting.value = false
          resolve(null)
        }
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