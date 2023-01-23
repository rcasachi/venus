import { ComponentProps, ElementType } from 'react'
import { CSS } from '@stitches/react'

import { TextProps } from '@components/typography/Text/types'
import { DEFAULT_TAG } from '.'

export type UnionProps = ComponentProps<typeof DEFAULT_TAG> & TextProps

export interface HeadingProps extends UnionProps {
  as?: ElementType
  css?: CSS
}
