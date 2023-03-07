import { Box, ProgressBar, ProgressBarProps, Text } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/ProgressBar',
  component: ProgressBar,
  args: {
    variant: 'gray',
    size: 1,
    value: undefined,
  },
  argTypes: {
    variant: {
      options: ['gray', 'blue', 'gradient'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
    value: {
      control: {
        type: 'number',
      },
    },
  },
} as Meta<ProgressBarProps>

export const Default: StoryObj<ProgressBarProps> = {}

export const UITest: StoryObj<ProgressBarProps> = {
  args: {
    max: 100,
    value: 80,
  },
  decorators: [
    (Story) => (
      <Box css={{ mb: '$6' }}>
        <Text size="2">Download 50% complete</Text>
        {Story()}
        <Text size="1" variant="gray">
          46 hours remaining
        </Text>
      </Box>
    )
  ]
}
