import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose
} from '@venusui/components';

export default {
  title: 'Display/Dialog',
} as Meta<DialogProps>

export const Default: StoryObj<DialogProps> = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog Heading</DialogTitle>
        <DialogDescription>
          There are 5 variants to choose from. Use is for positive states. This
          is a link Traditional business literature won’t help you solve it-
          most of that stuff is focused on life after product/market fit, after
          the Trough of Sorrow.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}

export const WithPopover: StoryObj<DialogProps> = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Dialog Heading</DialogTitle>
        <DialogDescription>
          There are 5 variants to choose from. Use is for positive states. This
          is a link Traditional business literature won’t help you solve it-
          most of that stuff is focused on life after product/market fit, after
          the Trough of Sorrow.
        </DialogDescription>

        <Popover>
          <PopoverTrigger asChild>
            <Button>Open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverClose asChild>
              <Button ghost>Close</Button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </DialogContent>
    </Dialog>
  )
}
