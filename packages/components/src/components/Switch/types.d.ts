import { Root } from "@radix-ui/react-switch";
import { CSS, VariantProps } from "@venusui/tokens";

import { StyledSwitch } from "./styles";

export type SwitchVariants = VariantProps<typeof StyledSwitch>;
export type SwitchPrimitiveProps = React.ComponentProps<typeof Root>;
export type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS };
