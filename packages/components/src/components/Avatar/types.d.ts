import { ComponentProps, ReactNode } from 'react'
import { Root } from '@radix-ui/react-avatar'

import { Status } from '@components/Status'

import { StyledAvatar } from './styles'
import { CSS, VariantProps } from '@stitches/react'

export type StatusVariants = ComponentProps<typeof Status>
export type StatusColors = Pick<StatusVariants, 'variant'>

export type AvatarVariants = VariantProps<typeof StyledAvatar>
type AvatarPrimitiveProps = ComponentProps<typeof Root>
export type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS
    alt?: string
    src?: string
    fallback?: ReactNode
    status?: StatusColors['variant']
  }
