import { useState, useEffect, useCallback } from 'react'

export default function useScrollProgress() {
  const [scrollY, setScrollY] = useState(0)
  const [progress, setProgress] = useState(0)

  const onScroll = useCallback(() => {
    const y = window.scrollY
    const total = document.body.scrollHeight - window.innerHeight
    const p = Math.min(Math.max(y / total, 0), 1)
    setScrollY(y)
    setProgress(p)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return { scrollY, progress }
}
