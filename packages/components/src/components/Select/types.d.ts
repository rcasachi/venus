import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledSelect } from './styles'

export type SelectProps = ComponentProps<typeof StyledSelect> & {
  css?: CSS
}
