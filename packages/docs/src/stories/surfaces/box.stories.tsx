import { Text } from '@venusui/components'
import { Box, type BoxProps } from '@venusui/design-system'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Box element testing</Text>,
    className: 'm-2 p-2',
    style: {
      backgroundColor: '#353599',
    },
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
