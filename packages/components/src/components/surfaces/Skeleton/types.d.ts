import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { Skeleton } from '.'

export interface SkeletonProps extends ComponentProps<typeof Skeleton> {
  css?: CSS
}
