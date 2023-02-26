import { defineStore } from 'pinia'
import { toRaw } from 'vue'
import { useState, type StateProps } from './state'

export interface ActionsProps {
  mapForm: (formId: number, workflowId: number) => void
  saveWorkflow: (data: any[]) => void
  getWorkflowById: (documentId: number) => void
  updateWorkflow: (params: any, documentId: number) => void
}

export const useActions = defineStore('manageWorkflowActions', (): ActionsProps => {
  const state: StateProps = useState()

  const mapForm = (formId: number, workflowId: number) => {
    console.log(state, formId, workflowId)
  }

  const getWorkflowById = async (documentId: number) => {
    console.log(state, documentId)
  }

  const saveWorkflow = (params: any[]) => {
    const documentId = Date.now()

    const data = {
      id: `wf-${documentId}`,
      name: `Workflow ${documentId}`,
      data: params,
      documentId,
    }

    console.log(state, data)
  }

  const updateWorkflow = (params: any, documentId: number) => {
    const data = {
      data: toRaw(params),
    }

    console.log(state, data, documentId)
  }

  return {
    mapForm,
    saveWorkflow,
    getWorkflowById,
    updateWorkflow,
  }
})
