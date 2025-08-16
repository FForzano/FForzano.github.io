import React, { useState, memo } from 'react'
import MarkdownRenderer from './MarkdownRenderer'
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
import * as LucideIcons from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useNoFlickerAnimation } from '../hooks/useOptimizedAnimation'
import { useModal } from '../contexts/ModalContext'
import useSwipe from '../hooks/useSwipe'

// Componente modale separato per evitare ricreazioni
const HobbyModal = memo(({ hobby, onClose }) => {
  // Better icon handling with fallback
  const getIcon = () => {
    if (!hobby.icon || typeof hobby.icon !== 'string') {
      return LucideIcons['Star'];
    }
    return LucideIcons[hobby.icon] || LucideIcons['Star'];
  };
  const Icon = getIcon();
  
  // Prevent scroll chaining: only modal scrolls, never background
  const modalContentRef = React.useRef(null);
  React.useEffect(() => {
    const el = modalContentRef.current;
    if (!el) return;
    
    const preventBackgroundScroll = (e) => {
      // Permetti lo scroll all'interno della modale
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      // Previeni lo scroll del background solo se siamo ai bordi
      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        e.preventDefault();
      }
    };
    
    // Gestione touch più delicata
    const preventTouchBackgroundScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;
      
      // Solo se tocchiamo i bordi, permetti il touch normale dentro la modale
      if (isAtTop || isAtBottom) {
        const touch = e.touches[0];
        if (touch) {
          return;
        }
      }
    };
    
    el.addEventListener('wheel', preventBackgroundScroll, { passive: false });
    el.addEventListener('touchmove', preventTouchBackgroundScroll, { passive: true });
    
    return () => {
      el.removeEventListener('wheel', preventBackgroundScroll);
      el.removeEventListener('touchmove', preventTouchBackgroundScroll);
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onClick={onClose}
    >
      <motion.div
        ref={modalContentRef}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="bg-white dark:bg-neutral-800 rounded-2xl p-8 min-h-[40vh] overflow-y-auto shadow-large mx-auto my-auto"
        style={{
          maxWidth: 'min(90vw, 1024px)',
          maxHeight: 'min(85vh, 800px)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
              <Icon className="w-8 h-8 text-primary-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 font-display">
                {hobby.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Description avanzata */}
        <div className="mb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <MarkdownRenderer content={hobby.description} />
        </div>

        {/* Media: mostra solo se almeno uno tra immagini, documenti o link è presente */}
        {hobby.media && (
          (Array.isArray(hobby.media.images) && hobby.media.images.length > 0 ||
            Array.isArray(hobby.media.documents) && hobby.media.documents.length > 0 ||
            Array.isArray(hobby.media.links) && hobby.media.links.length > 0) && (
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Media e Documenti</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Images */}
                {Array.isArray(hobby.media.images) && hobby.media.images.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                      <ImageIcon className="w-4 h-4 mr-1" />
                      Immagini
                    </h5>
                    <div className="space-y-1">
                      {hobby.media.images.map((image, i) => (
                        <img
                          key={i}
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-32 object-cover rounded border cursor-pointer hover:scale-105 transition-transform duration-200"
                          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {/* Documents */}
                {Array.isArray(hobby.media.documents) && hobby.media.documents.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      Documenti
                    </h5>
                    <div className="space-y-1">
                      {hobby.media.documents.map((doc, i) => (
                        <a
                          key={i}
                          href={doc.src}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer block"
                        >
                          {doc.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                {/* Links */}
                {Array.isArray(hobby.media.links) && hobby.media.links.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Collegamenti
                    </h5>
                    <div className="space-y-1">
                      {hobby.media.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer block"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </motion.div>
    </motion.div>
  )
})

HobbyModal.displayName = 'HobbyModal'

const Hobbies = () => {
  const { t } = useTranslation()
  const { openModal, closeModal } = useModal()
  const [selectedHobby, setSelectedHobby] = useState(null)
  const scrollPositionRef = React.useRef(0)
  const wasModalOpenRef = React.useRef(false)
  
  // Blocca/ripristina scroll come in Experience.jsx
  React.useEffect(() => {
    if (selectedHobby && !wasModalOpenRef.current) {
      scrollPositionRef.current = window.scrollY;
      document.body.classList.add('modal-open');
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      // Notifica il ModalContext che una modale è aperta con callback di chiusura
      openModal(() => setSelectedHobby(null))
      wasModalOpenRef.current = true
    } else if (!selectedHobby && wasModalOpenRef.current) {
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      setTimeout(() => {
        window.scrollTo({ top: scrollPositionRef.current, behavior: 'auto' })
      }, 0);
      closeModal()
      wasModalOpenRef.current = false
    }
    return () => {
      if (wasModalOpenRef.current) {
        document.body.classList.remove('modal-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, [selectedHobby]);

  const { ref: sectionRef, isVisible } = useNoFlickerAnimation()
  const hobbies = t('hobbies.hobbies')
  const swipeHandlers = useSwipe(hobbies.length, {
    threshold: 50,
    preventDefaultTouchmoveEvent: false,
    trackMouse: false,
    trackTouch: true,
    onSwipedUp: () => {},
    onSwipedDown: () => {},
    onTap: () => {},
  })

  const nextSlide = () => swipeHandlers.nextSlide()
  const prevSlide = () => swipeHandlers.prevSlide()

  const getIcon = (iconName) => {
    if (!iconName || typeof iconName !== 'string') {
      return Music;
    }
    return LucideIcons[iconName] || Music;
  }

  // Funzione helper per estrarre una descrizione troncata dalla descrizione completa
  const getTruncatedDescription = (description, maxLength = 150) => {
    if (!description) return '';
    
    // Se è una stringa, la usiamo direttamente
    if (typeof description === 'string') {
      return description.length > maxLength 
        ? description.substring(0, maxLength).trim() + '...'
        : description;
    }
    
    // Se è un array, estraiamo solo le stringhe e le concateniamo
    if (Array.isArray(description)) {
      const textContent = description
        .filter(item => typeof item === 'string')
        .join(' ')
        .replace(/\*\*/g, '') // Rimuove markdown bold
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Converte link markdown in testo
        .trim();
      
      return textContent.length > maxLength 
        ? textContent.substring(0, maxLength).trim() + '...'
        : textContent;
    }
    
    return '';
  }

  const HobbyCard = ({ hobby, index, className = "" }) => {
    const Icon = getIcon(hobby.icon)
    const truncatedDescription = getTruncatedDescription(hobby.description, 120)
    
    return (
      <div
        className={`card card-hover cursor-pointer h-full group ${className} transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{
          transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
          willChange: 'transform, opacity'
        }}
        onClick={() => setSelectedHobby(hobby)}
      >
        <div className="p-6 flex flex-col h-full relative overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 relative z-10">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {hobby.period}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 font-display relative z-10">
            {hobby.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3 flex-1 relative z-10">
            {truncatedDescription}
          </p>

          {/* Skills/Tags */}
          {hobby.tags && (
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {hobby.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className="skill-badge text-xs">
                  {tag}
                </span>
              ))}
              {hobby.tags.length > 3 && (
                <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                  +{hobby.tags.length - 3} altri
                </span>
              )}
            </div>
          )}

          {/* View More */}
          <div className="flex items-center justify-between mt-auto relative z-10">
            <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
              Scopri di più
            </span>
            <ExternalLink className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-xl group-hover:from-primary-500/20 transition-all duration-300" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-secondary-500/5 to-transparent rounded-full blur-xl group-hover:from-secondary-500/10 transition-all duration-300" />
        </div>
      </div>
    )
  }

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
            {t('hobbies.title')}
          </h2>
          <p className="section-subtitle">
            {t('hobbies.subtitle')}
          </p>
        </div>

        {/* Hobbies Grid / Carousel */}
        
        {/* Desktop Grid */}
        <div className="hidden md:block hobbies-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={hobby.id} hobby={hobby} index={index} />
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
                <div key={hobby.id} className="carousel-item">
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
