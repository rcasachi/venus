import type { Meta, StoryObj } from '@storybook/react'
import { Flex, Label, TextArea, TextAreaProps } from '@venusui/components'

export default {
  title: 'Interaction/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Type your secrets',
    size: 1,
    cursor: 'default',
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
    state: {
      options: ['valid', 'invalid', undefined],
      control: {
        type: 'inline-radio',
      },
    },
    cursor: {
      options: ['default', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    readOnly: {
      control: {
        type: 'boolean',
      },
    },
    ghost: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: ({ size, ...args }) => {
    return (
      <Flex direction="column" css={{ gap: '$1' }}>
        <Label size={size} htmlFor="textarea-name">
          Name
        </Label>
        <TextArea size={size} {...args} id="textarea-name" />
      </Flex>
    )
  },
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}
