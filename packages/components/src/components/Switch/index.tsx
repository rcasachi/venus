import { ElementRef, forwardRef } from 'react'
import { StyledSwitch, StyledThumb } from './styles'
import { SwitchProps } from './types'

export const Switch = forwardRef<ElementRef<typeof StyledSwitch>, SwitchProps>(
  function SwitchRef(props, forwardedRef) {
    return (
      <StyledSwitch {...props} ref={forwardedRef}>
        <StyledThumb />
      </StyledSwitch>
    )
  },
)
