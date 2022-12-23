import { Content } from '@radix-ui/react-popover'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type PopoverContentPrimitiveProps = ComponentProps<typeof Content>
export type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS
  hideArrow?: boolean
}
