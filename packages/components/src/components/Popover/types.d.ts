import { Content } from "@radix-ui/react-popover";
import { CSS } from "@venusui/tokens";

export type PopoverContentPrimitiveProps = React.ComponentProps<typeof Content>;
export type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS;
  hideArrow?: boolean;
};
