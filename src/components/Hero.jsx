import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download, GraduationCap } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import StaticPDFDownload from './StaticPDFDownload'

const Hero = () => {
  const { t } = useTranslation()
  const { handleDownloadCV, isGenerating } = StaticPDFDownload()
  
  const onDownloadCV = (e) => {
    e.preventDefault()
    handleDownloadCV()
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 section-container relative music-strings quantum-pattern">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating music notes */}
        <div className="absolute top-20 left-10 music-notes opacity-40 floating-element" style={{left: '8%', top: '15%'}}></div>
        <div className="absolute top-40 right-16 music-notes opacity-30 floating-element" style={{right: '12%', top: '25%'}}></div>
        <div className="absolute bottom-32 left-20 music-notes opacity-35 floating-element" style={{left: '15%', bottom: '20%'}}></div>
        <div className="absolute top-60 right-10 music-notes opacity-25 floating-element" style={{right: '8%', top: '45%'}}></div>
        
        {/* Quantum pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 opacity-30"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-6 sm:mb-8 lg:mb-10"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 animate-pulse-slow"></div>
              <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 shadow-glow">
                <div className="w-full h-full rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center border-2 sm:border-4 border-white dark:border-neutral-700">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gradient font-display">F</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Main Content */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8 lg:mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 sm:mb-4 md:mb-6 font-display px-2 sm:px-4 md:px-0">
              <span className="text-neutral-800 dark:text-neutral-200 block sm:inline">{t('hero.greeting')}</span>
              <br className="hidden sm:block" />
              <span className="text-gradient animate-gradient bg-[length:200%_200%] block sm:inline">
                Federico Forzano
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 mb-3 sm:mb-4 font-medium px-2 sm:px-4 md:px-0">
              {t('hero.title')}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 md:px-0">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-2 sm:gap-3 text-base sm:text-lg shadow-large w-full sm:w-auto justify-center"
            >
              <span className="whitespace-nowrap">{t('hero.viewProjects')}</span>
              <ArrowDown size={18} className="animate-bounce-subtle flex-shrink-0" />
            </motion.a>
            <motion.button
              onClick={onDownloadCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-2 sm:gap-3 text-base sm:text-lg w-full sm:w-auto justify-center"
            >
              <Download size={18} className="flex-shrink-0" />
              <span className="whitespace-nowrap">{t('hero.downloadCV')}</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {[
              { icon: Github, href: 'https://github.com/FForzano', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/federico-forzano', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:f.forzano99@gmail.com', label: 'Email personale' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 sm:p-4 card rounded-full shadow-soft hover:shadow-glow transition-all duration-300 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 group flex-shrink-0"
                aria-label={label}
              >
                <Icon size={20} className="sm:size-6 transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-neutral-400 dark:text-neutral-500 flex flex-col items-center gap-2"
            >
              <span className="text-xs sm:text-sm font-medium">Scroll down</span>
              <ArrowDown size={20} className="sm:size-6 animate-pulse" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
