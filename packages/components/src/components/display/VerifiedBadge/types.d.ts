import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { VerifiedBadgeContainer } from './styles'

export interface VerifiedBadgeProps
  extends ComponentProps<typeof VerifiedBadgeContainer> {
  css?: CSS
}
