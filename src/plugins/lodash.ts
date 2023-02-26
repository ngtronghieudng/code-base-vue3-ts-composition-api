import type { App } from 'vue'
import _ from 'lodash'

export default {
  install: (app: App) => {
    app.config.globalProperties.$_ = _
  },
}
