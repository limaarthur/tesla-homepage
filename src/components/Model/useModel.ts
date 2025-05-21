import { useCallback, useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(ModelsContext)

  useEffect(() => {
    return () => unregisterModel(modelName) // Retorna a função de desregistro
  }, [modelName, unregisterModel])

  const getModel = useCallback(() => getModelByName(modelName), [ // Rettorna o model
    getModelByName,
    modelName
  ])

  return { registerModel, getModel }
}