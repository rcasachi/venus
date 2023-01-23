import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Link } from '.'

export interface LinkProps extends ComponentProps<typeof Link> {
  as?: ElementType
  css?: CSS
}
