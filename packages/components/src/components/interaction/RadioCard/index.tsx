import { ElementRef, forwardRef } from 'react'

import { StyledRadio, RadioButton, RadioIndicator } from './styles'
import { RadioCardProps } from './types'

export const RadioCard = forwardRef<
  ElementRef<typeof StyledRadio>,
  RadioCardProps
>((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    <RadioButton>
      <RadioIndicator />
    </RadioButton>
    {props.children}
  </StyledRadio>
))

export { RadioCardGroup } from './styles'
