import { Item } from '@radix-ui/react-radio-group'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledRadio } from './styles'

export interface RadioProps extends ComponentProps<typeof Item> {
  css?: CSS
  size?: VariantProps<typeof StyledRadio>['size']
}
