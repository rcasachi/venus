// import { CheckIcon } from '@radix-ui/react-icons'
// import { ElementRef, forwardRef } from 'react'
// import { StyledCheckbox, StyledIndicator } from './styles'
// import { CheckboxProps } from './types'

// export const Checkbox = forwardRef<
//   ElementRef<typeof StyledCheckbox>,
//   CheckboxProps
// >(function CheckboxRef(props, forwardedRef) {
//   return (
//     <StyledCheckbox {...props} ref={forwardedRef}>
//       <StyledIndicator>
//         <CheckIcon />
//       </StyledIndicator>
//     </StyledCheckbox>
//   )
// })
import { CheckIcon } from '@radix-ui/react-icons'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
