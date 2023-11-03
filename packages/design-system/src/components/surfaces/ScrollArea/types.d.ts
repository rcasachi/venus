import React from 'react'

export type ScrollAreaType = 'auto' | 'always' | 'scroll' | 'hover'
export type ScrollAreaDir = 'ltr' | 'rtl'
export type ScrollAreaOrientation = 'horizontal' | 'vertical'

export interface ScrollAreaProps {
  asChild?: boolean
  type?: ScrollAreaType
  scrollHideDelay?: number
  style?: React.CSSProperties | undefined
  dir?: ScrollAreaDir
  forceMount?: boolean
  orientation?: ScrollAreaOrientation
  children: React.ReactNode
}
