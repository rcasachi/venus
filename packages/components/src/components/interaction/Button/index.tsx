import { styled } from '@theme'

export const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$untitled',
  textAlign: 'center',
  fontWeight: '$1',
  textTransform: 'uppercase',
  gap: '$2',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '&:disabled': {
    backgroundColor: '$gray3',
    boxShadow: 'inset 0 0 0 1px $colors$slate6',
    color: '$slate8',
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },

  '&:focus, &:active': {
    boxShadow: 'inset 0 0 0 1px $colors$blackA12, 0 0 0 1px $colors$blackA12',
  },

  '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    {
      boxShadow: 'inset 0 0 0 1px $colors$blackA12',
    },

  variants: {
    color: {
      highcontrast: {
        backgroundColor: '$hiContrast',
        color: '$loContrast',
        '&:not(:disabled):hover': {
          backgroundColor: '$loContrast',
          color: '$hiContrast',
        },
      },
      lowcontrast: {
        backgroundColor: '$loContrast',
        color: '$hiContrast',
        '&:not(:disabled):hover': {
          backgroundColor: '$hiContrast',
          color: '$loContrast',
        },
      },
    },
    outlined: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid $hiContrast',
        color: '$hiContrast',
        '&:disabled': {
          color: '$slate8',
          borderColor: '$slate8',
        },
      },
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        border: 'none',
        '&:disabled': {
          border: 'none',
        },
      },
    },
    transparent: {
      true: {
        border: 'none',
      },
    },
    size: {
      '1': {
        borderRadius: '$2',
        px: '$2',
        py: '$0',
        fontSize: '$1',
        lineHeight: '$sizes$4',

        svg: {
          height: '$3',
        },
      },
      '2': {
        borderRadius: '$2',
        px: '$3',
        py: '$0',
        fontSize: '$2',
        lineHeight: '$sizes$5',

        svg: {
          height: '$3',
        },
      },
      '3': {
        borderRadius: '$3',
        px: '$4',
        py: '$0',
        fontSize: '$3',
        lineHeight: '$sizes$6',

        svg: {
          height: '$4',
        },
      },
    },
  },
  compoundVariants: [
    {
      color: 'highcontrast',
      transparent: true,
      css: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        border: 'none',
        color: 'white',
        '&:not(:disabled):hover': {
          backgroundColor: 'hsla(0,100%,100%,.25)',
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },
    },
    {
      color: 'lowcontrast',
      transparent: true,
      css: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        border: 'none',
        color: 'black',
        '&:not(:disabled):hover': {
          backgroundColor: 'hsla(0,0%,0%,.25)',
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
      },
    },

    {
      color: 'highcontrast',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $hiContrast',
        color: '$hiContrast',
        '&:not(:disabled):hover': {
          backgroundColor: '$hiContrast',
          color: '$loContrast',
        },
      },
    },
    {
      color: 'lowcontrast',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        border: '1px solid $gray9',
        color: '$gray9',
        '&:not(:disabled):hover': {
          backgroundColor: '$gray9',
          color: '$loContrast',
        },
      },
    },

    {
      color: 'highcontrast',
      ghost: true,
      css: {
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '&:not(:disabled):hover': {
          backgroundColor: '$hiContrast',
          color: '$loContrast',
        },
      },
    },
    {
      color: 'lowcontrast',
      ghost: true,
      css: {
        backgroundColor: 'transparent',
        color: '$gray9',
        '&:not(:disabled):hover': {
          backgroundColor: '$gray9',
          color: '$loContrast',
          opacity: 0.9,
        },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    color: 'highcontrast',
    outlined: false,
    transparent: false,
    ghost: false,
  },
})

Button.displayName = 'Button'
