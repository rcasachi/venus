import { RadioItem, Content, CheckboxItem } from '@radix-ui/react-context-menu'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type ContextMenuRadioItemPrimitiveProps = ComponentProps<
  typeof RadioItem
>
export type ContextMenuRadioItemProps = ContextMenuRadioItemPrimitiveProps & {
  css?: CSS
}

export type ContextMenuContentPrimitiveProps = ComponentProps<typeof Content>
export type ContextMenuContentProps = ContextMenuContentPrimitiveProps & {
  css?: CSS
}

export type ContextMenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof CheckboxItem
>
export type ContextMenuCheckboxItemProps =
  ContextMenuCheckboxItemPrimitiveProps & {
    css?: CSS
  }
