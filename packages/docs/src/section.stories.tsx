import React from "react";
import { Section, Text } from "@venusui/components";

export default { title: 'Section' };

export const sections = () => (
  <>
    <Section size="1" css={{ backgroundColor: '$slate3', margin: '$1' }}>
      <Text as="p" size="4" css={{ textAlign: 'center' }}>
        Section 1
      </Text>
    </Section>
    <Section size="2" css={{ backgroundColor: '$slate3', margin: '$1' }}>
      <Text as="p" size="4" css={{ textAlign: 'center' }}>
        Section 2
      </Text>
    </Section>
    <Section size="3" css={{ backgroundColor: '$slate3', margin: '$1' }}>
      <Text as="p" size="4" css={{ textAlign: 'center' }}>
        Section 3
      </Text>
    </Section>
  </>
);