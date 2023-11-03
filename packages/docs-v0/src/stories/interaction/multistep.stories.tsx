import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@venusui/components'

export default {
  title: 'Interaction/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
    variant: 'default',
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
