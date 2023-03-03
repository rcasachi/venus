import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

import { AspectRatioProps } from './types'

export function AspectRatio({ children, ...props }: AspectRatioProps) {
  return (
    <AspectRatioPrimitive.Root {...props}>{children}</AspectRatioPrimitive.Root>
  )
}
