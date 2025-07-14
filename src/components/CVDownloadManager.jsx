import React, { useState } from 'react'
import CVGenerator from './CVGenerator'
import ReactPDFGenerator from './ReactPDFGenerator'
import { useTranslation } from '../hooks/useTranslation'

const CVDownloadManager = () => {
  const { t } = useTranslation()
  const [isGenerating, setIsGenerating] = useState(false)
  
  const { generatePDF } = CVGenerator()
  const { generateAdvancedPDF } = ReactPDFGenerator()

  const handleDownloadCV = async (advanced = true) => {
    setIsGenerating(true)
    
    try {
      if (advanced) {
        await generateAdvancedPDF()
      } else {
        generatePDF()
      }
    } catch (error) {
      console.error('PDF generation error:', error)
      // Fallback alla versione semplice
      try {
        generatePDF()
      } catch (fallbackError) {
        console.error('Fallback PDF generation failed:', fallbackError)
        alert(t('common.error') + ': Unable to generate PDF')
      }
    } finally {
      setIsGenerating(false)
    }
  }

  return {
    handleDownloadCV,
    isGenerating
  }
}

export default CVDownloadManager
