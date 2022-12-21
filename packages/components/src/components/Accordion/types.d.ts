import { CSS } from "@venusui/tokens";
import { Root, Trigger } from "@radix-ui/react-accordion";

export type AccordionPrimitiveProps = React.ComponentProps<typeof Root>;

export type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export type AccordionTriggerPrimitiveProps = React.ComponentProps<
  typeof Trigger
>;

export type AccordionTriggerProps = AccordionTriggerPrimitiveProps & {
  css?: CSS;
};
