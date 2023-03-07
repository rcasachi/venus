import { Content } from '@radix-ui/react-popover'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type PopoverContentProps =  ComponentProps<typeof Content> & {
  css?: CSS
  hideArrow?: boolean
}
