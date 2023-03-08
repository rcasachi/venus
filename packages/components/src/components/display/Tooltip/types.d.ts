import { Content, Root } from '@radix-ui/react-tooltip'
import { ComponentProps, ReactElement, ReactNode } from 'react'

export type TooltipProps = ComponentProps<typeof Root> &
  ComponentProps<typeof Content> & {
    children: ReactElement
    content: ReactNode
    multiline?: boolean
  }
