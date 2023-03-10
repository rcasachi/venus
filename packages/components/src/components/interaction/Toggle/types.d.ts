import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Toggle } from '.'

export interface ToggleProps extends ComponentProps<typeof Toggle> {
  as?: ElementType
  css?: CSS
}
