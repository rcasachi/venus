import { Queries } from '@venusui/tokens'
import { ColorMode, MediaTheme } from './types'

export const saveColorMode = (newMode: ColorMode) => {
  try {
    if (typeof newMode === 'string')
      window.localStorage.setItem('color-mode', newMode)
  } catch (e) {
    console.warn(e)
  }
}

export const getSavedColorModePreference = (): ColorMode => {
  try {
    const savedMode = window?.localStorage?.getItem('color-mode')
    if (typeof savedMode === 'string') return savedMode
  } catch (e) {
    console.warn(e)
    return null
  }
  return null
}

export const getMediaTheme = (): MediaTheme => {
  const mql = matchMedia(Queries.themes.dark)
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) return mql.matches ? 'dark' : 'light'
}
