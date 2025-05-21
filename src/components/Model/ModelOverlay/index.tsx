import type { ReactNode } from 'react'
import { useWrapperScroll } from '../useWrapperScroll'
import { Container } from './styles'

interface ModelOverlayProps {
  children: ReactNode;
}

export function ModelOverlay({children}: ModelOverlayProps) {
  const { scrollY } = useWrapperScroll()
  return (
    <Container>
      {children}
    </Container>
  )
}