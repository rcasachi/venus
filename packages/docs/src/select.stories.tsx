import React from "react";
import { Flex, Select } from "@venusui/components";

export default { title: 'Select' };

export const selects = () => (
  <Flex css={{ alignItems: 'flex-start', gap: '$6' }}>
    <Select>
      <option>No selected</option>
      <option value="1">Select Value 1</option>
    </Select>
  </Flex>
);