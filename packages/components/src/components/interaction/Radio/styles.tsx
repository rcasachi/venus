import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import { styled } from '@theme'

export const RadioGroup = styled(Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
})

export const RadioIndicator = styled(Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  position: 'relative',

  '&::after': {
    content: '""',
    display: 'block',
    width: 7,
    height: 7,
    borderRadius: '50%',
    backgroundColor: '$hiContrast',
  },
})

export const StyledRadio = styled(Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  overflow: 'hidden',
  appearance: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  margin: 0,
  padding: 0,
  outline: 'none',
  textDecoration: 'none',
  borderRadius: '100%',
  color: '$hiContrast',
  boxShadow: 'inset 0 0 0 1px $colors$gray9',

  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },

  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$gray8',
    },
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px black',
  },

  variants: {
    size: {
      1: {
        width: '$4',
        height: '$4',

        [`& ${RadioIndicator}`]: {
          '&::after': {
            width: '$2',
            height: '$2',
          },
        },
      },
      2: {
        width: '$5',
        height: '$5',

        [`& ${RadioIndicator}`]: {
          '&::after': {
            width: '$3',
            height: '$3',
          },
        },
      },
      3: {
        width: '$7',
        height: '$7',

        [`& ${RadioIndicator}`]: {
          '&::after': {
            width: '$4',
            height: '$4',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})
