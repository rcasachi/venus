import { styled } from '@theme'

export const TextArea = styled('textarea', {
  fontFamily: '$untitled',
  fontVariantNumeric: 'tabular-nums',
  appearance: 'none',
  fontWeight: '$1',
  boxSizing: 'border-box',
  border: '1px solid $gray9',
  outline: 'none',
  backgroundColor: '$loContrast',
  color: '$hiContrast',
  padding: '0',
  margin: '0',
  resize: 'vertical',

  '&::placeholder': { color: '$slate9' },

  '&:focus': {
    border: '1px solid $colors$blackA12',
    outline: 0,
    boxShadow: '0 0 0 1px $colors$blackA12',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    color: '$slate8',
    resize: 'none',
    pointerEvents: 'none',
    '&::placeholder': {
      color: '$slate7',
    },
  },

  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
    },
  },

  variants: {
    size: {
      1: {
        borderRadius: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$4',
        padding: '$1 $2',
        minHeight: 80,
      },
      '2': {
        borderRadius: '$2',
        fontSize: '$2',
        lineHeight: '$sizes$5',
        padding: '$2 $3',
        minHeight: 100,
      },
      '3': {
        borderRadius: '$3',
        fontSize: '$3',
        lineHeight: '$sizes$6',
        padding: '$3 $4',
        minHeight: 120,
      },
    },
    state: {
      invalid: {
        borderColor: '$red7',
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
        },
      },
      valid: {
        borderColor: '$green7',
        '&:focus': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
    ghost: {
      true: {
        boxShadow: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA7',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow:
            'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          'input::placeholder': { color: '$slate10' },
        },
        '&::placeholder': { color: '$slate10' },
        '&:read-only': { backgroundColor: 'transparent' },
      },
    },
  },
  defaultVariants: {
    size: 1,
    cursor: 'default',
  },
})

TextArea.displayName = 'TextArea'
