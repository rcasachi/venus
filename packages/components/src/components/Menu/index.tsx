import { styled } from '@theme'
import * as MenuPrimitive from '@radix-ui/react-menu'
import { CheckIcon } from '@radix-ui/react-icons'

import { Box } from '@components/Box'
import { Flex } from '@components/Flex'
import {
  itemCss,
  labelCss,
  StyledMenu,
  StyledMenuContent,
  StyledMenuItem,
  StyledMenuRadioItem,
  StyledMenuSeparator,
} from './styles'
import { MenuCheckboxItemProps, MenuRadioItemProps } from './types'
import { ElementRef, forwardRef } from 'react'

export const MenuRadioItem = forwardRef<
  ElementRef<typeof StyledMenuRadioItem>,
  MenuRadioItemProps
>(function MenuRadioItemRef({ children, ...props }, forwardedRef) {
  return (
    <StyledMenuRadioItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuPrimitive.ItemIndicator>
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
            ></Box>
          </Flex>
        </MenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </StyledMenuRadioItem>
  )
})

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss)

export const MenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledMenuCheckboxItem>,
  MenuCheckboxItemProps
>(function MenuCheckboxItemRef({ children, ...props }, forwardedRef) {
  return (
    <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
      <Box as="span" css={{ position: 'absolute', left: '$1' }}>
        <MenuPrimitive.ItemIndicator>
          <CheckIcon />
        </MenuPrimitive.ItemIndicator>
      </Box>
      {children}
    </StyledMenuCheckboxItem>
  )
})

export const MenuLabel = styled(MenuPrimitive.Label, labelCss)
export const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {})
export const MenuGroup = styled(MenuPrimitive.Group, {})

export const Menu = StyledMenu
export const MenuContent = StyledMenuContent
export const MenuSeparator = StyledMenuSeparator
export const MenuItem = StyledMenuItem
