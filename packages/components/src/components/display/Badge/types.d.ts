import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { Badge } from '.'

export interface BadgeProps extends ComponentProps<typeof Badge> {
  css?: CSS
}
