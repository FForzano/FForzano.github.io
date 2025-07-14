import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { LanguageProvider } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import { translations } from '../translations'

describe('Translation System', () => {
  const wrapper = ({ children, initialLanguage = 'it' }) => (
    <LanguageProvider initialLanguage={initialLanguage}>
      {children}
    </LanguageProvider>
  )

  describe('useTranslation hook', () => {
    it('should return default language as Italian', () => {
      const { result } = renderHook(() => useTranslation(), { wrapper })
      
      expect(result.current.language).toBe('it')
    })

    it('should change language when setLanguage is called', () => {
      const { result } = renderHook(() => useTranslation(), { wrapper })
      
      act(() => {
        result.current.setLanguage('en')
      })
      
      expect(result.current.language).toBe('en')
    })

    it('should translate simple keys correctly', () => {
      const { result } = renderHook(() => useTranslation(), { wrapper })
      
      expect(result.current.t('nav.home')).toBe('Home')
      expect(result.current.t('nav.about')).toBe('About')
    })

    it('should translate nested keys correctly', () => {
      const { result } = renderHook(() => useTranslation(), { wrapper })
      
      expect(result.current.t('hero.greeting')).toBe('Ciao, sono')
      expect(result.current.t('about.educationTitle')).toBe('Formazione Accademica')
    })

    it('should return different translations for different languages', () => {
      const { result } = renderHook(() => useTranslation(), { wrapper })
      
      // Italian
      expect(result.current.t('hero.greeting')).toBe('Ciao, sono')
      
      // Switch to English
      act(() => {
        result.current.setLanguage('en')
      })
      
      expect(result.current.t('hero.greeting')).toBe('Hi, I\'m')
    })

    it('should return key if translation not found', () => {
      const { result } = renderHook(() => useTranslation(), { wrapper })
      
      expect(result.current.t('nonexistent.key')).toBe('nonexistent.key')
    })
  })

  describe('Translation completeness', () => {
    it('should have all required sections in both languages', () => {
      const requiredSections = ['nav', 'hero', 'about', 'skills', 'projects', 'contact', 'footer']
      
      requiredSections.forEach(section => {
        expect(translations.it[section]).toBeDefined()
        expect(translations.en[section]).toBeDefined()
      })
    })

    it('should have matching keys in both languages', () => {
      const checkKeys = (itObj, enObj, path = '') => {
        const itKeys = Object.keys(itObj)
        const enKeys = Object.keys(enObj)
        
        itKeys.forEach(key => {
          const currentPath = path ? `${path}.${key}` : key
          expect(enKeys).toContain(key, `Missing English key: ${currentPath}`)
          
          if (typeof itObj[key] === 'object' && !Array.isArray(itObj[key])) {
            checkKeys(itObj[key], enObj[key] || {}, currentPath)
          }
        })
      }
      
      checkKeys(translations.it, translations.en)
    })

    it('should have hero section with all required keys', () => {
      const requiredHeroKeys = ['greeting', 'title', 'description', 'viewProjects', 'downloadCV']
      
      requiredHeroKeys.forEach(key => {
        expect(translations.it.hero[key]).toBeDefined()
        expect(translations.en.hero[key]).toBeDefined()
        expect(typeof translations.it.hero[key]).toBe('string')
        expect(typeof translations.en.hero[key]).toBe('string')
      })
    })

    it('should have navigation with all required keys', () => {
      const requiredNavKeys = ['home', 'about', 'skills', 'projects', 'contact']
      
      requiredNavKeys.forEach(key => {
        expect(translations.it.nav[key]).toBeDefined()
        expect(translations.en.nav[key]).toBeDefined()
        expect(typeof translations.it.nav[key]).toBe('string')
        expect(typeof translations.en.nav[key]).toBe('string')
      })
    })

    it('should have skills categories translated', () => {
      const skillCategories = ['programming', 'web', 'systems']
      
      skillCategories.forEach(category => {
        expect(translations.it.skills.categories[category]).toBeDefined()
        expect(translations.en.skills.categories[category]).toBeDefined()
      })
    })

    it('should have projects categories translated', () => {
      const projectCategories = ['all', 'fullstack', 'research', 'education']
      
      projectCategories.forEach(category => {
        expect(translations.it.projects.categories[category]).toBeDefined()
        expect(translations.en.projects.categories[category]).toBeDefined()
      })
    })

    it('should have contact form fields translated', () => {
      const formFields = ['name', 'email', 'subject', 'message', 'send']
      
      formFields.forEach(field => {
        expect(translations.it.contact.form[field]).toBeDefined()
        expect(translations.en.contact.form[field]).toBeDefined()
      })
    })
  })

  describe('Language persistence', () => {
    it('should initialize with language from wrapper prop', () => {
      const customWrapper = ({ children }) => (
        <LanguageProvider initialLanguage="en">
          {children}
        </LanguageProvider>
      )
      
      const { result } = renderHook(() => useTranslation(), { wrapper: customWrapper })
      
      expect(result.current.language).toBe('en')
    })

    it('should maintain language state across re-renders', () => {
      const { result, rerender } = renderHook(() => useTranslation(), { wrapper })
      
      act(() => {
        result.current.setLanguage('en')
      })
      
      rerender()
      
      expect(result.current.language).toBe('en')
    })
  })
})
