import { Item } from "@radix-ui/react-radio-group";
import { CSS } from "@venusui/tokens";

export type RadioGroupItemPrimitiveProps = React.ComponentProps<typeof Item>;
export type RadioCardProps = RadioGroupItemPrimitiveProps & { css?: CSS };
