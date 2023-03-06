import { Content, Root, Trigger } from '@radix-ui/react-accordion'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type AccordionPrimitiveProps = ComponentProps<typeof Root>

export type AccordionProps = AccordionPrimitiveProps & { css?: CSS }

export type AccordionTriggerProps = ComponentProps<typeof Trigger> & {
  css?: CSS
}

export type AccordionContentProps = ComponentProps<typeof Content> & {
  css?: CSS
}
