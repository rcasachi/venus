import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { styled } from "@venusui/tokens";

export const StylesTabs = styled(Root, {
  display: 'flex',
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

export const StyledTabsTrigger = styled(Trigger, {
  flexShrink: 0,
  height: '$5',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: '$1',
  px: '$2',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate11',
  border: '1px solid transparent',
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  zIndex: '10',

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
    borderTopRightRadius: 0,
    borderBottomLeftRadius: '$2',
    borderBottomColor: 'transparent',

    '&[data-state="active"]': {
      borderBottomColor: '$slate6',
      borderRightColor: 'transparent',
    },
  },
});

export const StyledTabsList = styled(List, {
  flexShrink: 0,
  display: 'flex',
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6',
  },
});

export const StyledTabsContent = styled(Content, {
  flexGrow: 1,
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
  },
});