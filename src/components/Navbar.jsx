import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import LanguageSelector from './LanguageSelector'

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
    { name: t('nav.skills'), href: '#skills', icon: Code },
    { name: t('nav.projects'), href: '#projects', icon: Briefcase },
    { name: t('nav.contact'), href: '#contact', icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Federico Forzano</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="px-3 py-2">
                <LanguageSelector />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
