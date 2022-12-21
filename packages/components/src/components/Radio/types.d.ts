import { Item } from "@radix-ui/react-radio-group";
import { CSS, VariantProps } from "@venusui/tokens";

import { StyledRadio } from "./styles";

export type RadioVariants = VariantProps<typeof StyledRadio>;
export type RadioGroupItemPrimitiveProps = React.ComponentProps<typeof Item>;
export type RadioProps = RadioGroupItemPrimitiveProps &
  RadioVariants & { css?: CSS };
