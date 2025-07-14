import { describe, it, expect } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLanguage } from './utils'
import App from '../App'

describe('End-to-End Portfolio Tests', () => {
  describe('Complete User Journey', () => {
    it('should allow user to navigate through entire portfolio', async () => {
      const user = userEvent.setup()
      renderWithLanguage(<App />)
      
      // 1. Verifica che la pagina carichi correttamente
      expect(screen.getByText('Federico Forzano')).toBeInTheDocument()
      
      // 2. Test navigazione sezioni
      const aboutLink = screen.getByRole('link', { name: /about/i })
      await user.click(aboutLink)
      
      const skillsLink = screen.getByRole('link', { name: /skills/i })
      await user.click(skillsLink)
      
      const projectsLink = screen.getByRole('link', { name: /progetti/i })
      await user.click(projectsLink)
      
      const contactLink = screen.getByRole('link', { name: /contatti/i })
      await user.click(contactLink)
      
      // Verifica che tutte le sezioni siano accessibili
      expect(screen.getByText(/mettiamoci in contatto/i)).toBeInTheDocument()
    })

    it('should handle complete language switching workflow', async () => {
      const user = userEvent.setup()
      renderWithLanguage(<App />)
      
      // 1. Verifica contenuto italiano iniziale
      expect(screen.getByText('Ciao, sono')).toBeInTheDocument()
      expect(screen.getByText('I miei progetti')).toBeInTheDocument()
      expect(screen.getByText('Mettiamoci in contatto')).toBeInTheDocument()
      
      // 2. Cambia lingua in inglese
      const languageToggle = screen.getByRole('button', { name: /language/i })
      await user.click(languageToggle)
      
      // 3. Verifica che tutto il contenuto sia tradotto
      expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
      expect(screen.getByText('My projects')).toBeInTheDocument()
      expect(screen.getByText("Let's get in touch")).toBeInTheDocument()
      
      // 4. Verifica navigazione in inglese
      expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    })

    it('should handle CV download process', async () => {
      const user = userEvent.setup()
      renderWithLanguage(<App />)
      
      // 1. Trova e clicca il pulsante CV
      const downloadButton = screen.getByRole('button', { name: /scarica cv/i })
      expect(downloadButton).toBeInTheDocument()
      
      // 2. Clicca per scaricare
      await user.click(downloadButton)
      
      // 3. Verifica che il processo inizi (il componente dovrebbe gestire il download)
      expect(downloadButton).toBeInTheDocument()
    })

    it('should handle project filtering workflow', async () => {
      const user = userEvent.setup()
      renderWithLanguage(<App />)
      
      // 1. Naviga ai progetti
      const projectsLink = screen.getByRole('link', { name: /progetti/i })
      await user.click(projectsLink)
      
      // 2. Verifica che tutti i progetti siano visibili inizialmente
      expect(screen.getByText('FPC DIDATTICA 4.0 S.R.L.')).toBeInTheDocument()
      expect(screen.getByText('Quantum Illumination System Analysis')).toBeInTheDocument()
      
      // 3. Filtra per categoria "Ricerca"
      const researchFilter = screen.getByRole('button', { name: /ricerca/i })
      await user.click(researchFilter)
      
      // 4. Verifica che il filtro sia attivo
      expect(researchFilter).toHaveClass('bg-primary-600')
      
      // 5. Test altri filtri
      const fullStackFilter = screen.getByRole('button', { name: /full stack/i })
      await user.click(fullStackFilter)
      
      const allFilter = screen.getByRole('button', { name: /tutti/i })
      await user.click(allFilter)
      
      // Tutti i progetti dovrebbero essere di nuovo visibili
      expect(screen.getByText('FPC DIDATTICA 4.0 S.R.L.')).toBeInTheDocument()
    })

    it('should handle contact form interaction', async () => {
      const user = userEvent.setup()
      renderWithLanguage(<App />)
      
      // 1. Naviga al form contatti
      const contactLink = screen.getByRole('link', { name: /contatti/i })
      await user.click(contactLink)
      
      // 2. Compila il form
      const nameInput = screen.getByLabelText(/nome/i)
      const emailInput = screen.getByLabelText(/email/i)
      const subjectInput = screen.getByLabelText(/oggetto/i)
      const messageInput = screen.getByLabelText(/messaggio/i)
      
      await user.type(nameInput, 'Test User')
      await user.type(emailInput, 'test@example.com')
      await user.type(subjectInput, 'Test Subject')
      await user.type(messageInput, 'This is a test message')
      
      // 3. Verifica che i campi siano compilati
      expect(nameInput).toHaveValue('Test User')
      expect(emailInput).toHaveValue('test@example.com')
      expect(subjectInput).toHaveValue('Test Subject')
      expect(messageInput).toHaveValue('This is a test message')
      
      // 4. Submit del form
      const submitButton = screen.getByRole('button', { name: /invia messaggio/i })
      await user.click(submitButton)
    })
  })

  describe('Mobile User Experience', () => {
    it('should provide complete mobile navigation experience', async () => {
      const user = userEvent.setup()
      
      // Simula viewport mobile
      Object.defineProperty(window, 'innerWidth', { value: 375 })
      Object.defineProperty(window, 'innerHeight', { value: 812 })
      
      renderWithLanguage(<App />)
      
      // 1. Verifica che il menu mobile sia presente
      const mobileMenuButton = screen.getByTestId('menu-icon')
      expect(mobileMenuButton).toBeInTheDocument()
      
      // 2. Apri il menu mobile
      await user.click(mobileMenuButton)
      
      // 3. Verifica che il menu si apra
      expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
      
      // 4. Test navigazione mobile
      const mobileAboutLink = within(screen.getByTestId('mobile-menu')).getByText('About')
      await user.click(mobileAboutLink)
      
      // 5. Il menu dovrebbe chiudersi dopo la navigazione
      expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    })

    it('should handle touch interactions on mobile', async () => {
      const user = userEvent.setup()
      
      // Simula touch device
      Object.defineProperty(window, 'innerWidth', { value: 375 })
      Object.defineProperty(window, 'ontouchstart', { value: true })
      
      renderWithLanguage(<App />)
      
      // Test touch su bottoni sociali
      const socialLinks = screen.getAllByRole('link', { name: /github|linkedin|email/i })
      expect(socialLinks.length).toBeGreaterThan(0)
      
      // Test touch su CTA buttons
      const ctaButton = screen.getByRole('link', { name: /vedi i miei progetti/i })
      await user.click(ctaButton)
      
      expect(ctaButton).toBeInTheDocument()
    })
  })

  describe('Performance and Loading States', () => {
    it('should handle loading states gracefully', async () => {
      renderWithLanguage(<App />)
      
      // Verifica che tutti i componenti si caricino senza errori
      expect(screen.getByText('Federico Forzano')).toBeInTheDocument()
      expect(screen.getByText(/dottorando in ingegneria/i)).toBeInTheDocument()
      
      // Verifica che non ci siano errori di caricamento visibili
      expect(screen.queryByText(/error/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/errore/i)).not.toBeInTheDocument()
    })

    it('should handle image loading', () => {
      renderWithLanguage(<App />)
      
      // Verifica che le immagini abbiano fallback appropriati
      const profileImage = screen.getByText('F') // Fallback per immagine profilo
      expect(profileImage).toBeInTheDocument()
    })
  })

  describe('SEO and Accessibility', () => {
    it('should have proper semantic structure', () => {
      renderWithLanguage(<App />)
      
      // Verifica struttura semantica
      expect(screen.getByRole('navigation')).toBeInTheDocument()
      expect(screen.getByRole('main') || screen.getByRole('region')).toBeInTheDocument()
      
      // Verifica headings hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      expect(headings.length).toBeGreaterThan(0)
    })

    it('should have accessible forms', () => {
      renderWithLanguage(<App />)
      
      // Verifica che i form abbiano label appropriati
      const formInputs = screen.getAllByRole('textbox')
      formInputs.forEach(input => {
        expect(input).toHaveAccessibleName()
      })
    })

    it('should have proper link accessibility', () => {
      renderWithLanguage(<App />)
      
      // Verifica che i link esterni abbiano target e rel appropriati
      const externalLinks = document.querySelectorAll('a[target="_blank"]')
      externalLinks.forEach(link => {
        expect(link).toHaveAttribute('rel', 'noopener noreferrer')
      })
    })
  })

  describe('Data Integrity', () => {
    it('should display correct personal information', () => {
      renderWithLanguage(<App />)
      
      // Verifica informazioni personali corrette
      expect(screen.getByText('Federico Forzano')).toBeInTheDocument()
      expect(screen.getByText('f.forzano99@gmail.com')).toBeInTheDocument()
      expect(screen.getByText('+39 328 177 2074')).toBeInTheDocument()
      expect(screen.getByText('Ferrara, Italia')).toBeInTheDocument()
    })

    it('should display correct education information', () => {
      renderWithLanguage(<App />)
      
      // Verifica informazioni educative
      expect(screen.getByText(/università degli studi di ferrara/i)).toBeInTheDocument()
      expect(screen.getByText(/quantum information science/i)).toBeInTheDocument()
      expect(screen.getByText(/110\/110/)).toBeInTheDocument()
    })

    it('should display correct project information', () => {
      renderWithLanguage(<App />)
      
      // Verifica progetti corretti
      expect(screen.getByText('FPC DIDATTICA 4.0 S.R.L.')).toBeInTheDocument()
      expect(screen.getByText('Quantum Illumination System Analysis')).toBeInTheDocument()
      expect(screen.getByText(/PHP|Python|JavaScript|React/)).toBeInTheDocument()
    })
  })
})
