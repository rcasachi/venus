import { Skeleton, SkeletonProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Skeleton',
  component: Skeleton,
  args: {
    variant: 'text',
    size: undefined,
  },
  argTypes: {
    variant: {
      options: ['avatar', 'text', 'title', 'heading', 'button'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [1, 2, 3, 4, 5, 6, 7, undefined],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SkeletonProps>

export const Default: StoryObj<SkeletonProps> = {}
