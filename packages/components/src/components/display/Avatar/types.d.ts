import { ComponentProps, ReactNode } from 'react'
import { CSS } from '@stitches/react'
import { Status } from '@components/Status'

import {
  AvatarContainer,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  AvatarNestedItem,
} from './styles'

export interface AvatarContainerProps
  extends ComponentProps<typeof AvatarContainer> {
  css?: CSS
}

export interface AvatarImageProps extends ComponentProps<typeof AvatarImage> {
  css?: CSS
}

export interface AvatarFallbackProps
  extends ComponentProps<typeof AvatarFallback> {
  css?: CSS
}

export interface AvatarGroupProps extends ComponentProps<typeof AvatarGroup> {
  css?: CSS
}

export interface AvatarNestedItemProps
  extends ComponentProps<typeof AvatarNestedItem> {
  css?: CSS
}

type ContainerVariants = Pick<AvatarContainerProps, 'variants'>
export type StatusVariants = Pick<Status, 'variants'>

export interface AvatarProps extends AvatarImageProps {
  children?: ReactNode | string
  size?: ContainerVariants['size']
  shape?: ContainerVariants['shape']
  inactive?: ContainerVariants['inactive']
  variant?: ContainerVariants['variant']
  interactive?: ContainerVariants['interactive']
  status?: StatusVariants['variant']
}
