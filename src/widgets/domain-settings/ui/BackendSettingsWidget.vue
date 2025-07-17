<script setup lang="ts">
import useAppStore from '@/shared/stores/app/store'

const store = useAppStore()


const onUpdateApiToken = (value: string | number | null) => {
  console.log(value)
  if (!value) return
  store.api.token = value.toString()
}

</script>

<template>
  <q-card class="q-pa-sm flat bordered">
    <q-card-section>
      <div class="text-h6">{{ $t('settings.backend.title') }}</div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-item tag="label" clickable>
        <q-item-section avatar>
          <q-icon name="key" />
        </q-item-section>

        <q-item-section>
          <q-item-label> {{ $t('settings.backend.apiToken') }}</q-item-label>
          <q-item-label caption> {{ $t('settings.backend.apiTokenCaption') }}</q-item-label>
        </q-item-section>

        <q-item-section side>

          <q-input type="text" outlined
                   :model-value="store.api.token"
                   @update:model-value="onUpdateApiToken"
          />
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>
