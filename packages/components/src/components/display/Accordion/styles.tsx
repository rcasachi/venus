import { Root, Item, Header, Trigger, Content } from '@radix-ui/react-accordion'

import { keyframes, styled } from '@theme'

export const StyledAccordion = styled(Root, {
  borderRadius: '$4',
  backgroundColor: '$panel',
  boxShadow: '0 2px 10px $colors$blackA4',
})

export const StyledItem = styled(Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $colors$mauve12',
  },
})

export const StyledHeader = styled(Header, {
  all: 'unset',
  display: 'flex',
})

export const StyledTrigger = styled(Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0 $5',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$3',
  lineHeight: 1,
  color: '$text',
  boxShadow: '0 1px 0 $colors$mauve6',

  '&::before': { boxSizing: 'border-box' },
  '&::after': { boxSizing: 'border-box' },

  '&:hover': { backgroundColor: '$panel' },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const StyledContent = styled(Content, {
  overflow: 'hidden',
  fontSize: '$3',
  color: 'inherit',
  backgroundColor: '$background',

  '&[data-state="open"]': {
    animation: `${slideDown} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideUp} 200ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})
