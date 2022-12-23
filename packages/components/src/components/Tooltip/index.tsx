import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { Box } from '@components/Box'
import { Text } from '@components/Text'
import { StyledContent } from './styles'
import { TooltipProps } from './types'

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  multiline,
  ...props
}: TooltipProps) {
  const rootProps = {
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    disableHoverableContent,
  }
  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledContent
          side="top"
          align="center"
          sideOffset={5}
          {...props}
          multiline={multiline}
        >
          <Text
            size="1"
            as="p"
            css={{
              color: '$loContrast',
              lineHeight: multiline ? '20px' : (undefined as any),
            }}
          >
            {content}
          </Text>
          <Box css={{ color: '$transparentExtreme' }}>
            <TooltipPrimitive.Arrow
              width={11}
              height={5}
              style={{ fill: 'currentColor' }}
            />
          </Box>
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}
