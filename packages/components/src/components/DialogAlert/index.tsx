import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { ElementRef, forwardRef } from 'react'
import { StyledContent, StyledOverlay } from './styles'
import { AlertDialogContentProps } from './types'

const AlertDialog = AlertDialogPrimitive.Root
const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(function AlertDialogContentRef({ children, ...props }, forwardedRef) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </AlertDialogPrimitive.Portal>
  )
})

const AlertDialogTitle = AlertDialogPrimitive.Title
const AlertDialogDescription = AlertDialogPrimitive.Description
const AlertDialogAction = AlertDialogPrimitive.Action
const AlertDialogCancel = AlertDialogPrimitive.Cancel

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
