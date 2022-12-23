const m = (value: any) => ({ margin: value })
const mt = (value: any) => ({ marginTop: value })
const mr = (value: any) => ({ marginRight: value })
const mb = (value: any) => ({ marginBottom: value })
const ml = (value: any) => ({ marginLeft: value })
const mx = (value: any) => ({
  marginLeft: value,
  marginRight: value,
})
const my = (value: any) => ({
  marginTop: value,
  marginBottom: value,
})

export { m, mt, mr, mb, ml, mx, my }
