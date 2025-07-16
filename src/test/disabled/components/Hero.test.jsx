import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLanguage } from '../utils'
import Hero from '../../components/Hero'

// Mock per StaticPDFDownload
vi.mock('../../components/StaticPDFDownload', () => ({
  default: () => ({
    handleDownloadCV: vi.fn(),
    isGenerating: false,
  }),
}))

describe('Hero Component', () => {
  it('should render hero content with personal information', () => {
    renderWithLanguage(<Hero />)
    
    expect(screen.getByText('Ciao, sono')).toBeInTheDocument()
    expect(screen.getByText('Federico Forzano')).toBeInTheDocument()
    expect(screen.getByText(/Dottorando in Ingegneria/)).toBeInTheDocument()
  })

  it('should render profile image placeholder', () => {
    renderWithLanguage(<Hero />)
    
    const profileImage = screen.getByText('F')
    expect(profileImage).toBeInTheDocument()
  })

  it('should render CTA buttons', () => {
    renderWithLanguage(<Hero />)
    
    const viewProjectsButton = screen.getByRole('link', { name: /vedi i miei progetti/i })
    const downloadCVButton = screen.getByRole('button', { name: /scarica cv/i })
    
    expect(viewProjectsButton).toBeInTheDocument()
    expect(downloadCVButton).toBeInTheDocument()
    
    expect(viewProjectsButton).toHaveAttribute('href', '#projects')
  })

  it('should render social links', () => {
    renderWithLanguage(<Hero />)
    
    const socialLinks = screen.getAllByRole('link', { name: /github|linkedin|email/i })
    expect(socialLinks).toHaveLength(3)
    
    // Verifica che i link abbiano gli href corretti
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    const emailLink = screen.getByLabelText('Email')
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/FForzano')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/federico-forzano')
    expect(emailLink).toHaveAttribute('href', 'mailto:f.forzano99@gmail.com')
  })

  it('should render scroll indicator', () => {
    renderWithLanguage(<Hero />)
    
    expect(screen.getByTestId('arrow-down-icon')).toBeInTheDocument()
  })

  it('should handle CV download button click', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Hero />)
    
    const downloadButton = screen.getByRole('button', { name: /scarica cv/i })
    
    await user.click(downloadButton)
    
    // Il test verifica che il componente non crashi quando si clicca
    expect(downloadButton).toBeInTheDocument()
  })

  it('should translate content when language changes', () => {
    renderWithLanguage(<Hero />, { initialLanguage: 'en' })
    
    expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
    expect(screen.getByText('Federico Forzano')).toBeInTheDocument()
    expect(screen.getByText(/PhD Student in Engineering/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /view my projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /download cv/i })).toBeInTheDocument()
  })

  it('should have proper section id for navigation', () => {
    renderWithLanguage(<Hero />)
    
    const heroSection = screen.getByRole('main') || screen.getByTestId('hero-section')
    expect(heroSection).toHaveAttribute('id', 'home')
  })

  it('should display download icons correctly', () => {
    renderWithLanguage(<Hero />)
    
    expect(screen.getByTestId('arrow-down-icon')).toBeInTheDocument()
    expect(screen.getByTestId('download-icon')).toBeInTheDocument()
    expect(screen.getByTestId('github-icon')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument()
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument()
  })

  it('should have accessible social links', () => {
    renderWithLanguage(<Hero />)
    
    const githubLink = screen.getByLabelText('GitHub')
    const linkedinLink = screen.getByLabelText('LinkedIn')
    const emailLink = screen.getByLabelText('Email')
    
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(emailLink).toHaveAttribute('target', '_blank')
    
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    expect(emailLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
