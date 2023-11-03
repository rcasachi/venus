import { Tabs, TabsContent, TabsList, TabsProps, TabsTrigger, Text } from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  args: {
    orientation: 'horizontal',
    defaultValue: 'tab-one',
    children: (
      <>
        <TabsList>
          <TabsTrigger value="tab-one">General</TabsTrigger>
          <TabsTrigger value="tab-two">Hosting</TabsTrigger>
          <TabsTrigger value="tab-three">Editor</TabsTrigger>
          <TabsTrigger value="tab-four">Billing</TabsTrigger>
          <TabsTrigger value="tab-five">SEO</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-one">
          <Text>Tabs Content 1</Text>
        </TabsContent>
        <TabsContent value="tab-two">
          <Text>Tabs Content 2</Text>
        </TabsContent>
        <TabsContent value="tab-three">
          <Text>Tabs Content 3</Text>
        </TabsContent>
        <TabsContent value="tab-four">
          <Text>Tabs Content 4</Text>
        </TabsContent>
        <TabsContent value="tab-five">
          <Text>Tabs Content 5</Text>
        </TabsContent>
      </>
    ),
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TabsProps>

export const Default: StoryObj<TabsProps> = {}
