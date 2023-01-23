import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Overlay } from '.'

export interface OverlayProps extends ComponentProps<typeof Overlay> {
  as?: ElementType
  css?: CSS
}
