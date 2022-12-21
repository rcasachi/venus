import React from "react";
import { Heading, Box, Flex, Slider } from "@venusui/components";

export default { title: 'Slider' };

export const sliders = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Default</Heading>
    <Box css={{ width: '150px', marginBottom: '$7' }}>
      <Slider defaultValue={[50]} />
    </Box>
    <Heading css={{ marginBottom: '$6' }}>Range</Heading>
    <Flex css={{ gap: '$4', width: '150px', marginBottom: '$7' }}>
      <Slider defaultValue={[25, 75]} />
    </Flex>
    <Heading css={{ marginBottom: '$6' }}>Vertical orientation</Heading>
    <Box css={{ marginTop: '$6' }}>
      <Slider defaultValue={[50]} orientation="vertical" css={{ height: 75 }} />
    </Box>
  </>
);