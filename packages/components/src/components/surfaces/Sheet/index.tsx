import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'

import { IconButton } from '@components/IconButton'
import { CloseButton, Content, SheetOverlay } from './styles'
import { ContentProps } from './types'

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger

const SheetContent = ({ children, ...props }: ContentProps) => (
  <DialogPrimitive.Portal>
    <SheetOverlay />
    <Content {...props}>
      {children}
      <CloseButton asChild>
        <IconButton variant="ghost">
          <Cross1Icon />
        </IconButton>
      </CloseButton>
    </Content>
  </DialogPrimitive.Portal>
);

const SheetTitle = DialogPrimitive.Title
const SheetDescription = DialogPrimitive.Description

export {
  Sheet,
  SheetOverlay,
  CloseButton,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
}

Sheet.displayName = 'Sheet'
SheetOverlay.displayName = 'SheetOverlay'
CloseButton.displayName = 'CloseButton'
SheetTrigger.displayName = 'SheetTrigger'
SheetContent.displayName = 'SheetContent'
SheetTitle.displayName = 'SheetTitle'
SheetDescription.displayName = 'SheetDescription'