import { ElementRef, forwardRef } from 'react'

import { ProgressBarIndicator, StyledProgressBar } from './styles'
import { ProgressBarProps } from './types'

export const ProgressBar = forwardRef<
  ElementRef<typeof StyledProgressBar>,
  ProgressBarProps
>(({ value, max = 100, ...props }, forwardedRef) => {
  const percentage = value != null ? Math.round((value / max) * 100) : null

  return (
    <StyledProgressBar {...props} ref={forwardedRef} value={value} max={max}>
      <ProgressBarIndicator
        style={{ transform: `translateX(${percentage}%)` }}
      />
    </StyledProgressBar>
  )
})
