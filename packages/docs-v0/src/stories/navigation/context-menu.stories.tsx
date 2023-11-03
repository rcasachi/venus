import {
  ChevronRightIcon,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuPortal,
  ContextMenuProps,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuItemIndicator,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  RightSlot,
  Flex,
  Text
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react';

export default {
  title: 'Navigation/ContextMenu',
} as Meta<ContextMenuProps>

export const Default: StoryObj<ContextMenuProps> = {
  render: () => {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'center',
              height: '$12',
              backgroundColor: '$slate2',
              border: '2px dashed $colors$slate6',
              borderRadius: '$2',
            }}
          >
            <Text variant="gray">Right-click me</Text>
          </Flex>
        </ContextMenuTrigger>
        <ContextMenuPortal>
          <ContextMenuContent sideOffset={5} align="end">
            <ContextMenuItem>
              Back <RightSlot>⌘+[</RightSlot>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Foward <RightSlot>⌘+]</RightSlot>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload <RightSlot>⌘+R</RightSlot>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                More Tools
                <RightSlot>
                  <ChevronRightIcon />
                </RightSlot>
              </ContextMenuSubTrigger>
              <ContextMenuPortal>
                <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
                  <ContextMenuItem>
                    Save Page As… <RightSlot>⌘+S</RightSlot>
                  </ContextMenuItem>
                  <ContextMenuItem>Create Shortcut…</ContextMenuItem>
                  <ContextMenuItem>Name Window…</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Developer Tools</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuPortal>
            </ContextMenuSub>

            <ContextMenuSeparator />

            <ContextMenuCheckboxItem checked={bookmarksChecked} onCheckedChange={setBookmarksChecked}>
              Show Bookmarks <RightSlot>⌘+B</RightSlot>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
              Show Full URLs
            </ContextMenuCheckboxItem>

            <ContextMenuSeparator />

            <ContextMenuLabel>People</ContextMenuLabel>
            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenuPortal>
      </ContextMenu>
    )
  },
}
