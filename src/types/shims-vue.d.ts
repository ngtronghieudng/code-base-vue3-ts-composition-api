declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'pinia' {
  import { defineStore, storeToRefs, createPinia } from 'pinia'
  export interface PiniaCustomStateProperties<_S> {}
  export interface StoreActions<_SS> {}
  export interface StoreGeneric {}
  export interface StoreGetters<_SS> {}
  export interface StoreState<_SS> {}
  export { defineStore, storeToRefs, createPinia }
}
