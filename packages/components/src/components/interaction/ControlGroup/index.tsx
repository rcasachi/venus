import { styled } from '@theme'

import { Button } from '@components/interaction/Button'
import { TextInputContainer } from '@components/interaction/TextField/styles'
import { SelectTrigger } from '@components/interaction/Select/styles'

export const ControlGroup = styled('div', {
  display: 'flex',
  position: 'relative',
  zIndex: 0,

  [`& ${Button}`]: {
    '&:focus': {
      zIndex: 1,
    },
    '&:first-child:not(:only-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:last-child:not(:only-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0,
    },
  },
  [`& ${TextInputContainer}`]: {
    '&:focus': {
      zIndex: '$1',
    },
    '&:first-child:not(:only-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 0,
    },
    '&:last-child:not(:only-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderLeft: 0,
    },
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0,
    },
  },
  [`& ${SelectTrigger}`]: {
    border: '1px solid $colors$gray9',
    boxShadow: 'none',

    '&:first-child:not(:only-child)': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    '&:last-child:not(:only-child)': {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    '&:not(:first-child):not(:last-child)': {
      borderRadius: 0,
    },
  },
})

ControlGroup.displayName = 'ControlGroup'
