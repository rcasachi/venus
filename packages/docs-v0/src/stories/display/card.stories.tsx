import {
  Avatar,
  Box,
  Card,
  CardProps,
  Flex,
  Heading,
  Image,
  Text,
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Card',
  render: (args) => (
    <Box css={{ width: 250 }}>
      <Card {...args}>
        <Heading css={{ marginBottom: '$2' }}>
          Modulz raises $4.2M to close the gap between design and code
        </Heading>
        <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
          Modulz is a visual code editor that empowers teams to design, develop,
          document and deploy a design system, without writing code.
        </Text>
      </Card>
    </Box>
  ),
  args: {
    size: 0,
    variant: undefined,
  },
  argTypes: {
    variant: {
      options: ['interactive', 'ghost', 'active', undefined],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: [0, 1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {}

export const Interactive: StoryObj<CardProps> = {
  render: (args) => (
    <Box css={{ width: 250 }}>
      <Card {...args} as="a" href="#" variant="interactive">
        <Heading css={{ marginBottom: '$2' }}>
          Modulz raises $4.2M to close the gap between design and code
        </Heading>
        <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
          Modulz is a visual code editor that empowers teams to design, develop,
          document and deploy a design system, without writing code.
        </Text>
        <Flex
          css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '$3',
          }}
        >
          <Flex css={{ alignItems: 'center' }}>
            <Avatar
              size="2"
              alt="John Smith"
              src="https:pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
              css={{
                marginRight: '$1',
              }}
            />
            <Text size="2" css={{ color: '$slate11' }}>
              Colm Tuite
            </Text>
          </Flex>
          <Box>
            <Text size="2" css={{ color: '$slate11' }}>
              May 2020
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  ),
}

export const InteractiveWithImage: StoryObj<CardProps> = {
  render: () => (
    <Box css={{ width: 250 }}>
      <Card as="a" href="#" variant="interactive" size={0}>
        <Image
          src="https:images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
          css={{ borderTopLeftRadius: '$3', borderTopRightRadius: '$3' }}
        />
        <Box css={{ padding: '$3' }}>
          <Heading css={{ marginBottom: '$2' }}>
            Modulz raises $4.2M to close the gap between design and code
          </Heading>
          <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
            Modulz is a visual code editor that empowers teams to design,
            develop, document and deploy a design system, without writing code.
          </Text>
          <Flex
            css={{
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: '$3',
            }}
          >
            <Flex css={{ alignItems: 'center' }}>
              <Avatar
                size="2"
                alt="John Smith"
                src="https:pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                fallback="J"
                css={{
                  marginRight: '$1',
                }}
              />
              <Text size="2" css={{ color: '$slate11' }}>
                Colm Tuite
              </Text>
            </Flex>
            <Box>
              <Text size="2" css={{ color: '$slate11' }}>
                May 2020
              </Text>
            </Box>
          </Flex>
        </Box>
      </Card>
    </Box>
  ),
}

export const GhostWithImage: StoryObj<CardProps> = {
  render: (args) => (
    <Box css={{ width: 250 }}>
      <Card as="a" href="#" variant="ghost" {...args}>
        <Image
          src="https://images.unsplash.com/photo-1453235421161-e41b42ebba05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80"
          css={{ borderRadius: '$1', marginBottom: '$3' }}
        />
        <Heading css={{ marginBottom: '$2' }}>
          Modulz raises $4.2M to close the gap between design and code
        </Heading>
        <Text size="3" css={{ color: '$slate11', lineHeight: '23px' }}>
          Modulz is a visual code editor that empowers teams to design, develop,
          document and deploy a design system, without writing code.
        </Text>
        <Flex
          css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '$3',
          }}
        >
          <Flex css={{ alignItems: 'center' }}>
            <Avatar
              size="2"
              alt="John Smith"
              src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
              fallback="J"
              css={{
                marginRight: '$1',
              }}
            />
            <Text size="2" css={{ color: '$slate11' }}>
              Colm Tuite
            </Text>
          </Flex>
          <Box>
            <Text size="2" css={{ color: '$slate11' }}>
              May 2020
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  ),
}

//
//
