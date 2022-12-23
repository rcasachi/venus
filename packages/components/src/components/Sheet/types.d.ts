import { Content } from '@radix-ui/react-dialog'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledContent } from './styles'

export type SheetContentVariants = VariantProps<typeof StyledContent>
export type DialogContentPrimitiveProps = ComponentProps<typeof Content>
export type SheetContentProps = DialogContentPrimitiveProps &
  SheetContentVariants & { css?: CSS }
