import { Content, Root } from '@radix-ui/react-dialog'
import { ComponentProps } from 'react'

export type DialogContentProps = ComponentProps<typeof Content> & { css?: CSS }
export type DialogProps = ComponentProps<typeof Root> & { css?: CSS }
