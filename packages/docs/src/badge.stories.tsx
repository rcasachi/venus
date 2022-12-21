import React from "react";
import { Flex, Box, Badge, Heading, Status, CaretDownIcon } from "@venusui/components";

export default { title: 'Badge' };

export const badges = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Default Badge</Heading>
    <Badge css={{ marginBottom: '$6' }}>Coming soon</Badge>
    <Heading css={{ marginBottom: '$6' }}>Sizes</Heading>
    <Flex
      css={{
        alignItems: 'center',
        gap: '$5',
        flexWrap: 'wrap',
        marginBottom: '$7',
      }}
    >
      <Badge size="1">Coming soon</Badge>
      <Badge size="2">Coming soon</Badge>
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Variants</Heading>
    <Flex css={{ gap: '$5', flexWrap: 'wrap', marginBottom: '$6' }}>
      <Badge size="2" variant="red">
        <Box css={{ marginRight: 5 }}>
          <Status size="1" variant="red" />
        </Box>
        Live
      </Badge>
      <Badge size="2" variant="crimson">
        Approved
      </Badge>
      <Badge size="2" variant="pink">
        Pending
      </Badge>
      <Badge size="2" variant="purple">
        Failed
      </Badge>
      <Badge size="2" variant="violet">
        New
      </Badge>
      <Badge size="2" variant="indigo">
        Approved
      </Badge>
      <Badge size="2" variant="blue">
        Pending
      </Badge>
      <Badge size="2" variant="cyan">
        Failed
      </Badge>
      <Badge size="2" variant="teal">
        New
      </Badge>
      <Badge size="2" variant="green">
        Approved
      </Badge>
      <Badge size="2" variant="lime">
        Pending
      </Badge>
      <Badge size="2" variant="yellow">
        Failed
      </Badge>
      <Badge size="2" variant="orange">
        Failed
      </Badge>
      <Badge size="2" variant="gold">
        Winner
      </Badge>
      <Badge size="2" variant="bronze">
        Runner-up
      </Badge>
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Interactive variant</Heading>
    <Flex css={{ gap: '$5', flexWrap: 'wrap', marginTop: '$6' }}>
      <Badge as="a" href="#" size="2" variant="red" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="crimson" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="pink" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="purple" interactive>
        Failed
        <Box css={{ marginLeft: 5 }}>
          <CaretDownIcon />
        </Box>
      </Badge>
      <Badge as="button" size="2" variant="violet" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="indigo" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="blue" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="cyan" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="teal" interactive>
        New
      </Badge>
      <Badge as="button" size="2" variant="green" interactive>
        Approved
      </Badge>
      <Badge as="button" size="2" variant="lime" interactive>
        Pending
      </Badge>
      <Badge as="button" size="2" variant="yellow" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="orange" interactive>
        Failed
      </Badge>
      <Badge as="button" size="2" variant="gold" interactive>
        Winner
      </Badge>
      <Badge as="button" size="2" variant="bronze" interactive>
        Runner-up
      </Badge>
      <Badge as="button" size="2" variant="bronze" interactive disabled>
        Disabled
      </Badge>
    </Flex>
  </>
);