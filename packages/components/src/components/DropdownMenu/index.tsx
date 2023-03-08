import { CheckIcon } from '@radix-ui/react-icons'
import { styled } from '@theme'
import { ElementRef, forwardRef } from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { Box } from '@components/surfaces/Box'
import { Flex } from '../surfaces/Flex'
import { panelStyles } from '../surfaces/Panel'
import {
  DialogMenuCheckboxItemProps,
  DialogMenuRadioItemProps,
  DropdownMenuContentProps,
} from './types'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const StyledContent = styled(
  DropdownMenuPrimitive.Content,
  panelStyles,
)

const DropdownMenuContent = forwardRef<
  ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>(function DropdownMenuContentRef(props, forwardedRef) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent {...props} ref={forwardedRef} />
    </DropdownMenuPrimitive.Portal>
  )
})

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item)
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {})
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label)
const DropdownMenuSeparator = styled(
  DropdownMenuPrimitive.Separator
)

const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem
)

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(function DropdownMenuCheckboxItemRef({ children, ...props }, forwardedRef) {
  return (
    <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </StyledDropdownMenuCheckboxItem>
  )
})

const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {})
const StyledDropdownMenuRadioItem = styled(
  DropdownMenuPrimitive.RadioItem
)

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(function DropdownMenuRadioItemRef({ children, ...props }, forwardedRef) {
  return (
    <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <DropdownMenuPrimitive.ItemIndicator>
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
        </DropdownMenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </StyledDropdownMenuRadioItem>
  )
})

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
}
