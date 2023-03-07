import * as PopoverPrimitive from '@radix-ui/react-popover'
import { ElementRef, forwardRef } from 'react'

import { Box } from '@components/surfaces/Box'

import { StyledContent } from './styles'
import { PopoverContentProps } from './types'

const PopoverContent = forwardRef<
  ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, hideArrow, ...props }, fowardedRef) => (
  <PopoverPrimitive.Portal>
    <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
      {children}
      {!hideArrow && (
        <Box css={{ color: '$panel' }}>
          <PopoverPrimitive.Arrow
            width={11}
            height={5}
            style={{ fill: 'currentColor' }}
          />
        </Box>
      )}
    </StyledContent>
  </PopoverPrimitive.Portal>
))

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverClose = PopoverPrimitive.Close

export { Popover, PopoverTrigger, PopoverContent, PopoverClose }
