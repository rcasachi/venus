import { styled } from '@theme'
import * as TogglePrimitive from '@radix-ui/react-toggle'

export const Toggle = styled(TogglePrimitive.Root, {
  appearance: 'none',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  borderWidth: 0,
  outline: 'none',
  fontFamily: 'inherit',
  lineHeight: 1,
  textDecoration: 'none',
  backgroundColor: 'transparent',
  color: '$hiContrast',

  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },
  '&:active': { backgroundColor: '$slateA4' },

  '@hover': {
    '&:hover': {
      backgroundColor: '$slateA3',
    },
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slateA8, 0 0 0 1px $slateA8',
    zIndex: 1,
  },

  '&[data-state="on"]': {
    backgroundColor: '$slateA5',
    '@hover': {
      '&:hover': {
        backgroundColor: '$slateA5',
      },
    },
    '&:active': {
      backgroundColor: '$slateA7',
    },
  },

  variants: {
    size: {
      1: {
        height: '$5',
        width: '$5',
        fontSize: '$3',
      },
      2: {
        height: '$7',
        width: '$7',
        fontSize: '$4',
      },
      3: {
        height: '$10',
        width: '$10',
        fontSize: '$5',
      },
    },
    shape: {
      circle: {
        borderRadius: '$round',
      },
      square: {
        borderRadius: '$1',
      },
    },
  },
  defaultVariants: {
    size: 1,
    shape: 'circle',
  },
})
