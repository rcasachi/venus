import { Root } from '@radix-ui/react-slider'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type SliderPrimitiveProps = ComponentProps<typeof Root>
export type SliderProps = SliderPrimitiveProps & { css?: CSS }
