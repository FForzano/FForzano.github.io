import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLanguage } from '../utils'
import Navbar from '../../components/Navbar'

describe('Navbar Component', () => {
  it('should render navigation links', () => {
    renderWithLanguage(<Navbar />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Progetti')).toBeInTheDocument()
    expect(screen.getByText('Contatti')).toBeInTheDocument()
  })

  it('should render language selector', () => {
    renderWithLanguage(<Navbar />)
    
    // Verifica che il selettore lingua sia presente
    expect(screen.getByTestId('languages-icon')).toBeInTheDocument()
  })

  it('should change language when language selector is clicked', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Navbar />)
    
    // Inizialmente dovrebbe essere in italiano
    expect(screen.getByText('Progetti')).toBeInTheDocument()
    
    // Click sul selettore lingua
    const languageButton = screen.getByRole('button', { name: /language/i })
    await user.click(languageButton)
    
    // Dopo il click dovrebbe cambiare in inglese
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('should have correct navigation links with href attributes', () => {
    renderWithLanguage(<Navbar />)
    
    const homeLink = screen.getByRole('link', { name: /home/i })
    const aboutLink = screen.getByRole('link', { name: /about/i })
    const skillsLink = screen.getByRole('link', { name: /skills/i })
    const projectsLink = screen.getByRole('link', { name: /progetti/i })
    const contactLink = screen.getByRole('link', { name: /contatti/i })
    
    expect(homeLink).toHaveAttribute('href', '#home')
    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(skillsLink).toHaveAttribute('href', '#skills')
    expect(projectsLink).toHaveAttribute('href', '#projects')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })

  it('should render mobile menu button', () => {
    renderWithLanguage(<Navbar />)
    
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument()
  })

  it('should toggle mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Navbar />)
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    
    // Inizialmente il menu mobile dovrebbe essere chiuso
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    
    // Click per aprire il menu
    await user.click(menuButton)
    
    // Il menu dovrebbe essere aperto
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByTestId('close-icon')).toBeInTheDocument()
  })

  it('should render brand logo with correct text', () => {
    renderWithLanguage(<Navbar />)
    
    const brandLogo = screen.getByText('F')
    expect(brandLogo).toBeInTheDocument()
    
    const brandName = screen.getByText('Federico Forzano')
    expect(brandName).toBeInTheDocument()
  })

  it('should translate navigation links when language changes', () => {
    renderWithLanguage(<Navbar />, { initialLanguage: 'en' })
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('should have proper accessibility attributes', () => {
    renderWithLanguage(<Navbar />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    
    const menuButton = screen.getByRole('button', { name: /menu/i })
    expect(menuButton).toHaveAttribute('aria-label')
    
    const languageButton = screen.getByRole('button', { name: /language/i })
    expect(languageButton).toHaveAttribute('aria-label')
  })
})
