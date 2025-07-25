<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Dark, useQuasar } from 'quasar'

import { useWebApp, useWebAppViewport } from 'vue-tg'

import useAppStore from '@/shared/stores/app/store'
import { DefaultHeader } from '@/app/ui/headers'
import { DefaultSideBar } from '@/app/ui/sidebars'
import { DefaultFooter } from '@/app/ui/footers'
import { DefaultLayout } from '@/app/ui/layouts'
import { useI18n } from 'vue-i18n'

const store = useAppStore()
const tgWebApp = useWebApp()

Dark.set(store.settings.darkAuto ? 'auto' : store.settings.darkTheme)

tgWebApp.onEvent('themeChanged', () => {
  console.log('Telegram Theme Changed')
  // todo release change theme from tg event, and set tg colors to quasar css
})


if (typeof useWebAppViewport === 'function' && useQuasar().platform.is.mobile) {
  useWebAppViewport().disableVerticalSwipes()
}

const styles = computed(() => Dark.isActive ? 'text-white bg-dark' : 'text-dark bg-white')
const route = useRoute()
const layout = computed(() => route?.meta?.layout || DefaultLayout)
const i18n = useI18n()

i18n.locale.value = store.settings.language

watch(store.settings, () => {
  if (i18n.locale.value !== store.settings.language) {
    i18n.locale.value = store.settings.language
  }})
</script>

<template>
  <component :is="layout" :class="styles">

    <template v-slot:header>
      <DefaultHeader />
    </template>

    <template v-slot:sidebar>
      <DefaultSideBar/>
    </template>

    <template v-slot:page>
      <q-page-container>
        <router-view />
      </q-page-container>
    </template>

    <template v-slot:footer>
      <DefaultFooter />
    </template>
  </component>
</template>

