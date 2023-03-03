import { AspectRatioProps as PrimitiveProps } from '@radix-ui/react-aspect-ratio'
import { ReactNode } from 'react'

export interface AspectRatioProps extends PrimitiveProps {
  children?: ReactNode | string
}
