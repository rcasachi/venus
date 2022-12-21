import { PropertyValue } from "../type";

export const paddingUtils = {
  p: (value: PropertyValue<"padding">) => ({
    padding: value,
  }),
  pt: (value: PropertyValue<"paddingTop">) => ({
    paddingTop: value,
  }),
  pr: (value: PropertyValue<"paddingRight">) => ({
    paddingRight: value,
  }),
  pb: (value: PropertyValue<"paddingBottom">) => ({
    paddingBottom: value,
  }),
  pl: (value: PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
  }),
  px: (value: PropertyValue<"paddingLeft">) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: PropertyValue<"paddingTop">) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};
