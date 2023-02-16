import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  ControlGroup,
  ControlGroupProps,
  Select,
  TextField,
} from '@venusui/components'

export default {
  title: 'Interaction/ControlGroup',
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
} as Meta<ControlGroupProps>

export const WithButtons: StoryObj<ControlGroupProps> = {
  render: ({ size }) => (
    <ControlGroup>
      <Button size={size}>Button</Button>
      <Button size={size}>Button</Button>
      <Button size={size}>Button</Button>
      <Button size={size}>Button</Button>
    </ControlGroup>
  ),
}

export const WithTwoButtons: StoryObj<ControlGroupProps> = {
  render: ({ size }) => (
    <ControlGroup>
      <Button size={size}>Button</Button>
      <Button size={size}>Button</Button>
    </ControlGroup>
  ),
}

export const WithButtonTextField: StoryObj<ControlGroupProps> = {
  render: ({ size }) => (
    <ControlGroup>
      <Button size={size}>Button</Button>
      <TextField placeholder="Hello world" size={size} />
    </ControlGroup>
  ),
}

export const WithTextFieldButton: StoryObj<ControlGroupProps> = {
  render: ({ size }) => (
    <ControlGroup>
      <TextField placeholder="Hello world" size={size} />
      <Button size={size}>Button</Button>
    </ControlGroup>
  ),
}

export const WithSelectTextField: StoryObj<ControlGroupProps> = {
  render: ({ size }) => (
    <ControlGroup>
      <TextField size={size} placeholder="Hello world" />
      <Select size={size}>
        <option>Button</option>
        <option>Button</option>
        <option>Button</option>
        <option>Button</option>
        <option>Button</option>
      </Select>
    </ControlGroup>
  ),
}

export const WithTextField: StoryObj<ControlGroupProps> = {
  render: ({ size }) => (
    <ControlGroup>
      <TextField placeholder="Hello world" size={size} />
      <TextField placeholder="Hello world" size={size} />
      <TextField placeholder="Hello world" size={size} />
    </ControlGroup>
  ),
}
