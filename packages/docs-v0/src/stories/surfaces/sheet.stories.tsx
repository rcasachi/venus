import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  ContentProps,
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@venusui/components'

export default {
  title: 'Surfaces/Sheet',
  render: ({ side }: ContentProps) => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent side={side}></SheetContent>
    </Sheet>
  ),
  args: {
    side: 'right',
  },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ContentProps>

export const Default: StoryObj<ContentProps> = {}
