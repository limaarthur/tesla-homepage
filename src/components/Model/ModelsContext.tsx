import React, { type ReactNode } from 'react'

export interface CarModel {
  modelName: string
  overlayNode: ReactNode // Linka o node a própria section
  sectionRef: React.RefObject<HTMLDivElement | null>
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLDivElement | null> // Referencia o wrapper
  registeredModels: CarModel[] // Registra dentro da context api uando o usuário inicia a página
  registerModel: (model: CarModel) => void // Método que registra os carros no array
  unregisterModel: (modelName: string) => void // Desmonta o elemento da tela 
  getModelByName: (modelName: string) => CarModel | null // Recebe o modelo pelo o próprio nome
}

export default React.createContext<ModelsContext>({} as ModelsContext)