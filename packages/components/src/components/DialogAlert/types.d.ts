import { Content } from "@radix-ui/react-alert-dialog";
import { CSS } from "@venusui/tokens";

export type AlertDialogContentPrimitiveProps = React.ComponentProps<
  typeof Content
>;

export type AlertDialogContentProps = AlertDialogContentPrimitiveProps & {
  css?: CSS;
};
