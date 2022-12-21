import { List } from "@radix-ui/react-tabs";
import { CSS } from "@venusui/tokens";

export type TabsListPrimitiveProps = React.ComponentProps<typeof List>;
export type TabsListProps = TabsListPrimitiveProps & { css?: CSS };
