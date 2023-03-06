import { styled, keyframes } from '@theme'

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' },
})

export const Skeleton = styled('div', {
  backgroundColor: '$slate4',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$slate6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  variants: {
    variant: {
      avatar: {
        borderRadius: '$round',
      },
      text: {
        height: '$2',
      },
      title: {
        height: '$6',
      },
      heading: {
        height: '$4',
      },
      button: {
        borderRadius: '$1',
        height: '$5',
        width: '$10',
      },
    },
    size: {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
    },
  },
  compoundVariants: [
    {
      variant: 'avatar',
      size: 1,
      css: {
        height: '$5',
        width: '$5',
      }
    },
    {
      variant: 'avatar',
      size: 2,
      css: {
        height: '$6',
        width: '$6',
      }
    },
    {
      variant: 'avatar',
      size: 3,
      css: {
        height: '$7',
        width: '$7',
      }
    },
    {
      variant: 'avatar',
      size: 4,
      css: {
        height: '$8',
        width: '$8',
      }
    },
    {
      variant: 'avatar',
      size: 5,
      css: {
        height: '$10',
        width: '$10',
      }
    },
    {
      variant: 'avatar',
      size: 6,
      css: {
        height: '$12',
        width: '$12',
      }
    },
    {
      variant: 'avatar',
      size: 7,
      css: {
        height: '$16',
        width: '$16',
      }
    }
  ],
  defaultVariants: {
    variant: 'text',
  },
})
