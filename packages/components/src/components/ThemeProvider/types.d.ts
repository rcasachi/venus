import { TooltipProvider } from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'

export type TooltipProviderProps = ComponentProps<typeof TooltipProvider>

export interface ThemeProviderProps extends TooltipProviderProps {
  children: any
}

export type ColorMode = string | null
export type MediaTheme = string | undefined
export type ColorModeType = [ColorMode, () => void]
export type ThemeContextType = {
  colorMode: ColorMode
  toggleMode: () => void
} | null
