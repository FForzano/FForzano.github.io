import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SimpleCircularNavigation from './SimpleCircularNavigation'

const SectionIndicator = ({ currentSection, totalSections, onSectionClick }) => {
  const [isActivelyNavigating, setIsActivelyNavigating] = useState(false)
  const navigationTimeoutRef = useRef(null)
  
  // Gestisce lo stato di navigazione attiva
  useEffect(() => {
    setIsActivelyNavigating(true)
    
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current)
    }
    
    navigationTimeoutRef.current = setTimeout(() => {
      setIsActivelyNavigating(false)
    }, 2000)
    
    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }
    }
  }, [currentSection])
  
  // Handler per riattivare la navigazione quando si interagisce
  const handleIndicatorInteraction = () => {
    setIsActivelyNavigating(true)
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current)
    }
    navigationTimeoutRef.current = setTimeout(() => {
      setIsActivelyNavigating(false)
    }, 2000)
  }

  return (
    <div className="fixed right-6 top-16 md:top-1/2 md:transform md:-translate-y-1/2 z-40">
      <motion.div
        className="relative p-3 rounded-xl bg-white/60 dark:bg-neutral-800/60 backdrop-blur-lg border border-white/20 dark:border-neutral-700/20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        animate={{
          opacity: isActivelyNavigating ? 1 : 0.3
        }}
        style={{
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}
        onMouseEnter={handleIndicatorInteraction}
        onMouseLeave={() => {}} // Mantiene l'interazione attiva
      >
        <SimpleCircularNavigation 
          currentSection={currentSection}
          totalSections={totalSections}
          onSectionClick={(index) => {
            onSectionClick(index)
            handleIndicatorInteraction()
          }}
          size="md"
          className="text-primary-600 dark:text-primary-400"
        />
      </motion.div>
    </div>
  )
}

export default SectionIndicator
