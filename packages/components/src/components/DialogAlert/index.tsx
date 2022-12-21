import React from 'react';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { StyledContent, StyledOverlay } from './styles';
import { AlertDialogContentProps } from './types';

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <AlertDialogPrimitive.Portal>
    <StyledOverlay />
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </AlertDialogPrimitive.Portal>
));

const AlertDialogTitle = AlertDialogPrimitive.Title;
const AlertDialogDescription = AlertDialogPrimitive.Description;
const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};