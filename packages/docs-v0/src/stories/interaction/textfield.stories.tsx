import type { Meta, StoryObj } from '@storybook/react'
import {
  EyeOpenIcon,
  Flex,
  Label,
  TextField,
  TextFieldProps,
} from '@venusui/components'

export default {
  title: 'Interaction/TextField',
  args: {
    size: 1,
    placeholder: 'Type your name',
    ghost: false,
    disabled: false,
    name: 'name',
    readOnly: false,
    cursor: 'default',
    prefix: undefined,
    sufix: undefined,
  },
  argTypes: {
    state: {
      options: ['invalid', 'valid', undefined],
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
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
    ghost: {
      control: {
        type: 'boolean',
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
    prefix: {
      control: {
        type: 'text',
      },
    },
    sufix: {
      control: {
        type: 'text',
      },
    },
  },
  render: ({ size, ...args }) => {
    return (
      <Flex direction="column" css={{ gap: '$1' }}>
        <Label size={size} htmlFor="textfield-name">
          Name
        </Label>
        <TextField size={size} {...args} id="textfield-name" />
      </Flex>
    )
  },
} as Meta<TextFieldProps>

export const Default: StoryObj<TextFieldProps> = {}

export const WithPrefix: StoryObj<TextFieldProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const WithSufix: StoryObj<TextFieldProps> = {
  args: {
    sufix: '@gmail.com',
  },
}

export const WithSufixAndPrefix: StoryObj<TextFieldProps> = {
  args: {
    prefix: 'https://',
    sufix: '.dev',
  },
}

export const WithIconPrefix: StoryObj<TextFieldProps> = {
  args: {
    prefix: <EyeOpenIcon />,
  },
}
