import { VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'
import { DEFAULT_TAG_P } from '.'
import { Text } from '../Text'

export type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
export type ParagraphSizeVariants = '1' | '2'
export type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
export type ParagraphProps = ComponentProps<typeof DEFAULT_TAG_P> &
  ParagraphVariants & { css?: CSS; as?: any }
