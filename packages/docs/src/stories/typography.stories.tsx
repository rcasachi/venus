/* eslint-disable react/no-unescaped-entities */
import { Flex, Heading, Paragraph, Sup, Sub } from '@venusui/components'

export default { title: 'Typography' }

export const tp = () => (
  <>
    <Flex css={{ flexDirection: 'column', gap: '$4' }}>
      <Heading size="4" as="h1">
        This is a heading size 4
      </Heading>
      <Heading size="3" as="h1">
        This is a heading size 3
      </Heading>
      <Heading size="2" as="h1">
        This is a heading size 2
      </Heading>
      <Heading size="1" as="h1">
        This is a heading size 1
      </Heading>
      <Paragraph size="2">
        This is a Paragraph size 2. Design in the target medium. Prototype with
        real components. Handoff production code.
      </Paragraph>
      <Paragraph size="1">
        This is a Paragraph size 1. A really long paragraph of text, to
        demonstrate prose text, like for example, the kind you might read in a
        blog post. The reason we're using prose here is because the most common
        use case for this container size is longform text. So we're previewing
        some longform text here so we can make sure the container width provides
        an optimal line length for this font size.
      </Paragraph>
      <Paragraph>
        This is a Sup and Sub demo. The kind you might read in a blog post.
        <Sup>1</Sup> This is a really long paragraph of text, to demonstrate
        prose text.<Sub>1</Sub>
      </Paragraph>
    </Flex>
  </>
)
