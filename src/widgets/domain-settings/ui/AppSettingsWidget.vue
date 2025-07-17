<script setup lang="ts">
import useAppStore from '@/app/stores/store'

const store = useAppStore()
</script>

<template>
  <q-card class="q-pa-sm flat bordered">
    <q-card-section>
      <div class="text-h6">{{ $t('settings.app.title') }}</div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-item tag="label" clickable>
        <q-item-section avatar>
          <q-icon name="brightness_auto" />
        </q-item-section>

        <q-item-section>
          <q-item-label> {{ $t('settings.app.darkModeAuto') }}</q-item-label>
          <q-item-label caption> {{ $t('settings.app.darkModeAutoCaption') }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle
            :model-value="store.settings.darkAuto"
            @update:model-value="store.setDarkThemeAuto(!store.settings.darkAuto)"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" clickable>
        <q-item-section avatar>
          <q-icon :name="store.settings.darkTheme ? 'dark_mode' : 'light_mode'" />
        </q-item-section>

        <q-item-section>
          <q-item-label> {{ $t('settings.app.darkMode') }}</q-item-label>
          <q-item-label caption> {{ $t('settings.app.darkModeCaption') }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-toggle
            :model-value="store.settings.darkTheme"
            @update:model-value="store.setDarkThemeState(!store.settings.darkTheme)"
            :disable="store.settings.darkAuto"
          />
        </q-item-section>
      </q-item>

      <q-item tag="label" clickable>
        <q-item-section avatar>
          <q-icon name="language" />
        </q-item-section>

        <q-item-section>
          <q-item-label> {{ $t('settings.app.language') }}</q-item-label>
          <q-item-label caption> {{ $t('settings.app.languageCaption') }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-btn-toggle
            v-model="store.settings.language"
            @update:model-value="store.selectLanguage"
            class="my-custom-toggle"
            no-caps
            rounded
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
              { label: 'English', value: 'en-US' },
              { label: 'Russian', value: 'ru-RU' },
            ]"
          />
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>
