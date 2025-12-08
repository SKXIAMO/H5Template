<script setup lang="ts">
import { useAppImgStyle } from '@/hooks/useAppImgStyle'

const { inputSendIcon } = useAppImgStyle()
console.log('输入框')

const value = ref('')

const emit = defineEmits<{
  send: [_: string]
}>()
const onSend = () => {
  // window.flutter_inappwebview.callHandler('updateUser', {
  //   userId: '当前登录人id',
  //   commentId: '添加评论id',
  //   dynamicId: '当前动态id',
  //   content: '输入框内容'
  // })
  emit('send', value.value)
  value.value = ''
}
</script>

<template>
  <div px-layout-padding class="input-box">
    <div class="input--width">
      <van-field v-model="value" placeholder="请输入用户名">
        <template #button>
          <div flex items-center>
            <van-image :src="inputSendIcon" @click="onSend" />
          </div>
        </template>
      </van-field>
    </div>
  </div>
</template>

<style lang="less" scoped>
.input-box {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .input--width {
    width: var(--ai-field-input-width);
  }

  .van-field {
    border-radius: var(--ai-field-input-border-radius);
    height: var(--ai-field-input-height);
    font-size: var(--ai-field-input-font-size);
    font-weight: var(--ai-field-input-font-weight);
    background: var(--ai-field-input-bg-color);

    :deep(.van-field__body) {
      height: 100%;

      input {
        color: var(--ai-field-input-text-color);

        &::placeholder {
          color: var(--ai-field-placeholder-text-color);
          font-size: var(--ai-field-input-font-size);
          font-weight: var(--ai-field-input-font-weight);
        }
      }
    }
  }

}
</style>
