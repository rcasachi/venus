import { FC, type HTMLAttributes } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { container } from './styles'

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof container> {}

export const Container: FC<ContainerProps> = ({
  className,
  size,
  ...props
}) => <div className={container({ className, size })} {...props} />
