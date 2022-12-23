import { CheckIcon } from '@radix-ui/react-icons'
import { ElementRef, forwardRef } from 'react'
import { StyledCheckbox, StyledIndicator } from './styles'
import { CheckboxProps } from './types'

export const Checkbox = forwardRef<
  ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>(function CheckboxRef(props, forwardedRef) {
  return (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  )
})
