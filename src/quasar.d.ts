// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QVueGlobals } from 'quasar'

declare module 'quasar' {
  interface QVueGlobals {
    config: {
      appName: string
    }
  }
}
