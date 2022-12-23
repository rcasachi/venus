import { Item } from '@radix-ui/react-radio-group'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledRadio } from './styles'

export type RadioVariants = VariantProps<typeof StyledRadio>
export type RadioGroupItemPrimitiveProps = ComponentProps<typeof Item>
export type RadioProps = RadioGroupItemPrimitiveProps &
  RadioVariants & { css?: CSS }
