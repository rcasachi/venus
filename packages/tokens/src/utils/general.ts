const bc = (value: any) => ({ backgroundColor: value })
const bs = (value: any) => ({ boxShadow: value })
const pe = (value: any) => ({ pointerEvents: value })
const appearance = (value: any) => ({
  WebkitAppearance: value,
  appearance: value,
})
const backgroundClip = (value: any) => ({
  WebkitBackgroundClip: value,
  backgroundClip: value,
})

export { bc, bs, pe, appearance, backgroundClip }
