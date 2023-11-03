import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuProps,
  IconButton,
  HamburgerMenuIcon,
  DropdownMenuPortal,
  DropdownMenuRightSlot,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  ChevronRightIcon,
  DropdownMenuSubContent,
  DropdownMenuArrow
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react';

export default {
  title: 'Navigation/DropdownMenu',
} as Meta<DropdownMenuProps>

export const Default: StoryObj<DropdownMenuProps> = {
  render: () => {
    const [bookmarksChecked, setBookmarksChecked] = useState(true);
    const [urlsChecked, setUrlsChecked] = useState(false);
    const [person, setPerson] = useState('pedro');

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuPortal>
          <DropdownMenuContent sideOffset={5}>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                New Tab <DropdownMenuRightSlot>⌘+T</DropdownMenuRightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>
                New Window <DropdownMenuRightSlot>⌘+N</DropdownMenuRightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                New Private Window <DropdownMenuRightSlot>⇧+⌘+N</DropdownMenuRightSlot>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  More Tools
                  <DropdownMenuRightSlot>
                    <ChevronRightIcon />
                  </DropdownMenuRightSlot>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent sideOffset={2} alignOffset={-5}>
                    <DropdownMenuItem>
                      Save Page As… <DropdownMenuRightSlot>⌘+S</DropdownMenuRightSlot>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
                    <DropdownMenuItem>Name Window…</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuCheckboxItem
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                Show Bookmarks <DropdownMenuRightSlot>⌘+B</DropdownMenuRightSlot>
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={urlsChecked} onCheckedChange={setUrlsChecked}>
                Show Full URLs
              </DropdownMenuCheckboxItem>

              <DropdownMenuSeparator />

              <DropdownMenuLabel>People</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
                <DropdownMenuRadioItem value="pedro">Pedro Duarte</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    )
  },
}

