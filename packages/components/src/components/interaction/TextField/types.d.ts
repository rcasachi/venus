import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { Appendix, Input, TextInputContainer } from './styles'

export interface TextInputContainerProps
  extends ComponentProps<typeof TextInputContainer> {
  css?: CSS
}

export interface AppendixProps extends ComponentProps<typeof Appendix> {
  css?: CSS
}

type ContainerVariants = Pick<TextInputContainerProps, 'variants'>

export interface TextFieldProps extends ComponentProps<typeof Input> {
  prefix?: string
  sufix?: string
  cursor?: ContainerVariants['cursor']
  state?: ContainerVariants['state']
  ghost?: ContainerVariants['ghost']
}
