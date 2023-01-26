import { styled } from '@theme'

import { Text } from '@components/typography/Text'

export const Link = styled('a', {
  alignItems: 'center',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textUnderlineOffset: '3px',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  fontSize: 'inherit',
  fontFamily: '$untitled',
  cursor: 'pointer',

  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },

  [`& ${Text}`]: {
    color: 'inherit',
  },

  variants: {
    variant: {
      blue: {
        color: '$blue11',
        textDecoration: 'underline',
        textDecorationColor: '$blue11',

        '@hover': {
          '&:hover': {
            textDecorationColor: '$blue8',
          },
        },

        '&:focus': {
          outlineColor: '$blue12',
        },
      },
      subtle: {
        color: '$slate11',
        textDecoration: 'underline',
        textDecorationColor: '$slate7',

        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate8',
          },
        },

        '&:focus': {
          outlineColor: '$slate12',
        },
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate9',

        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate12',
          },
        },

        '&:focus': {
          outlineColor: '$slate8',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
})

Link.displayName = 'Link'
