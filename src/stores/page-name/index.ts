import { extractStore } from '@/utils/extractStore'
import { defineStore } from 'pinia'
import { useActions, type ActionsProps } from './actions'
import { useGetters, type GettersProps } from './getters'
import { useState, type StateProps } from './state'

type ManageWorkflowStoreProps = StateProps & ActionsProps & GettersProps

export const useManageWorkflow: () => ManageWorkflowStoreProps = defineStore('manageWorkflow', () => {
  return {
    ...extractStore(useState()),
    ...extractStore(useGetters()),
    ...extractStore(useActions()),
  }
})
