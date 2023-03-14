import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

import { Table } from '.'

export interface TableProps extends ComponentProps<typeof Table> {
  css?: CSS
}
