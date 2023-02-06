import { CheckIcon } from '@radix-ui/react-icons'

import { CheckboxContainer, CheckboxIndicator } from './styles'
import { CheckboxProps } from './types'

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
