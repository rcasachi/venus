import { Corner, Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import { styled } from '@theme';

const SCROLLBAR_SIZE = 4

export const ScrollAreaRoot = styled(Root, {
  width: '100%',
  height: '100%',
  borderRadius: '$2',
  overflow: 'hidden'
})

export const ScrollAreaViewport = styled(Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit'
})

export const ScrollAreaScrollbar = styled(Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  background: '$blackA6',
  transition: 'background 160ms ease-out',

  '&:hover': { background: '$blackA8' },

  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },

  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  }
})

export const ScrollAreaThumb = styled(Thumb, {
  flex: 1,
  background: '$mauve10',
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 36,
    minHeight: 36
  }
})

export const ScrollAreaCorner = styled(Corner, {
  background: '$blackA8'
})
