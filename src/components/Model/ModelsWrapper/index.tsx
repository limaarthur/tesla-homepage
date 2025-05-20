import { useCallback, useRef, useState, type ReactNode } from 'react'
import type { CarModel } from '../ModelsContext'
import ModelsContext from '../ModelsContext'

import { Container } from './styles'

interface ModelsWrapperProps {
  children: ReactNode
}

export function ModelsWrapper({ children }: ModelsWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([])
  const registerModel = useCallback((model: CarModel) => { // Registra um modelo no estado
    setRegisteredModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => { // Desmonta o elemento da tela 
    setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registeredModels.find(item => item.modelName === modelName) || null
  }, [])

  return (
    <ModelsContext.Provider 
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName
      }}
    >
      <Container ref={wrapperRef}>{children}</Container>
    </ModelsContext.Provider>
  )
}