import React from 'react'
import { render } from '@testing-library/react'
import { LanguageProvider } from '../contexts/LanguageContext'

// Wrapper per i test con LanguageContext
const TestWrapper = ({ children, initialLanguage = 'it' }) => {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      {children}
    </LanguageProvider>
  )
}

// Funzione di render personalizzata
export const renderWithLanguage = (ui, options = {}) => {
  const { initialLanguage = 'it', ...renderOptions } = options
  
  return render(ui, {
    wrapper: ({ children }) => (
      <TestWrapper initialLanguage={initialLanguage}>
        {children}
      </TestWrapper>
    ),
    ...renderOptions,
  })
}

// Utility per test responsive
export const setViewport = (width, height = 768) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: height,
  })

  // Trigger resize event
  window.dispatchEvent(new Event('resize'))
}

// Mock per testing delle animazioni
export const mockFramerMotion = {
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => children,
}

// Utility per testare i link di navigazione
export const getNavigationLinks = () => [
  { href: '#home', text: /home/i },
  { href: '#about', text: /about/i },
  { href: '#skills', text: /skills/i },
  { href: '#projects', text: /projects|progetti/i },
  { href: '#contact', text: /contact|contatti/i },
]

// Utility per testare le traduzioni
export const getTranslationKeys = () => ({
  hero: {
    greeting: 'hero.greeting',
    title: 'hero.title',
    description: 'hero.description',
    viewProjects: 'hero.viewProjects',
    downloadCV: 'hero.downloadCV',
  },
  nav: {
    home: 'nav.home',
    about: 'nav.about',
    skills: 'nav.skills',
    projects: 'nav.projects',
    contact: 'nav.contact',
  },
  about: {
    title: 'about.title',
    subtitle: 'about.subtitle',
    educationTitle: 'about.educationTitle',
  },
  skills: {
    title: 'skills.title',
    subtitle: 'skills.subtitle',
  },
  projects: {
    title: 'projects.title',
    subtitle: 'projects.subtitle',
  },
  contact: {
    title: 'contact.title',
    subtitle: 'contact.subtitle',
  },
})

export * from '@testing-library/react'
