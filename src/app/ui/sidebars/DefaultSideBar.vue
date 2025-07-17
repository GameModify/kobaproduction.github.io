<script lang="ts" setup>
import { useQuasar } from 'quasar'

import useAppStore from '@/shared/stores/app/store'
// import SettingsComponentView from 'components/settings/SettingsComponent.vue'
// import CommunityLinksView from "components/CommunityLinksView.vue";
import NavigationWidget from '@/widgets/navigation'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const store = useAppStore()
const quasar = useQuasar()
const { t } = useI18n()

const menuList = computed(() => [
  { icon: 'home', label: t('pagesTabs.index'), separator: false, to: '/' },
  { icon: 'settings', label: t('pagesTabs.settings'), separator: false, to: '/settings' }
])
</script>

<template>
  <q-drawer
    v-model="store.states.sidebarOpened"
    side="left"
    :behavior="quasar.platform.is.mobile ? 'mobile' : 'desktop'"
    bordered
    overlay
  >
    <q-list>
      <template v-for="(menuItem, index) in menuList" :key="index">
        <q-item
          clickable
          v-ripple
          :to="menuItem.to"
          exact
          active-class="q-item--active"
          class="q-my-xs q-mx-sm"
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>

        <q-separator
          v-if="menuItem.separator"
          class="q-my-sm"
        />
      </template>
      <NavigationWidget/>
      <!--      <SettingsComponentView/>-->
      <!--      <CommunityLinksView/>-->
    </q-list>
  </q-drawer>
</template>
