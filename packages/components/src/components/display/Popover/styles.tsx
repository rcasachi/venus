import { Content } from '@radix-ui/react-popover'
import { styled } from '@theme'

import { panelStyles } from '../../surfaces/Panel'

export const StyledContent = styled(Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  borderRadius: '$3',
  padding: '$4',

  '&:focus': {
    outline: 'none',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $colors$violet7',
  },
})
