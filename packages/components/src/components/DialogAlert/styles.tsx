import { Content, Overlay } from '@radix-ui/react-alert-dialog'
import { styled } from '@theme'

import { overlayStyles } from '@components/surfaces/Overlay'
import { panelStyles } from '@components/surfaces/Panel'

export const StyledOverlay = styled(Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

export const StyledContent = styled(Content, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',

  '&:focus': {
    outline: 'none',
  },
})
