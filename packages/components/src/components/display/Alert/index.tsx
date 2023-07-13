import { styled } from '@theme'

export const Alert = styled('div', {
  boxSizing: 'border-box',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  border: '1px solid',
  borderRadius: '$2',

  variants: {
    size: {
      1: {
        padding: '$3',
      },
      2: {
        padding: '$4',
      },
      3: {
        padding: '$5',
      },
    },
    variant: {
      contrast: {
        backgroundColor: '$loContrast',
        borderColor: '$slate6',
      },
      primary: {
        backgroundColor: '$primary',
        borderColor: '$darkPrimary',
      },
      secondary: {
        backgroundColor: '$secondary',
        borderColor: '$darkSecondary',
      },
      accent: {
        backgroundColor: '$accent',
        borderColor: '$accent',
      },
      success: {
        backgroundColor: '$success',
        borderColor: '$success',
      },
      error: {
        backgroundColor: '$error',
        borderColor: '$error',
      },
      warning: {
        backgroundColor: '$warning',
        borderColor: '$warning',
      },
      info: {
        backgroundColor: '$info',
        borderColor: '$info',
      },
      gray: {
        backgroundColor: '$slate2',
        borderColor: '$slate6',
      },
      blue: {
        backgroundColor: '$blue2',
        borderColor: '$blue6',
      },
      green: {
        backgroundColor: '$green2',
        borderColor: '$green6',
      },
      red: {
        backgroundColor: '$red2',
        borderColor: '$red6',
      },
    },
  },
  defaultVariants: {
    size: 1,
    variant: 'gray',
  },
})

Alert.displayName = 'Alert'
