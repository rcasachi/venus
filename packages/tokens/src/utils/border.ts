import { PropertyValue } from "../type";

export const borderUtils = {
  br: (value: PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
  btrr: (value: PropertyValue<"borderTopRightRadius">) => ({
    borderTopRightRadius: value,
  }),
  bbrr: (value: PropertyValue<"borderBottomRightRadius">) => ({
    borderBottomRightRadius: value,
  }),
  bblr: (value: PropertyValue<"borderBottomLeftRadius">) => ({
    borderBottomLeftRadius: value,
  }),
  btlr: (value: PropertyValue<"borderTopLeftRadius">) => ({
    borderTopLeftRadius: value,
  }),
};
