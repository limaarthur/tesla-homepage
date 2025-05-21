import { useEffect, useRef, type ReactNode } from 'react'
import { useModel } from '../useModel'
import { Container } from './styles'

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode: ReactNode
}

export function ModelSection({ 
  modelName, 
  overlayNode, 
  children,
  ...props
}: ModelSectionProps) {
  const {registerModel} = useModel(modelName)
  const sectionRef = useRef<HTMLDivElement>(null) // Referência de uma div no html
  useEffect(() => {
    if (sectionRef.current) {
      registerModel({ modelName, overlayNode, sectionRef })
    }
  }, [modelName, overlayNode, sectionRef])


  return (
    <Container ref={sectionRef} {...props}>{children}</Container>
  )
}