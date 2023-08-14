import { availableThemes } from '@theme'
import { Queries } from '@venusui/tokens'
import { useEffect, useState } from 'react'

import { ColorMode, ColorModeType } from './types'
import {
  getMediaTheme,
  getSavedColorModePreference,
  saveColorMode,
} from './utils'

const DEFAULT_THEME = 'light'

export const useColorMode = (): ColorModeType => {
  const [colorMode, setColorMode] = useState('')
  const html = document?.documentElement

  const applyColorMode = (newMode: ColorMode) => {
    html.classList.remove(availableThemes[colorMode].className)
    html.classList.add(availableThemes[newMode ?? DEFAULT_THEME].className)
    setColorMode(newMode ?? DEFAULT_THEME)
  }

  let savedColorMode = getSavedColorModePreference()
  if (savedColorMode == null) {
    savedColorMode = getMediaTheme() ?? DEFAULT_THEME
  }

  html.setAttribute('data-color-mode', savedColorMode)
  html.classList.add(availableThemes[savedColorMode].className)

  useEffect(() => {
    setColorMode(savedColorMode ?? DEFAULT_THEME)
  }, [savedColorMode])

  window.matchMedia(Queries.themes.dark).addEventListener('change', (e) => {
    applyColorMode(e.matches ? 'dark' : 'light')
  })

  window.matchMedia(Queries.themes.light).addEventListener('change', (e) => {
    applyColorMode(e.matches ? 'light' : 'dark')
  })

  const cycleToggleMode = (): void => {
    const keys = Object.keys(availableThemes)
    let index = keys.indexOf(colorMode)
    if (index === keys.length - 1) {
      index = 0
    } else if (index >= 0) {
      index = index + 1
    }
    const newMode = keys[index]
    applyColorMode(newMode)
    saveColorMode(newMode)
  }

  return [colorMode, cycleToggleMode]
}
