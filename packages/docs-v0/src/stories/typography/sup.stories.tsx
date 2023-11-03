import type { Meta, StoryObj } from '@storybook/react'
import { Sup, SupProps, Paragraph } from '@venusui/components'

export default {
  title: 'Typography/Sup',
  component: Sup,
  args: {
    children: 'sup information',
  },
} as Meta<SupProps>

export const Default: StoryObj<SupProps> = {}

export const InsideParagraph: StoryObj<SupProps> = {
  render: () => (
    <Paragraph>
      There are 5 variants to choose from. Use{' '}
      <Sup>another</Sup> is for positive states.
      Traditional business literature won’t help you solve it- most of that
      stuff is focused on life after product/market fit, after the Trough of
      Sorrow. A lot of startup stuff is focused on the initial phases, when you
      don’t have a team, idea, or investors.
    </Paragraph>
  )
}
