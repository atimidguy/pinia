export {
  setActivePinia,
  createPinia,
  Pinia,
  PiniaStorePlugin,
  PiniaPluginContext,
} from './rootStore'
export { defineStore } from './store'
export {
  StateTree,
  Store,
  StoreWithGetters,
  StoreWithActions,
  StoreWithState,
  PiniaCustomProperties,
} from './types'

// TODO: remove in beta
export { createStore } from './deprecated'
