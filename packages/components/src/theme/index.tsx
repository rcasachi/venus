import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  Animations,
  Borders,
  BorderUtils,
  DarkThemeColors,
  FlexUtils,
  Fonts,
  FontUtils,
  GeneralUtils,
  Global,
  LightThemeColors,
  MarginUtils,
  PaddingUtils,
  Queries,
  Shadows,
  Spacing,
  SpacingUtils,
} from '@venusui/tokens'
import { AvailableThemes } from './types'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  reset,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors: { ...LightThemeColors.tone, ...LightThemeColors.colors },
    radii: Borders.radio,
    borderWidths: Borders.widths,
    borderStyles: Borders.styles,
    fonts: Fonts.faces,
    fontSizes: Fonts.sizes,
    fontWeights: Fonts.weights,
    lineHeights: Fonts.lineHeights,
    letterSpacings: Fonts.letterSpacings,
    space: Spacing.spaces,
    sizes: Spacing.sizes,
    zIndices: Spacing.zIndices,
    shadows: Shadows.shadows,
    transitions: Animations.transitions,
  },
  media: {
    ...Queries.breakpoints,
    ...Queries.themes,
    ...Queries.general,
  },
  utils: {
    ...PaddingUtils,
    ...MarginUtils,
    ...FlexUtils,
    ...BorderUtils,
    ...FontUtils,
    ...SpacingUtils,
    ...GeneralUtils,
  },
})

export const darkTheme = createTheme('dark', {
  colors: { ...DarkThemeColors.tone, ...DarkThemeColors.colors },
})

export const availableThemes: AvailableThemes = {
  light: theme,
  dark: darkTheme,
}

export const GlobalStyles = globalCss({ ...Global })
