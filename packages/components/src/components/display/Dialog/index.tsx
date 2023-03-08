import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'

import { IconButton } from '@components/interaction/IconButton'
import { DialogCloseButton, StyledContent, DialogOverlay } from './styles'
import { ElementRef, forwardRef } from 'react'
import { DialogContentProps } from './types'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

export const DialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
      <DialogCloseButton asChild>
        <IconButton variant="ghost">
          <Cross1Icon />
        </IconButton>
      </DialogCloseButton>
    </StyledContent>
  </DialogPrimitive.Portal>
))

export {
  DialogCloseButton,
  DialogTitle,
  DialogDescription
} from './styles'
