import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLanguage } from '../utils'
import Contact from '../../components/Contact'

describe('Contact Component', () => {
  it('should render contact section title', () => {
    renderWithLanguage(<Contact />)
    
    expect(screen.getByText('Mettiamoci in contatto')).toBeInTheDocument()
  })

  it('should render contact form', () => {
    renderWithLanguage(<Contact />)
    
    expect(screen.getByRole('form')).toBeInTheDocument()
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/oggetto/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/messaggio/i)).toBeInTheDocument()
  })

  it('should render contact information', () => {
    renderWithLanguage(<Contact />)
    
    expect(screen.getByText('f.forzano99@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('+39 328 177 2074')).toBeInTheDocument()
    expect(screen.getByText('Ferrara, Italia')).toBeInTheDocument()
  })

  it('should render social media links', () => {
    renderWithLanguage(<Contact />)
    
    const socialLinks = screen.getAllByRole('link', { name: /github|linkedin|twitter/i })
    expect(socialLinks).toHaveLength(3)
  })

  it('should validate required form fields', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /invia messaggio/i })
    await user.click(submitButton)
    
    // Verifica che i campi required siano evidenziati
    const nameInput = screen.getByLabelText(/nome/i)
    const emailInput = screen.getByLabelText(/email/i)
    
    expect(nameInput).toBeRequired()
    expect(emailInput).toBeRequired()
  })

  it('should fill form fields correctly', async () => {
    const user = userEvent.setup()
    renderWithLanguage(<Contact />)
    
    const nameInput = screen.getByLabelText(/nome/i)
    const emailInput = screen.getByLabelText(/email/i)
    const subjectInput = screen.getByLabelText(/oggetto/i)
    const messageInput = screen.getByLabelText(/messaggio/i)
    
    await user.type(nameInput, 'Test User')
    await user.type(emailInput, 'test@example.com')
    await user.type(subjectInput, 'Test Subject')
    await user.type(messageInput, 'Test message content')
    
    expect(nameInput).toHaveValue('Test User')
    expect(emailInput).toHaveValue('test@example.com')
    expect(subjectInput).toHaveValue('Test Subject')
    expect(messageInput).toHaveValue('Test message content')
  })

  it('should translate content when language changes', () => {
    renderWithLanguage(<Contact />, { initialLanguage: 'en' })
    
    expect(screen.getByText("Let's get in touch")).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('should have proper section id for navigation', () => {
    renderWithLanguage(<Contact />)
    
    const contactSection = screen.getByRole('region') || screen.getByTestId('contact-section')
    expect(contactSection).toHaveAttribute('id', 'contact')
  })

  it('should render form placeholders correctly', () => {
    renderWithLanguage(<Contact />)
    
    expect(screen.getByPlaceholderText('Il tuo nome')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('la-tua-email@example.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Oggetto del messaggio')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Scrivi qui il tuo messaggio...')).toBeInTheDocument()
  })

  it('should render contact icons', () => {
    renderWithLanguage(<Contact />)
    
    expect(screen.getByTestId('mail-icon')).toBeInTheDocument()
    expect(screen.getByTestId('phone-icon')).toBeInTheDocument()
    expect(screen.getByTestId('map-pin-icon')).toBeInTheDocument()
  })

  it('should have accessible form labels', () => {
    renderWithLanguage(<Contact />)
    
    const nameInput = screen.getByLabelText(/nome/i)
    const emailInput = screen.getByLabelText(/email/i)
    const subjectInput = screen.getByLabelText(/oggetto/i)
    const messageInput = screen.getByLabelText(/messaggio/i)
    
    expect(nameInput).toHaveAttribute('type', 'text')
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(subjectInput).toHaveAttribute('type', 'text')
    expect(messageInput.tagName).toBe('TEXTAREA')
  })

  it('should render submit button with send icon', () => {
    renderWithLanguage(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /invia messaggio/i })
    expect(submitButton).toBeInTheDocument()
    expect(screen.getByTestId('send-icon')).toBeInTheDocument()
  })

  it('should have correct email and phone links', () => {
    renderWithLanguage(<Contact />)
    
    const emailLink = screen.getByRole('link', { name: /f\.forzano99@gmail\.com/i })
    const phoneLink = screen.getByRole('link', { name: /\+39 328 177 2074/i })
    
    expect(emailLink).toHaveAttribute('href', 'mailto:f.forzano99@gmail.com')
    expect(phoneLink).toHaveAttribute('href', 'tel:+393281772074')
  })

  it('should render social media with correct links', () => {
    renderWithLanguage(<Contact />)
    
    const githubLink = screen.getByRole('link', { name: /github/i })
    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    
    expect(githubLink).toHaveAttribute('href', 'https://github.com/FForzano')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/federico-forzano')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })
})
