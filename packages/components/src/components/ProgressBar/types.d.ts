import { Root } from "@radix-ui/react-progress";
import { CSS, VariantProps } from "@venusui/tokens";

import { StyledProgressBar } from "./styles";

export type ProgressBarVariants = VariantProps<typeof StyledProgressBar>;
export type ProgressBarPrimitiveProps = React.ComponentProps<typeof Root>;
export type ProgressBarProps = ProgressBarPrimitiveProps &
  ProgressBarVariants & { css?: CSS };
