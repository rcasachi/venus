import { Flex, Separator, SeparatorProps, Text } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Separator',
  component: Separator,
  args: {
    orientation: 'horizontal',
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SeparatorProps>

export const Default: StoryObj<SeparatorProps> = {}

export const Vertical: StoryObj<SeparatorProps> = {
  render: () => (
    <Flex css={{ height: 20, alignItems: 'center' }}>
      <Text>Blog</Text>
      <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
      <Text>Docs</Text>
      <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
      <Text>Source</Text>
    </Flex>
  )
}
