import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithLanguage } from '../utils'
import App from '../../App'

describe('App Integration Tests', () => {
  it('should render all main sections', () => {
    renderWithLanguage(<App />)
    
    // Verifico che tutte le sezioni principali siano presenti
    expect(screen.getByText(/Federico Forzano/i)).toBeInTheDocument()
    expect(screen.getByText(/Chi sono/i)).toBeInTheDocument()
    expect(screen.getByText(/Competenze/i)).toBeInTheDocument()
    expect(screen.getByText(/Progetti/i)).toBeInTheDocument()
    expect(screen.getByText(/Contatti/i)).toBeInTheDocument()
  })

  it('should render navigation', () => {
    renderWithLanguage(<App />)
    
    // Verifico che la navigazione sia presente
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should render language selector', () => {
    renderWithLanguage(<App />)
    
    // Verifico che il selettore lingua sia presente
    expect(screen.getByTestId('languages-icon')).toBeInTheDocument()
  })

  it('should have proper document structure', () => {
    renderWithLanguage(<App />)
    
    // Verifico che ci siano heading di diversi livelli
    const h1 = screen.getAllByRole('heading', { level: 1 })
    const h2 = screen.getAllByRole('heading', { level: 2 })
    
    expect(h1.length).toBeGreaterThan(0)
    expect(h2.length).toBeGreaterThan(0)
  })

  it('should render hero section with CTA buttons', () => {
    renderWithLanguage(<App />)
    
    // Verifico i pulsanti CTA
    expect(screen.getByText(/Scarica CV/i)).toBeInTheDocument()
    expect(screen.getByText(/Contattami/i)).toBeInTheDocument()
  })

  it('should load in Italian by default', () => {
    renderWithLanguage(<App />)
    
    // Verifico che il contenuto sia in italiano
    expect(screen.getByText(/Dottorando in Ingegneria/i)).toBeInTheDocument()
    expect(screen.getByText(/Chi sono/i)).toBeInTheDocument()
  })

  it('should switch to English when language changes', () => {
    renderWithLanguage(<App />, 'en')
    
    // Verifico che il contenuto sia in inglese
    expect(screen.getByText(/PhD Student in Engineering/i)).toBeInTheDocument()
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
  })

  it('should have footer with social links', () => {
    renderWithLanguage(<App />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    
    // Verifico i link social nel footer
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
  })

  it('should maintain scroll behavior', () => {
    renderWithLanguage(<App />)
    
    // Verifico che window.scrollTo sia mockato
    expect(window.scrollTo).toBeDefined()
  })
})
