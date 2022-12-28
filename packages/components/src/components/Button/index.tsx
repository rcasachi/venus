import { styled } from '@theme'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$4',
  fontSize: '$2',
  fontWeight: '$2',
  fontFamily: '$untitled',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  height: '$5',
  lineHeight: '1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  flexShrink: 0,
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  cursor: 'pointer',
  userSelect: 'none',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$hiContrast',
        backgroundColor: '$sky3',

        '&:not(:disabled):hover': {
          background: '$sky4',
          boxShadow: 'inset 0 0 0 1px $colors$sky6',
        },

        '&:disabled': {
          backgroundColor: '$gray3',
        },

        '&:active': {
          backgroundColor: '$sky5',
          boxShadow: 'inset 0 0 0 1px $colors$sky6',
        },

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$sky6, 0 0 0 1px $colors$sky6',
        },

        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$sky5',
            boxShadow: 'inset 0 0 0 1px $colors$sky6',
          },
      },

      secondary: {
        color: '$sky6',
        border: '2px solid $sky6',

        '&:not(:disabled):hover': {
          background: '$sky6',
          color: '$white',
          boxShadow: 'inset 0 0 0 1px $colors$sky6',
        },

        '&:disabled': {
          color: '$gray3',
          borderColor: '$gray3',
        },

        '&:active': {
          borderColor: '$sky6',
          boxShadow: 'inset 0 0 0 1px $colors$sky6',
        },

        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$sky6, 0 0 0 1px $colors$sky6',
        },

        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            borderColor: '$sky6',
            boxShadow: 'inset 0 0 0 1px $colors$sky6',
          },
      },

      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',

        '&:not(:disabled):hover': {
          backgroundColor: 'hsla(0,100%,100%,.25)',
        },

        '&:disabled': {
          color: '$gray3',
        },

        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },

        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
      },

      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',

        '&:not(:disabled):hover': {
          backgroundColor: 'hsla(0,0%,0%,.25)',
        },

        '&:disabled': {
          color: '$gray3',
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
    size: {
      '1': {
        borderRadius: '$2',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5',
      },
      '2': {
        borderRadius: '$3',
        height: '$6',
        px: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
      },
      '3': {
        borderRadius: '$4',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7',
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'primary',
  },
})

Button.displayName = 'Button'
