import {
  Flex,
  ContextMenu,
  ContextMenuTrigger,
  Text,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
} from '@venusui/components'

export default { title: 'ContextMenu' }

export const menus = () => (
  <>
    <ContextMenu>
      <ContextMenuTrigger>
        <Flex
          css={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '$9',
            backgroundColor: '$slate2',
            border: '2px dashed $colors$slate6',
            borderRadius: '$2',
          }}
        >
          <Text variant="gray">Right-click me</Text>
        </Flex>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuGroup>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuItem>Item</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked>Item</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Item</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Choose one</ContextMenuLabel>
          <ContextMenuRadioGroup value="one">
            <ContextMenuRadioItem value="one">Item</ContextMenuRadioItem>
            <ContextMenuRadioItem value="two">Item</ContextMenuRadioItem>
            <ContextMenuRadioItem value="three">Item</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  </>
)
