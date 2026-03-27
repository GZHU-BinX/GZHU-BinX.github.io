import { useEffect, useRef, useState } from 'react'
import useScrollReveal from './useScrollReveal'

export default function useCountUp(target, duration = 1500) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })
  const [display, setDisplay] = useState('0')
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return
    hasAnimated.current = true

    const str = String(target)
    const match = str.match(/^(\d+)(.*)$/)
    if (!match) { setDisplay(str); return }

    const num = parseInt(match[1], 10)
    const suffix = match[2] || ''
    const startTime = performance.now()

    function step(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * num)
      setDisplay(`${current}${suffix}`)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return { ref, display }
}
