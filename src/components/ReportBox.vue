<script setup lang="ts">
const router = useRouter()
const show = defineModel<boolean>('show', {
  type: Boolean,
  required: true,
  default: false
})

const onReport = () => {
  router.push('/report-index').then(() => {
    show.value = false
  })
}
</script>

<template>
  <van-popup v-model:show="show" round position="bottom">
    <ul class="report-box">
      <li>
        <p ai-default-btn @click="onReport">Report</p>
      </li>
      <li>
        <p ai-default-btn>Shield</p>
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
