import React from "react";
import { Box } from "@venusui/components";

export default { title: 'Box' };

export const boxes = () => (
  <>
    <Box css={{ width: '$8', height: '$8', backgroundColor: '$blue9' }}></Box>
    <Box css={{ width: '$5', height: '$5', backgroundColor: '$blue8' }}></Box>
    <Box css={{ width: '$7', height: '$7', backgroundColor: '$gray9' }}></Box>
  </>
);