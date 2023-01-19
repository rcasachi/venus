import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Label } from '.'

export interface LabelProps extends ComponentProps<typeof Label> {
  as?: ElementType
  css?: CSS
}
