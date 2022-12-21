import React from "react";
import { Flex, Heading, Link, Text, Paragraph } from "@venusui/components";

export default { title: 'Typography' };

export const links = () => (
  <>
    <Heading css={{ mb: '$6' }}>Link variants</Heading>
    <Flex css={{ gap: '$6', mb: '$6' }}>
      <Link variant="blue" href="#">
        <Text size="4">Link with jy descenders</Text>
      </Link>
      <Link variant="subtle" href="#">
        <Text size="4">Link with jy descenders</Text>
      </Link>
      <Link variant="contrast" href="#">
        <Text size="4">Link with jy descenders</Text>
      </Link>
    </Flex>
    <Heading css={{ mb: '$6' }}>Inline link test</Heading>
    <Paragraph>
      There are 5 variants to choose from. Use is for positive states.{' '}
      <Link variant="contrast" href="#">
        This is a link
      </Link>{' '}
      Traditional business literature won’t help you solve it- most of that stuff is focused
      on life after product/market fit, after the Trough of Sorrow. A lot of startup stuff
      is focused on the initial phases, when you don’t have a team, idea, or investors.
    </Paragraph>
  </>
);