import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { Text } from '.'

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
  css?: CSS
}
