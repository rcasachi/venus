import React from "react";
import { Flex, Heading, Status } from "@venusui/components";

export default { title: 'Status' };

export const statuses = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Default Status</Heading>
    <Status></Status>
    <Heading css={{ marginTop: '$7', marginBottom: '$7' }}>Sizes</Heading>
    <Flex css={{ gap: '$6', marginTop: '$6' }}>
      <Status size="1"></Status>
      <Status size="2"></Status>
    </Flex>
    <Heading css={{ marginTop: '$7', marginBottom: '$7' }}>Variants</Heading>
    <Flex css={{ gap: '$6', marginTop: '$6' }}>
      <Status variant="gray" />
      <Status variant="blue" />
      <Status variant="green" />
      <Status variant="yellow" />
      <Status variant="red" />
    </Flex>
  </>
);