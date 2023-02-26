import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useState, type StateProps } from './state'

export interface GettersProps {
  getWorkflowById: any
}

export const useGetters = defineStore('manageWorkflowGetters', (): GettersProps => {
  const state: StateProps = useState()

  const getWorkflowById = computed(() => {
    return (id: number) => {
      return state.workflows.find((element) => {
        return element.id === id
      })
    }
  })

  return {
    getWorkflowById,
  }
})
