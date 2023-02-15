import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import { styled } from '@theme'

import {
  StyledAccordion,
  StyledHeader,
  StyledItem,
  StyledTrigger,
} from './styles'
import { AccordionProps, AccordionTriggerProps } from './types'
import { ElementRef, forwardRef } from 'react'

export const Accordion = forwardRef<
  ElementRef<typeof StyledAccordion>,
  AccordionProps
>(function AccordionRef({ children, ...props }, forwardedRef) {
  return (
    <StyledAccordion
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? { collapsible: true } : {})}
    >
      {children}
    </StyledAccordion>
  )
})

export const AccordionTrigger = forwardRef<
  ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(function AccordionTriggerRef({ children, ...props }, forwardedRef) {
  return (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <ChevronDownIcon />
      </StyledTrigger>
    </StyledHeader>
  )
})

const StyledContent = styled(AccordionPrimitive.Content, {
  p: '$2',
})

export const AccordionItem = StyledItem
export const AccordionContent = StyledContent
