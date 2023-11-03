import { Box, Grid, GridProps } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Grid',
  component: Grid,
  args: {
    children: (
      <>
        <Box css={{ height: '$9', backgroundColor: '$blue4' }}></Box>
        <Box css={{ height: '$7', backgroundColor: '$blue5' }}></Box>
        <Box css={{ height: '$7', backgroundColor: '$blue6' }}></Box>
        <Box css={{ height: '$7', backgroundColor: '$blue7' }}></Box>
        <Box css={{ height: '$7', backgroundColor: '$blue8' }}></Box>
        <Box css={{ height: '$7', backgroundColor: '$blue9' }}></Box>
        <Box css={{ height: '$7', backgroundColor: '$blue10' }}></Box>
      </>
    ),
    css: { backgroundColor: '$gray3', px: '$2', py: '$4' },
  },
  argTypes: {
    flow: {
      options: [
        'row',
        'column',
        'dense',
        'rowDense',
        'columnDense',
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
    columns: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    gapX: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: {
        type: 'inline-radio',
      },
    },
    gapY: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<GridProps>

export const Default: StoryObj<GridProps> = {}
