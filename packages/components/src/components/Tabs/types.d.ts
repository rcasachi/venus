import { List } from '@radix-ui/react-tabs'
import { CSS } from '@stitches/react'
import { ComponentProps } from 'react'

export type TabsListPrimitiveProps = ComponentProps<typeof List>
export type TabsListProps = TabsListPrimitiveProps & { css?: CSS }
