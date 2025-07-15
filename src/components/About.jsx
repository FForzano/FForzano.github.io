import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Database, Globe, ArrowDown } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useNoFlickerAnimation } from '../hooks/useOptimizedAnimation'

const About = () => {
  const { t } = useTranslation()
  
  // Hook per prevenire il flickering
  const { ref: sectionRef, isVisible } = useNoFlickerAnimation()
  
  const features = [
    {
      icon: Code,
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
          <h2 className="section-title">
            {t('about.title')}
          </h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
              {t('about.journeyTitle')}
            </h3>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {t('about.journeyText').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                {t('about.cta')}
                <ArrowDown size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
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
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8 text-center">
            {t('about.educationTitle')}
          </h3>
          
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1 sm:mb-0">
                    {edu.degree}
                  </h4>
                  <span className="text-xs sm:text-sm text-primary-600 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
