import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Panel } from '.'

export interface PanelProps extends ComponentProps<typeof Panel> {
  as?: ElementType
  css?: CSS
}
