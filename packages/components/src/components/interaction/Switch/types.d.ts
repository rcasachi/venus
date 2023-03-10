import { Root } from '@radix-ui/react-switch'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { SwitchRoot } from './styles'

export interface SwitchProps extends ComponentProps<typeof Root> {
  css?: CSS
  size?: VariantProps<typeof SwitchRoot>['size']
}
