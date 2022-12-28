import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Button } from '.'

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
  css?: CSS
}
