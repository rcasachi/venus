import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Box } from '.'

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
  css?: CSS
}
