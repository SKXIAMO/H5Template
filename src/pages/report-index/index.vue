<script setup lang="ts">
import defaultOptionIcon from '@/assets/public/default-option.png'
import SelectedIcon from '@/assets/public/selected.png'

defineOptions({
  name: 'ReportIndex'
})

const selectList = [
  { label: 'Harassment', value: '0' },
  { label: 'Malicious fraud', value: '1' },
  { label: 'Pornography', value: '2' },
  { label: 'Malicious insults', value: '3' },
  { label: 'False Information', value: '4' }
]

const formData = reactive({
  title: '',
  select: '0'
})
</script>

<template>
  <div px-layout-padding class="report-index_box">
    <ul class="top-select">
      <li v-for="item in selectList" :key="item.value" @click="formData.select = item.value">
        <span>{{ item.label }}</span>

        <p class="selected-icon">
          <van-image :src="formData.select === item.value ? SelectedIcon : defaultOptionIcon" fit="cover" />
          <van-icon v-if="formData.select === item.value" name="success" class="success-icon" />
        </p>
      </li>
    </ul>

    <!-- 输入框 -->
    <div mt-6>
      <div ai-input-title>Supplementary description</div>
      <text-box rows="3" bg="#231e24" />
    </div>

    <!-- 底部按钮 -->
    <div mt-20 flex justify-center>
      <div ai-gradient-btn>Submlt</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.report-index_box {
  padding-top: var(--van-nav-bar-height);
  min-height: 100vh;
  background: var(--ai-report-index-bg-color);
}

.top-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 368px;

  li {
    width: var(--ai-report-index-select-style-width);
    height: var(--ai-report-index-select-style-height);
    border-radius: var(--ai-report-index-select-style-border-radius);
    background: var(--ai-report-index-select-style-bg-color);
    font-size: var(--ai-report-index-select-style-text-size);
    color: var(--ai-report-index-select-style-text-color);
    font-weight: var(--ai-report-index-select-style-text-weight);
    padding: 14px;
    position: relative;
    overflow: hidden;

    .selected-icon {
      position: absolute;
      bottom: -6px;
      right: 0;

      .success-icon {
        position: absolute;
        bottom: 10px;
        right: 4px;
        font-size: 24px;
      }
    }
  }
}
</style>
