import type { Meta, StoryObj } from '@storybook/react'
import { Paragraph, ParagraphProps } from '@venusui/components'

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit est veniam? Rem recusandae sint perspiciatis debitis corrupti. Deserunt neque exercitationem illo voluptatum laudantium culpa suscipit accusantium blanditiis voluptas numquam.',
    size: '3',
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
  },
} as Meta<ParagraphProps>

export const Default: StoryObj<ParagraphProps> = {}
