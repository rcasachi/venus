import { CheckboxItem, Content, Item, ItemIndicator, Label, RadioItem, Separator, SubContent, SubTrigger } from "@radix-ui/react-context-menu"

import { styled } from "@theme"

const contentStyles = {
  overflow: 'hidden',
  minWidth: 220,
  padding: '$1',
  borderRadius: '$3',
  backgroundColor: '$loContrast',
  fontFamily: '$untitled',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
}

export const StyledContent = styled(Content, contentStyles)
export const ContextMenuSubContent = styled(SubContent, contentStyles)

const itemStyles = {
  fontSize: '$2',
  lineHeight: 1,
  color: '$hiContrast',
  borderRadius: '$3',
  display: 'flex',
  alignItems: 'center',
  height: '$6',
  padding: '0 5px',
  position: 'relative',
  paddingLeft: '$6',
  userSelect: 'none',
  outline: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$hiContrast',
    color: '$loContrast',
  },
}

export const ContextMenuItem = styled(Item, itemStyles)
export const StyledContextMenuCheckboxItem = styled(CheckboxItem, itemStyles)
export const StyledContextMenuRadioItem = styled(RadioItem, itemStyles)
export const ContextMenuSubTrigger = styled(SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: '$mauve6',
    color: '$mauve11',
  },
  ...itemStyles,
})

export const ContextMenuLabel = styled(Label, {
  paddingLeft: '$6',
  fontSize: '$1',
  lineHeight: '$5',
  color: '$mauve9',
})

export const ContextMenuSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$mauve6',
  margin: '$1',
})

export const ContextMenuItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: '$6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$mauve10',
  '[data-highlighted] > &': { color: '$loContrast' },
  '[data-disabled] &': { color: '$mauve8' },
  '[data-state="open"] &': { color: '$mauve10' },
})
