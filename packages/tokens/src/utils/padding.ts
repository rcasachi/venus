export const paddingUtils = {
  p: (value: any) => ({ padding: value }),
  pt: (value: any) => ({ paddingTop: value }),
  pr: (value: any) => ({ paddingRight: value }),
  pb: (value: any) => ({ paddingBottom: value }),
  pl: (value: any) => ({ paddingLeft: value }),
  px: (value: any) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: any) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};
