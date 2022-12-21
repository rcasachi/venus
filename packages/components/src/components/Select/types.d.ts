import { CSS } from "@venusui/tokens";

import { StyledSelect } from "./styles";

export type SelectProps = React.ComponentProps<typeof StyledSelect> & {
  css?: CSS;
};
