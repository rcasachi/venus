import { ElementRef, forwardRef } from 'react'
import { ChevronDownIcon } from '@radix-ui/react-icons'

import {
  StyledAccordion,
  StyledContent,
  StyledHeader,
  StyledItem,
  StyledTrigger,
} from './styles'
import {
  AccordionContentProps,
  AccordionProps,
  AccordionTriggerProps,
} from './types'
import { Box } from '@components/surfaces/Box'

export const Accordion = forwardRef<
  ElementRef<typeof StyledAccordion>,
  AccordionProps
>(({ children, ...props }, forwardedRef) => (
  <StyledAccordion
    ref={forwardedRef}
    {...props}
    {...(props.type === 'single' ? { collapsible: true } : {})}
  >
    {children}
  </StyledAccordion>
))

export const AccordionTrigger = forwardRef<
  ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon />
    </StyledTrigger>
  </StyledHeader>
))

export const AccordionContent = forwardRef<
  ElementRef<typeof StyledContent>,
  AccordionContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    <Box css={{ p: '$2' }}>{children}</Box>
  </StyledContent>
))

export const AccordionItem = StyledItem

Accordion.displayName = 'Accordion'
AccordionTrigger.displayName = 'AccordionTrigger'
AccordionContent.displayName = 'AccordionContent'
AccordionItem.displayName = 'AccordionItem'
