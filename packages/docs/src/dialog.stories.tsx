import React from "react";
import { Dialog, DialogTrigger, Button, DialogContent, Text, Popover, PopoverTrigger, PopoverContent, PopoverClose } from "@venusui/components";

export default { title: 'Dialog' };

export const dialogs = () => (
  <>
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <Text size="5" as="h6" css={{ fontWeight: 500, marginBottom: '$3' }}>
          Dialog Heading
        </Text>
        <Text size="3" as="p" css={{ lineHeight: '25px' }}>
          There are 5 variants to choose from. Use is for positive states. This is a link
          Traditional business literature won’t help you solve it- most of that stuff is
          focused on life after product/market fit, after the Trough of Sorrow.
        </Text>
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger asChild>
        <Button>Dialog</Button>
      </DialogTrigger>

      <DialogContent>
        <Text size="5" as="h6" css={{ fontWeight: 500, marginBottom: '$3' }}>
          Dialog Heading
        </Text>
        <Text size="3" as="p" css={{ lineHeight: '25px' }}>
          There are 5 variants to choose from. Use is for positive states. This is a link
          Traditional business literature won’t help you solve it- most of that stuff is
          focused on life after product/market fit, after the Trough of Sorrow.
        </Text>

        <Popover>
          <PopoverTrigger asChild>
            <Button>Open</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverClose asChild>
              <Button ghost>Close</Button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </DialogContent>
    </Dialog>
  </>
);