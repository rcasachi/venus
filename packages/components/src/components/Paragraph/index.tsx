import { CSS } from '@stitches/react'
import { ElementRef, forwardRef } from 'react'

import { Text } from '../Text'
import {
  ParagraphProps,
  ParagraphSizeVariants,
  TextSizeVariants,
} from './types'

export const DEFAULT_TAG_P = 'p'

export const Paragraph = forwardRef<
  ElementRef<typeof DEFAULT_TAG_P>,
  ParagraphProps
>(function ParagraphRef(props, forwardedRef) {
  const { size = '1', ...textProps } = props

  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '3', '@bp2': '4' },
    2: { '@initial': '5', '@bp2': '6' },
  }

  const textCss: Record<ParagraphSizeVariants, CSS> = {
    1: { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
    2: {
      color: '$slate11',
      lineHeight: '27px',
      '@bp2': { lineHeight: '30px' },
    },
  }

  return (
    <Text
      as={DEFAULT_TAG_P}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        ...textCss[size],
        ...props.css,
      }}
    />
  )
})
