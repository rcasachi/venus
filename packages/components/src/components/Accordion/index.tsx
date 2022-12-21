import React from 'react';

import { styled } from '@venusui/tokens';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

import { StyledAccordion, StyledHeader, StyledItem, StyledTrigger } from './styles';
import { AccordionProps, AccordionTriggerProps } from './types';

export const Accordion = React.forwardRef<React.ElementRef<typeof StyledAccordion>, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordion
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? { collapsible: true } : {})}
    >
      {children}
    </StyledAccordion>
  )
);


export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps
>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <ChevronDownIcon />
    </StyledTrigger>
  </StyledHeader>
));

const StyledContent = styled(AccordionPrimitive.Content, {
  p: '$2',
});

export const AccordionItem = StyledItem;
export const AccordionContent = StyledContent;