import {
  Content,
  Description,
  Overlay,
  Title,
} from '@radix-ui/react-alert-dialog'

import { styled } from '@theme'
import { overlayStyles } from '@components/surfaces/Overlay'
import { panelStyles } from '@components/surfaces/Panel'

export const AlertDialogOverlay = styled(Overlay, overlayStyles, {
  position: 'fixed',
  inset: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

export const StyledAlertContent = styled(Content, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  willChange: 'transform',
  borderRadius: '$3',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  '&:focus': {
    outline: 'none',
  },
})

export const AlertDialogTitle = styled(Title, {
  margin: 0,
  fontFamily: '$untitled',
  fontWeight: '$2',
  color: '$text',
  fontSize: '$4',
})

export const AlertDialogDescription = styled(Description, {
  margin: '10px 0 20px',
  fontFamily: '$untitled',
  color: '$mauve12',
  fontSize: '$3',
  lineHeight: '$5',
})
