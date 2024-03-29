import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionProps,
  AccordionTrigger,
  Text
} from '@venusui/components'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Display/Accordion',
  render: () => (
    <Accordion type="single">
      <AccordionItem value="accordion-one">
        <AccordionTrigger>
          <Text size="3" css={{ fontWeight: 500 }}>
            Accordion one
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in,
            tables are a pain to navigate. I added a focus wrapper that will
            announce the table context to the user when focused, which also
            allows keyboard users to navigate the overflow more easily.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accordion-two">
        <AccordionTrigger>
          <Text size="3" css={{ fontWeight: 500 }}>
            Accordion two
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in,
            tables are a pain to navigate. I added a focus wrapper that will
            announce the table context to the user when focused, which also
            allows keyboard users to navigate the overflow more easily.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accordion-three">
        <AccordionTrigger>
          <Text size="3" css={{ fontWeight: 500 }}>
            Accordion one
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in,
            tables are a pain to navigate. I added a focus wrapper that will
            announce the table context to the user when focused, which also
            allows keyboard users to navigate the overflow more easily.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="accordion-four">
        <AccordionTrigger>
          <Text size="3" css={{ fontWeight: 500 }}>
            Accordion two
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text size="3" css={{ lineHeight: '23px' }}>
            The other main improvement is with tables, which we'll probably use
            a lot. With horizontal overflow on small devices and when zoomed in,
            tables are a pain to navigate. I added a focus wrapper that will
            announce the table context to the user when focused, which also
            allows keyboard users to navigate the overflow more easily.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} as Meta<AccordionProps>

export const Default: StoryObj<AccordionProps> = {}
