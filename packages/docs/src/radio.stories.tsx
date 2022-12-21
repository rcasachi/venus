import React from "react";
import { Heading, RadioGroup, Radio } from "@venusui/components";

export default { title: 'Radio' };

export const radios = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Sizes</Heading>
    <RadioGroup defaultValue="1">
      <Radio value="1" css={{ marginRight: '$5' }} />
      <Radio value="2" size="2" css={{ marginRight: '$5' }} />
    </RadioGroup>
  </>
);