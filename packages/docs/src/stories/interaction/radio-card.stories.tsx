import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Text, RadioCard, RadioCardProps, RadioCardGroup } from '@venusui/components'

export default {
  title: 'Interaction/RadioCard',
  render: () => (
    <RadioCardGroup defaultValue="1">
      <RadioCard value="1" css={{ mb: '$2' }}>
        <Flex align="center">
          <Text size="4" weight="semi" css={{ mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="3" variant="gray">-$1600</Text>
        </Flex>
      </RadioCard>
      <RadioCard value="2" css={{ mb: '$2' }}>
        <Flex align="center">
          <Text size="4" weight="semi" css={{ mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="3" variant="gray">-$800</Text>
        </Flex>
      </RadioCard>
      <RadioCard value="3" css={{ mb: '$2' }}>
        <Flex align="center">
          <Text size="4" weight="semi" css={{ mr: '$6' }}>
            2.5GHz 14-core Intel Xeon W processor, Turbo Boost up to 4.3GHz
          </Text>
          <Text size="3" variant="gray"></Text>
        </Flex>
      </RadioCard>
    </RadioCardGroup>
  ),
} as Meta<RadioCardProps>

export const Default: StoryObj<RadioCardProps> = {}
