import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Grid,
  Kbd,
  KbdProps,
  Flex,
  Heading,
  Text,
  TriangleUpIcon
} from '@venusui/components'

export default {
  title: 'Typography/Kbd',
  component: Kbd,
  args: {
    children: 'Enter',
  },
  argTypes: {
    size: {
      options: [
        '1',
        '2',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    width: {
      options: [
        null,
        'shift',
        'command',
        'space',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<KbdProps>

export const Default: StoryObj<KbdProps> = {}

export const Variants: StoryObj<KbdProps> = {
  render: () => (
    <>
      <Heading css={{ marginBottom: '$6' }} size="7">Kbd test</Heading>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '$7',
        }}
      >
        <Text>Resize selected object</Text>
        <Flex css={{ alignItems: 'center', gap: '$1' }}>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>
            <TriangleUpIcon />
          </Kbd>
        </Flex>
      </Flex>
      <Heading size="7">Kbd variants</Heading>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          marginTop: '$5',
          marginBottom: '$5',
        }}
      >
        <Box>
          <Flex css={{ marginBottom: '31px' }}>
            <Kbd>Space</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '31px' }}>
            <Kbd>Enter</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '31px' }}>
            <Kbd>Tab</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '31px' }}>
            <Kbd>Shift + Tab</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '31px' }}>
            <Kbd>Esc</Kbd>
          </Flex>
        </Box>
        <Box>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd>I</Kbd>
            <Kbd>A</Kbd>
            <Kbd>W</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd>⇧</Kbd>
            <Kbd>⌘</Kbd>
            <Kbd>A</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd>⌘ + Tab</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd width="command">⌘</Kbd>
            <Kbd>Tab</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd width="shift">⇧</Kbd>
            <Kbd>↑</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd width="shift">⇧</Kbd>
            <Kbd>Tab</Kbd>
          </Flex>
          <Flex css={{}}>
            <Kbd width="space">Space</Kbd>
          </Flex>
        </Box>
        <Box>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd size="1">I</Kbd>
            <Kbd size="1">A</Kbd>
            <Kbd size="1">W</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd size="1">⇧</Kbd>
            <Kbd size="1">⌘</Kbd>
            <Kbd size="1">W</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd size="1">⌘ + Tab</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd size="1" width="command">
              ⌘
            </Kbd>
            <Kbd size="1">Tab</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd size="1" width="shift">
              ⇧
            </Kbd>
            <Kbd size="1">↑</Kbd>
          </Flex>
          <Flex css={{ marginBottom: '$5' }}>
            <Kbd size="1" width="shift">
              ⇧
            </Kbd>
            <Kbd size="1">Tab</Kbd>
          </Flex>
          <Flex>
            <Kbd size="1" width="space">
              Space
            </Kbd>
          </Flex>
        </Box>
      </Grid>
    </>
  )
}
