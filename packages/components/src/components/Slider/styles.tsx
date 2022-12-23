import { Range, Root, Thumb, Track } from '@radix-ui/react-slider'
import { styled } from '@theme'

export const SliderTrack = styled(Track, {
  position: 'relative',
  flexGrow: 1,
  backgroundColor: '$slate7',
  borderRadius: '$pill',
  '&[data-orientation="horizontal"]': {
    height: 2,
  },
  '&[data-orientation="vertical"]': {
    width: 2,
    height: 100,
  },
})

export const SliderRange = styled(Range, {
  position: 'absolute',
  background: '$blue9',
  borderRadius: 'inherit',
  '&[data-orientation="horizontal"]': {
    height: '100%',
  },
  '&[data-orientation="vertical"]': {
    width: '100%',
  },
})

export const SliderThumb = styled(Thumb, {
  position: 'relative',
  display: 'block',
  width: 15,
  height: 15,
  outline: 'none',
  opacity: '0',
  backgroundColor: 'white',
  boxShadow: '0 0 1px rgba(0,0,0,.3), 0 1px 4px rgba(0,0,0,.15)',
  borderRadius: '$round',

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -2,
    backgroundColor: 'hsla(0,0%,0%,.035)',
    transform: 'scale(1)',
    borderRadius: '$round',
    transition: 'transform 200ms cubic-bezier(0.22, 1, 0.36, 1)',
  },

  '&:focus': {
    '&::after': {
      transform: 'scale(2)',
    },
  },
})

export const StyledSlider = styled(Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  userSelect: 'none',
  touchAction: 'none',
  height: 15,
  flexGrow: 1,

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 15,
  },

  '@hover': {
    '&:hover': {
      [`& ${SliderTrack}`]: {
        backgroundColor: '$slate8',
      },
      [`& ${SliderThumb}`]: {
        opacity: '1',
      },
    },
  },
})
