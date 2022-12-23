import { ElementRef, forwardRef } from 'react'
import { Separator } from '@components/Separator'
import {
  StyledTabsContent,
  StyledTabsList,
  StyledTabsTrigger,
  StylesTabs,
} from './styles'
import { TabsListProps } from './types'

export const TabsList = forwardRef<
  ElementRef<typeof StyledTabsList>,
  TabsListProps
>(function TabsListRef(props, forwardedRef) {
  return (
    <>
      <StyledTabsList {...props} ref={forwardedRef} />
      <Separator />
    </>
  )
})

export const Tabs = StylesTabs
export const TabsTrigger = StyledTabsTrigger
export const TabsContent = StyledTabsContent
