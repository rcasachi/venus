import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import { styled } from '@theme'

export const Tabs = styled(Root, {
  boxShadow: '0 2px 10px $colors$blackA4}',

  '&[data-orientation="horizontal"]': {
    display: 'flex',
    flexDirection: 'column'
  },
  '&[data-orientation="vertical"]': {
    display: 'flex',
    flexDirection: 'row'
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
  border: '1px solid transparent',
  outline: 'none',
  fontFamily: '$untitled',
  fontSize: '$2',
  lineHeight: 1,
  color: '$hiContrast',
  backgroundColor: '$loContrast',

  '@hover': {
    '&:hover': {
      color: '$hiContrast',
    },
  },

  '&[data-state="active"]': {
    color: '$hiContrast',
    borderColor: '$slate6',
    borderBottomColor: 'transparent',
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',
    borderBottomColor: 'transparent',

    '&[data-state="active"]': {
      borderBottomColor: '$slate6',
      borderRightColor: 'transparent',
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
    borderRight: '1px solid $colors$slate6',
  },

  '&[data-orientation="horizontal"]': {
    borderBottom: '1px solid $colors$slate6',
  },
})

export const TabsContent = styled(Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$loContrast',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
})
