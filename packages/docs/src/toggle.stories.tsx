import React from "react";
import { Toggle, ShadowNoneIcon } from "@venusui/components";

export default { title: 'Toggle' };

export const toggles = () => (
  <>
    <Toggle shape="circle">
      <ShadowNoneIcon />
    </Toggle>
  </>
);