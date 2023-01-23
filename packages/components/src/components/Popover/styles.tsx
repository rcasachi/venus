import { Content } from '@radix-ui/react-popover'
import { styled } from '@theme'

import { panelStyles } from '../surfaces/Panel'

export const StyledContent = styled(Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
})
