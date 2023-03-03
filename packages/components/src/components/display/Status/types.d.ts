import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { Status } from '.'

export interface StatusProps extends ComponentProps<typeof Status> {
  css?: CSS
}
