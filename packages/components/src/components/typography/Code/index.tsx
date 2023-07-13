import { styled } from '@theme'

export const Code = styled('code', {
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',

  variants: {
    variant: {
      primary: { backgroundColor: '$slate3', color: '$lightPrimary' },
      secondary: { backgroundColor: '$slate3', color: '$secondary' },
      accent: { backgroundColor: '$slate3', color: '$accent' },
      gray: { backgroundColor: '$slate3', color: '$slate11' },
      violet: { backgroundColor: '$violet3', color: '$violet11' },
    },
  },
  defaultVariants: {
    variant: 'violet',
  },
})

Code.displayName = 'Code'
