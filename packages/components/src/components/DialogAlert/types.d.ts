import { Content } from '@radix-ui/react-alert-dialog'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type AlertDialogContentPrimitiveProps = ComponentProps<typeof Content>

export type AlertDialogContentProps = AlertDialogContentPrimitiveProps & {
  css?: CSS
}
