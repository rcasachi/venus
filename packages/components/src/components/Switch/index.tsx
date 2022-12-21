import React from 'react';

import { StyledSwitch, StyledThumb } from './styles';
import { SwitchProps } from './types';


export const Switch = React.forwardRef<React.ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  )
);