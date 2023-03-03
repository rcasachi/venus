import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { IconButton } from '.'

export interface IconButtonProps extends ComponentProps<typeof IconButton> {
  as?: ElementType
  css?: CSS
}
