import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { Image } from '.'

export interface ImageProps extends ComponentProps<typeof Image> {
  css?: CSS
}
