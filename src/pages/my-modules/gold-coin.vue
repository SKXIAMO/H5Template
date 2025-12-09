<script setup lang=ts>
import MasonryIcon from '@/assets/public/masonry-icon.png'
import MyIcon from '@/assets/public/my-icon.png'
import { useJump } from '@/hooks/useJump'
import { useWindow } from '@/hooks/useWindow'
import { useUserStore } from '@/stores'

defineOptions({
  name: 'GoldCoin'
})

const { userInfo } = useUserStore()
const { winCoinData } = useWindow()
const { appParams } = useJump()

const formData = reactive({
  radio: winCoinData[0]?.key
})

const onRecharge = () => {
  appParams({ key: 'Recharge', value: formData.radio, state: 1 })
}
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
          <span text-6 text-white font-medium>
            {{ userInfo.coins }}
          </span>
        </li>
      </ul>

      <!-- 选项数据 -->
      <ul class="bottom-selsect">
        <li v-for="item in winCoinData" :key="item.key" :class="{ 'on-active': formData.radio === item.key }"
          @click="formData.radio = item.key"
>
          <p>
            <van-image h-4 w-5 :src="MyIcon" fit="cover" />
            <span ml-1 ai-user-name>{{ item.cions }}</span>
          </p>
          <span ai-text-desc>{{ item.meney }}$</span>
        </li>
      </ul>

      <!-- 按钮 -->
      <div mt-6 flex justify-center>
        <p ai-gradient-btn @click="onRecharge">Recharge</p>
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
