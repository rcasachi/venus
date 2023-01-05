import { TooltipProvider } from '@radix-ui/react-tooltip'
import { createContext, FC } from 'react'
import { GlobalStyles } from '@theme'

import { ThemeContextType, ThemeProviderProps } from './types'
import { useColorMode } from './hooks'

export const ThemeContext = createContext<ThemeContextType>(null)

export const ThemeProvider: FC<ThemeProviderProps> = (
  props: ThemeProviderProps,
) => {
  const [colorMode, toggleMode] = useColorMode()

  GlobalStyles()

  return (
    <ThemeContext.Provider
      value={{
        colorMode,
        toggleMode,
      }}
    >
      <TooltipProvider {...props}>{props.children}</TooltipProvider>
    </ThemeContext.Provider>
  )
}
