import { styled } from '@theme'

export const Kbd = styled('kbd', {
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$loContrast',
  flexShrink: 0,
  color: '$hiContrast',
  userSelect: 'none',
  cursor: 'default',
  whiteSpace: 'nowrap',
  boxShadow: `
    inset 0 0.5px rgba(255, 255, 255, 0.1),
    inset 0 1px 5px $colors$slate2,
    0px 0px 0px 0.5px $colors$slate8,
    0px 2px 1px -1px $colors$slate8,
    0 1px $colors$slate8`,
  textShadow: '0 0 1px rgba(255, 255, 255, 0.5)',
  fontFamily: '$untitled',
  fontWeight: '$1',
  lineHeight: '$1',
  mx: '2px',

  variants: {
    size: {
      '1': {
        borderRadius: '$2',
        px: '$2',
        height: '$4',
        minWidth: '$6',
        fontSize: '$1',
        lineHeight: '$spaces$3',
      },
      '2': {
        borderRadius: '$2',
        px: '$2',
        height: '$5',
        minWidth: '$8',
        fontSize: '$2',
        lineHeight: '$spaces$5',
      },
    },
    width: {
      shift: {
        width: '$16',
        justifyContent: 'flex-start',
      },
      command: {
        width: '$12',
        justifyContent: 'flex-end',
      },
      space: {
        width: '8em',
      },
    },
  },

  compoundVariants: [
    {
      size: '1',
      width: 'shift',
      css: {
        width: '3em',
      },
    },
    {
      size: '1',
      width: 'command',
      css: {
        width: '2.5em',
      },
    },
    {
      size: '1',
      width: 'space',
      css: {
        width: '5em',
      },
    },
  ],

  defaultVariants: {
    size: '2',
  },
})

Kbd.displayName = 'Kbd'
