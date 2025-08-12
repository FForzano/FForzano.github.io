import React, { useState, useEffect } from 'react'
import '../modal.css'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Building,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  X,
  FileText,
  Image as ImageIcon,
  Link
} from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useStaticAnimation } from '../hooks/useOptimizedAnimation'
import useSwipe from '../hooks/useSwipe'
import ReactMarkdown from 'react-markdown'

const Experience = () => {
  const { t } = useTranslation()
  const [selectedExperience, setSelectedExperience] = useState(null)
  // Track scroll position for modal
  const scrollPositionRef = React.useRef(0)
  useEffect(() => {
    if (selectedExperience) {
      // Save scroll position and block scroll
      scrollPositionRef.current = window.scrollY
      document.body.classList.add('modal-open');
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      // Restore scroll position and unblock scroll
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo({ top: scrollPositionRef.current, behavior: 'auto' })
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedExperience]);

  // Hook per il carosello mobile
  const experiences = t('experience.positions')
  const swipeHandlers = useSwipe(experiences.length, {
    threshold: 50,
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
    trackTouch: true,
    // Abilita swipe verticale
    onSwipedUp: () => {},
    onSwipedDown: () => {},
  })

  // Hook per animazioni ottimizzate
  const { containerRef, animatedItems } = useStaticAnimation(experiences)

  const nextSlide = () => swipeHandlers.nextSlide()
  const prevSlide = () => swipeHandlers.prevSlide()

  const getTypeIcon = (type) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-6 h-6" />
      case 'education':
        return <GraduationCap className="w-6 h-6" />
      case 'certification':
        return <Award className="w-6 h-6" />
      default:
        return <Building className="w-6 h-6" />
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
      case 'education':
        return 'text-secondary-600 bg-secondary-50 dark:bg-secondary-900/20'
      case 'certification':
        return 'text-accent-600 bg-accent-50 dark:bg-accent-900/20'
      default:
        return 'text-neutral-600 bg-neutral-50 dark:bg-neutral-900/20'
    }
  }

  const ExperienceCard = ({ experience, index }) => {
    const isVisible = animatedItems.has(index)
    
    return (
      <div
        className={`card card-hover cursor-pointer h-full transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
          willChange: 'transform, opacity'
        }}
        onClick={() => setSelectedExperience(experience)}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getTypeColor(experience.type)}`}>
              {getTypeIcon(experience.type)}
            </div>
            <div className="text-right">
              <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm mb-1">
                <Calendar className="w-4 h-4 mr-1" />
                {experience.period}
              </div>
              <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                {experience.location}
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 font-display">
            {experience.title}
          </h3>
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
            {experience.company}
          </p>
          <div className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3 flex-1">
            <ReactMarkdown>{experience.shortDescription}</ReactMarkdown>
          </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.skills.slice(0, 4).map((skill, i) => (
            <span key={i} className="skill-badge text-xs">
              {skill}
            </span>
          ))}
          {experience.skills.length > 4 && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
              +{experience.skills.length - 4} {t('experience.moreLabel')}
            </span>
          )}
        </div>

        {/* View More */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm text-neutral-500 dark:text-neutral-400">
            {experience.achievements.length} {t('experience.resultsLabel')}
          </span>
          <ExternalLink className="w-4 h-4 text-primary-600 dark:text-primary-400" />
        </div>
      </div>
    </div>
    )
  }

  return (
    <section id="experience" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 min-h-screen py-20 section-container relative wave-pattern">
      {/* Elementi decorativi minimali */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-1 h-1 bg-accent-400 rounded-full opacity-15"></div>
        <div className="absolute bottom-1/5 right-1/5 w-2 h-2 bg-primary-400 rounded-full opacity-10"></div>
      </div>
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="section-title">
            {t('experience.title')}
          </h2>
          <p className="section-subtitle">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Experience Grid / Carousel */}
        
        {/* Desktop Grid */}
        <div className="hidden md:block experience-container" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden" style={{overflow: 'visible'}}>
          <div className="carousel-container" {...swipeHandlers.handlers}>
            <div 
              className={`carousel-track ${swipeHandlers.isDragging ? 'dragging' : ''}`}
              style={{ 
                transform: `translateX(${swipeHandlers.getTranslateX()}%)`,
                transition: swipeHandlers.isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {experiences.map((experience, index) => (
                <div key={experience.id} className="carousel-item">
                  <ExperienceCard experience={experience} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="carousel-controls">
            <button
              onClick={prevSlide}
              disabled={!swipeHandlers.canGoPrev}
              className="btn-secondary p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="carousel-indicators">
              {experiences.map((_, index) => (
                <button
                  key={index}
                  onClick={() => swipeHandlers.goToSlide(index)}
                  className={`carousel-indicator ${index === swipeHandlers.currentIndex ? 'active' : ''}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={!swipeHandlers.canGoNext}
              className="btn-secondary p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto shadow-large"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getTypeColor(selectedExperience.type)}`}>
                      {getTypeIcon(selectedExperience.type)}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 font-display">
                        {selectedExperience.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                        {selectedExperience.company}
                      </p>
                      <div className="flex items-center space-x-4 text-neutral-500 dark:text-neutral-400 text-sm mt-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {selectedExperience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {selectedExperience.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedExperience(null)}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                    {t('experience.detailsModal.description')}
                  </h4>
                  <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <ReactMarkdown>{selectedExperience.longDescription}</ReactMarkdown>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                    {t('experience.detailsModal.skills')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                    {t('experience.detailsModal.achievements')}
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, i) => (
                      typeof achievement === 'string' ? (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-neutral-600 dark:text-neutral-400">{achievement}</span>
                        </li>
                      ) : (
                        <li key={i} className="flex flex-col items-start">
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-neutral-600 dark:text-neutral-400 font-medium">{achievement.main}</span>
                          </div>
                          <ul className="ml-7 mt-1 space-y-1">
                            {achievement.sub && achievement.sub.map((sub, j) =>
                              typeof sub === 'object' ? (
                                <li key={j} className="flex items-center justify-between pl-2 py-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-primary-200 dark:border-primary-700 shadow-sm">
                                  <span className="text-neutral-700 dark:text-neutral-300 font-medium text-base"><ReactMarkdown>{sub.reference}</ReactMarkdown></span>
                                  {sub.pdf && (
                                    <a href={sub.pdf} target="_blank" rel="noopener noreferrer" className="ml-3">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                                      </svg>
                                    </a>
                                  )}
                                </li>
                              ) : (
                                <li key={j} className="text-neutral-600 dark:text-neutral-400">{sub}</li>
                              )
                            )}
                          </ul>
                        </li>
                      )
                    ))}
                  </ul>
                </div>

                {/* Media */}
                {selectedExperience.media && (
                  <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                    <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                      {t('experience.detailsModal.materials')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedExperience.media.images?.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                            <ImageIcon className="w-4 h-4 mr-1" />
                            {t('experience.detailsModal.mediaLabels.images')}
                          </h5>
                          <div className="space-y-1">
                            {selectedExperience.media.images.map((image, i) => (
                              <div key={i} className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                                {t('experience.detailsModal.mediaLabels.images')} {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {selectedExperience.media.documents?.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            {t('experience.detailsModal.mediaLabels.documents')}
                          </h5>
                          <div className="space-y-1">
                            {selectedExperience.media.documents.map((doc, i) => (
                              <div key={i} className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                                {t('experience.detailsModal.mediaLabels.documents')} {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {selectedExperience.media.links?.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                            <Link className="w-4 h-4 mr-1" />
                            {t('experience.detailsModal.mediaLabels.links')}
                          </h5>
                          <div className="space-y-1">
                            {selectedExperience.media.links.map((link, i) => (
                              <a
                                key={i}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer block"
                              >
                                {t('experience.detailsModal.mediaLabels.links')} {i + 1}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Experience
