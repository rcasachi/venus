import { Section, SectionProps, Paragraph } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Section',
  component: Section,
  args: {
    children: <Paragraph size="4" css={{ textAlign: 'center' }}>Section</Paragraph>,
    css: { backgroundColor: '$slate3' },
  },
  argTypes: {
    size: {
      options: [1, 2, 3],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<SectionProps>

export const Default: StoryObj<SectionProps> = {}
