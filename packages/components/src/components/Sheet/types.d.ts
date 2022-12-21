import { Content } from "@radix-ui/react-dialog";
import { CSS, VariantProps } from "@venusui/tokens";

import { StyledContent } from "./styles";

export type SheetContentVariants = VariantProps<typeof StyledContent>;
export type DialogContentPrimitiveProps = React.ComponentProps<typeof Content>;
export type SheetContentProps = DialogContentPrimitiveProps &
  SheetContentVariants & { css?: CSS };
