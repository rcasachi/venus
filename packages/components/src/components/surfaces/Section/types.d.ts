import { CSS } from '@stitches/react'
import { ComponentProps, ElementType } from 'react'
import { Section } from '.'

export interface SectionProps extends ComponentProps<typeof Section> {
  as?: ElementType
  css?: CSS
}
