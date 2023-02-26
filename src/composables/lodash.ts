import { getCurrentInstance } from 'vue'

export function useLodash() {
  const instance = getCurrentInstance()
  return instance!.appContext.config.globalProperties.$_
}
