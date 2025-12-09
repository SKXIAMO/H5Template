<script setup lang="ts">
import { detailId } from '@/hooks/useDetail'
import { useJump } from '@/hooks/useJump'
import { useWindow } from '@/hooks/useWindow'
import { useUserStore } from '@/stores'

const router = useRouter()
const show = defineModel<boolean>('show', {
  type: Boolean,
  required: true,
  default: false
})

const { winUserListData } = useWindow()
const { userInfo } = useUserStore()
const { appParams } = useJump()

const allUserList = ref<UserInfo[]>(winUserListData)

const onReport = () => {
  router.push('/report-index').then(() => {
    show.value = false
  })
}

const onShield = () => {
  const userInfoId = detailId.value
  userInfo.blockList.push(userInfoId)
  userInfo.blockList = Array.from(new Set(userInfo.blockList))
  allUserList.value.forEach(v => {
    if (v.userId === userInfo.userId) {
      v.blockList = userInfo.blockList
    }
  })

  appParams({ key: 'updateUser', value: allUserList.value, state: 0 })
  show.value = false
}
</script>

<template>
  <van-popup v-model:show="show" round position="bottom">
    <ul class="report-box">
      <li>
        <p ai-default-btn @click="onReport">Report</p>
      </li>
      <li>
        <p ai-default-btn @click="onShield">Shield</p>
      </li>
      <li>
        <p ai-default-btn ai-selected-btn @click="show = false">Cancel</p>
      </li>
    </ul>
  </van-popup>
</template>

<style lang="less" scoped>
.report-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 30px;

  li+li {
    margin-top: 16px;
  }

  li {
    p {
      width: var(--ai-report-btn-select-style-width);
      height: var(--ai-report-btn-select-style-height);
      line-height: var(--ai-report-btn-select-style-height);
    }

    &:last-child {
      margin-top: 32px;

      p {
        width: var(--ai-report-btn-cancel-style-width);
        height: var(--ai-report-btn-cancel-style-height);
        line-height: var(--ai-report-btn-cancel-style-height);
      }
    }
  }
}
</style>
