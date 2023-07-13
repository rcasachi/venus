import { ElementRef, forwardRef } from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, DotFilledIcon } from '@radix-ui/react-icons'

import {
  ContextMenuItemIndicator,
  StyledContent,
  StyledContextMenuCheckboxItem,
  StyledContextMenuRadioItem,
} from './styles'
import {
  ContextMenuCheckboxItemProps,
  ContextMenuContentProps,
  ContextMenuRadioItemProps,
} from './types'

export const ContextMenu = ContextMenuPrimitive.Root
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger
export const ContextMenuPortal = ContextMenuPrimitive.Portal
export const ContextMenuSub = ContextMenuPrimitive.Sub
export const ContextMenuGroup = ContextMenuPrimitive.Group
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

export const ContextMenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  ContextMenuContentProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </ContextMenuPrimitive.Portal>
))

export const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledContextMenuCheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuCheckboxItem {...props} ref={forwardedRef}>
    <ContextMenuItemIndicator>
      <CheckIcon />
    </ContextMenuItemIndicator>
    {children}
  </StyledContextMenuCheckboxItem>
))

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof StyledContextMenuRadioItem>,
  ContextMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
    <ContextMenuItemIndicator>
      <DotFilledIcon />
    </ContextMenuItemIndicator>
    {children}
  </StyledContextMenuRadioItem>
))

export {
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuItemIndicator,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  RightSlot,
} from './styles'
