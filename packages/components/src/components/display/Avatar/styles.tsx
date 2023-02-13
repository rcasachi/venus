import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '@theme'

export const AvatarContainer = styled(Avatar.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  flexShrink: 0,
  border: 'none',
  margin: '0',
  outline: 'none',
  padding: '0',

  variants: {
    size: {
      1: {
        width: '$5',
        height: '$5',
      },
      2: {
        width: '$6',
        height: '$6',
      },
      3: {
        width: '$7',
        height: '$7',
      },
      4: {
        width: '$8',
        height: '$8',
      },
      5: {
        width: '$10',
        height: '$10',
      },
      6: {
        width: '$12',
        height: '$12',
      },
      7: {
        width: '$16',
        height: '$16',
      },
    },

    shape: {
      square: {
        borderRadius: '$3',
      },
      circle: {
        borderRadius: '$full',
      },
    },

    inactive: {
      true: {
        opacity: '.3',
      },
    },

    interactive: {
      true: {
        cursor: 'pointer',
        '@hover': {
          '&:hover': {
            opacity: 0.8,
          },
        },
        '&[data-state="open"]': {
          backgroundColor: 'rgba(0,0,0,.12)',
          opacity: 0.9,
        },
      },
    },

    variant: {
      black: {
        backgroundColor: '$blackA5',
      },
      gray: {
        backgroundColor: '$slate5',
      },
      tomato: {
        backgroundColor: '$tomato5',
      },
      red: {
        backgroundColor: '$red5',
      },
      crimson: {
        backgroundColor: '$crimson5',
      },
      pink: {
        backgroundColor: '$pink5',
      },
      plum: {
        backgroundColor: '$plum5',
      },
      purple: {
        backgroundColor: '$purple5',
      },
      violet: {
        backgroundColor: '$violet5',
      },
      indigo: {
        backgroundColor: '$indigo5',
      },
      blue: {
        backgroundColor: '$blue5',
      },
      cyan: {
        backgroundColor: '$cyan5',
      },
      teal: {
        backgroundColor: '$teal5',
      },
      green: {
        backgroundColor: '$green5',
      },
      grass: {
        backgroundColor: '$grass5',
      },
      brown: {
        backgroundColor: '$brown5',
      },
      bronze: {
        backgroundColor: '$bronze5',
      },
      gold: {
        backgroundColor: '$gold5',
      },
      sky: {
        backgroundColor: '$sky5',
      },
      mint: {
        backgroundColor: '$mint5',
      },
      lime: {
        backgroundColor: '$lime5',
      },
      yellow: {
        backgroundColor: '$yellow5',
      },
      amber: {
        backgroundColor: '$amber5',
      },
      orange: {
        backgroundColor: '$orange5',
      },
    },
  },
  defaultVariants: {
    size: 5,
    shape: 'circle',
    inactive: false,
    variant: 'black',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  boxSizing: 'border-box',
  display: 'flex',
  verticalAlign: 'middle',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  fontFamily: '$untitled',
  textTransform: 'uppercase',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$hiContrast',
  lineHeight: 1,
  fontWeight: '$2',

  svg: {
    width: '$5',
    height: '$5',
  },

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$1',
      },
      3: {
        fontSize: '$2',
      },
      4: {
        fontSize: '$3',
      },
      5: {
        fontSize: '$4',
      },
      6: {
        fontSize: '$5',
      },
      7: {
        fontSize: '$6',
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
})

export const AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $colors$loContrast',
  borderRadius: '$full',
})

export const AvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',

  [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$4',
    zIndex: '$1',
  },
})
