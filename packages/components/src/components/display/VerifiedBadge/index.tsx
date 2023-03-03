import { CheckIcon } from '@radix-ui/react-icons'

import { VerifiedBadgeContainer } from './styles'
import { VerifiedBadgeProps } from './types'

export function VerifiedBadge(props: VerifiedBadgeProps) {
  return (
    <VerifiedBadgeContainer {...props}>
      <CheckIcon />
    </VerifiedBadgeContainer>
  )
}
