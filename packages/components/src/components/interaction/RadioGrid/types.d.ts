import { Item, Root } from '@radix-ui/react-radio-group'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export interface RadioGridGroupProps extends ComponentProps<typeof Root> {
  css?: CSS
}

export interface RadioGridProps extends ComponentProps<typeof Item> {
  css?: CSS
}
