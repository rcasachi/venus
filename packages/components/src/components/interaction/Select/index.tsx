import { ElementRef, forwardRef } from "react";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Group, ItemText, Portal, Root, Value } from "@radix-ui/react-select";

import {
  SelectContent,
  SelectIcon,
  SelectItemIndicator,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectViewport,
  StyledItem
} from "./styles";
import { SelectItemProps, SelectProps } from "./types";

export const Select = ({ children, placeholder, ...props }: SelectProps) => (
  <Root {...props}>
    <SelectTrigger>
      <Value placeholder={placeholder} />
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon color="white" />
        </SelectScrollUpButton>
        <SelectViewport>
          {children}
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon color="white" />
        </SelectScrollDownButton>
      </SelectContent>
    </Portal>
  </Root>
)

export const SelectItem = forwardRef<ElementRef<typeof StyledItem>, SelectItemProps>(
  (props, forwardedRef) => (
    <StyledItem {...props} ref={forwardedRef}>
      <ItemText>{props.children}</ItemText>
      <SelectItemIndicator>
        <CheckIcon />
      </SelectItemIndicator>
    </StyledItem>
  )
)

export const SelectGroup = Group
export { SelectLabel, SelectSeparator } from './styles'
