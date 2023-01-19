import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Kbd } from '.'

export interface KbdProps extends ComponentProps<typeof Kbd> {
  as?: ElementType
  css?: CSS
}
