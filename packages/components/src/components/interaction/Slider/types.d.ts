import { Root } from '@radix-ui/react-slider'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type SliderProps = ComponentProps<typeof Root> & { css?: CSS }
