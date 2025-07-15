import React from 'react'
import { motion } from 'framer-motion'

const SectionIndicator = ({ currentSection, totalSections, onSectionClick }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {Array.from({ length: totalSections }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onSectionClick(index)}
          className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
            currentSection === index
              ? 'bg-primary-600 border-primary-600 scale-125'
              : 'bg-transparent border-gray-400 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-400'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default SectionIndicator
