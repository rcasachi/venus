import { Root } from "@radix-ui/react-checkbox";
import { CSS, VariantProps } from "@venusui/tokens";

import { StyledCheckbox } from "./styles";

export type CheckboxPrimitiveProps = React.ComponentProps<typeof Root>;
export type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
export type CheckboxProps = CheckboxPrimitiveProps &
  CheckboxVariants & { css?: CSS };
