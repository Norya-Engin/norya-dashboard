// lib/layoutScale.ts
'use client'

import { useEffect, useState } from 'react'

export const PANEL_WIDTH = 1280
export const PANEL_HEIGHT = 800

export function useLayoutScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      const scaleX = (windowWidth - 80) / PANEL_WIDTH
      const scaleY = (windowHeight - 80) / PANEL_HEIGHT
      setScale(Math.min(scaleX, scaleY, 1))
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  return scale
}