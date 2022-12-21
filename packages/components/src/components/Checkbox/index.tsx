import React from 'react';

import { CheckIcon } from '@radix-ui/react-icons';
import { StyledCheckbox, StyledIndicator } from './styles';
import { CheckboxProps } from './types';

export const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <CheckIcon />
      </StyledIndicator>
    </StyledCheckbox>
  )
);