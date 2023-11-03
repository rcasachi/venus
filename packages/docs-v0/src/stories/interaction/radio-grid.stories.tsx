import type { Meta, StoryObj } from '@storybook/react'
import { Text, RadioGrid, RadioGridProps, RadioGridGroup } from '@venusui/components'

export default {
  title: 'Interaction/RadioGrid',
  render: () => (
    <RadioGridGroup defaultValue="1">
      <RadioGrid value="1">
        <Text size="3" variant="gray">-$1600</Text>
      </RadioGrid>
      <RadioGrid value="2">
        <Text size="3" variant="gray">-$800</Text>
      </RadioGrid>
      <RadioGrid value="3">
        <Text size="3" variant="gray">-$100</Text>
      </RadioGrid>
    </RadioGridGroup>
  ),
} as Meta<RadioGridProps>

export const Default: StoryObj<RadioGridProps> = {}
