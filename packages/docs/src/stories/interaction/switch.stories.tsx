import { Switch, SwitchProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Interaction/Switch',
  component: Switch,
  args: {
    size: 1,
  },
  argTypes: {
    size: {
      options: [1, 2],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {}

