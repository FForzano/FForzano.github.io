import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithLanguage } from '../utils'
import Footer from '../../components/Footer'

describe('Footer Component', () => {
  it('should render copyright information', () => {
    renderWithLanguage(<Footer />)
    
    expect(screen.getByText(/2025 Federico Forzano/i)).toBeInTheDocument()
  })

  it('should render social links', () => {
    renderWithLanguage(<Footer />)
    
    // Verifico la presenza dei link social
    const githubLink = screen.getByLabelText(/github/i)
    const linkedinLink = screen.getByLabelText(/linkedin/i)
    const emailLink = screen.getByLabelText(/email/i)
    
    expect(githubLink).toBeInTheDocument()
    expect(linkedinLink).toBeInTheDocument()
    expect(emailLink).toBeInTheDocument()
  })

  it('should have correct GitHub link', () => {
    renderWithLanguage(<Footer />)
    
    const githubLink = screen.getByLabelText(/github/i)
    expect(githubLink).toHaveAttribute('href', 'https://github.com/federidge')
  })

  it('should have correct LinkedIn link', () => {
    renderWithLanguage(<Footer />)
    
    const linkedinLink = screen.getByLabelText(/linkedin/i)
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/federico-forzano')
  })

  it('should have correct email link', () => {
    renderWithLanguage(<Footer />)
    
    const emailLink = screen.getByLabelText(/email/i)
    expect(emailLink).toHaveAttribute('href', 'mailto:federico.forzano@student.unife.it')
  })

  it('should open external links in new tab', () => {
    renderWithLanguage(<Footer />)
    
    const githubLink = screen.getByLabelText(/github/i)
    const linkedinLink = screen.getByLabelText(/linkedin/i)
    
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render in English when language is changed', () => {
    renderWithLanguage(<Footer />, 'en')
    
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    renderWithLanguage(<Footer />)
    
    // Verifico che i link abbiano descrizioni accessibili
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('aria-label')
    })
  })

  it('should render social icons', () => {
    renderWithLanguage(<Footer />)
    
    // Verifico che ci siano le icone social
    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument()
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument()
  })

  it('should have consistent styling classes', () => {
    renderWithLanguage(<Footer />)
    
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-gray-900')
  })
})
