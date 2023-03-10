import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Box, Slider, Flex, SliderProps } from '@venusui/components'

export default {
  title: 'Interaction/Slider',
  render: () => (
    <>
     <Heading css={{ marginBottom: '$6' }}>Default</Heading>
     <Box css={{ width: '150px', marginBottom: '$7' }}>
       <Slider defaultValue={[50]} />
     </Box>
     <Heading css={{ marginBottom: '$6' }}>Range</Heading>
     <Flex css={{ gap: '$4', width: '150px', marginBottom: '$7' }}>
       <Slider defaultValue={[25, 75]} />
     </Flex>
     <Heading css={{ marginBottom: '$6' }}>Vertical orientation</Heading>
     <Box css={{ marginTop: '$6' }}>
       <Slider defaultValue={[50]} orientation="vertical" css={{ height: 75 }} />
     </Box>
   </>
  ),
} as Meta<SliderProps>

export const Default: StoryObj<SliderProps> = {}
