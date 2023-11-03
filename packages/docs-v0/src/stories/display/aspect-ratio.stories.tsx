import { AspectRatio, AspectRatioProps, Box, Image } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/AspectRatio',
  component: AspectRatio,
  args: {
    children: (
      <Image src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80" />
    ),
    ratio: 16 / 9,
  },
  decorators: [
    (Story) => (
      <Box
        css={{
          width: 300,
          borderRadius: 6,
          overflow: 'hidden',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<AspectRatioProps>

export const Default: StoryObj<AspectRatioProps> = {}
