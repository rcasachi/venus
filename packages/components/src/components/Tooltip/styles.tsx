import { styled } from "@venusui/tokens";
import { Content } from '@radix-ui/react-tooltip';

export const StyledContent = styled(Content, {
  backgroundColor: '$transparentPanel',
  borderRadius: '$1',
  padding: '$1 $2',

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});