import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextField, TextFieldProps } from '@venusui/components'

export default {
  title: 'Interaction/TextField',
  component: TextField,
  args: {},
  argTypes: {
    variant: {
      options: ['ghost', null],
      control: {
        type: 'inline-radio',
      },
    },
    state: {
      options: ['invalid', 'valid', null],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [1, 2],
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
    cursor: {
      options: ['default', 'text'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="1">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextFieldProps>

export const Primary: StoryObj<TextFieldProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextFieldProps> = {
  args: {
    prefix: 'cal.com/',
  },
}
