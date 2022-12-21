import React from "react";
import { Heading, Switch } from "@venusui/components";

export default { title: 'Switch' };

export const switches = () => (
  <>
    <Heading css={{ marginBottom: '$6' }}>Sizes</Heading>
    <Switch />
    <Switch size="2" css={{ marginLeft: '$6' }} />
  </>
);