import { FC, type HTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import styles from './box.module.css'

const box = cva(styles.base)

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof box> {}

export const Box: FC<BoxProps> = ({ className, ...props }) => (
  <div className={box({ className })} {...props} />
)
