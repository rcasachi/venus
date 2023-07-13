import { ElementRef, forwardRef } from 'react'

import { RadioIndicator, StyledRadio } from './styles'
import { RadioProps } from './types'

export const Radio = forwardRef<ElementRef<typeof StyledRadio>, RadioProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <RadioIndicator />
    </StyledRadio>
  ),
)

Radio.displayName = 'Radio'

export { RadioGroup } from './styles'
