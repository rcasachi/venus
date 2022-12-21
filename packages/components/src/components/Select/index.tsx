import React from 'react';

import { SelectWrapper, StyledCaretSortIcon, StyledSelect } from './styles';
import { SelectProps } from './types';

export const Select = React.forwardRef<React.ElementRef<typeof StyledSelect>, SelectProps>(
  ({ css, ...props }, forwardedRef) => (
    <SelectWrapper css={css}>
      <StyledSelect ref={forwardedRef} {...props} />
      <StyledCaretSortIcon />
    </SelectWrapper>
  )
);

Select.toString = () => `.${SelectWrapper.className}`;