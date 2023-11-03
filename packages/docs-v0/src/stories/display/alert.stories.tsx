import { Alert, AlertProps, Heading, Link, Text } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Alert',
  component: Alert,
  args: {
    variant: 'contrast',
    size: 1,
    children: (
      <Text size="2">
        A modal dialog that interrupts the user with{' '}
        <Link href="#">important content</Link> and expects a response.
      </Text>
    ),
  },
  argTypes: {
    variant: {
      options: [
        'contrast',
        'gray',
        'primary',
        'secondary',
        'accent',
        'success',
        'error',
        'warning',
        'info',
        'red',
        'blue',
        'green',
      ],
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
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<AlertProps>

export const Default: StoryObj<AlertProps> = {}

export const WithHeading: StoryObj<AlertProps> = {
  args: {
    variant: 'contrast',
    children: (
      <>
        <Heading
          size="3"
          css={{ fontWeight: 500, lineHeight: '20px', marginBottom: '$1' }}
        >
          Alert heading
        </Heading>
        <Text size="2" css={{ lineHeight: '17px' }}>
          A modal dialog that interrupts the user with{' '}
          <Link href="#">important content</Link> and expects a response.
        </Text>
      </>
    ),
  },
}
