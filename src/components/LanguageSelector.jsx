import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const LanguageSelector = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-200 shadow-soft ${className}`}
      aria-label="Toggle language"
    >
      <Globe size={16} className="text-neutral-600 dark:text-neutral-400" />
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 uppercase">
        {language}
      </span>
    </motion.button>
  )
}

export default LanguageSelector
