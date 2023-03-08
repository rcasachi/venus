import { ElementRef, forwardRef } from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon } from '@radix-ui/react-icons'

import { Box } from '@components/surfaces/Box'
import { Flex } from '@components/surfaces/Flex'

import { StyledContent, StyledContextMenuCheckboxItem, StyledContextMenuRadioItem } from './styles'
import { ContextMenuCheckboxItemProps, ContextMenuContentProps, ContextMenuRadioItemProps } from './types'

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
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <CheckIcon />
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledContextMenuCheckboxItem>
))

export const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof StyledContextMenuRadioItem>,
  ContextMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <Flex justify="center" align="center" css={{ width: '$3', height: '$3' }}>
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          />
        </Flex>
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
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
  RightSlot
} from './styles'

