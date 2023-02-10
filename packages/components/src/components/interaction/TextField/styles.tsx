import { styled } from '@theme'

export const TextInputContainer = styled('div', {
  fontFamily: '$untitled',
  padding: '$1',
  display: 'flex',
  borderRadius: '$3',
  boxSizing: 'border-box',
  border: '1px solid $gray9',
  backgroundColor: '$loContrast',

  '&:has(input:focus)': {
    border: '1px solid $colors$blackA12',
    outline: 0,
    boxShadow: '0 0 0 1px $colors$blackA12',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
    color: '$slate8',
  },

  '&:has(input:read-only)': {
    backgroundColor: '$slate2',
    '&:has(input:focus)': {
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
    },
  },

  variants: {
    cursor: {
      default: {
        cursor: 'default',
        '&:has(input:focus) input, &:has(input:focus)': {
          cursor: 'text',
        },
        input: {
          cursor: 'default',
        },
      },
      text: {
        cursor: 'text',
        input: {
          cursor: 'text',
        },
      },
    },
    state: {
      invalid: {
        borderColor: '$red7',
        '&:has(input:focus)': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
        },
      },
      valid: {
        borderColor: '$green7',
        '&:has(input:focus)': {
          boxShadow:
            'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
        },
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
        '&:has(input:disabled)': {
          backgroundColor: 'transparent',
          'input::placeholder': { color: '$slate10' },
        },
        'input::placeholder': { color: '$slate10' },
        '&:has(input:read-only)': { backgroundColor: 'transparent' },
        '&:has(input:-webkit-autofill)': {
          backgroundColor: ' $loContrast',
        },
        'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus':
          {
            '-webkit-text-fill-color': '$colors$hiContrast',
            boxShadow:
              'inset 0 0 0 1px $colors$loContrast, inset 0 0 0 100px $colors$loContrast',
          },
      },
    },
  },
  defaultVariants: {
    cursor: 'default',
  },
})

export const Input = styled('input', {
  fontFamily: 'inherit',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: '$1',
  appearance: 'none',
  borderRadius: 0,
  border: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  margin: '0',
  padding: '0',
  width: '100%',
  backgroundColor: 'transparent',

  color: '$hiContrast',

  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },

  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus': {
    '-webkit-text-fill-color': '$colors$hiContrast',
    boxShadow:
      'inset 0 0 0 1px $colors$loContrast, inset 0 0 0 100px $colors$loContrast',
  },
  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    '-webkit-text-fill-color': '$colors$hiContrast',
  },

  '&:disabled': {
    pointerEvents: 'none',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate7',
    },
  },

  '&::placeholder': { color: '$slate9' },

  variants: {
    size: {
      1: {
        height: '$4',
        fontSize: '$1',
        px: '$1',
        lineHeight: '$sizes$4',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      2: {
        height: '$5',
        fontSize: '$2',
        px: '$1',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$2',
        },
      },
      3: {
        height: '$6',
        fontSize: '$3',
        px: '$2',
        lineHeight: '$sizes$6',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})

export const Appendix = styled('span', {
  fontFamily: 'inherit',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  color: '$gray9',
  px: '$1',

  variants: {
    size: {
      1: {
        fontSize: '$1',
        lineHeight: '$sizes$4',
        svg: { height: '$3', width: '$3', my: 'auto' },
      },
      2: {
        fontSize: '$2',
        lineHeight: '$sizes$5',
        svg: { height: '$3', width: '$3', my: 'auto' },
      },
      3: {
        fontSize: '$3',
        lineHeight: '$sizes$6',
        svg: { height: '$4', width: '$4', my: 'auto' },
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})
