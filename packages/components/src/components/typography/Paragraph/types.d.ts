import { ComponentProps, ElementType } from 'react'

import { DEFAULT_TAG_P } from '.'
import { TextProps } from '@components/typography/Text/types'

export type UnionProps = ComponentProps<typeof DEFAULT_TAG_P> & TextProps

export interface ParagraphProps extends UnionProps {
  as?: ElementType
  css?: CSS
}
