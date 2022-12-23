import { Root } from '@radix-ui/react-switch'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledSwitch } from './styles'

export type SwitchVariants = VariantProps<typeof StyledSwitch>
export type SwitchPrimitiveProps = ComponentProps<typeof Root>
export type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS }
