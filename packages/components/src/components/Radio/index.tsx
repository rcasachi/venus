import React from 'react';

import { StyledIndicator, StyledRadio, StyledRadioGroup } from './styles';
import { RadioProps } from './types';

export const Radio = React.forwardRef<React.ElementRef<typeof StyledRadio>, RadioProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledIndicator />
    </StyledRadio>
  )
);

export const RadioGroup = StyledRadioGroup;