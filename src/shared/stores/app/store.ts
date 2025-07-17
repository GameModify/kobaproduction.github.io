import { defineStore } from 'pinia'
import type { APISettings, AppSettings, AppStates } from './models'
import { Dark } from 'quasar'

const useAppStore = defineStore('appStore', {
  state: () => ({
    states: <AppStates>{
      sidebarOpened: false
    },
    settings: <AppSettings>{
      darkAuto: false,
      darkTheme: false,
      vibration: false,
      language: 'en-US',
      languageSelected: false,
    },
    api: <APISettings> {
      token: ""
    }
  }),
  actions: {
    toggleSidebar() {
      this.states.sidebarOpened = !this.states.sidebarOpened
    },
    setAppSettings(value: AppSettings) {
      this.settings = value
    },
    selectLanguage(lang: string) {
      this.settings.language = lang
      this.settings.languageSelected = true
    },
    setDarkThemeState(value: boolean) {
      Dark.set(value)
      this.settings.darkAuto = false
      this.settings.darkTheme = value
    },

    setDarkThemeAuto(value: boolean) {
      Dark.set('auto')
      this.settings.darkAuto = value
      this.settings.darkTheme = Dark.isActive
    },
  },
  persist: {
    debug: true,
    storage: localStorage
  }
})

export default useAppStore
