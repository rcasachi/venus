import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps, Flex, Label } from '@venusui/components'

export default {
  title: 'Interaction/Checkbox',
  args: {
    size: 2,
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
  },
  render: ({ size }: CheckboxProps) => (
    <Flex css={{ alignItems: 'center', gap: '$2' }}>
      <Checkbox size={size} id="checkbox1" />
      <Label size={size} htmlFor="checkbox1">
        Accept terms of use
      </Label>
    </Flex>
  ),
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
