import React from 'react'
import { motion } from 'framer-motion'
import SimpleCircularNavigation from './SimpleCircularNavigation'

const SectionIndicator = ({ currentSection, totalSections, onSectionClick }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <motion.div
        className="relative p-3 rounded-xl bg-white/60 dark:bg-neutral-800/60 backdrop-blur-lg border border-white/20 dark:border-neutral-700/20"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        }}
      >
        <SimpleCircularNavigation 
          currentSection={currentSection}
          totalSections={totalSections}
          onSectionClick={onSectionClick}
          size="md"
          className="text-primary-600 dark:text-primary-400"
        />
      </motion.div>
    </div>
  )
}

export default SectionIndicator
