<script setup lang="ts">
  import type { UploaderFileListItem } from 'vant'
  import DeleteIcon from '@/assets/public/delete-icon.png'
  import { useFile } from '@/hooks/useFile'

  const { uploadToOSS } = useFile()

  const fileList = defineModel<UploaderFileListItem[]>('list', {
    type: Array as PropType<UploaderFileListItem[]>,
    required: true,
    default: () => []
  })

  const props = withDefaults(
    defineProps<{
      accept?: 'image' | 'video'
      maxCount?: number
    }>(),
    {
      accept: 'image',
      maxCount: 9
    }
  )

  /** 是否是图片上传 */
  const isImage = computed(() => props.accept === 'image')
  const videoData = reactive({
    url: '',
    objectUrl: '',
    show: false
  })

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
    console.log(item)
    const { url, objectUrl } = item
    videoData.url = url
    videoData.objectUrl = objectUrl
    videoData.show = true
  }
</script>

<template>
  <div class="uploader-box">
    <van-uploader
      v-model="fileList"
      :accept="isImage ? 'image/*' : 'video/*'"
      :preview-full-image="isImage"
      :multiple="props.maxCount > 1"
      :max-count="props.maxCount"
      :upload-icon="isImage ? 'photograph' : 'video'"
      :after-read="afterRead"
    >
      <template v-if="!isImage" #preview-cover="item">
        <div class="up-video-box" @click.stop="onCheckVideo(item)">
          <!-- <video
            :src="item.url"
            :poster="item.objectUrl"
            @click.stop="onCheckVideo(item)"
          /> -->
          <video
            :src="item.url"
            :poster="item.objectUrl"
            muted
            playsinline
            webkit-playsinline
            x5-playsinline
            preload="metadata"
            disablePictureInPicture
            controlslist="nodownload nofullscreen noremoteplayback"
            oncontextmenu="return false;"
            style="pointer-events: none; user-select: none"
          />
          <van-icon name="play-circle" class="play-box" />
        </div>
      </template>
      <template #preview-delete>
        <van-image :src="DeleteIcon" />
      </template>
    </van-uploader>

    <!-- 查看视频 -->
    <van-overlay
      v-model:show="videoData.show"
      @click="videoData.show = false"
    >
      <div flex h-full items-center justify-center>
        <div h-36 w-full @click.stop>
          <!--         :src="videoData.url"
            :poster="videoData.objectUrl" -->
          <video
            v-if="videoData.show"
            :src="videoData.url"
            :poster="videoData.objectUrl"
            controls
            webkit-playsinline
            playsinline
            x5-playsinline
            h-full
            w-full
          />
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
    :deep(.van-uploader__preview-delete) {
      top: -6px;
      right: -4px;
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
