export const generalUtils = {
  bc: (value: any) => ({ backgroundColor: value }),
  bs: (value: any) => ({ boxShadow: value }),
  pe: (value: any) => ({ pointerEvents: value }),
  appearance: (value: any) => ({
    WebkitAppearance: value,
    appearance: value,
  }),
  backgroundClip: (value: any) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value,
  }),
};
