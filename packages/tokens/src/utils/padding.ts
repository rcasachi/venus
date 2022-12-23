const p = (value: any) => ({ padding: value })
const pt = (value: any) => ({ paddingTop: value })
const pr = (value: any) => ({ paddingRight: value })
const pb = (value: any) => ({ paddingBottom: value })
const pl = (value: any) => ({ paddingLeft: value })
const px = (value: any) => ({
  paddingLeft: value,
  paddingRight: value,
})
const py = (value: any) => ({
  paddingTop: value,
  paddingBottom: value,
})

export { p, pt, pr, pb, pl, px, py }
