import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithLanguage } from '../utils'
import Skills from '../../components/Skills'

describe('Skills Component', () => {
  it('should render skills section title', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Competenze/i)).toBeInTheDocument()
  })

  it('should render programming languages category', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Linguaggi di Programmazione/i)).toBeInTheDocument()
  })

  it('should render frameworks category', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Framework & Librerie/i)).toBeInTheDocument()
  })

  it('should render tools category', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Strumenti & Tecnologie/i)).toBeInTheDocument()
  })

  it('should display Python skill', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Python/i)).toBeInTheDocument()
  })

  it('should display JavaScript skill', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument()
  })

  it('should display React skill', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/React/i)).toBeInTheDocument()
  })

  it('should display Docker skill', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Docker/i)).toBeInTheDocument()
  })

  it('should display Git skill', () => {
    renderWithLanguage(<Skills />)
    
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
  })

  it('should render in English when language is changed', () => {
    renderWithLanguage(<Skills />, 'en')
    
    expect(screen.getByText(/Skills/i)).toBeInTheDocument()
    expect(screen.getByText(/Programming Languages/i)).toBeInTheDocument()
  })

  it('should display skill levels', () => {
    renderWithLanguage(<Skills />)
    
    // Verifico che ci siano elementi con indicatori di livello
    const skillItems = screen.getAllByRole('listitem')
    expect(skillItems.length).toBeGreaterThan(0)
  })

  it('should have proper accessibility attributes', () => {
    renderWithLanguage(<Skills />)
    
    // Verifico che ci sia un heading principale
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })

  it('should organize skills in categories', () => {
    renderWithLanguage(<Skills />)
    
    // Verifico che ci siano multiple categorie
    const categories = screen.getAllByRole('heading', { level: 3 })
    expect(categories.length).toBeGreaterThanOrEqual(3)
  })
})
