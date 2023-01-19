import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Sub } from '.'

export interface SubProps extends ComponentProps<typeof Sub> {
  as?: ElementType
  css?: CSS
}
