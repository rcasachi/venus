import { Content, Root } from '@radix-ui/react-tooltip'
import { ComponentProps, ReactElement, ReactNode } from 'react'

export type TooltipPrimitiveProps = ComponentProps<typeof Root>
export type TooltipProps = TooltipPrimitiveProps &
  ComponentProps<typeof Content> & {
    children: ReactElement
    content: ReactNode
    multiline?: boolean
  }
