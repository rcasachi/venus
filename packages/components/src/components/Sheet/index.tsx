import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import { ElementRef, forwardRef } from 'react'

import { IconButton } from '@components/IconButton'
import { StyledCloseButton, StyledContent, StyledOverlay } from './styles'
import { SheetContentProps } from './types'

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger

const SheetContent = forwardRef<
  ElementRef<typeof StyledContent>,
  SheetContentProps
>(function SheetContentRef({ children, ...props }, forwardedRef) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
        <StyledCloseButton asChild>
          <IconButton variant="ghost">
            <Cross1Icon />
          </IconButton>
        </StyledCloseButton>
      </StyledContent>
    </DialogPrimitive.Portal>
  )
})

const SheetClose = DialogPrimitive.Close
const SheetTitle = DialogPrimitive.Title
const SheetDescription = DialogPrimitive.Description

export {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
}
