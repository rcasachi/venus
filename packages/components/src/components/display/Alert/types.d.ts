import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { Alert } from '.'

export interface AlertProps extends ComponentProps<typeof Alert> {
  css?: CSS
}
