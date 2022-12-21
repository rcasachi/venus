import { VariantProps, CSS } from "@venusui/tokens";
import { Root } from "@radix-ui/react-avatar";

import { Status } from "../Status";
import { StyledAvatar } from "./styles";

export type StatusVariants = React.ComponentProps<typeof Status>;
export type StatusColors = Pick<StatusVariants, "variant">;

export type AvatarVariants = VariantProps<typeof StyledAvatar>;
type AvatarPrimitiveProps = React.ComponentProps<typeof Root>;
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS;
    alt?: string;
    src?: string;
    fallback?: React.ReactNode;
    status?: StatusColors["variant"];
  };
