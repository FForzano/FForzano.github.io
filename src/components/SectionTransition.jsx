import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const SectionTransition = ({ isVisible, direction = 'down' }) => {
  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-30 pointer-events-none"
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${
        direction === 'down' 
          ? 'bg-gradient-to-b from-transparent via-white/30 to-white/90 dark:via-neutral-900/30 dark:to-neutral-900/90' 
          : 'bg-gradient-to-t from-transparent via-white/30 to-white/90 dark:via-neutral-900/30 dark:to-neutral-900/90'
      }`} />
      
      {/* Animated indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            y: direction === 'down' ? [0, 30, 0] : [0, -30, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-primary-600 dark:text-primary-400"
        >
          {direction === 'down' ? (
            <ChevronDown className="w-8 h-8 mb-2" />
          ) : (
            <ChevronUp className="w-8 h-8 mb-2" />
          )}
          <div className="text-sm font-medium">
            {direction === 'down' ? 'Prossima sezione' : 'Sezione precedente'}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SectionTransition
