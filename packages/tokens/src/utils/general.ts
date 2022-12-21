import { PropertyValue } from "../type";

export const generalUtils = {
  bc: (value: PropertyValue<"backgroundColor">) => ({
    backgroundColor: value,
  }),
  bs: (value: PropertyValue<"boxShadow">) => ({ boxShadow: value }),
  pe: (value: PropertyValue<"pointerEvents">) => ({
    pointerEvents: value,
  }),
  appearance: (value: PropertyValue<"appearance">) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: PropertyValue<"backgroundClip">) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};
