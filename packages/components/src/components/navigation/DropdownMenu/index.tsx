import { ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, DotFilledIcon } from '@radix-ui/react-icons'

import {
  DropdownMenuItemIndicator,
  StyledDropdownMenuCheckboxItem,
  StyledDropdownMenuContent,
  StyledDropdownMenuRadioItem,
  DropdownMenuArrow,
} from './styles'
import {
  DialogMenuCheckboxItemProps,
  DialogMenuRadioItemProps,
  DropdownMenuContentProps,
} from './types'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export const DropdownMenuContent = forwardRef<
  ElementRef<typeof StyledDropdownMenuContent>,
  DropdownMenuContentProps
>(({ children, ...props }, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledDropdownMenuContent {...props} ref={forwardedRef}>
      {children}
      <DropdownMenuArrow />
    </StyledDropdownMenuContent>
  </DropdownMenuPrimitive.Portal>
))

export const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <DropdownMenuItemIndicator>
      <CheckIcon />
    </DropdownMenuItemIndicator>
    {children}
  </StyledDropdownMenuCheckboxItem>
))

export const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <DropdownMenuItemIndicator>
      <DotFilledIcon />
    </DropdownMenuItemIndicator>
    {children}
  </StyledDropdownMenuRadioItem>
))

DropdownMenuContent.displayName = 'DropdownMenuContent'
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem'
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem'

export {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItemIndicator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRightSlot,
} from './styles'
