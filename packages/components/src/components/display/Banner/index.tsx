import { styled } from '@theme'

export const Banner = styled('div', {
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',
  fontFamily: '$untitled',
  fontSize: '$2',
  fontVariantNumeric: 'tabular-nums',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  variants: {
    size: {
      1: {
        py: '$1',
        px: '$4',
      },
      2: {
        py: '$2',
        px: '$6',
      },
      3: {
        py: '$3',
        px: '$7',
      },
    },
    variant: {
      contrast: {
        backgroundColor: '$loContrast',
        color: '$gray12',
      },
      gray: {
        backgroundColor: '$slate4',
        color: '$gray12',
      },
      blue: {
        backgroundColor: '$blue4',
        color: '$gray12',
      },
      green: {
        backgroundColor: '$green4',
        color: '$gray12',
      },
      red: {
        backgroundColor: '$red4',
        color: '$gray12',
      },
    },
    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    border: {
      true: {
        border: '1px solid $slate6',
      },
    },
  },
  compoundVariants: [
    {
      border: true,
      variant: 'gray',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: true,
      variant: 'blue',
      css: {
        borderColor: '$blue11',
      },
    },
    {
      border: true,
      variant: 'contrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: 1,
    variant: 'contrast',
  },
})
