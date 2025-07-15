import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail, Heart, BookOpen } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.home'), href: '#home', icon: Home },
    { name: t('nav.about'), href: '#about', icon: User },
    { name: t('nav.experience'), href: '#experience', icon: Code },
    { name: t('nav.research'), href: '#research', icon: BookOpen },
    { name: t('nav.projects'), href: '#projects', icon: Briefcase },
    { name: t('nav.hobbies'), href: '#hobbies', icon: Heart },
    { name: t('nav.contact'), href: '#contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-soft border-b border-neutral-200/50 dark:border-neutral-700/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 relative"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden shadow-soft">
              <span className="text-white font-bold text-sm sm:text-lg z-10 font-display">F</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient bg-[length:200%_200%] opacity-80"></div>
            </div>
            <span className="font-bold text-lg sm:text-xl text-gray-900 dark:text-gray-100 hidden sm:block">Federico Forzano</span>
            <span className="font-bold text-base text-gray-900 dark:text-gray-100 block sm:hidden">Federico</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                <item.icon size={16} />
                <span className="whitespace-nowrap">{item.name}</span>
              </motion.a>
            ))}
            <div className="flex items-center space-x-2 xl:space-x-3">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-3 py-2 flex items-center space-x-3 sm:hidden">
                <LanguageSelector />
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
