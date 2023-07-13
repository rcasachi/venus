import { styled } from '@theme'
import { Indicator, Root } from '@radix-ui/react-checkbox'

export const CheckboxContainer = styled(Root, {
  userSelect: 'none',
  all: 'unset',
  lineHeight: 0,
  overflow: 'hidden',
  boxSizing: 'border-box',
  backgroundColor: '$panel',
  border: '1px solid $gray9',
  borderRadius: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': { backgroundColor: '$gray3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$primary' },

  variants: {
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$4',
        height: '$4',
      },
      '3': {
        width: '$5',
        height: '$5',
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
})

export const CheckboxIndicator = styled(Indicator, {
  color: '$whiteA12',
  width: '100%',
  height: '100%',
})
