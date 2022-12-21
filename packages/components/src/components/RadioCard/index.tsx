import React from 'react';

import { StyledRadio, StyledRadioButton, StyledRadioCardGroup, StyledRadioIndicator } from './styles';
import { RadioCardProps } from './types';

export const RadioCard = React.forwardRef<React.ElementRef<typeof StyledRadio>, RadioCardProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledRadioButton>
        <StyledRadioIndicator />
      </StyledRadioButton>
      {props.children}
    </StyledRadio>
  )
);

export const RadioCardGroup = StyledRadioCardGroup;