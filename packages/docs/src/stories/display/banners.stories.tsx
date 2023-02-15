import { Banner, BannerProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Banner',
  component: Banner,
  args: {
    variant: 'contrast',
    size: 1,
    children: 'Banner',
    rounded: false,
    border: false,
  },
  argTypes: {
    variant: {
      options: ['contrast', 'gray', 'red', 'blue', 'green'],
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
    children: {
      control: {
        type: 'text',
      },
    },
    rounded: {
      control: {
        type: 'boolean',
      },
    },
    border: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<BannerProps>

export const Default: StoryObj<BannerProps> = {}
