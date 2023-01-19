import type { Meta, StoryObj } from '@storybook/react'
import { Sub, SubProps, Paragraph } from '@venusui/components'

export default {
  title: 'Typography/Sub',
  component: Sub,
  args: {
    children: 'sub information',
  },
} as Meta<SubProps>

export const Primary: StoryObj<SubProps> = {}

export const InsideParagraph: StoryObj<SubProps> = {
  render: () => (
    <Paragraph>
      There are 5 variants to choose from. Use{' '}
      <Sub>another</Sub> is for positive states.
      Traditional business literature won’t help you solve it- most of that
      stuff is focused on life after product/market fit, after the Trough of
      Sorrow. A lot of startup stuff is focused on the initial phases, when you
      don’t have a team, idea, or investors.
    </Paragraph>
  )
}
