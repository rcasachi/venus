import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

export type TooltipProviderProps = ComponentProps<typeof TooltipProvider>
export interface ThemeProviderProps extends TooltipProviderProps {}
