import { Image, ImageProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Image',
  component: Image,
  args: {
    src: 'https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw',
  },
} as Meta<ImageProps>

export const Default: StoryObj<ImageProps> = {}
