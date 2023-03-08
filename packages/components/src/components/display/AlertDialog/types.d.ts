import { Content, Root } from '@radix-ui/react-alert-dialog'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type AlertDialogContentProps = ComponentProps<typeof Content> & {
  css?: CSS
}
export type AlertDialogProps = ComponentProps<typeof Root> & { css?: CSS }
