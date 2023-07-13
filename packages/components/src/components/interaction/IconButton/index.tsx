import { styled } from '@theme'

export const IconButton = styled('button', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  padding: 0,
  fontFamily: 'inherit',
  fontSize: '$3',
  lineHeight: 1,
  textDecoration: 'none',
  appearance: 'none',
  outline: 'none',
  userSelect: 'none',
  color: '$text',
  backgroundColor: '$panel',
  border: '1px solid $border',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '@hover': {
    '&:hover': {
      borderColor: '$slate8',
    },
  },

  '&:active': {
    backgroundColor: '$slate2',
  },

  '&:focus': {
    borderColor: '$slate8',
    boxShadow: '0 0 0 1px $colors$slate8',
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate8',
  },

  variants: {
    size: {
      1: {
        borderRadius: '$1',
        height: '$6',
        width: '$6',
      },
      2: {
        borderRadius: '$2',
        height: '$7',
        width: '$7',
      },
      3: {
        borderRadius: '$2',
        height: '$8',
        width: '$8',
      },
      4: {
        borderRadius: '$3',
        height: '$10',
        width: '$10',
      },
    },
    variant: {
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',

        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
          },
        },

        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
        },

        '&:active': {
          backgroundColor: '$slateA4',
        },

        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA4',
          },
      },
      raised: {
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',

        '@hover': {
          '&:hover': {
            boxShadow:
              '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
          },
        },

        '&:focus': {
          borderColor: '$slate8',
          boxShadow:
            '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },

        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
  },
  defaultVariants: {
    size: 1,
    variant: 'ghost',
  },
})
