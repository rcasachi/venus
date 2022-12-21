import React from "react";
import { Flex, Box } from "@venusui/components";

export default { title: 'Flex' };

export const flexBox = () => (
  <>
    <Flex direction="column" align="center" gap="6">
      <Box css={{ width: '$8', height: '$8', backgroundColor: '$blue9' }}></Box>
      <Box css={{ width: '$5', height: '$5', backgroundColor: '$blue9' }}></Box>
      <Box css={{ width: '$7', height: '$7', backgroundColor: '$blue9' }}></Box>
    </Flex>
  </>
);