import React, { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    if (savedLanguage && ['it', 'en'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'it' ? 'en' : 'it'
    setLanguage(newLanguage)
    localStorage.setItem('portfolio-language', newLanguage)
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isItalian: language === 'it',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
