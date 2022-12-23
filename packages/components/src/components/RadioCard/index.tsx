import { ElementRef, forwardRef } from 'react'
import {
  StyledRadio,
  StyledRadioButton,
  StyledRadioCardGroup,
  StyledRadioIndicator,
} from './styles'
import { RadioCardProps } from './types'

export const RadioCard = forwardRef<
  ElementRef<typeof StyledRadio>,
  RadioCardProps
>(function RadioCardRef(props, forwardedRef) {
  return (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledRadioButton>
        <StyledRadioIndicator />
      </StyledRadioButton>
      {props.children}
    </StyledRadio>
  )
})

export const RadioCardGroup = StyledRadioCardGroup
