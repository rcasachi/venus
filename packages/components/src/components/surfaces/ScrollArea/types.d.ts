import { CSS } from '@stitches/react'
import React from 'react'

export type ScrollAreaType = 'auto' | 'always' | 'scroll' | 'hover'
export type ScrollAreaDir = 'ltr' | 'rtl'
export type ScrollAreaOrientation = 'horizontal' | 'vertical'

export interface ScrollAreaProps {
  asChild?: boolean
  type?: ScrollAreaType
  scrollHideDelay?: number
  css?: CSS
  dir?: ScrollAreaDir
  forceMount?: boolean
  orientation?: ScrollAreaOrientation
  children: React.ReactNode
}
