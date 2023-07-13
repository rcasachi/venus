import { Root, Thumb } from '@radix-ui/react-switch'
import { styled } from '@theme'

export const SwitchThumb = styled(Thumb, {
  position: 'absolute',
  left: 0,
  width: 12,
  height: 12,
  backgroundColor: '$darkPrimary',
  borderRadius: '$round',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
  transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  transform: 'translateX(1px)',
  willChange: 'transform',

  '&[data-state="checked"]': { transform: 'translateX(11px)' },
})

export const SwitchRoot = styled(Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: 1,
  margin: 0,
  outline: 'none',
  backgroundColor: '$blackA6',
  borderRadius: '$pill',
  position: 'relative',

  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },
  '&:focus': { boxShadow: '0 0 0 2px black' },
  '&[data-state="checked"]': { backgroundColor: '$hiContrast' },

  variants: {
    size: {
      1: {
        width: 24,
        height: 16,
      },
      2: {
        width: 45,
        height: 25,

        [`& ${SwitchThumb}`]: {
          width: 21,
          height: 21,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': { transform: 'translateX(22px)' },
        },
      },
    },
  },
  defaultVariants: {
    size: 1,
  },
})
