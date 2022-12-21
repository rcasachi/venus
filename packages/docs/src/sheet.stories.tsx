import React from "react";
import { Sheet, SheetTrigger, Button, SheetContent } from "@venusui/components";

export default { title: 'Sheet' };

export const sheets = () => (
  <>
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent></SheetContent>
    </Sheet>
    <Sheet>
      <SheetTrigger asChild>
        <Button>Top</Button>
      </SheetTrigger>
      <SheetContent side="top"></SheetContent>
    </Sheet>
    <Sheet>
      <SheetTrigger asChild>
        <Button>Right</Button>
      </SheetTrigger>
      <SheetContent side="right"></SheetContent>
    </Sheet>
    <Sheet>
      <SheetTrigger asChild>
        <Button>Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom"></SheetContent>
    </Sheet>
    <Sheet>
      <SheetTrigger asChild>
        <Button>Left</Button>
      </SheetTrigger>
      <SheetContent side="left"></SheetContent>
    </Sheet>
  </>
);