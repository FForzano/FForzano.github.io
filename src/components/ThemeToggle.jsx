import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useTranslation } from '../hooks/useTranslation'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-2 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-all duration-200 shadow-soft"
      aria-label={theme === 'light' ? t('common.theme.toggleDark') : t('common.theme.toggleLight')}
      title={theme === 'light' ? t('common.theme.toggleDark') : t('common.theme.toggleLight')}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
