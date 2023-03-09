import { styled } from '@theme'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

export const RadioGridGroup = styled(RadioGroupPrimitive.Root, {
  display: 'grid',
  gap: '$1',
  gridTemplateColumns: 'repeat(5, 1fr)',
})

export const RadioGrid = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  textAlign: 'center',
  height: '$6',
  px: '$1',
  lineHeight: '$sizes$6',
  fontSize: '$3',
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
    boxShadow: 'inset 0 0 0 1px $colors$hiContrast',
    backgroundColor: '$slate4',
  },
})
