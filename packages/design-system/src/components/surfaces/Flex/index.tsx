import { FC, type HTMLAttributes } from 'react'
import { type VariantProps } from 'class-variance-authority'
import { flex } from './styles'

export interface FlexProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flex> {}

export const Flex: FC<FlexProps> = ({
  className,
  direction,
  wrap,
  align,
  justify,
  gap,
  ...props
}) => (
  <div
    className={flex({ className, wrap, direction, align, justify, gap })}
    {...props}
  />
)
