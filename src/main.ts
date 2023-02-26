import type { ConstantsProps } from '@/constants'
import type { LoDashStatic } from 'lodash'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/layouts/default.vue'
import router from '@/routers'
import commonComponents from '@/plugins/common-components'
import constants from '@/plugins/constants'
import ElementPlus from 'element-plus'
import _ from '@/plugins/lodash'

import 'element-plus/dist/index.css'
import '@/assets/styles/common/main.scss'

const app = createApp(App)

app.use(commonComponents)
app.use(constants)
app.use(router)
app.use(ElementPlus)
app.use(createPinia())
app.use(_)

app.mount('#app')

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $constants: ConstantsProps
    $_: LoDashStatic
  }
}
