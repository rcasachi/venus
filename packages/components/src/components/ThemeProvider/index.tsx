import { TooltipProvider } from '@radix-ui/react-tooltip'
import { FC } from 'react'

import { ThemeProviderProps } from './types'

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  return <TooltipProvider {...props}>{props.children}</TooltipProvider>
}
