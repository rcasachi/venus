import React from 'react';

import { CSS } from '@venusui/tokens';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

import { IconButton } from '../IconButton';
import { StyledCloseButton, StyledContent, StyledOverlay } from './styles';

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;


type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS };

const DialogContent = React.forwardRef<React.ElementRef<typeof StyledContent>, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
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
);

const DialogClose = DialogPrimitive.Close;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

export { Dialog, DialogTrigger, DialogContent, DialogClose, DialogTitle, DialogDescription };