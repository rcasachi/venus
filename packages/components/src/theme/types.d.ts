import { darkTheme, theme as defaultTheme } from '@theme'

export type AvailableThemes = {
  [x: string]: typeof defaultTheme | typeof darkTheme
}
