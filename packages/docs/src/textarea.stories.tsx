import React from "react";
import { Flex, TextArea } from "@venusui/components";

export default { title: 'TextArea' };

export const textareas = () => (
  <>
    <Flex css={{ alignItems: 'flex-start', gap: '$6' }}>
      <TextArea size="1" placeholder="Size 1"></TextArea>
      <TextArea size="2" placeholder="Size 1"></TextArea>
      <TextArea size="3" placeholder="Size 1"></TextArea>
    </Flex>
    <Flex css={{ alignItems: 'flex-start', gap: '$6', marginTop: '$6' }}>
      <TextArea size="2" placeholder="Size 1" disabled></TextArea>
      <TextArea
        size="2"
        placeholder="Size 1"
        readOnly
        defaultValue="eihuweofjew"
      ></TextArea>
    </Flex>
  </>
);