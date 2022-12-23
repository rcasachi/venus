import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledVerifiedBadge } from './styles'

export type VerifiedBadgeProps = ComponentProps<typeof StyledVerifiedBadge> & {
  css?: CSS
}
