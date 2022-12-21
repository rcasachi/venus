import React from 'react';

import * as PopoverPrimitive from '@radix-ui/react-popover';

import { Box } from '../Box';
import { StyledContent } from './styles';
import { PopoverContentProps } from './types';

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, hideArrow, ...props }, fowardedRef) => (
  <PopoverPrimitive.Portal>
    <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
      {children}
      {!hideArrow && (
        <Box css={{ color: '$panel' }}>
          <PopoverPrimitive.Arrow width={11} height={5} style={{ fill: 'currentColor' }} />
        </Box>
      )}
    </StyledContent>
  </PopoverPrimitive.Portal>
));

const PopoverClose = PopoverPrimitive.Close;

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };