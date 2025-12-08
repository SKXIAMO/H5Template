<script setup lang="ts">
import type { UploaderFileListItem } from 'vant'
import OSS from 'ali-oss'
import axios from 'axios'

type stsTypeData = {
  AccessKeyId: string
  AccessKeySecret: string
  Expiration: string
  SecurityToken: string
  bucket: string
  cdnUrl: string
  host: string
}

const fileList = defineModel<UploaderFileListItem[]>('list', {
  type: Array as PropType<UploaderFileListItem[]>,
  required: true,
  default: () => []
})

const props = withDefaults(defineProps<{
  accept?: 'image' | 'video'
}>(), {
  accept: 'image'
})

/** 是否是图片上传 */
const isImage = computed(() => props.accept === 'image')
const stsData = ref<stsTypeData>()
const videoData = reactive({
  url: '',
  show: false
})

/**
 * 获取 STS 临时凭证
 */
const getSTS = async () => {
  const res = await axios.get('https://api.wouldbeauty.com/sts/getkey')
  stsData.value = res.data.result
  return res.data.result
}

/** 上传到 OSS */
const uploadToOSS = async (item: UploaderFileListItem) => {
  // const sts = await getSTS()
  item.status = 'uploading'
  item.message = 'Uploading...'
  const file = item.file
  const sts: stsTypeData = stsData.value
  const [, endpoint] = sts.host.split(`${sts.bucket}.`)
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
  const key = `template_development/${Date.now()}_${file.name}`
  try {
    const result = await client.put(key, file)
    item.status = ''
    return result.url
  } catch (err) {
    item.status = 'failed'
    item.message = 'Failed...'
    console.error('上传失败:', err)
    throw err
  }
}

const afterRead = async (fileOrFiles: UploaderFileListItem[]) => {
  // 判断是单个还是多个文件
  const files = Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles]

  const uploadPromises = files.map((file, index) =>
    uploadToOSS(file)
      .then(url => {
        fileList.value[fileList.value.length - files.length + index] = {
          ...file,
          url,
          status: '',
          message: ''
        }
      })
      .catch(() => {
        fileList.value[fileList.value.length - files.length + index] = {
          ...file,
          status: 'failed',
          message: '上传失败'
        }
      })
  )
  await Promise.all(uploadPromises)
  // console.log(fileList.value)
}

const onCheckVideo = (item: UploaderFileListItem) => {
  videoData.url = item.objectUrl
  videoData.show = true
}

onMounted(() => {
  getSTS()
})
</script>

<template>
  <div class="uploader-box">
    <van-uploader v-model="fileList" multiple :accept="isImage ? 'image/*' : 'video/*'" :preview-full-image="isImage"
      :max-count="9" :upload-icon="isImage ? 'photograph' : 'video'" :after-read="afterRead"
>
      <template v-if="!isImage" #preview-cover="item">
        <div class="up-video-box" @click="onCheckVideo(item)">
          <video :src="item.objectUrl" />
          <van-icon name="play-circle" class="play-box" />
        </div>
      </template>
    </van-uploader>

    <!-- 查看视频 -->
    <van-overlay v-model:show="videoData.show" @click="videoData.show = false">
      <div flex h-full items-center justify-center>
        <div h-36 w-full @click.stop>
          <video v-if="videoData.show" :src="videoData.url" controls h-full w-full />
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<style lang="less" scoped>
.uploader-box {
  .up-video-box {
    width: 103px;
    height: 103px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;

    video {
      width: 100%;
      height: 100%;
      background: #231e24;
    }

    .play-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #231e24;
      font-size: 36px;
    }
  }

  :deep(.van-uploader__preview) {
    width: 103px;
    height: 103px;
    border-radius: 20px;

    .van-image {
      width: 100%;
      height: 100%;
      border-radius: 20px;
    }
  }

  :deep(.van-uploader__mask) {
    border-radius: 20px;
  }

  :deep(.van-uploader__file) {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  :deep(.van-uploader__upload) {
    width: 103px;
    height: 103px;
    background: #231e24;
    border-radius: 20px;
  }
}
</style>
