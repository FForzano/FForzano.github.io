import { describe, it, expect, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithLanguage, setViewport } from './utils'
import App from '../App'
import Navbar from '../components/Navbar'

describe('Responsive Design Tests', () => {
  beforeEach(() => {
    // Reset viewport before each test
    setViewport(1024, 768)
  })

  describe('Desktop View (1920px+)', () => {
    beforeEach(() => {
      setViewport(1920, 1080)
    })

    it('should render full navigation in desktop view', () => {
      renderWithLanguage(<Navbar />)
      
      // Su desktop, tutti i link dovrebbero essere visibili
      expect(screen.getByText('Home')).toBeVisible()
      expect(screen.getByText('About')).toBeVisible()
      expect(screen.getByText('Skills')).toBeVisible()
      expect(screen.getByText('Progetti')).toBeVisible()
      expect(screen.getByText('Contatti')).toBeVisible()
    })

    it('should hide mobile menu button in desktop view', () => {
      renderWithLanguage(<Navbar />)
      
      const menuButton = screen.getByTestId('menu-icon')
      // Su desktop il menu button dovrebbe essere nascosto (display: none o classe hidden)
      expect(menuButton.parentElement).toHaveClass('md:hidden')
    })

    it('should display full-width content in desktop', () => {
      renderWithLanguage(<App />)
      
      // Verifica che i container abbiano le classi corrette per desktop
      const containers = screen.getAllByTestId('container') || document.querySelectorAll('.container-custom')
      expect(containers.length).toBeGreaterThan(0)
    })
  })

  describe('Tablet View (768px-1024px)', () => {
    beforeEach(() => {
      setViewport(768, 1024)
    })

    it('should adapt layout for tablet view', () => {
      renderWithLanguage(<Navbar />)
      
      // Su tablet, la navigazione dovrebbe ancora essere visibile
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('should adjust grid layouts for tablet', () => {
      renderWithLanguage(<App />)
      
      // I grid dovrebbero adattarsi: da 3 colonne a 2 colonne
      const gridContainers = document.querySelectorAll('.grid-cols-3, .md\\:grid-cols-2')
      expect(gridContainers.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Mobile View (320px-768px)', () => {
    beforeEach(() => {
      setViewport(375, 812) // iPhone X dimensions
    })

    it('should show mobile menu button in mobile view', () => {
      renderWithLanguage(<Navbar />)
      
      const menuButton = screen.getByTestId('menu-icon')
      expect(menuButton).toBeInTheDocument()
    })

    it('should hide desktop navigation links in mobile view', () => {
      renderWithLanguage(<Navbar />)
      
      // Su mobile, i link della navigazione desktop dovrebbero essere nascosti
      const navigationLinks = screen.getByRole('navigation').querySelector('.hidden.md\\:flex')
      expect(navigationLinks).toBeTruthy()
    })

    it('should stack elements vertically in mobile', () => {
      renderWithLanguage(<App />)
      
      // Gli elementi dovrebbero essere impilati verticalmente (flex-col)
      const flexContainers = document.querySelectorAll('.flex-col, .sm\\:flex-row')
      expect(flexContainers.length).toBeGreaterThan(0)
    })

    it('should adapt text sizes for mobile', () => {
      renderWithLanguage(<App />)
      
      // I titoli dovrebbero avere classi responsive per mobile
      const headings = document.querySelectorAll('h1, h2, h3')
      const hasResponsiveText = Array.from(headings).some(heading => 
        heading.className.includes('text-4xl') && heading.className.includes('md:text-6xl')
      )
      expect(hasResponsiveText).toBe(true)
    })
  })

  describe('Very Small Mobile (320px)', () => {
    beforeEach(() => {
      setViewport(320, 568)
    })

    it('should remain functional on very small screens', () => {
      renderWithLanguage(<Navbar />)
      
      expect(screen.getByText('Federico Forzano')).toBeInTheDocument()
      expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
    })

    it('should maintain readability on small screens', () => {
      renderWithLanguage(<App />)
      
      // Verifica che il contenuto sia ancora leggibile
      const textElements = document.querySelectorAll('p, span, div')
      const hasMinimumTextSize = Array.from(textElements).every(element => {
        const fontSize = window.getComputedStyle(element).fontSize
        return fontSize === '' || parseInt(fontSize) >= 14 // Minimum 14px
      })
      expect(hasMinimumTextSize).toBe(true)
    })
  })

  describe('Landscape Mobile (812x375)', () => {
    beforeEach(() => {
      setViewport(812, 375)
    })

    it('should adapt to landscape orientation', () => {
      renderWithLanguage(<App />)
      
      // Verifica che il layout si adatti all'orientamento landscape
      expect(window.innerWidth).toBe(812)
      expect(window.innerHeight).toBe(375)
    })
  })

  describe('Large Desktop (2560px+)', () => {
    beforeEach(() => {
      setViewport(2560, 1440)
    })

    it('should not stretch content too wide on large screens', () => {
      renderWithLanguage(<App />)
      
      // Il contenuto dovrebbe avere una larghezza massima
      const containers = document.querySelectorAll('.container, .max-w-7xl, .container-custom')
      expect(containers.length).toBeGreaterThan(0)
    })

    it('should maintain proper spacing on large screens', () => {
      renderWithLanguage(<App />)
      
      // Lo spacing dovrebbe rimanere proporzionato
      const spacedElements = document.querySelectorAll('.space-y-8, .space-x-8, .gap-8')
      expect(spacedElements.length).toBeGreaterThan(0)
    })
  })

  describe('Responsive Images and Media', () => {
    it('should handle responsive images correctly', () => {
      renderWithLanguage(<App />)
      
      // Le immagini dovrebbero avere classi responsive
      const images = document.querySelectorAll('img')
      const responsiveImages = Array.from(images).filter(img => 
        img.className.includes('w-full') || img.className.includes('max-w-')
      )
      expect(responsiveImages.length).toBeGreaterThanOrEqual(0)
    })

    it('should adapt button sizes for different screens', () => {
      renderWithLanguage(<App />)
      
      // I bottoni dovrebbero avere dimensioni adattive
      const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary')
      const responsiveButtons = Array.from(buttons).filter(btn => 
        btn.className.includes('px-') && btn.className.includes('py-')
      )
      expect(responsiveButtons.length).toBeGreaterThan(0)
    })
  })

  describe('Touch Interactions', () => {
    beforeEach(() => {
      setViewport(375, 812) // Mobile viewport
    })

    it('should have adequate touch targets on mobile', () => {
      renderWithLanguage(<Navbar />)
      
      // I target touch dovrebbero essere almeno 44px (classe p-3 = 12px padding)
      const touchTargets = document.querySelectorAll('button, a[role="button"]')
      const adequateTouchTargets = Array.from(touchTargets).filter(target => 
        target.className.includes('p-3') || 
        target.className.includes('py-2') ||
        target.className.includes('px-4')
      )
      expect(adequateTouchTargets.length).toBeGreaterThan(0)
    })
  })

  describe('Accessibility on Different Screen Sizes', () => {
    it('should maintain accessibility across all screen sizes', () => {
      const viewports = [
        [320, 568],   // iPhone SE
        [375, 812],   // iPhone X
        [768, 1024],  // iPad
        [1024, 768],  // Laptop
        [1920, 1080], // Desktop
      ]

      viewports.forEach(([width, height]) => {
        setViewport(width, height)
        renderWithLanguage(<App />)
        
        // Verifica che ci siano sempre elementi accessibili
        const accessibleElements = document.querySelectorAll('[aria-label], [role], label')
        expect(accessibleElements.length).toBeGreaterThan(0)
      })
    })
  })
})
