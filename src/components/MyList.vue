<script setup lang="ts">
  import Head from '@/assets/public/Head.png'
  import { useJump } from '@/hooks/useJump'
  import { useWindow } from '@/hooks/useWindow'

  const { winUserListData } = useWindow()
  const { queryId, appParams } = useJump()

  const listData = ref<UserInfo[]>([])
  const allListUser = ref<UserInfo[]>(winUserListData)

  const props = withDefaults(
    defineProps<{
      /**
       * 列表类型 follow: 关注 | fans: 粉丝 | blackList: 黑名单
       */
      type?: 'follow' | 'fans' | 'blackList'
    }>(),
    {
      type: 'follow'
    }
  )

  const rightIcon = computed(() => {
    switch (props.type) {
      case 'follow':
        return 'minus'
      case 'fans':
        return 'plus'
      case 'blackList':
        return 'cross'
      default:
        return 'minus'
    }
  })

  const itemUser = ref<UserInfo>(null)
  const getData = () => {
    const item = winUserListData.find(v => v.userId === queryId.value)
    const list =
      item[props.type === 'blackList' ? 'blockList' : props.type]

    listData.value = winUserListData.filter(v => list.includes(v.userId))
    itemUser.value = item
  }

  const onClick = (id: string, index: number) => {
    const keyData = {
      follow: 'follow',
      fans: 'fans',
      blackList: 'blockList'
    }[props.type]

    itemUser.value[keyData] = itemUser.value[keyData].filter(
      (v: string) => v !== id
    )
    listData.value.splice(index, 1)
    allListUser.value.forEach(v => {
      if (v.userId === itemUser.value.userId) {
        v[keyData] = itemUser.value[keyData]
      }
    })
    appParams({ key: 'updateUser', value: allListUser.value, state: 1 })
  }

  onMounted(() => {
    getData()
  })
</script>

<template>
  <div p-layout-padding>
    <empty v-if="listData.length === 0" />
    <div
      v-for="(item, index) in listData"
      :key="index"
      px-4
      py-3
      flex
      items-center
      justify-between
      class="list-box rounded-[20px] bg-[#282329cc]"
    >
      <ul>
        <li flex items-center>
          <van-image
            round
            ai-avatar
            :src="item.avator || Head"
            fit="cover"
          />
          <span ml-4 ai-user-name>{{ item.name }}</span>
        </li>
        <li v-if="props.type !== 'blackList'" mt-2>
          <span ai-text-desc>{{ item.about }}</span>
        </li>
      </ul>
      <van-icon
        color="#fff"
        :name="rightIcon"
        @click="onClick(item.userId, index)"
      />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .list-box + .list-box {
    margin-top: 16px;
  }
</style>
