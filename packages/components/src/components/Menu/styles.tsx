import { Content, Item, RadioItem, Root, Separator } from '@radix-ui/react-menu';
import { styled, css } from '@venusui/tokens';

import { panelStyles } from '../Panel';

export const baseItemCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$5',
  paddingLeft: '$5',
  paddingRight: '$5',
});

export const itemCss = css(baseItemCss, {
  position: 'relative',
  color: '$hiContrast',

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$blue9',
    color: 'white',
  },

  '&[data-disabled]': {
    color: '$slate9',
  },
});

export const labelCss = css(baseItemCss, {
  color: '$slate11',
});

export const menuCss = css({
  boxSizing: 'border-box',
  minWidth: 120,
  py: '$1',
});

export const separatorCss = css({
  height: 1,
  marginTop: '$1',
  marginBottom: '$1',
  backgroundColor: '$slate6',
});

export const StyledMenu = styled(Root, menuCss);
export const StyledMenuContent = styled(Content, panelStyles);

export const StyledMenuSeparator = styled(Separator, separatorCss);

export const StyledMenuItem = styled(Item, itemCss);

export const StyledMenuRadioItem = styled(RadioItem, itemCss);