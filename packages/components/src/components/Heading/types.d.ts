import { ComponentProps, ElementType } from 'react'

import { DEFAULT_TAG } from '.'
import { CSS } from '@stitches/react'
import { TextProps } from '@components/Text/types'

export type UnionProps = ComponentProps<typeof DEFAULT_TAG> & TextProps

export interface HeadingProps extends UnionProps {
  as?: ElementType
  css?: CSS
}
