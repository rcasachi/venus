import React from "react";
import { ControlGroup, Button, TextField, Select } from "@venusui/components";

export default { title: 'ControlGroup' };

export const groups = () => (
  <>
    <ControlGroup>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ControlGroup>
    <ControlGroup css={{ marginTop: '$6' }}>
      <Button>Button</Button>
      <Button>Button</Button>
    </ControlGroup>
    <ControlGroup css={{ marginTop: '$6' }}>
      <Button>Button</Button>
      <TextField placeholder="Hello world" />
    </ControlGroup>
    <ControlGroup css={{ marginTop: '$6' }}>
      <TextField placeholder="Hello world" />
      <Button>Button</Button>
    </ControlGroup>
    <ControlGroup css={{ marginTop: '$6' }}>
      <TextField size="1" placeholder="Hello world" />
      <Select>
        <option>Button</option>
        <option>Button</option>
        <option>Button</option>
        <option>Button</option>
        <option>Button</option>
      </Select>
    </ControlGroup>
    <ControlGroup css={{ marginTop: '$6' }}>
      <TextField placeholder="Hello world" />
      <TextField placeholder="Hello world" />
      <TextField placeholder="Hello world" />
    </ControlGroup>
    <ControlGroup css={{ marginTop: '$6' }}>
      <TextField size="2" placeholder="Hello world" />
      <Button size="2">Button</Button>
    </ControlGroup>
  </>
);