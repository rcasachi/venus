import { Root } from "@radix-ui/react-slider";
import { CSS } from "@venusui/tokens";

export type SliderPrimitiveProps = React.ComponentProps<typeof Root>;
export type SliderProps = SliderPrimitiveProps & { css?: CSS };
