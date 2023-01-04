// import { styled } from '@theme'
// import { Indicator, Root } from '@radix-ui/react-checkbox'

// export const StyledCheckbox = styled(Root, {
//   all: 'unset',
//   boxSizing: 'border-box',
//   userSelect: 'none',
//   '&::before': {
//     boxSizing: 'border-box',
//   },
//   '&::after': {
//     boxSizing: 'border-box',
//   },

//   alignItems: 'center',
//   appearance: 'none',
//   display: 'inline-flex',
//   justifyContent: 'center',
//   lineHeight: '1',
//   margin: '0',
//   outline: 'none',
//   padding: '0',
//   WebkitTapHighlightColor: 'rgba(0,0,0,0)',

//   color: '$hiContrast',
//   boxShadow: 'inset 0 0 0 1px $colors$slate7',
//   overflow: 'hidden',
//   '@hover': {
//     '&:hover': {
//       boxShadow: 'inset 0 0 0 1px $colors$slate8',
//     },
//   },
//   '&:focus': {
//     outline: 'none',
//     borderColor: '$red7',
//     boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9',
//   },

//   variants: {
//     size: {
//       '1': {
//         width: '$3',
//         height: '$3',
//         borderRadius: '$1',
//       },
//       '2': {
//         width: '$5',
//         height: '$5',
//         borderRadius: '$2',
//       },
//     },
//   },
//   defaultVariants: {
//     size: '1',
//   },
// })

// export const StyledIndicator = styled(Indicator, {
//   alignItems: 'center',
//   display: 'flex',
//   height: '100%',
//   justifyContent: 'center',
//   width: '100%',
// })
import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from '@theme'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray9',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray9',

  '&[data-state="checked"]': {
    backgroundColor: '$gray3',
  },

  '&:focus': {
    border: '2px solid $gray3',
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$hiContrast',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})
