import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Flex } from '.'

export interface FlexProps extends ComponentProps<typeof Flex> {
  as?: ElementType
  css?: CSS
}
