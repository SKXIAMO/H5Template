export interface UseVideoCoverReturn {
  extractCoverFromVideo: (file: File) => Promise<Blob | null>
  isExtracting: Ref<boolean>
  error: Ref<string | null>
}

/**
 * 从视频提取封面（iOS 可用，不会黑屏，不会卡死）
 */
export function useVideoCover(): UseVideoCoverReturn {
  const isExtracting = ref(false)
  const error = ref<string | null>(null)

  const extractCoverFromVideo = (file: File): Promise<Blob | null> => {
    return new Promise(resolve => {
      if (!file || !file.type.startsWith('video/')) {
        error.value = '文件不是视频'
        resolve(null)
        return
      }

      isExtracting.value = true
      error.value = null

      const video = document.createElement('video')
      video.preload = 'auto'
      video.muted = true
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

      // ⭐ iOS 必须使用 onloadeddata 才能保证有渲染的帧
      video.onloadeddata = async () => {
        try {
          // ⭐ iOS 必须播放一帧才能渲染
          await video.play()

          video.pause()

          // ⭐ 让 iOS 渲染那一帧，否则 canvas 是黑的
          requestAnimationFrame(() => {
            setTimeout(() => {
              const canvas = document.createElement('canvas')
              canvas.width = video.videoWidth
              canvas.height = video.videoHeight

              const ctx = canvas.getContext('2d')
              if (!ctx) {
                error.value = 'Canvas 不可用'
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
                  resolve(blob)
                },
                'image/jpeg',
                0.85
              )
            }, 80) // ⭐ iOS 渲染延时（关键）
          })
        } catch (e) {
          error.value = '提取失败'
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