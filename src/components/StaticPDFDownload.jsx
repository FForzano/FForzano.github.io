import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

const StaticPDFDownload = () => {
  const { language } = useTranslation()
  
  const handleDownloadCV = () => {
    // Costruisci il percorso del PDF basato sulla lingua
    const pdfPath = `/cv/Federico_Forzano_CV_${language.toUpperCase()}.pdf`
    
    // Crea link temporaneo per il download
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = `Federico_Forzano_CV_${language.toUpperCase()}_${new Date().getFullYear()}.pdf`
    link.target = '_blank'
    
    // Aggiungi il link al DOM, fai click e rimuovi
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return {
    handleDownloadCV,
    isGenerating: false // Sempre false per download statico
  }
}

export default StaticPDFDownload
