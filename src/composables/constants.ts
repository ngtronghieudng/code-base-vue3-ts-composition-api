import { getCurrentInstance } from 'vue'

export function useConstants() {
  const instance = getCurrentInstance()
  return instance!.appContext.config.globalProperties.$constants
}
