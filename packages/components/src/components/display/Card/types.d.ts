import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { Card } from '.'

export interface CardProps extends ComponentProps<typeof Card> {
  css?: CSS
}
