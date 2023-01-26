import type { Meta, StoryObj } from '@storybook/react'
import { Box, ScrollAreaProps, ScrollArea } from '@venusui/components'

export default {
  title: 'Surfaces/ScrollArea',
  component: ScrollArea,
  args:{
    children: (
      <>
        <Box css={{ width: '100px', height: '100px', backgroundColor: '$blue9' }}></Box>
        <Box css={{ width: '150px', height: '150px', backgroundColor: '$blue8' }}></Box>
        <Box css={{ width: '200px', height: '200px', backgroundColor: '$blue11' }}></Box>
      </>
    ),
    css: { height: '200px' }
  }
} as Meta<ScrollAreaProps>

export const Default: StoryObj<ScrollAreaProps> = {}
