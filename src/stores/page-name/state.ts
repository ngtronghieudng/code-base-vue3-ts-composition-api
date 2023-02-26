import { defineStore } from 'pinia'

export interface StateProps {
  workflows: any[]
}

export const useState = defineStore({
  id: 'manageWorkflowState',

  state: (): StateProps => {
    return {
      workflows: [],
    }
  },
})
