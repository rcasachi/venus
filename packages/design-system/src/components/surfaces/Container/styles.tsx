import { cva } from 'class-variance-authority'
import styles from './container.module.css'

export const container = cva(styles.base, {
  variants: {
    size: {
      1: ['container-size-1'],
      2: ['container-size-2'],
      3: ['container-size-3'],
      4: ['container-size-4'],
    },
  },
  defaultVariants: {
    size: 4,
  },
})
