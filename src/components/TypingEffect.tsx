import { useState, useEffect } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  delay?: number
}

export function TypingEffect({ text, speed = 100, delay = 0 }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(prev => prev.slice(0, -1))
        setCurrentIndex(prev => prev - 1)
      } else if (currentIndex === text.length) {
        // Pause at the end before starting to delete
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false)
      }
    }, delay || (isDeleting ? speed / 2 : speed))

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text, speed, delay])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className="text-foreground">
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-primary`}>
        |
      </span>
    </span>
  )
}