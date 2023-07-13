import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { Box } from '@components/surfaces/Box'
import { Text } from '@components/typography/Text'

import { TooltipContent, TooltipArrow } from './styles'
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
        <TooltipContent
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
              color: '$text',
              lineHeight: multiline ? '20px' : (undefined as any),
            }}
          >
            {content}
          </Text>
          <Box css={{ color: '$transparentExtreme' }}>
            <TooltipArrow width={11} height={5} />
          </Box>
        </TooltipContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  )
}
