import { Content, CheckboxItem, RadioItem } from '@radix-ui/react-dropdown-menu'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type DropdownMenuContentPrimitiveProps = ComponentProps<typeof Content>
export type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS
}
export type DialogMenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof CheckboxItem
>
export type DialogMenuCheckboxItemProps =
  DialogMenuCheckboxItemPrimitiveProps & {
    css?: CSS
  }
export type DialogMenuRadioItemPrimitiveProps = ComponentProps<typeof RadioItem>
export type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & {
  css?: CSS
}
