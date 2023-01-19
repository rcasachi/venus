import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Sup } from '.'

export interface SupProps extends ComponentProps<typeof Sup> {
  as?: ElementType
  css?: CSS
}
