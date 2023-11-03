import { Box, Tooltip, TooltipProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Tooltip',
  component: Tooltip,
  args: {
    content:"Tooltip for this box",
    children: <Box css={{ width: '$8', height: '$8', backgroundColor: '$blue9' }}></Box>,
    multiline: false,
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    multiline: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TooltipProps>

export const Default: StoryObj<TooltipProps> = {}

