import {
  Content,
  Item,
  ItemIndicator,
  Label,
  ScrollDownButton,
  ScrollUpButton,
  SelectIcon as Icon,
  SelectTrigger as Trigger,
  Separator,
  Viewport
} from "@radix-ui/react-select";

import { styled } from "@theme";

export const SelectTrigger = styled(Trigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$3',
  padding: '0 $3',
  fontSize: '$2',
  fontFamily: '$untitled',
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: '$loContrast',
  color: '$hiContrast',
  boxShadow: '0 2px 10px $colors$blackA7',

  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-placeholder]': { color: '$hiContrast' },

  '&:hover': {
    backgroundColor: '$loContrast',
    color: '$hiContrast',
    '[data-placeholder]': { color: '$hiContrast' },
  },
});

export const SelectIcon = styled(Icon, {
  color: '$hiContrast',
});

export const SelectContent = styled(Content, {
  overflow: 'hidden',
  fontFamily: '$untitled',
  backgroundColor: '$loContrast',
  borderRadius: '$3',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const SelectViewport = styled(Viewport, {
  padding: '$1',
});

export const StyledItem = styled(Item, {
  userSelect: 'none',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '$6',
  padding: '0 $8 0 $6',
  borderRadius: '$2',
  fontSize: '$2',
  lineHeight: 1,
  color: '$hiContrast',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$hiContrast',
    color: '$loContrast',
  },
});

export const SelectLabel = styled(Label, {
  padding: '0 $6',
  fontSize: '$1',
  lineHeight: '$4',
  color: '$mauve11',
});

export const SelectSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$gray6',
  margin: '$3',
});

export const SelectItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: '$6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '$6',
  backgroundColor: '$loConstrast',
  color: '$hiConstrast',
  cursor: 'default',
};

export const SelectScrollUpButton = styled(ScrollUpButton, scrollButtonStyles);
export const SelectScrollDownButton = styled(ScrollDownButton, scrollButtonStyles);
