import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Code2, 
  Github,
  ChevronLeft,
  ChevronRight,
  Star,
  Calendar,
  Users,
  Zap
} from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useStaticAnimation } from '../hooks/useOptimizedAnimation'
import useSwipe from '../hooks/useSwipe'

const Projects = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const projects = t('projects.projectsList')
  const categories = t('projects.categories')
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)
  
  // Hook for mobile carousel
  const swipeHandlers = useSwipe(filteredProjects.length, {
    threshold: 50,
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
    trackTouch: true,
  })

  // Hook per animazioni ottimizzate
  const { containerRef, animatedItems } = useStaticAnimation(filteredProjects)

  const ProjectCard = ({ project, index }) => {
    const isAnimated = animatedItems.has(index)
    
    return (
      <div
        className={`card card-hover group h-full transition-all duration-600 transform ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{
          transitionDelay: `${index * 100}ms`
        }}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              {project.featured && (
                <div className="flex items-center space-x-1 text-xs bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{t('projects.featured')}</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 text-green-700 dark:text-green-400 rounded-lg hover:from-green-200 hover:to-emerald-200 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30 transition-all duration-200"
                  aria-label={t('projects.demo')}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gradient-to-r from-gray-100 to-neutral-100 dark:from-gray-900/20 dark:to-neutral-900/20 text-gray-700 dark:text-gray-400 rounded-lg hover:from-gray-200 hover:to-neutral-200 dark:hover:from-gray-800/30 dark:hover:to-neutral-800/30 transition-all duration-200"
                  aria-label={t('projects.code')}
                >
                  <Github className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 font-display">
            {project.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies?.slice(0, 3).map((tech, i) => (
              <span key={i} className="skill-badge text-xs">
                {tech}
              </span>
            ))}
            {project.technologies?.length > 3 && (
              <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-auto">
            <div className="flex items-center space-x-3">
              {project.year && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{project.team}</span>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-3 h-3" />
              <span>{project.category}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 min-h-screen py-20 section-container relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-primary-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-secondary-400 rounded-full opacity-15"></div>
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title">
            {t('projects.title')}
          </h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-soft'
                  : 'bg-white/80 dark:bg-neutral-700/80 text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-600'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id || index} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <div className="carousel-container" {...swipeHandlers.handlers}>
            <div 
              className={`carousel-track ${swipeHandlers.isDragging ? 'dragging' : ''}`}
              style={{ 
                transform: `translateX(${swipeHandlers.getTranslateX()}%)`,
                transition: swipeHandlers.isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {filteredProjects.map((project, index) => (
                <div key={project.id || index} className="carousel-item">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="carousel-controls">
            <button
              onClick={swipeHandlers.prevSlide}
              disabled={!swipeHandlers.canGoPrev}
              className="btn-secondary p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="carousel-indicators">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swipeHandlers.goToSlide(index)}
                  className={`carousel-indicator ${index === swipeHandlers.currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
            
            <button
              onClick={swipeHandlers.nextSlide}
              disabled={!swipeHandlers.canGoNext}
              className="btn-secondary p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="card max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-display">
              {t('projects.callToAction')}
            </h3>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>{t('projects.contactMe')}</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
