import {
  Flex,
  Text,
  VerifiedBadge,
  VerifiedBadgeProps,
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/VerifiedBadge',
  component: VerifiedBadge,
  args: {
    css: { alignSelf: 'center', marginRight: '$1', marginLeft: '$1' },
  },
  decorators: [
    (Story) => (
      <Flex css={{ alignItems: 'baseline' }}>
        <Text size="2" css={{ fontWeight: '500' }}>
          Rafael Casachi
        </Text>
        {Story()}
        <Text size="2" css={{ color: '$slate11' }}>
          @rcasachi
        </Text>
      </Flex>
    ),
  ],
} as Meta<VerifiedBadgeProps>

export const Default: StoryObj<VerifiedBadgeProps> = {}
