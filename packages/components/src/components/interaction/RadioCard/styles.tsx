import { Item, Root } from '@radix-ui/react-radio-group'
import { styled } from '@theme'

export const RadioCardGroup = styled(Root, {
  display: 'block',
})

export const RadioButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$round',
  width: '$4',
  height: '$4',
  boxShadow: 'inset 0 0 0 1px $colors$gray9',
  flexShrink: 0,
  mr: '$3'
})

export const RadioIndicator = styled('div', {
  borderRadius: '$round',
  width: '$2',
  height: '$2',
  backgroundColor: '$hiContrast',
  transform: 'scale(0)',
})

export const StyledRadio = styled(Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  p: '$3',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$gray9',

  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },

  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$gray8',
    },
  },
  '&[data-state="checked"]': {
    boxShadow:
      'inset 0 0 0 1px $colors$hiContrast, 0 0 0 1px $colors$hiContrast !important',
    [`& ${RadioIndicator}`]: {
      transform: 'scale(1)',
    },
  },
})
