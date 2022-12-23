import { RadioItem, CheckboxItem } from '@radix-ui/react-menu'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type MenuRadioItemPrimitiveProps = ComponentProps<typeof RadioItem>
export type MenuRadioItemProps = MenuRadioItemPrimitiveProps & { css?: CSS }
export type MenuCheckboxItemPrimitiveProps = ComponentProps<typeof CheckboxItem>
export type MenuCheckboxItemProps = MenuCheckboxItemPrimitiveProps & {
  css?: CSS
}
