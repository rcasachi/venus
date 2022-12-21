import { styled } from '@venusui/tokens';
import { Root, Item, Header, Trigger } from '@radix-ui/react-accordion';

export const StyledAccordion = styled(Root, {
  backgroundColor: '$amber1',
});

export const StyledItem = styled(Item, {
  borderTop: '1px solid $colors$slate6',

  '&:last-of-type': {
    borderBottom: '1px solid $colors$slate6',
  },
});

export const StyledHeader = styled(Header, {});

export const StyledTrigger = styled(Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2',
  color: '$hiContrast',
  width: '100%',

  '@hover': {
    '&:hover': {
      backgroundColor: '$slate2',
    },
  },

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
  },

  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  '&[data-state="open"]': {
    svg: {
      transform: 'rotate(180deg)',
    },
  },
});