import { Close, Content as PrimitiveContent, Overlay } from '@radix-ui/react-dialog'
import { keyframes, styled } from '@theme'

import { overlayStyles } from '@components/surfaces/Overlay'

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const SheetOverlay = styled(Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '&[data-state="open"]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },
})

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
})

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
})

export const Content = styled(PrimitiveContent, {
  backgroundColor: '$panel',
  boxShadow:
    '$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 300,
  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto'
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
        left: 'auto'
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto'
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
        right: 'auto'
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
})

export const CloseButton = styled(Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
})
