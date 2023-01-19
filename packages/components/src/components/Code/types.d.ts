import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Code } from '.'

export interface CodeProps extends ComponentProps<typeof Code> {
  as?: ElementType
  css?: CSS
}
