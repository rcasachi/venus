import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ElementRef, forwardRef } from 'react'

import { AlertDialogOverlay, StyledAlertContent } from './styles'
import { AlertDialogContentProps } from './types'

export const AlertDialog = AlertDialogPrimitive.Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger

export const AlertDialogContent = forwardRef<
  ElementRef<typeof StyledAlertContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogOverlay />
    <StyledAlertContent {...props} ref={forwardedRef}>
      {children}
    </StyledAlertContent>
  </AlertDialogPrimitive.Portal>
))

export const AlertDialogAction = AlertDialogPrimitive.Action
export const AlertDialogCancel = AlertDialogPrimitive.Cancel

export {
  AlertDialogTitle,
  AlertDialogDescription
} from './styles'