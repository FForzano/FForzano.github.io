import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Music, 
  Waves, 
  Laptop, 
  Search,
  Guitar,
  Compass,
  X,
  Play,
  ExternalLink,
  Calendar,
  Award,
  Image as ImageIcon,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useNoFlickerAnimation } from '../hooks/useOptimizedAnimation'
import useSwipe from '../hooks/useSwipe'

const Hobbies = () => {
  const { t } = useTranslation()
  const [selectedHobby, setSelectedHobby] = useState(null)

  // Hook per prevenire il flickering
  const { ref: sectionRef, isVisible } = useNoFlickerAnimation()

  // Hook per il carosello mobile
  const swipeHandlers = useSwipe(4, { // 4 hobbies
    threshold: 50,
    preventDefaultTouchmoveEvent: false,
    trackMouse: true,
    trackTouch: true,
  })

  const hobbies = [
    {
      key: 'guitar',
      icon: Music,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400',
      title: 'Chitarra e Musica',
      description: 'Suono la chitarra da oltre 10 anni, spaziando dal rock al blues al fingerpicking. La musica è la mia passione più grande e mi aiuta a esprimere creatività.',
      details: {
        experience: '10+ anni',
        level: 'Avanzato',
        genres: ['Rock', 'Blues', 'Fingerpicking', 'Acoustic'],
        achievements: [
          'Esibizioni in locali della zona',
          'Collaborazioni con band locali',
          'Registrazione di demo musicali',
          'Insegnamento di chitarra base'
        ],
        currentProjects: [
          'Registrazione di un EP acustico',
          'Collaborazione con cantautori locali',
          'Studio di tecniche di fingerpicking avanzate'
        ],
        media: {
          images: ['/images/guitar1.jpg', '/images/guitar2.jpg', '/images/performance.jpg'],
          videos: ['/videos/guitar-demo.mp4', '/videos/live-performance.mp4'],
          audio: ['/audio/demo-track1.mp3', '/audio/demo-track2.mp3']
        }
      }
    },
    {
      key: 'sailing',
      icon: Waves,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
      title: 'Vela e Navigazione',
      description: 'La vela mi ha insegnato pazienza, lettura delle condizioni meteo e lavoro di squadra. Navigo principalmente in Adriatico con uscite regolari.',
      details: {
        experience: '8 anni',
        level: 'Intermedio-Avanzato',
        certifications: ['Patente Nautica', 'VDS Base', 'Corso di Meteorologia'],
        achievements: [
          'Partecipazione a regate locali',
          'Traversate in Adriatico',
          'Capitano su imbarcazioni fino a 12m',
          'Corso di sicurezza in mare'
        ],
        currentProjects: [
          'Preparazione per regata primaverile',
          'Studio per abilitazione VDS avanzato',
          'Pianificazione crociera estiva in Croazia'
        ],
        media: {
          images: ['/images/sailing1.jpg', '/images/sailing2.jpg', '/images/regatta.jpg'],
          videos: ['/videos/sailing-trip.mp4'],
          documents: ['/docs/sailing-license.pdf']
        }
      }
    },
    {
      key: 'technology',
      icon: Laptop,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400',
      title: 'Tecnologia e Innovazione',
      description: 'Sono sempre aggiornato sulle ultime tecnologie. Sperimento con AI, blockchain e nuovi framework per restare al passo con l\'innovazione.',
      details: {
        experience: '15+ anni',
        level: 'Esperto',
        areas: ['AI/ML', 'Blockchain', 'IoT', 'Cloud Computing', 'DevOps'],
        achievements: [
          'Creazione di progetti open source',
          'Contributi a community tecnologiche',
          'Partecipazione a hackathon',
          'Mentoring per sviluppatori junior'
        ],
        currentProjects: [
          'Sviluppo di un progetto AI/ML',
          'Sperimentazione con Web3',
          'Contributi a progetti open source',
          'Blog tecnico e tutorial'
        ],
        media: {
          images: ['/images/tech-setup.jpg', '/images/hackathon.jpg'],
          documents: ['/docs/certifications.pdf'],
          links: ['https://github.com/fforzano', 'https://techblog.com/fforzano']
        }
      }
    },
    {
      key: 'research',
      icon: Search,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
      title: 'Ricerca e Studio',
      description: 'Mi piace approfondire argomenti complessi e mantenermi aggiornato. Leggo papers scientifici e contribuisco alla ricerca nel campo dell\'informatica.',
      details: {
        experience: '5 anni',
        level: 'Intermedio',
        areas: ['Computer Science', 'Software Engineering', 'Distributed Systems', 'UX Research'],
        achievements: [
          'Pubblicazione di paper accademici',
          'Partecipazione a conferenze',
          'Revisione di articoli scientifici',
          'Presentazioni in ambito universitario'
        ],
        currentProjects: [
          'Ricerca su architetture distribuite',
          'Studio di pattern di design UX',
          'Analisi di performance in sistemi cloud',
          'Contributi a riviste del settore'
        ],
        media: {
          documents: ['/docs/research-paper.pdf', '/docs/conference-slides.pdf'],
          links: ['https://scholar.google.com/citations?user=fforzano', 'https://researchgate.net/fforzano']
        }
      }
    }
  ]

  const HobbyCard = ({ hobby, index }) => (
    <div
      key={hobby.key}
      className={`group relative cursor-pointer h-full transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
        willChange: 'transform, opacity'
      }}
      onClick={() => setSelectedHobby(hobby)}
    >
      <div className="relative overflow-hidden card card-hover h-full hover:scale-105 transition-transform duration-300">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className="relative p-8 flex flex-col h-full">
          {/* Icon */}
          <div className={`w-20 h-20 ${hobby.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
            <hobby.icon className={`w-10 h-10 ${hobby.iconColor}`} />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-display">
            {hobby.title}
          </h3>
          
          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg mb-4 flex-1">
            {hobby.description}
          </p>

          {/* Click indicator */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              Clicca per saperne di più
            </span>
            <ExternalLink className="w-4 h-4 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-xl group-hover:from-primary-500/20 transition-all duration-300" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary-500/5 to-transparent rounded-full blur-xl group-hover:from-secondary-500/10 transition-all duration-300" />
      </div>
    </div>
  )

  const HobbyModal = ({ hobby, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
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
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${hobby.bgColor}`}>
              <hobby.icon className={`w-8 h-8 ${hobby.iconColor}`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 font-display">
                {hobby.title}
              </h3>
              <div className="flex items-center space-x-4 text-neutral-500 dark:text-neutral-400 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {hobby.details.experience}
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1" />
                  {hobby.details.level}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {hobby.description}
          </p>
        </div>

        {/* Skills/Areas */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            {hobby.key === 'guitar' ? 'Generi' : hobby.key === 'sailing' ? 'Certificazioni' : 'Aree di Interesse'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(hobby.details.genres || hobby.details.certifications || hobby.details.areas || []).map((item, i) => (
              <span key={i} className="skill-badge">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            Risultati Principali
          </h4>
          <ul className="space-y-2">
            {hobby.details.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Projects */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
            Progetti Attuali
          </h4>
          <ul className="space-y-2">
            {hobby.details.currentProjects.map((project, i) => (
              <li key={i} className="flex items-start">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                <span className="text-neutral-600 dark:text-neutral-400">
                  {project}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media */}
        {hobby.details.media && (
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
              Media e Materiali
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hobby.details.media.images && (
                <div>
                  <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                    <ImageIcon className="w-4 h-4 mr-1" />
                    Immagini
                  </h5>
                  <div className="space-y-1">
                    {hobby.details.media.images.map((image, i) => (
                      <div key={i} className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                        Immagine {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hobby.details.media.videos && (
                <div>
                  <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                    <Play className="w-4 h-4 mr-1" />
                    Video
                  </h5>
                  <div className="space-y-1">
                    {hobby.details.media.videos.map((video, i) => (
                      <div key={i} className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                        Video {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hobby.details.media.audio && (
                <div>
                  <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                    <Music className="w-4 h-4 mr-1" />
                    Audio
                  </h5>
                  <div className="space-y-1">
                    {hobby.details.media.audio.map((audio, i) => (
                      <div key={i} className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                        Track {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hobby.details.media.documents && (
                <div>
                  <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    Documenti
                  </h5>
                  <div className="space-y-1">
                    {hobby.details.media.documents.map((doc, i) => (
                      <div key={i} className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
                        Documento {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hobby.details.media.links && (
                <div>
                  <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Link
                  </h5>
                  <div className="space-y-1">
                    {hobby.details.media.links.map((link, i) => (
                      <a
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer block"
                      >
                        Link {i + 1}
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
  )

  return (
    <section id="hobbies" className="section-padding bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-800 dark:via-neutral-900 dark:to-neutral-800 min-h-screen py-20 section-container relative wave-pattern music-minimal">
      {/* Elementi decorativi minimali */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-secondary-400 rounded-full opacity-12"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary-400 rounded-full opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">
            {t('about.hobbiesTitle')}
          </h2>
          <p className="section-subtitle">
            {t('about.hobbiesSubtitle')}
          </p>
        </div>

        {/* Hobbies Grid / Carousel */}
        
        {/* Desktop Grid */}
        <div className="hidden md:block hobbies-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={hobby.key} hobby={hobby} index={index} />
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
              {hobbies.map((hobby, index) => (
                <div key={hobby.key} className="carousel-item">
                  <HobbyCard hobby={hobby} index={index} />
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
              {hobbies.map((_, index) => (
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

        {/* Bottom decorative section */}
        <div className="mt-16 text-center">
          <div className="relative">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent flex-1 max-w-32" />
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
              <div className="h-px bg-gradient-to-r from-transparent via-secondary-500 to-transparent flex-1 max-w-32" />
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
              "Come le onde del mare e le note di una melodia, ogni passione ha il suo ritmo e la sua armonia"
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedHobby && (
          <HobbyModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hobbies
