import React from "react";
import { Flex, Alert, Text, Link } from "@venusui/components";

export default { title: 'Alert' };

export const alerts = () => (
  <>
    <Flex css={{ gap: '$2', mt: '$6' }}>
      <Alert variant="loContrast">
        <Text size="3" css={{ fontWeight: 500, lineHeight: '20px', marginBottom: '$1' }}>
          Alert heading
        </Text>
        <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
          A modal dialog that interrupts the user with{' '}
          <Link href="#">important content</Link> and expects a response.
        </Text>
      </Alert>
      <Alert variant="gray">
        <Text size="3" css={{ fontWeight: 500, lineHeight: '20px', marginBottom: '$1' }}>
          Alert heading
        </Text>
        <Text size="2" variant="gray" css={{ lineHeight: '17px' }}>
          A modal dialog that interrupts the user with{' '}
          <Link href="#">important content</Link> and expects a response.
        </Text>
      </Alert>
      <Alert variant="blue">
        <Text
          size="3"
          variant="blue"
          css={{ fontWeight: 500, lineHeight: '20px', marginBottom: '$1' }}
        >
          Alert heading
        </Text>
        <Text size="2" variant="blue" css={{ lineHeight: '17px' }}>
          A modal dialog that interrupts the user with{' '}
          <Link href="#">important content</Link> and expects a response.
        </Text>
      </Alert>
      <Alert variant="green">
        <Text
          size="3"
          variant="green"
          css={{ fontWeight: 500, lineHeight: '20px', marginBottom: '$1' }}
        >
          Alert heading
        </Text>
        <Text size="2" variant="green" css={{ lineHeight: '17px' }}>
          A modal dialog that interrupts the user with{' '}
          <Link href="#">important content</Link> and expects a response.
        </Text>
      </Alert>
      <Alert variant="red">
        <Text
          size="3"
          variant="red"
          css={{ fontWeight: 500, lineHeight: '20px', marginBottom: '$1' }}
        >
          Alert heading
        </Text>
        <Text size="2" variant="red" css={{ lineHeight: '17px' }}>
          A modal dialog that interrupts the user with{' '}
          <Link href="#">important content</Link> and expects a response.
        </Text>
      </Alert>
    </Flex>
  </>
);