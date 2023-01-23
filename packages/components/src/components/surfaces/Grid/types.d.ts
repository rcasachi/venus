import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Grid } from '.'

export interface GridProps extends ComponentProps<typeof Grid> {
  as?: ElementType
  css?: CSS
}
