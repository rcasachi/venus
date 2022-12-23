import { Item } from '@radix-ui/react-radio-group'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type RadioGroupItemPrimitiveProps = ComponentProps<typeof Item>
export type RadioCardProps = RadioGroupItemPrimitiveProps & { css?: CSS }
