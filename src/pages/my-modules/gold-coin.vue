<script setup lang=ts>
import MasonryIcon from '@/assets/public/masonry-icon.png'
import MyIcon from '@/assets/public/my-icon.png'

defineOptions({
  name: 'GoldCoin'
})

const bottomList = [
  { name: '400', label: '4.99$', value: '0' },
  { name: '400', label: '4.99$', value: '1' },
  { name: '400', label: '4.99$', value: '2' },
  { name: '400', label: '4.99$', value: '3' }
]

const formData = reactive({
  radio: '0'
})
</script>

<template>
  <div class="gold-coin_box">
    <div p-layout-padding>
      <ul class="top-box">
        <li>
          <van-image h-20 w-20 :src="MasonryIcon" fit="cover" />
        </li>
        <li ml-8 flex flex-col>
          <span ai-user-name>My diamonds</span>
          <span text-6 text-white font-medium>990</span>
        </li>
      </ul>

      <!-- 选项数据 -->
      <ul class="bottom-selsect">
        <li v-for="item in bottomList" :key="item.value" :class="{ 'on-active': formData.radio === item.value }"
          @click="formData.radio = item.value"
>
          <p>
            <van-image h-4 w-5 :src="MyIcon" fit="cover" />
            <span ml-1 ai-user-name>{{ item.name }}</span>
          </p>
          <span ai-text-desc>{{ item.label }}</span>
        </li>
      </ul>

      <!-- 按钮 -->
      <div mt-6 flex justify-center>
        <p ai-gradient-btn>Recharge</p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.gold-coin_box {
  padding-top: var(--van-nav-bar-height);
  min-height: 100vh;
  background: var(--ai-coin-bg-color);
}

.top-box {
  border-radius: 20px;
  background: url(https://img.js.design/assets/img/691aed6ab5e8b987e5484ce3.png#e628c21f3eda4f689fb2344148e7f297);
  border: 4px solid rgba(255, 255, 255, 0.09);
  display: flex;
  align-items: center;
  padding: 20px;
  padding-bottom: 10px;
}

.bottom-selsect {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 每行 3 列，每列等宽 */
  gap: 10px;
  /* 可选：设置子项之间的间距 */

  li {
    width: var(--ai-coin-select-style-width);
    height: var(--ai-coin-select-style-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: var(--ai-coin-select-style-border-radius);
    background: var(--ai-coin-select-style-bg-color);

    p {
      margin-bottom: 8px;
      display: flex;
      align-items: baseline;
    }
  }

  .on-active {
    background: var(--ai-coin-select-style-selected-color);
  }
}
</style>
