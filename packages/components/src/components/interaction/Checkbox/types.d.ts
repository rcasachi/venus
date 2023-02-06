import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxContainerProps
  extends ComponentProps<typeof CheckboxContainer> {
  css?: CSS
}

export interface CheckboxIndicatorProps
  extends ComponentProps<typeof CheckboxIndicator> {
  css?: CSS
}

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {
  css?: CSS
}
