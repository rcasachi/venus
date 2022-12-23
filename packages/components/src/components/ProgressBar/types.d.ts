import { Root } from '@radix-ui/react-progress'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledProgressBar } from './styles'

export type ProgressBarVariants = VariantProps<typeof StyledProgressBar>
export type ProgressBarPrimitiveProps = ComponentProps<typeof Root>
export type ProgressBarProps = ProgressBarPrimitiveProps &
  ProgressBarVariants & { css?: CSS }
