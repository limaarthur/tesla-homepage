import { Container, Heading, Buttons } from './styles'

interface DefaultOverlayContentProps {
  label: string // Nome de cada modelo de veicúlo
  description: string // Descrição de cada veivúlo
}

export function DefaultOverlayContent({ label, description }: DefaultOverlayContentProps) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  )
}