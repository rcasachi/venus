import { PropertyValue } from "../type";

export const marginUtils = {
  m: (value: PropertyValue<"margin">) => ({
    margin: value,
  }),
  mt: (value: PropertyValue<"marginTop">) => ({
    marginTop: value,
  }),
  mr: (value: PropertyValue<"marginRight">) => ({
    marginRight: value,
  }),
  mb: (value: PropertyValue<"marginBottom">) => ({
    marginBottom: value,
  }),
  ml: (value: PropertyValue<"marginLeft">) => ({
    marginLeft: value,
  }),
  mx: (value: PropertyValue<"marginLeft">) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: PropertyValue<"marginTop">) => ({
    marginTop: value,
    marginBottom: value,
  }),
};
