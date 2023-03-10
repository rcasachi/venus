import { ShadowNoneIcon, Toggle, ToggleProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Interaction/Toggle',
  component: Toggle,
  args: {
    size: 1,
    shape: 'circle',
    children: <ShadowNoneIcon />
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
    shape: {
      options: ['circle', 'square'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ToggleProps>

export const Default: StoryObj<ToggleProps> = {}
