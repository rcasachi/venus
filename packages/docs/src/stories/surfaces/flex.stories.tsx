import { Box, Flex, type FlexProps } from '@venusui/design-system'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <Box
          style={{
            width: 'var(--space-8)',
            height: 'var(--space-8)',
            backgroundColor: '#335544',
          }}
        ></Box>
        <Box
          style={{
            width: 'var(--space-5)',
            height: 'var(--space-5)',
            backgroundColor: '#3399ff',
          }}
        ></Box>
        <Box
          style={{
            width: 'var(--space-7)',
            height: 'var(--space-7)',
            backgroundColor: '#993355',
          }}
        ></Box>
      </>
    ),
    style: { backgroundColor: '#222232', padding: 'var(--space-2)' },
  },
  argTypes: {
    direction: {
      options: ['row', 'column', 'rowReverse', 'columnReverse'],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: ['start', 'center', 'end', 'stretch', 'baseline'],
      control: {
        type: 'inline-radio',
      },
    },
    justify: {
      options: ['start', 'center', 'end', 'between', 'around'],
      control: {
        type: 'inline-radio',
      },
    },
    wrap: {
      options: ['noWrap', 'wrap', 'wrapReverse'],
      control: {
        type: 'inline-radio',
      },
    },
    gap: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<FlexProps>

export const Default: StoryObj<FlexProps> = {}
