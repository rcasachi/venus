import { Label } from '@components/interaction/Label'
import { MultiStepContainer, Step, Steps } from './styles'

interface Props {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: Props) {
  return (
    <MultiStepContainer>
      <Label size="2">
        {currentStep}/{size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
