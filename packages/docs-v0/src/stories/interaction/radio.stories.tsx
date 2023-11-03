import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Label, Radio, RadioProps, RadioGroup } from '@venusui/components'

export default {
  title: 'Interaction/Radio',
  args: {
    size: 1,
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
  },
  render: ({ size }: RadioProps) => (
    <RadioGroup defaultValue="1">
      <Flex align="center">
        <Radio size={size} value="1" id="radio1" />
        <Label size={size + 1} htmlFor="radio1" css={{ ml: '$2' }}>
          Select this radio
        </Label>
      </Flex>
    </RadioGroup>
  ),
} as Meta<RadioProps>

export const Default: StoryObj<RadioProps> = {}
