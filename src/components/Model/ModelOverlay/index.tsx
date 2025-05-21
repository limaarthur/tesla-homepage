import type { ReactNode } from 'react';
import { Container } from './styles'

interface ModelOverlayProps {
  children: ReactNode;
}

export function ModelOverlay({children}: ModelOverlayProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}