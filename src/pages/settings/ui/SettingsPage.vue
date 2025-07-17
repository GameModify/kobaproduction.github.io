<script setup lang="ts">

import {AppSettingsWidget, BackendSettingsWidget} from '@/widgets/domain-settings'

</script>

<template>
  <q-page class="q-pa-sm">
    <h4 class="text-center">Page: {{ $t('pagesTabs.settings') }}</h4>
    <AppSettingsWidget class="q-mb-md"/>
    <BackendSettingsWidget/>
  </q-page>
</template>
