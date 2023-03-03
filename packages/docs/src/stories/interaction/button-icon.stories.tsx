import { IconButton, IconButtonProps, PaperPlaneIcon } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Interaction/IconButton',
  component: IconButton,
  args: {
    size: 1,
    variant: 'ghost',
    children: <PaperPlaneIcon />,
    disabled: false,
  },
  argTypes: {
    size: {
      options: [1, 2, 3, 4],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['ghost', 'raised'],
      control: {
        type: 'inline-radio',
      },
    },
    state: {
      options: ['active', 'waiting', undefined],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<IconButtonProps>

export const Default: StoryObj<IconButtonProps> = {}
