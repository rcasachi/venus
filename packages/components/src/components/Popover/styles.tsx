import { Content } from "@radix-ui/react-popover";
import { styled } from "@venusui/tokens";

import { panelStyles } from "../Panel";

export const StyledContent = styled(Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
});