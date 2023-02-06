import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { MultiStep } from '.'

export interface MultiStepProps extends ComponentProps<typeof MultiStep> {
  css?: CSS
}
