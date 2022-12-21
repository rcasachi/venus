import { CSS } from "@venusui/tokens";

import { StyledVerifiedBadge } from "./styles";

export type VerifiedBadgeProps = React.ComponentProps<
  typeof StyledVerifiedBadge
> & {
  css?: CSS;
};
