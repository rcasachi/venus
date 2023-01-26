import { styled, css } from '@theme'

export const overlayStyles = css({
  backgroundColor: 'rgba(0, 0, 0, .15)',
})

export const Overlay = styled('div', overlayStyles)

Overlay.displayName = 'Overlay'
