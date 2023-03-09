import { Item } from '@radix-ui/react-radio-group'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export interface RadioCardProps extends ComponentProps<typeof Item> {
  css?: CSS
}
