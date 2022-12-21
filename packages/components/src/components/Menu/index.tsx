import React from 'react';

import { styled, CSS } from '@venusui/tokens';
import * as MenuPrimitive from '@radix-ui/react-menu';
import { CheckIcon } from '@radix-ui/react-icons';

import { Box } from '../Box';
import { Flex } from '../Flex';
import { itemCss, labelCss, StyledMenu, StyledMenuContent, StyledMenuItem, StyledMenuRadioItem, StyledMenuSeparator } from './styles';
import { MenuRadioItemProps } from './types';

export const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuRadioItem>,
  MenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <Flex css={{ width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' }}>
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
));

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss);

type MenuCheckboxItemPrimitiveProps = React.ComponentProps<typeof MenuPrimitive.CheckboxItem>;
type MenuCheckboxItemProps = MenuCheckboxItemPrimitiveProps & { css?: CSS };

export const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuCheckboxItem>,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <CheckIcon />
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
));

export const MenuLabel = styled(MenuPrimitive.Label, labelCss);
export const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {});
export const MenuGroup = styled(MenuPrimitive.Group, {});

export const Menu = StyledMenu;
export const MenuContent = StyledMenuContent;
export const MenuSeparator = StyledMenuSeparator;
export const MenuItem = StyledMenuItem;