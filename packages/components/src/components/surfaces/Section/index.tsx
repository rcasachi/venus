import { styled } from '@theme'

export const Section = styled('section', {
  boxSizing: 'border-box',
  flexShrink: 0,

  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },

  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  variants: {
    size: {
      '1': {
        paddingTop: '$3',
        paddingBottom: '$3',
      },
      '2': {
        paddingTop: '$5',
        paddingBottom: '$5',
      },
      '3': {
        paddingTop: '$8',
        paddingBottom: '$8',
      },
    },
  },
  defaultVariants: {
    size: '3',
  },
})

Section.displayName = 'Section'
