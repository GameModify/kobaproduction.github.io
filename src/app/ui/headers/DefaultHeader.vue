<script setup lang="ts">

import useAppStore from '@/shared/stores/app/store'
import { RouterButton } from '@/shared/ui/buttons/router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'

const store = useAppStore()
const route = useRoute()
const { t } = useI18n()
const $q = useQuasar()

const appName = $q.config.appName
const currentPage = computed(() => t(`pagesTabs.${route.name?.toString()}`))

</script>

<template>
  <q-header reveal elevated class="bg-primary text-white">
    <q-toolbar>

      <q-btn dense flat round icon="menu" @click="store.toggleSidebar()" />

      <q-toolbar-title>
        <q-avatar>
          <img src="/logo.webp" alt="Koba Production Logo">
        </q-avatar>
        {{ appName }} /
        {{ currentPage }}
      </q-toolbar-title>
      <RouterButton router-record-name="index" dense flat round icon="home" />
    </q-toolbar>
  </q-header>
</template>
