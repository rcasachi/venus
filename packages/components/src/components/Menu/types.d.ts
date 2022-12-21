import { CSS } from "@venusui/tokens";
import { RadioItem } from "@radix-ui/react-menu";

export type MenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof RadioItem
>;
export type MenuRadioItemProps = MenuRadioItemPrimitiveProps & { css?: CSS };
