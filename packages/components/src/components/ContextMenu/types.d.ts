import { RadioItem } from "@radix-ui/react-context-menu";
import { CSS } from "@venusui/tokens";

export type ContextMenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof RadioItem
>;
export type ContextMenuRadioItemProps = ContextMenuRadioItemPrimitiveProps & {
  css?: CSS;
};
