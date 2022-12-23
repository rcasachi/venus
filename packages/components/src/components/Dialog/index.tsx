import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'

import { IconButton } from '@components/IconButton'
import { StyledCloseButton, StyledContent, StyledOverlay } from './styles'
import { ElementRef, forwardRef } from 'react'
import { DialogContentProps } from './types'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger

const DialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  DialogContentProps
>(function DialogContent({ children, ...props }, forwardedRef) {
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

const DialogClose = DialogPrimitive.Close
const DialogTitle = DialogPrimitive.Title
const DialogDescription = DialogPrimitive.Description

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
}
