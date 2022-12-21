import React from 'react';

import { Separator } from '../Separator';
import { StyledTabsContent, StyledTabsList, StyledTabsTrigger, StylesTabs } from './styles';
import { TabsListProps } from './types';

export const TabsList = React.forwardRef<React.ElementRef<typeof StyledTabsList>, TabsListProps>(
  (props, forwardedRef) => (
    <>
      <StyledTabsList {...props} ref={forwardedRef} />
      <Separator />
    </>
  )
);

export const Tabs = StylesTabs;
export const TabsTrigger = StyledTabsTrigger;
export const TabsContent = StyledTabsContent;