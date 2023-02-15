import {
  Badge,
  BadgeProps,
  Box,
  CaretDownIcon,
  Flex,
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Badge',
  component: Badge,
  args: {
    variant: 'gray',
    size: 1,
    children: 'Coming soon',
    interactive: false,
  },
  argTypes: {
    variant: {
      options: [
        'gray',
        'red',
        'crimson',
        'pink',
        'purple',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange',
        'gold',
        'bronze',
      ],
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
    children: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    interactive: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<BadgeProps>

export const Default: StoryObj<BadgeProps> = {}

export const Interactive: StoryObj<BadgeProps> = {
  render: () => (
    <Flex css={{ gap: '$5', flexWrap: 'wrap', marginTop: '$6' }}>
      <Badge as="a" href="#" size="2" variant="red" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="crimson" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="pink" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="purple" interactive>
        Failed
        <Box css={{ marginLeft: 5 }}>
          <CaretDownIcon />
        </Box>
      </Badge>
      <Badge as="button" size="2" variant="violet" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="indigo" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="blue" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="cyan" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="teal" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="green" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="lime" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="yellow" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="orange" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="gold" interactive>
        Winner
      </Badge>
      <Badge as="button" size="2" variant="bronze" interactive>
        Runner-up
      </Badge>
      <Badge as="button" size="2" variant="bronze" interactive disabled>
        Disabled
      </Badge>
    </Flex>
  ),
}
