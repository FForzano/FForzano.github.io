import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithLanguage } from '../utils'
import About from '../../components/About'

describe('About Component', () => {
  it('should render about section title', () => {
    renderWithLanguage(<About />)
    
    expect(screen.getByText(/Chi sono/i)).toBeInTheDocument()
  })

  it('should render education timeline', () => {
    renderWithLanguage(<About />)
    
    // Verifico che l'università sia presente
    expect(screen.getByText(/Università di Ferrara/i)).toBeInTheDocument()
    expect(screen.getByText(/Dottorando/i)).toBeInTheDocument()
  })

  it('should render education degrees', () => {
    renderWithLanguage(<About />)
    
    // Verifico i titoli di studio
    expect(screen.getByText(/Laurea Magistrale/i)).toBeInTheDocument()
    expect(screen.getByText(/Laurea Triennale/i)).toBeInTheDocument()
  })

  it('should display correct grades', () => {
    renderWithLanguage(<About />)
    
    // Verifico i voti
    expect(screen.getByText(/110\/110 con lode/i)).toBeInTheDocument()
  })

  it('should show research focus', () => {
    renderWithLanguage(<About />)
    
    // Verifico l'area di ricerca
    expect(screen.getByText(/Quantum Information Science/i)).toBeInTheDocument()
  })

  it('should render in English when language is changed', () => {
    renderWithLanguage(<About />, 'en')
    
    expect(screen.getByText(/About Me/i)).toBeInTheDocument()
    expect(screen.getByText(/PhD Student/i)).toBeInTheDocument()
  })

  it('should render timeline items with correct structure', () => {
    renderWithLanguage(<About />)
    
    // Verifico che ci siano elementi della timeline
    const timelineItems = screen.getAllByRole('listitem')
    expect(timelineItems.length).toBeGreaterThan(0)
  })

  it('should have proper accessibility attributes', () => {
    renderWithLanguage(<About />)
    
    // Verifico che ci sia un heading principale
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })
})
