import { Indicator, Root } from '@radix-ui/react-progress'
import { keyframes, styled } from '@theme'

export const indeterminateProgress = keyframes({
  '0%': {
    transform: 'scaleX(1) translateX(-100%)',
    transformOrigin: 'left',
  },
  '50%': {
    transform: 'scaleX(1) translateX(1000%)',
    transformOrigin: 'left',
  },
  '100%': {
    transform: 'scaleX(1) translateX(2000%)',
    transformOrigin: 'left',
  },
})

export const StyledProgressBar = styled(Root, {
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '$pill',
  transform: 'translateZ(0)',

  '&[data-state="indeterminate"]': {
    backgroundColor: '$slate4',
    '&::after': {
      animationName: indeterminateProgress,
      animationDuration: '1500ms',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)',
      backgroundColor: '$slate7',
      boxSizing: 'border-box',
      borderRadius: '$pill',
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '5%',
    },
  },

  variants: {
    variant: {
      primary: {
        background: '$primary',
      },
      secondary: {
        background: '$secondary',
      },
      accent: {
        background: '$accent',
      },
      gray: {
        background: '$slate8',
      },
      blue: {
        backgroundColor: '$blue9',
      },
      gradient: {
        backgroundImage:
          'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
      },
    },
    size: {
      1: {
        height: '$1',
      },
      2: {
        height: '$2',
      },
      3: {
        height: '$3',
      },
    },
  },
  defaultVariants: {
    variant: 'gray',
    size: 1,
  },
})

export const ProgressBarIndicator = styled(Indicator, {
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '$slate4',
  transition: 'transform 150ms cubic-bezier(0.65, 0, 0.35, 1)',
})
