import { Overlay, OverlayProps, Text } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Overlay',
  component: Overlay,
  args: {
    children: <Text>Overlay element testing</Text>,
    css: { width: '100vh', height: '50vh' },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<OverlayProps>

export const Default: StoryObj<OverlayProps> = {}
