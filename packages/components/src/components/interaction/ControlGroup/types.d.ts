import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { ControlGroup } from '.'

export interface ControlGroupProps extends ComponentProps<typeof ControlGroup> {
  as?: ElementType
  css?: CSS
}
