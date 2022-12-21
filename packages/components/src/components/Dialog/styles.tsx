import { Close, Content, Overlay } from "@radix-ui/react-dialog";
import { styled } from "@venusui/tokens";

import { overlayStyles } from "../Overlay";
import { panelStyles } from "../Panel";

export const StyledOverlay = styled(Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const StyledContent = styled(Content, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,
  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },
});

export const StyledCloseButton = styled(Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
});