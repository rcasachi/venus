import React from "react";
import { Box, ScrollArea } from "@venusui/components";

export default { title: 'ScrollArea' };

export const areas = () => (
  <Box
      css={{
      width: '250px',
        height: '100px',
        borderRight: '1px solid $canvas',
        paddingTop: '$1',
        paddingBottom: '$1',
        backgroundColor: '$loContrast',
      }}
    >
    <ScrollArea>
      <Box css={{ width: '$8', height: '$8', backgroundColor: '$blue9' }}></Box>
      <Box css={{ width: '$5', height: '$5', backgroundColor: '$blue8' }}></Box>
      <Box css={{ width: '$7', height: '$7', backgroundColor: '$gray9' }}></Box>
    </ScrollArea>
  </Box>
);