import { ComponentProps } from 'react'
import { VariantProps } from '@stitches/react'

import { DEFAULT_TAG_P } from '.'
import { Text } from '@components/typography/Text'

export type UnionProps = ComponentProps<typeof DEFAULT_TAG_P> & TextProps

export interface ParagraphProps extends UnionProps {
  as?: ElementType
  css?: CSS
}
