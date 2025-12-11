<script setup lang="ts">
  import axios from 'axios'
  import CryptoJS from 'crypto-js'

  defineOptions({
    name: 'ChatDetails'
  })

  const listData = ref<MessageInfo[]>([
    {
      msgId: 'm1',
      chatId: 'c1',
      userId: 'u99',
      sendContent: '...',
      sendPicUrl: '',
      sendTime: '2021-09-01 10:00:00',
      position: 'left'
    },
    {
      msgId: 'm2',
      chatId: 'c1',
      userId: 'u22',
      sendContent: '...',
      sendPicUrl: '',
      sendTime: '2021-09-01 10:00:00',
      position: 'right'
    }
  ])

  const onSend = (v: string) => {
    // 密钥（前后端必须一致，实际项目中不要硬编码！）
    const SECRET_KEY = CryptoJS.enc.Utf8.parse('ytk903hexnvylkqx')
    // 可选：IV（初始化向量），CBC 模式需要
    const IV = CryptoJS.enc.Utf8.parse('98hpyh4k5pmsg44u')

    // 要发送的原始数据
    const originalData = {
      system: '1',
      dashScopeMessageDTOList: [{ role: 'user', content: v }]
    }

    const dataStr = JSON.stringify(originalData)

    // AES 加密（CBC 模式，PKCS7 填充）
    const encrypted = CryptoJS.AES.encrypt(dataStr, SECRET_KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })

    // 将密文转为十六进制（Hex）字符串
    const hexCiphertext = encrypted.ciphertext.toString(CryptoJS.enc.Hex)

    axios
      .post(
        'https://opi.3o2g4cpj.link/opi/v1/sTwAbQydifKs',
        { data: hexCiphertext },
        {
          headers: {
            appVersion: '1.0.0',
            appId: '69165057',
            deviceNo: 'ry1ndgQYow5TKLcWYG1mUiCARFmzSHJW69165057'
          }
        }
      )
      .then(res => {
        console.log(res.data)
      })
  }
</script>

<template>
  <div text-red class="chat-details_box">
    <div class="top-box">
      <ul p-layout-padding>
        <li>
          <span>I'm feeling great today.</span>
          <van-icon name="chat-o" />
        </li>
        <li>
          <span>Do you like reading?</span>
          <van-icon name="chat-o" />
        </li>
        <li>
          <span>Can you comfort me?</span>
          <van-icon name="chat-o" />
        </li>
      </ul>
    </div>

    <chat-list v-model:list="listData" @send="onSend" />
  </div>
</template>

<style lang="less" scoped>
  .chat-details_box {
    min-height: 100vh;
    background: var(--ai-chat-details-bg-color);
  }

  .top-box {
    height: 282px;
    background: url('@/assets/public/top-chat.png');
    background-size: cover;
    display: flex;
    align-items: flex-end;

    ul {
      li + li {
        margin-top: 16px;
      }

      li {
        border-radius: var(--ai-chat-details-top-border-radius);
        padding: 0 12px;
        width: var(--ai-chat-details-top-width);
        height: var(--ai-chat-details-top-height);
        line-height: var(--ai-chat-details-top-height);
        font-size: var(--ai-chat-details-top-text-font-size);
        font-weight: var(--ai-chat-details-top-text-font-weight);
        background: var(--ai-chat-details-top-text-bg-color);
        letter-spacing: 0;
        color: var(--ai-chat-details-top-text-color);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
</style>
