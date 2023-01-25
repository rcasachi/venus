import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Container } from '.'

export interface ContainerProps extends ComponentProps<typeof Container> {
  as?: ElementType
  css?: CSS
}
