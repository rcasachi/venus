import type { Meta, StoryObj } from '@storybook/react'
import {
  Avatar,
  AvatarGroup,
  AvatarNestedItem,
  AvatarProps,
  Box,
  Flex,
  Heading,
  Link2Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@venusui/components'

export default {
  title: 'Display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/rcasachi.png',
    alt: 'Rafael Casachi',
    size: 5,
    shape: 'circle',
    inactive: false,
    variant: 'black',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    inactive: {
      control: {
        type: 'boolean',
      },
    },
    interactive: {
      control: {
        type: 'boolean',
      },
    },
    shape: {
      options: ['circle', 'square'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [1, 2, 3, 4, 5, 6, 7],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: [
        'primary',
        'secondary',
        'accent',
        'black',
        'gray',
        'tomato',
        'red',
        'crimson',
        'pink',
        'plum',
        'purple',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'grass',
        'brown',
        'bronze',
        'gold',
        'sky',
        'mint',
        'lime',
        'yellow',
        'amber',
        'orange',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    status: {
      options: [
        'primary',
        'secondary',
        'accent',
        'gray',
        'red',
        'blue',
        'green',
        'yellow',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    children: 'RC',
  },
}

export const WithFallbackIcon: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    children: <Link2Icon />,
  },
}

export const Interactive: StoryObj<AvatarProps> = {
  render: (props) => (
    <>
      <Heading size={4}>Interactive avatar</Heading>
      <Flex css={{ gap: '$6' }}>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar {...props} interactive />
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we will probably
              use a lot. With horizontal overflow on small devices and when
              zoomed in.
            </Text>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Avatar {...props} interactive />
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we will probably
              use a lot. With horizontal overflow on small devices and when
              zoomed in.
            </Text>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Avatar {...props} interactive src="#">
              RC
            </Avatar>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we will probably
              use a lot. With horizontal overflow on small devices and when
              zoomed in.
            </Text>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Avatar {...props} interactive src="#">
              <Link2Icon />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent css={{ padding: '$3' }}>
            <Text size="2" css={{ lineHeight: '18px' }}>
              The other main improvement is with tables, which we will probably
              use a lot. With horizontal overflow on small devices and when
              zoomed in.
            </Text>
          </PopoverContent>
        </Popover>
      </Flex>
    </>
  ),
}

export const Grouped: StoryObj<AvatarProps> = {
  render: (props) => (
    <>
      <Heading size={4}>Grouped avatars</Heading>
      <Flex>
        <AvatarGroup>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
        </AvatarGroup>

        <AvatarGroup>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
          <AvatarNestedItem>
            <Avatar {...props} />
          </AvatarNestedItem>
        </AvatarGroup>
      </Flex>
    </>
  ),
}

export const Nested: StoryObj<AvatarProps> = {
  render: (props) => (
    <>
      <Heading>Nested avatars</Heading>
      <Flex>
        <Box
          css={{
            position: 'relative',
          }}
        >
          <Avatar {...props} size={5} />
          <Box
            as="span"
            css={{
              position: 'absolute',
              bottom: '0',
              right: '0',
              boxShadow: '0 0 0 3px $colors$loContrast',
              borderRadius: '$round',
              marginRight: '-3px',
              marginBottom: '-3px',
            }}
          >
            <Avatar {...props} size={1} />
          </Box>
        </Box>
      </Flex>
    </>
  ),
}
