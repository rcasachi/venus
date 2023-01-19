import type { Meta, StoryObj } from '@storybook/react'
import { Label, LabelProps } from '@venusui/components'

export default {
  title: 'Interaction/Label',
  component: Label,
  args: {
    children: 'Label',
  },
  argTypes: {
    size: {
      options: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: [
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
        'gray',
        'contrast',
      ],
      control: {
        type: 'inline-radio',
      },
    },
    gradient: {
      control: {
        type: 'boolean',
      },
    },
    weight: {
      options: ['normal', 'semi', 'bold'],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      control: {
        type: 'text'
      }
    },
    asChild: {
      control: {
        type: 'text'
      }
    },
    htmlFor: {
      control: {
        type: 'text'
      }
    },
  },
} as Meta<LabelProps>

export const Primary: StoryObj<LabelProps> = {}
