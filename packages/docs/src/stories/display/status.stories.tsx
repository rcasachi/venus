import { Status, StatusProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Status',
  component: Status,
  args: {
    size: 2,
    variant: 'gray',
  },
  argTypes: {
    variant: {
      options: ['gray', 'red', 'blue', 'green', 'yellow'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [1, 2],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<StatusProps>

export const Default: StoryObj<StatusProps> = {}
