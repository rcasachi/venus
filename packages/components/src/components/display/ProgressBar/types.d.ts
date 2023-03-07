import { Root } from '@radix-ui/react-progress'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledProgressBar } from './styles'

export type ProgressBarProps =
  ComponentProps<typeof Root> &
  VariantProps<typeof StyledProgressBar> &
  { css?: CSS }
