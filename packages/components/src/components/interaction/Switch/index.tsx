import { ElementRef, forwardRef } from 'react'
import { SwitchRoot, SwitchThumb } from './styles'
import { SwitchProps } from './types'

export const Switch = forwardRef<ElementRef<typeof SwitchRoot>, SwitchProps>(
  (props, forwardedRef) => (
    <SwitchRoot {...props} ref={forwardedRef}>
      <SwitchThumb />
    </SwitchRoot>
  ),
)

Switch.displayName = 'Switch'
