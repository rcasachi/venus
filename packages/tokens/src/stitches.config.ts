import { createStitches, defaultThemeMap } from "@stitches/react";
import type * as Stitches from "@stitches/react";

import * as Border from "./commons/borders";
import * as Query from "./commons/queries";
import * as Font from "./commons/fonts";
import * as Spacing from "./commons/spacing";
import { shadows } from "./commons/shadows";
import { transitions } from "./commons/animations";
import { global } from "./commons/global";
import { paddingUtils } from "./utils/padding";
import { marginUtils } from "./utils/margin";
import { flexUtils } from "./utils/flex";
import { borderUtils } from "./utils/border";
import { fontUtils } from "./utils/font";
import { spacingUtils } from "./utils/spacing";
import { generalUtils } from "./utils/general";
import lightThemeSetup from "./light";
import darkThemeSetup from "./dark";

export const stitches = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    colors: { ...lightThemeSetup },
    radii: Border.radio,
    borderWidths: Border.widths,
    borderStyles: Border.styles,
    fonts: Font.faces,
    fontSizes: Font.sizes,
    fontWeights: Font.weights,
    lineHeights: Font.lineHeights,
    letterSpacings: Font.letterSpacings,
    space: Spacing.spaces,
    sizes: Spacing.sizes,
    zIndices: Spacing.zIndices,
    shadows,
    transitions,
  },
  media: {
    ...Query.breakpoints,
    ...Query.themes,
    ...Query.general,
  },
  utils: {
    ...paddingUtils,
    ...marginUtils,
    ...flexUtils,
    ...borderUtils,
    ...fontUtils,
    ...spacingUtils,
    ...generalUtils,
  },
});

export const darkTheme = stitches.createTheme("dark", {
  colors: { ...darkThemeSetup },
});

export const globalStyles = stitches.globalCss({ ...global });

export const {
  styled,
  css,
  theme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = stitches;

export type CSS = Stitches.CSS<typeof config>;
export type { VariantProps } from "@stitches/react";
