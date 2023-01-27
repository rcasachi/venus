import { Description, Root, Title, Trigger } from '@radix-ui/react-dialog'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'

import { CloseButton, Content, SheetOverlay } from './styles'

export interface CloseButtonProps extends ComponentProps<typeof CloseButton> {
  css?: CSS
}

export interface ContentProps extends ComponentProps<typeof Content> {
  css?: CSS
}

export interface SheetOverlayProps extends ComponentProps<typeof SheetOverlay> {
  css?: CSS
}

export interface SheetProps extends ComponentProps<typeof Root> {
  css?: CSS
}

export interface SheetTriggerProps extends ComponentProps<typeof Trigger> {
  css?: CSS
}

export interface SheetTitleProps extends ComponentProps<typeof Title> {
  css?: CSS
}

export interface SheetDescriptionProps extends ComponentProps<typeof Description> {
  css?: CSS
}