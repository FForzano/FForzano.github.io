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
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${className}`}
      aria-label="Toggle language"
    >
      <Globe size={16} className="text-gray-600" />
      <span className="text-sm font-medium text-gray-700 uppercase">
        {language}
      </span>
    </motion.button>
  )
}

export default LanguageSelector
