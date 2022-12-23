import { Content } from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'

export type DialogContentPrimitiveProps = ComponentProps<typeof Content>
export type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS }
