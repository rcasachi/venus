import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { styled } from '@theme'

export const Tabs = styled(Root, {
  boxShadow: '0 2px 10px $colors$blackA4}',

  '&[data-orientation="horizontal"]': {
    display: 'flex',
    flexDirection: 'column',
  },
  '&[data-orientation="vertical"]': {
    display: 'flex',
    flexDirection: 'row',
  },
})

export const TabsTrigger = styled(Trigger, {
  all: 'unset',
  userSelect: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  height: '$10',
  px: '$2',
  zIndex: 10,
  border: '2px solid transparent',
  outline: 'none',
  fontFamily: '$untitled',
  fontSize: '$2',
  lineHeight: 1,
  color: '$text',
  backgroundColor: '$panel',

  '@hover': {
    '&:hover': {
      borderBottomColor: '$primary',
    },
  },

  '&[data-state="active"]': {
    backgroundColor: '$background',
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderBottomColor: 'transparent',

    '@hover': {
      '&:hover': {
        borderRightColor: '$primary',
      },
    },
  },

  '&[data-orientation="horizontal"]': {
    flex: 1,
  },
})

export const TabsList = styled(List, {
  display: 'flex',
  flexShrink: 0,

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6',
    maxWidth: 200,
    minWidth: 120,
  },
})

export const TabsContent = styled(Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$background',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
})
