import { Root } from '@radix-ui/react-checkbox'
import { CSS, VariantProps } from '@stitches/react'
import { ComponentProps } from 'react'

import { StyledCheckbox } from './styles'

export type CheckboxPrimitiveProps = ComponentProps<typeof Root>
export type CheckboxVariants = VariantProps<typeof StyledCheckbox>
export type CheckboxProps = CheckboxPrimitiveProps &
  CheckboxVariants & { css?: CSS }
