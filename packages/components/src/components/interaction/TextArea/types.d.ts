import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { TextArea } from '.'

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  css?: CSS
}
