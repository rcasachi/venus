import React from 'react';

import { styled, CSS } from '@venusui/tokens';
import { CheckIcon } from '@radix-ui/react-icons';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import { menuCss, separatorCss, itemCss, labelCss } from '../Menu/styles';
import { Box } from '../Box';
import { Flex } from '../Flex';
import { panelStyles } from '../Panel';
import { ContextMenuRadioItemProps } from './types';

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const StyledContent = styled(ContextMenuPrimitive.Content, menuCss, panelStyles);

type ContextMenuContentPrimitiveProps = React.ComponentProps<typeof ContextMenuPrimitive.Content>;
type ContextMenuContentProps = ContextMenuContentPrimitiveProps & { css?: CSS };

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  ContextMenuContentProps
>((props, forwardedRef) => (
  <ContextMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </ContextMenuPrimitive.Portal>
));

const ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss);
const ContextMenuGroup = styled(ContextMenuPrimitive.Group, {});
const ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss);
const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, separatorCss);

const StyledContextMenuCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, itemCss);

type ContextMenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
>;
type ContextMenuCheckboxItemProps = ContextMenuCheckboxItemPrimitiveProps & { css?: CSS };

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledContextMenuCheckboxItem>,
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
));

const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {});
const StyledContextMenuRadioItem = styled(ContextMenuPrimitive.RadioItem, itemCss);

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledContextMenuRadioItem>,
  ContextMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <Flex css={{ width: '$3', height: '$3', alignItems: 'center', justifyContent: 'center' }}>
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
));

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
};