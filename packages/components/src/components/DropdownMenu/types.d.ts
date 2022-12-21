import { CSS } from "@venusui/tokens";
import { Content } from "@radix-ui/react-dropdown-menu";

export type DropdownMenuContentPrimitiveProps = React.ComponentProps<
  typeof Content
>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & {
  css?: CSS;
};
