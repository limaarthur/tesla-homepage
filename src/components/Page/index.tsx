import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'
import { UniqueOverlay } from '../UniqueOverlay'

import { Container, Spacer } from './styles'

export function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model S',
            'Model 3',
            'Model Y',
            'Model X',
            'Cybertruck',
          ].map(modelName => (
            <ModelSection 
              key={modelName}
              className="image"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}