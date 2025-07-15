import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mouse, ArrowUp, ArrowDown } from 'lucide-react'

const ScrollHint = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide the hint after 5 seconds or on first scroll
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    const handleScroll = () => {
      setIsVisible(false)
    }

    const handleWheel = () => {
      setIsVisible(false)
    }

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('wheel', handleWheel)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-md rounded-xl px-4 py-3 shadow-soft border border-neutral-200 dark:border-neutral-700"
        >
          <div className="flex items-center space-x-4 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="flex items-center space-x-1">
              <Mouse className="w-4 h-4" />
              <span>Scroll</span>
            </div>
            <div className="flex items-center space-x-1">
              <ArrowUp className="w-4 h-4" />
              <ArrowDown className="w-4 h-4" />
              <span>Arrows</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-primary-600 rounded-full" />
              <span>Click</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollHint
