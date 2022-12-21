import { Content, Root } from "@radix-ui/react-tooltip";

export type TooltipPrimitiveProps = React.ComponentProps<typeof Root>;
export type TooltipProps = TooltipPrimitiveProps &
  React.ComponentProps<typeof Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };
