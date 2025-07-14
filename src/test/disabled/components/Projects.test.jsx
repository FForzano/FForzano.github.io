import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLanguage } from '../utils'
import Projects from '../../components/Projects'

describe('Projects Component', () => {
  it('should render projects section title', () => {
    renderWithLanguage(<Projects />)
    
    expect(screen.getByText('I miei progetti')).toBeInTheDocument()
  })

  it('should render filter buttons', () => {
    renderWithLanguage(<Projects />)
    
    expect(screen.getByRole('button', { name: /tutti/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /full stack/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ricerca/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /didattica/i })).toBeInTheDocument()
  })

  it('should render project cards', () => {
    renderWithLanguage(<Projects />)
    
    // Verifica che ci siano i progetti principali
    expect(screen.getByText('FPC DIDATTICA 4.0 S.R.L.')).toBeInTheDocument()
    expect(screen.getByText('Quantum Illumination System Analysis')).toBeInTheDocument()
    expect(screen.getByText('Quadrature Measurement Characterization')).toBeInTheDocument()
  })

  it('should filter projects by category', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Projects />)
    
    // Inizialmente tutti i progetti dovrebbero essere visibili
    expect(screen.getByText('FPC DIDATTICA 4.0 S.R.L.')).toBeInTheDocument()
    expect(screen.getByText('Quantum Illumination System Analysis')).toBeInTheDocument()
    
    // Click sul filtro "Ricerca"
    const researchFilter = screen.getByRole('button', { name: /ricerca/i })
    await user.click(researchFilter)
    
    // Dovrebbero essere visibili solo i progetti di ricerca
    expect(screen.getByText('Quantum Illumination System Analysis')).toBeInTheDocument()
    expect(screen.getByText('Quadrature Measurement Characterization')).toBeInTheDocument()
  })

  it('should show featured badges on featured projects', () => {
    renderWithLanguage(<Projects />)
    
    const featuredBadges = screen.getAllByText('In Evidenza')
    expect(featuredBadges.length).toBeGreaterThan(0)
  })

  it('should render project action buttons', () => {
    renderWithLanguage(<Projects />)
    
    const demoButtons = screen.getAllByText('Demo')
    const codeButtons = screen.getAllByText('Codice')
    
    expect(demoButtons.length).toBeGreaterThan(0)
    expect(codeButtons.length).toBeGreaterThan(0)
  })

  it('should render technologies for each project', () => {
    renderWithLanguage(<Projects />)
    
    // Verifica che ci siano le tecnologie mostrate
    expect(screen.getByText('PHP')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('should render call to action section', () => {
    renderWithLanguage(<Projects />)
    
    expect(screen.getByText(/vuoi vedere altri progetti/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contattami/i })).toBeInTheDocument()
  })

  it('should translate content when language changes', () => {
    renderWithLanguage(<Projects />, { initialLanguage: 'en' })
    
    expect(screen.getByText('My projects')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /research/i })).toBeInTheDocument()
    expect(screen.getByText('Featured')).toBeInTheDocument()
    expect(screen.getByText('Code')).toBeInTheDocument()
  })

  it('should have correct section id for navigation', () => {
    renderWithLanguage(<Projects />)
    
    const projectsSection = screen.getByRole('region') || screen.getByTestId('projects-section')
    expect(projectsSection).toHaveAttribute('id', 'projects')
  })

  it('should highlight active filter button', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Projects />)
    
    const allFilter = screen.getByRole('button', { name: /tutti/i })
    const researchFilter = screen.getByRole('button', { name: /ricerca/i })
    
    // "Tutti" dovrebbe essere attivo inizialmente
    expect(allFilter).toHaveClass('bg-primary-600', 'text-white')
    expect(researchFilter).toHaveClass('bg-gray-100', 'text-gray-700')
    
    // Click su "Ricerca"
    await user.click(researchFilter)
    
    // "Ricerca" dovrebbe essere attivo ora
    expect(researchFilter).toHaveClass('bg-primary-600', 'text-white')
  })

  it('should render project descriptions', () => {
    renderWithLanguage(<Projects />)
    
    expect(screen.getByText(/piattaforma innovativa che collega/i)).toBeInTheDocument()
    expect(screen.getByText(/analisi e implementazione di sistemi/i)).toBeInTheDocument()
  })

  it('should have accessible project links', () => {
    renderWithLanguage(<Projects />)
    
    const externalLinks = screen.getAllByTestId('external-link-icon')
    const githubLinks = screen.getAllByTestId('github-icon')
    
    expect(externalLinks.length).toBeGreaterThan(0)
    expect(githubLinks.length).toBeGreaterThan(0)
  })
})
