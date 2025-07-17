import React from 'react'
import ReactMarkdown from 'react-markdown'
import { motion } from 'framer-motion'
import { Atom, Palette, Database, Globe, ArrowDown } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useNoFlickerAnimation } from '../hooks/useOptimizedAnimation'

const About = () => {
  const { t, lang } = useTranslation()
  
  // Hook per prevenire il flickering
  const { ref: sectionRef, isVisible } = useNoFlickerAnimation()
  
  // Features from translations
  const features = [
    {
      icon: Atom,
      title: t('about.features.quantum.title'),
      description: t('about.features.quantum.description')
    },
    {
      icon: Database,
      title: t('about.features.development.title'),
      description: t('about.features.development.description')
    },
    {
      icon: Palette,
      title: t('about.features.teaching.title'),
      description: t('about.features.teaching.description')
    },
    {
      icon: Globe,
      title: t('about.features.entrepreneurship.title'),
      description: t('about.features.entrepreneurship.description')
    }
  ]

  const education = t('about.education')

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-to-br from-white via-neutral-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 min-h-screen section-container relative sailing-waves neural-network about-container">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-20 sail-pattern w-24 h-24 sm:w-32 sm:h-32 opacity-40 floating-element" style={{right: '10%', top: '10%'}}></div>
        <div className="absolute bottom-20 left-16 sail-pattern w-20 h-20 sm:w-28 sm:h-28 opacity-30 floating-element" style={{left: '8%', bottom: '15%'}}></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-primary-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-secondary-400 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-accent-400 rounded-full opacity-25 animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="section-title">{t('about.title')}</h2>
          <div className="section-subtitle">
            <div style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem' }}>
              <ReactMarkdown>{t('about.subtitle')}</ReactMarkdown>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">{t('about.journeyTitle')}</h3>
            <div className="relative pl-6">
              {/* Linea verticale */}
              <div className="absolute left-2 top-0 h-full w-0.5 bg-primary-300 dark:bg-primary-700"></div>
              {/* Minimal timeline items */}
              {/* Use translation keys for minimal timeline */}
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 mr-2"></div>
                  <span className="font-semibold">{t('about.timeline.0.years')}</span>
                </div>
                <div className="ml-6">{t('about.timeline.0.title')}</div>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 mr-2"></div>
                  <span className="font-semibold">{t('about.timeline.1.years')}</span>
                </div>
                <div className="ml-6">{t('about.timeline.1.title')}</div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400 mr-2"></div>
                  <span className="font-semibold">{t('about.timeline.2.years')}</span>
                </div>
                <div className="ml-6">{t('about.timeline.2.title')}</div>
              </div>
            </div>
          </motion.div>

          {/* Features section with translation */}
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">{t('about.featuresTitle') || (lang === 'it' ? 'Competenze principali' : 'Main skills')}</h3>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-8">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t('about.cta')}
                <ArrowDown size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
