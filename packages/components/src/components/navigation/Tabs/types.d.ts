import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { Tabs } from '.'

export interface TabsProps extends ComponentProps<typeof Tabs> {
  css?: CSS
}
