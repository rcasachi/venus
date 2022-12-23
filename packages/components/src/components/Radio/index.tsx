import { ElementRef, forwardRef } from 'react'
import { StyledIndicator, StyledRadio, StyledRadioGroup } from './styles'
import { RadioProps } from './types'

export const Radio = forwardRef<ElementRef<typeof StyledRadio>, RadioProps>(
  function RadioRef(props, forwardedRef) {
    return (
      <StyledRadio {...props} ref={forwardedRef}>
        <StyledIndicator />
      </StyledRadio>
    )
  },
)

export const RadioGroup = StyledRadioGroup
