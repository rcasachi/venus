import type { Meta, StoryObj } from '@storybook/react'
import { Code, CodeProps, Paragraph } from '@venusui/components'

export default {
  title: 'Typography/Code',
  component: Code,
  args: {
    children: "console.log('VenusUi')",
  },
  argTypes: {
    variant: {
      options: [
        'violet',
        'gray',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<CodeProps>

export const Default: StoryObj<CodeProps> = {}

export const InsideParagraph: StoryObj<CodeProps> = {
  render: () => (
    <Paragraph>
      There are 5 variants to choose from. Use{' '}
      <Code>console.log('Radix')</Code> is for positive states.
      Traditional business literature won’t help you solve it- most of that
      stuff is focused on life after product/market fit, after the Trough of
      Sorrow. A lot of startup stuff is focused on the initial phases, when you
      don’t have a team, idea, or investors.
    </Paragraph>
  )
}
