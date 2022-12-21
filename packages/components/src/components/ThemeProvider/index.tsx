import React from 'react';

import { TooltipProvider } from '@radix-ui/react-tooltip';

import { ThemeProviderProps } from './types';

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return <TooltipProvider {...props} />;
};