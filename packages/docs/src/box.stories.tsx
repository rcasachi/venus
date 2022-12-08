import React from 'react';

// import { Box, VariantBox, ResponsiveBox } from '@venus/components';

export default { title: 'Box' };

export const withStyle = () => (
  // <Box
  //   css={{
  //     backgroundColor: '$turq',
  //     color: '$black',
  //     fontSize: '$5',
  //     padding: '$4',
  //   }}
  // >
  //   Box
  // </Box>
  <div></div>
);

export const withAsAttribute = () => (
  // <Box as="h1" css={{ color: '$turq' }}>
  //   Box as h1
  // </Box>
  <div></div>
);

export const withResponsiveVariants = () => (
  <>
    {/* <ResponsiveBox>responsive</ResponsiveBox>
    <VariantBox
      color={{
        '@initial': 'orange',
        '@bp1': 'pink',
        '@bp2': 'turq',
      }}
    >
      variant
    </VariantBox> */}
    <div></div>
  </>
);