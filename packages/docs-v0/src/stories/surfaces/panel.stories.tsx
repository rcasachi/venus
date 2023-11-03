import { Panel, PanelProps, Text } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Panel',
  component: Panel,
  args: {
    children: <Text>Panel element testing</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<PanelProps>

export const Default: StoryObj<PanelProps> = {}
