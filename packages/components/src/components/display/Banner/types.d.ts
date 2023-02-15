import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'
import { Banner } from '.'

export interface BannerProps extends ComponentProps<typeof Banner> {
  css?: CSS
}
