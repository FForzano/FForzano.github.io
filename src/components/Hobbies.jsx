import React, { useState } from 'react'
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
import useSwipe from '../hooks/useSwipe'

const Hobbies = () => {
  const { t } = useTranslation()
  const [selectedHobby, setSelectedHobby] = useState(null)
  // Ref globale per la posizione scroll, come in Experience.jsx
  const scrollPositionRef = React.useRef(0)
  // Blocca/ripristina scroll come in Experience.jsx
  React.useEffect(() => {
    if (selectedHobby) {
      // Save scroll position and block scroll
      scrollPositionRef.current = window.scrollY;
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
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollPositionRef.current);
        });
      });
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedHobby]);

  const { ref: sectionRef, isVisible } = useNoFlickerAnimation()
  const hobbies = t('hobbies.hobbies')
  const swipeHandlers = useSwipe(hobbies.length, {
    threshold: 50,
    preventDefaultTouchmoveEvent: false,
    trackMouse: false, // Disable mouse tracking to avoid conflicts
    trackTouch: true,
    onSwipedUp: () => {},
    onSwipedDown: () => {},
    onTap: () => {}, // Disable tap handling to avoid conflicts with clicks
  })

  const HobbyCard = ({ hobby, index }) => {
    // Better icon handling with fallback
    const getIcon = () => {
      if (!hobby.icon || typeof hobby.icon !== 'string') {
        return LucideIcons['Star'];
      }
      return LucideIcons[hobby.icon] || LucideIcons['Star'];
    };
    const Icon = getIcon();
    // Funzione per estrarre solo la parte testuale (markdown) e troncarla, rimuovendo i link markdown ma lasciando grassetto/corsivo
    const stripMarkdownLinks = (str) => {
      // Rimuove i link markdown ma lascia il testo visibile, mantiene * e **
      // [testo](url) => testo
      return str.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
    };
    const getShortText = (desc, maxChars = 180) => {
      if (typeof desc === 'string') {
        let clean = stripMarkdownLinks(desc);
        if (clean.length > maxChars) {
          clean = clean.slice(0, maxChars) + '…';
        }
        return clean;
      }
      if (Array.isArray(desc)) {
        let chars = 0;
        let result = [];
        for (const item of desc) {
          if (typeof item === 'string') {
            let clean = stripMarkdownLinks(item);
            if (chars + clean.length > maxChars) {
              result.push(clean.slice(0, maxChars - chars) + '…');
              break;
            } else {
              result.push(clean);
              chars += clean.length;
            }
          }
        }
        return result.length ? result : '…';
      }
      return '…';
    }
    return (
      <div
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          {/* Content */}
          <div className="relative p-8 flex flex-col h-full">
            {/* Icon */}
            <div className="w-20 h-20 bg-neutral-100 dark:bg-neutral-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <Icon className="w-10 h-10 text-primary-600 dark:text-primary-400" />
            </div>
            {/* Title */}
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-display">
              {hobby.title}
            </h3>
            {/* Description (max height, overflow fade) */}
            <div className="relative mb-4 flex-1 max-h-32 overflow-hidden text-neutral-600 dark:text-neutral-400" style={{ WebkitMaskImage: 'linear-gradient(180deg, #000 70%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 70%, transparent 100%)' }}>
              <MarkdownRenderer content={getShortText(hobby.description)} inline={true} />
            </div>
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
  }

  const HobbyModal = ({ hobby, onClose, scrollPositionRef }) => {
    // Better icon handling with fallback
    const getIcon = () => {
      if (!hobby.icon || typeof hobby.icon !== 'string') {
        return LucideIcons['Star'];
      }
      return LucideIcons[hobby.icon] || LucideIcons['Star'];
    };
    const Icon = getIcon();
  // (Gestione scroll spostata nel componente principale)
    // Prevent scroll chaining: only modal scrolls, never background
    const modalContentRef = React.useRef(null);
    React.useEffect(() => {
      const el = modalContentRef.current;
      if (!el) return;
      const stop = (e) => {
        // Only stop if can't scroll further in that direction
        const { scrollTop, scrollHeight, clientHeight } = el;
        if (
          (e.deltaY < 0 && scrollTop === 0) ||
          (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight)
        ) {
          e.preventDefault();
        }
      };
      el.addEventListener('wheel', stop, { passive: false });
      el.addEventListener('touchmove', stop, { passive: false });
      return () => {
        el.removeEventListener('wheel', stop);
        el.removeEventListener('touchmove', stop);
      };
    }, []);
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          ref={modalContentRef}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white dark:bg-neutral-800 rounded-2xl p-8 max-w-4xl max-h-[80vh] min-h-[40vh] overflow-y-auto shadow-large"
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
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  Media e Materiali
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hobby.media.images?.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                        <ImageIcon className="w-4 h-4 mr-1" />
                        Immagini
                      </h5>
                      <div className="space-y-1">
                        {hobby.media.images.map((image, i) => (
                          <div key={i} className="flex items-center group">
                            <img src={image.src} alt={image.alt} className="w-16 h-16 object-cover rounded mr-2 border-2 border-transparent group-hover:border-primary-600 transition duration-150" />
                            <span>{image.alt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {hobby.media.documents?.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        Documenti
                      </h5>
                      <div className="space-y-1">
                        {hobby.media.documents.map((doc, i) => (
                          <a key={i} href={doc.src} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer block">
                            {doc.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  {hobby.media.links?.length > 0 && (
                    <div>
                      <h5 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Link
                      </h5>
                      <div className="space-y-1">
                        {hobby.media.links.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-600 dark:text-primary-400 hover:underline cursor-pointer block">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <HobbyCard key={hobby.key || hobby.title || `hobby-${index}`} hobby={hobby} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden" style={{overflow: 'visible'}}>
          <div 
            className="carousel-container" 
            {...swipeHandlers.handlers}
          >
            <div 
              className={`carousel-track ${swipeHandlers.isDragging ? 'dragging' : ''}`}
              style={{ 
                transform: `translateX(${swipeHandlers.getTranslateX()}%)`,
                transition: swipeHandlers.isDragging ? 'none' : 'transform 0.3s ease-out'
              }}
            >
              {hobbies.map((hobby, index) => (
                <div key={`${hobby.key || hobby.title || `hobby-${index}`}-mobile`} className="carousel-item">
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
          <HobbyModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} scrollPositionRef={scrollPositionRef} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Hobbies
