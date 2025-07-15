import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, 
  ExternalLink, 
  Calendar, 
  Users, 
  Award,
  BookOpen,
  GraduationCap,
  Microscope,
  X,
  ChevronDown,
  ChevronUp,
  Download,
  Quote,
  Link
} from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { useStaticAnimation } from '../hooks/useOptimizedAnimation'

const Research = () => {
  const { t } = useTranslation()
  const [selectedPaper, setSelectedPaper] = useState(null)
  const [expandedAbstract, setExpandedAbstract] = useState(null)
  
  const publications = t('research.publications')
  const researchAreas = t('research.areas')
  
  const { containerRef, animatedItems } = useStaticAnimation(publications)

  // Funzione per scaricare BibTeX
  const downloadBibTeX = (bibtex, filename) => {
    const blob = new Blob([bibtex], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Funzione per copiare BibTeX negli appunti
  const copyBibTeX = async (bibtex) => {
    try {
      await navigator.clipboard.writeText(bibtex)
      // Potresti aggiungere un toast di conferma qui
    } catch (err) {
      console.error('Errore nella copia:', err)
    }
  }

  const PublicationCard = ({ publication, index }) => {
    const isAnimated = animatedItems.has(index)
    const isExpanded = expandedAbstract === publication.id
    
    return (
      <div
        className={`card card-hover group h-full transition-all duration-600 transform ${
          isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{
          transitionDelay: `${index * 150}ms`
        }}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                  {publication.type}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-neutral-500 dark:text-neutral-400">
              <Calendar className="w-4 h-4" />
              <span>{publication.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 leading-tight font-display">
            {publication.title}
          </h3>

          {/* Authors */}
          <div className="flex items-center space-x-2 mb-3">
            <Users className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {publication.authors.map((author, i) => (
                <span key={i} className={author.isMe ? 'font-semibold text-primary-600 dark:text-primary-400' : ''}>
                  {author.name}
                  {i < publication.authors.length - 1 && ', '}
                </span>
              ))}
            </p>
          </div>

          {/* Venue */}
          <div className="flex items-center space-x-2 mb-4">
            <GraduationCap className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {publication.venue}
            </p>
          </div>

          {/* Abstract Preview */}
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {isExpanded ? publication.abstract : `${publication.abstract.substring(0, 200)}...`}
            </p>
            <button
              onClick={() => setExpandedAbstract(isExpanded ? null : publication.id)}
              className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mt-2 flex items-center space-x-1"
            >
              <span>{isExpanded ? 'Leggi meno' : 'Leggi tutto'}</span>
              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-4">
            {publication.keywords.slice(0, 3).map((keyword, i) => (
              <span key={i} className="text-xs bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 px-2 py-1 rounded-full">
                {keyword}
              </span>
            ))}
            {publication.keywords.length > 3 && (
              <span className="text-xs text-neutral-500 dark:text-neutral-400 px-2 py-1">
                +{publication.keywords.length - 3}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {publication.publisherUrl && (
                <motion.a
                  href={publication.publisherUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-1"
                >
                  <Link className="w-3 h-3" />
                  <span>Publisher</span>
                </motion.a>
              )}
              {publication.pdf && (
                <motion.a
                  href={publication.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center space-x-1"
                >
                  <FileText className="w-3 h-3" />
                  <span>PDF</span>
                </motion.a>
              )}
              {publication.bibtex && (
                <motion.button
                  onClick={() => downloadBibTeX(publication.bibtex, `${publication.title.replace(/\s+/g, '_').toLowerCase()}.bib`)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-1"
                >
                  <Quote className="w-3 h-3" />
                  <span>BibTeX</span>
                </motion.button>
              )}
            </div>
            <button
              onClick={() => setSelectedPaper(publication)}
              className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Dettagli →
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="research" className="section-padding bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-neutral-900 dark:via-blue-900/10 dark:to-neutral-900 min-h-screen py-20 section-container relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-indigo-400 rounded-full opacity-15"></div>
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
            {t('research.title')}
          </h2>
          <p className="section-subtitle">
            {t('research.subtitle')}
          </p>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {researchAreas.map((area, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {area.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" ref={containerRef}>
          {publications.map((publication, index) => (
            <PublicationCard key={publication.id} publication={publication} index={index} />
          ))}
        </div>

      </div>

      {/* Modal for detailed view */}
      <AnimatePresence>
        {selectedPaper && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPaper(null)}
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
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-1 font-display">
                      {selectedPaper.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {selectedPaper.venue} • {selectedPaper.year}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPaper(null)}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  Abstract
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {selectedPaper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPaper.keywords.map((keyword, i) => (
                    <span key={i} className="bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4 flex-wrap">
                {selectedPaper.publisherUrl && (
                  <motion.a
                    href={selectedPaper.publisherUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Link className="w-4 h-4" />
                    <span>Publisher</span>
                  </motion.a>
                )}
                {selectedPaper.doi && (
                  <motion.a
                    href={`https://doi.org/${selectedPaper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>DOI</span>
                  </motion.a>
                )}
                {selectedPaper.pdf && (
                  <motion.a
                    href={selectedPaper.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Scarica PDF</span>
                  </motion.a>
                )}
                {selectedPaper.bibtex && (
                  <motion.button
                    onClick={() => downloadBibTeX(selectedPaper.bibtex, `${selectedPaper.title.replace(/\s+/g, '_').toLowerCase()}.bib`)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Scarica BibTeX</span>
                  </motion.button>
                )}
                {selectedPaper.bibtex && (
                  <motion.button
                    onClick={() => copyBibTeX(selectedPaper.bibtex)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Quote className="w-4 h-4" />
                    <span>Copia BibTeX</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Research
