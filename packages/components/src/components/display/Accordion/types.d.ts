import { Root, Trigger } from '@radix-ui/react-accordion'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type AccordionPrimitiveProps = ComponentProps<typeof Root>

export type AccordionProps = AccordionPrimitiveProps & { css?: CSS }

export type AccordionTriggerPrimitiveProps = ComponentProps<typeof Trigger>

export type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {
  css?: CSS
}
