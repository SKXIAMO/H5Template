<script setup lang="ts">
import type { PickerColumn } from 'vant'
import { languageColumns, locale } from '@/utils/i18n'

const { t } = useI18n()

const menuItems = computed(() => [
  // { title: t('navbar.Mock'), route: 'mock' },
  // { title: t('navbar.UnoCSS'), route: 'unocss' },
  // { title: t('navbar.Counter'), route: 'counter' },
  // { title: t('navbar.KeepAlive'), route: 'keepalive' },
  // { title: t('navbar.ScrollCache'), route: 'scroll-cache' },
  // { title: t('navbar.404'), route: 'unknown' },
  { title: t('navbar.ArticleDetail'), route: 'article-detail' },
  { title: t('navbar.SendDynamic'), route: 'send-dynamic' },
  { title: t('navbar.ChatView'), route: 'chat-view' },
  { title: t('navbar.ChatDetails'), route: 'chat-details' },
  { title: t('navbar.ShortVideo'), route: 'short-video' },
  { title: t('navbar.PublishVideo'), route: 'publish-video' },
  { title: t('navbar.OtherHome'), route: 'other-home' },
  { title: t('navbar.PrivateChat'), route: 'private-chat' },
  { title: t('navbar.SetupPage'), route: 'setup-page' },
  { title: t('navbar.Follow'), route: 'follow' },
  { title: t('navbar.Fans'), route: 'fans' },
  { title: t('navbar.BlackList'), route: 'black-list' },
  { title: t('navbar.EditInfo'), route: 'edit-info' },
  { title: t('navbar.GoldCoin'), route: 'gold-coin' }
])

const showLanguagePicker = ref(false)
const languageValues = ref<Array<string>>([locale.value])
const language = computed(
  () => languageColumns.find(l => l.value === locale.value).text
)

function onLanguageConfirm(event: { selectedOptions: PickerColumn }) {
  locale.value = event.selectedOptions[0].value as string
  showLanguagePicker.value = false
}
</script>

<template>
  <van-cell-group :title="$t('home.settings')" :border="false" :inset="true">
    <van-cell is-link :title="$t('home.language')" :value="language" @click="showLanguagePicker = true" />
  </van-cell-group>

  <van-cell-group :title="$t('home.examples')" :border="false" :inset="true">
    <template v-for="item in menuItems" :key="item.route">
      <van-cell :title="item.title" :to="item.route" is-link />
    </template>
  </van-cell-group>

  <van-popup v-model:show="showLanguagePicker" position="bottom">
    <van-picker
v-model="languageValues" :columns="languageColumns" @confirm="onLanguageConfirm"
      @cancel="showLanguagePicker = false"
/>
  </van-popup>
</template>
