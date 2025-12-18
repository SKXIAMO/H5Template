import type { UploaderFileListItem } from 'vant'
import OSS from 'ali-oss'
import axios from 'axios'
import { closeToast, showLoadingToast } from 'vant'
import { useVideoCover } from './useVideoCover'

type stsTypeData = {
  AccessKeyId: string
  AccessKeySecret: string
  Expiration: string
  SecurityToken: string
  bucket: string
  cdnUrl: string
  host: string
}

/** 上传成功回调类型 */
type UploadSuccessCallback = (url: string) => void

/** 获取对应文件并上传 */
export const useFile = (cb?: UploadSuccessCallback) => {
  const { extractCoverFromVideo } = useVideoCover()

  let fileInput: HTMLInputElement | null = null
  const stsData = ref<stsTypeData>()
  /** 图片链接 */
  const imgUrl = ref('')

  /**
   * 获取 STS 临时凭证
   */
  const getSTS = async () => {
    showLoadingToast({
      message: 'Loading...',
      forbidClick: true
    })
    const res = await axios.get('https://api.wouldbeauty.com/sts/getkey')
    stsData.value = res.data.result
    closeToast()
    return res.data.result
  }

  /** 上传到 OSS */
  const uploadToOSS = async (item: UploaderFileListItem) => {
    // const sts = await getSTS()
    item.status = 'uploading'
    item.message = 'Uploading...'
    const file = item.file
    const sts: stsTypeData = stsData.value
    const [https, endpoint] = sts.host.split(`${sts.bucket}.`)
    const client = new OSS({
      accessKeyId: sts.AccessKeyId,
      accessKeySecret: sts.AccessKeySecret,
      stsToken: sts.SecurityToken,
      bucket: sts.bucket,
      endpoint,
      // 自动刷新 STS Token
      refreshSTSToken: async () => {
        const resp = await getSTS()
        return {
          accessKeyId: resp.AccessKeyId,
          accessKeySecret: resp.AccessKeySecret,
          stsToken: resp.SecurityToken
        }
      },
      refreshSTSTokenInterval: 900000 // 15分钟
    })

    try {
      // 判断是否是视频
      if (file.type.startsWith('video/')) {
        const key = `template_development/${Date.now()}_${file.name}`
        const coverBlob = await extractCoverFromVideo(file)
        console.log(coverBlob)
        // 构造 File 对象用于上传
        const coverFile = new File([coverBlob], 'cover.jpg', {
          type: 'image/jpeg',
          lastModified: Date.now() // 防止缓存
        })
        const videoKey = `template_development/${Date.now()}_${coverFile.name}`
        const result = await client.put(videoKey, coverFile)
        const videoRes = await client.put(key, file)
        item.objectUrl = result.url.replace(/^http:\/\//, https)
        item.status = ''
        return videoRes.url.replace(/^http:\/\//, https)
      } else {
        const key = `template_development/${Date.now()}_${file.name}`
        const result = await client.put(key, file)
        return result.url.replace(/^http:\/\//, https)
      }
    } catch (err) {
      item.status = 'failed'
      item.message = 'Failed...'
      console.error(err)
      throw err
    }
  }

  const createFileInput = (): HTMLInputElement => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.style.display = 'none'
    document.body.appendChild(input)
    return input
  }

  const pickImage = (): Promise<File | null> => {
    return new Promise(resolve => {
      // 确保 input 存在
      if (!fileInput) {
        fileInput = createFileInput()
      }

      // 每次选择前清空 value，确保重复选择同一文件也能触发 change
      fileInput.value = ''

      // 监听 change 事件
      const onChange = (event: Event) => {
        const target = event.target as HTMLInputElement
        const file = target.files?.[0] || null

        // 可选：校验是否为图片
        if (file && !file.type.startsWith('image/')) {
          resolve(null)
          return
        }

        resolve(file)

        // 清理事件监听（避免内存泄漏）
        fileInput?.removeEventListener('change', onChange)
      }

      fileInput.addEventListener('change', onChange)

      // 触发点击
      fileInput.click()
    })
  }

  /** 点击元素触发文件选择 */
  const clickElement = async () => {
    const file = await pickImage()
    if (file) {
      const data: UploaderFileListItem = {
        file,
        status: '',
        message: ''
      }
      uploadToOSS(data).then(url => {
        imgUrl.value = url
        cb?.(url)
      })
    } else {
      console.log('未选择有效图片')
    }
  }

  onMounted(() => {
    getSTS()
  })

  // 页面卸载时清理 input 元素
  onUnmounted(() => {
    if (fileInput) {
      document.body.removeChild(fileInput)
      fileInput = null
    }
  })

  return {
    imgUrl,
    clickElement,
    uploadToOSS
  }
}
