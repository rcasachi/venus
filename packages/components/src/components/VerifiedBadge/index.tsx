import React from 'react';

import { CheckIcon } from '@radix-ui/react-icons';

import { StyledVerifiedBadge } from './styles';
import { VerifiedBadgeProps } from './types';

export const VerifiedBadge = React.forwardRef<
  React.ElementRef<typeof StyledVerifiedBadge>,
  VerifiedBadgeProps
>((props, forwardedRef) => (
  <StyledVerifiedBadge {...props} ref={forwardedRef}>
    <CheckIcon />
  </StyledVerifiedBadge>
));