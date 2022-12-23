import { ComponentProps } from 'react'

import { Text } from '../Text'
import { DEFAULT_TAG } from '.'
import { CSS, VariantProps } from '@stitches/react'

export type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>

export type HeadingSizeVariants = '1' | '2' | '3' | '4'

export type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>

export type HeadingProps = ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any }
