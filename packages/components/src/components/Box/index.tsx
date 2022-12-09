import { styled } from '@venusui/tokens';

export const Box = styled('div');

export const ResponsiveBox = styled('div', {
  backgroundColor: '$pink',
  '@bp1': { backgroundColor: '$turq' },
  '@bp2': { backgroundColor: '$orange' },
});

export const VariantBox = styled('div', {
  variants: {
    color: {
      pink: { backgroundColor: '$pink' },
      turq: { backgroundColor: '$turq' },
      orange: { backgroundColor: '$orange' },
    },
  },
});