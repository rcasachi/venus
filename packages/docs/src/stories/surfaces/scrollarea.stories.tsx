import type { Meta, StoryObj } from '@storybook/react'
import { Box, type ScrollAreaProps, ScrollArea } from '@venusui/design-system'

export default {
  title: 'Surfaces/ScrollArea',
  component: ScrollArea,
  args: {
    children: (
      <>
        <Box
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: '#3399ff',
          }}
        ></Box>
        <Box
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#33ddff',
          }}
        ></Box>
        <Box
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: '#0099ff',
          }}
        ></Box>
      </>
    ),
    style: { height: '200px' },
  },
} as Meta<ScrollAreaProps>

export const Default: StoryObj<ScrollAreaProps> = {}
