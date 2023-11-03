import { Box, Flex, FlexProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <Box css={{ width: '$8', height: '$8', backgroundColor: '$blue9' }}></Box>
        <Box css={{ width: '$5', height: '$5', backgroundColor: '$cyan9' }}></Box>
        <Box css={{ width: '$7', height: '$7', backgroundColor: '$indigo9' }}></Box>
      </>
    ),
    css: { backgroundColor: '$gray4', px: '$2', py: '$4' },
  },
  argTypes: {
    direction: {
      options: [
        'row',
        'column',
        'rowReverse',
        'columnReverse',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    align: {
      options: [
        'start',
        'center',
        'end',
        'stretch',
        'baseline',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    justify: {
      options: [
        'start',
        'center',
        'end',
        'between',
        'around',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    wrap: {
      options: [
        'noWrap',
        'wrap',
        'wrapReverse',
      ],
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
