import { Root } from '@radix-ui/react-select'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledItem } from './styles'

export interface SelectProps extends ComponentProps<typeof Root> {
  css?: CSS
  placeholder: string
}

export interface SelectItemProps extends ComponentProps<typeof StyledItem> {
  css?: CSS
}
