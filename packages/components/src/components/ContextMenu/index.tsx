import { styled } from '@theme'
import { CheckIcon } from '@radix-ui/react-icons'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'

import {
  menuCss,
  separatorCss,
  itemCss,
  labelCss,
} from '@components/Menu/styles'
import { Box } from '@components/surfaces/Box'
import { Flex } from '@components/surfaces/Flex'
import { panelStyles } from '@components/surfaces/Panel'
import {
  ContextMenuCheckboxItemProps,
  ContextMenuContentProps,
  ContextMenuRadioItemProps,
} from './types'
import { ElementRef, forwardRef } from 'react'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const StyledContent = styled(ContextMenuPrimitive.Content, menuCss, panelStyles)

const ContextMenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  ContextMenuContentProps
>(function ContextMenuContentRef(props, forwardedRef) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent {...props} ref={forwardedRef} />
    </ContextMenuPrimitive.Portal>
  )
})

const ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss)
const ContextMenuGroup = styled(ContextMenuPrimitive.Group, {})
const ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss)
const ContextMenuSeparator = styled(
  ContextMenuPrimitive.Separator,
  separatorCss,
)

const StyledContextMenuCheckboxItem = styled(
  ContextMenuPrimitive.CheckboxItem,
  itemCss,
)

const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledContextMenuCheckboxItem>,
  ContextMenuCheckboxItemProps
>(function ContextMenuCheckboxItemRef({ children, ...props }, forwardedRef) {
  return (
    <StyledContextMenuCheckboxItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </ContextMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </StyledContextMenuCheckboxItem>
  )
})

const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {})
const StyledContextMenuRadioItem = styled(
  ContextMenuPrimitive.RadioItem,
  itemCss,
)

const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof StyledContextMenuRadioItem>,
  ContextMenuRadioItemProps
>(function ContextMenuRadioItemRef({ children, ...props }, forwardedRef) {
  return (
    <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <ContextMenuPrimitive.ItemIndicator>
          <Flex
            css={{
              width: '$3',
              height: '$3',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
  )
})

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
}
