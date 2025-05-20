import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'

import { Container } from './styles'

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
      </ModelsWrapper>
    </Container>
  )
}