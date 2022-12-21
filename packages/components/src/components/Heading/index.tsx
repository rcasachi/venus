import React from 'react';

import { CSS } from '@venusui/tokens';

import { Text } from '../Text';
import { HeadingProps, HeadingSizeVariants, TextSizeVariants } from './types';

export const DEFAULT_TAG = 'h1';

export const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  (props, forwardedRef) => {
    const { size = '1', ...textProps } = props;

    const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
      1: { '@initial': '4', '@bp2': '5' },
      2: { '@initial': '6', '@bp2': '7' },
      3: { '@initial': '7', '@bp2': '8' },
      4: { '@initial': '8', '@bp2': '9' },
    };

    const textCss: Record<HeadingSizeVariants, CSS> = {
      1: { fontWeight: 500, lineHeight: '20px', '@bp2': { lineHeight: '23px' } },
      2: { fontWeight: 500, lineHeight: '25px', '@bp2': { lineHeight: '30px' } },
      3: { fontWeight: 500, lineHeight: '33px', '@bp2': { lineHeight: '41px' } },
      4: { fontWeight: 500, lineHeight: '35px', '@bp2': { lineHeight: '55px' } },
    };

    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        ref={forwardedRef}
        size={textSize[size]}
        css={{
          fontVariantNumeric: 'proportional-nums',
          ...textCss[size],
          ...props.css,
        }}
      />
    );
  }
);