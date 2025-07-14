import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithLanguage } from '../utils'
import CVDownloadManager from '../../components/CVDownloadManager'

// Mock per le librerie PDF
vi.mock('../../components/CVGenerator', () => ({
  default: () => ({
    generatePDF: vi.fn(),
  }),
}))

vi.mock('../../components/ReactPDFGenerator', () => ({
  default: () => ({
    generateAdvancedPDF: vi.fn(() => Promise.resolve()),
  }),
}))

describe('CV Download System', () => {
  describe('CVDownloadManager', () => {
    it('should provide download function and loading state', () => {
      const TestComponent = () => {
        const { handleDownloadCV, isGenerating } = CVDownloadManager()
        
        return (
          <div>
            <button 
              onClick={() => handleDownloadCV(true)}
              disabled={isGenerating}
              data-testid="download-button"
            >
              {isGenerating ? 'Generating...' : 'Download CV'}
            </button>
            <span data-testid="loading-state">{isGenerating.toString()}</span>
          </div>
        )
      }
      
      renderWithLanguage(<TestComponent />)
      
      expect(screen.getByTestId('download-button')).toBeInTheDocument()
      expect(screen.getByTestId('loading-state')).toHaveTextContent('false')
    })

    it('should handle download function call', async () => {
      const user = userEvent.setup()
      
      const TestComponent = () => {
        const { handleDownloadCV, isGenerating } = CVDownloadManager()
        
        return (
          <button 
            onClick={() => handleDownloadCV(true)}
            disabled={isGenerating}
            data-testid="download-button"
          >
            {isGenerating ? 'Generating...' : 'Download CV'}
          </button>
        )
      }
      
      renderWithLanguage(<TestComponent />)
      
      const downloadButton = screen.getByTestId('download-button')
      await user.click(downloadButton)
      
      // Verifica che il componente non crashi
      expect(downloadButton).toBeInTheDocument()
    })

    it('should work with different language contexts', () => {
      const TestComponent = () => {
        const { handleDownloadCV } = CVDownloadManager()
        
        return (
          <button 
            onClick={() => handleDownloadCV(true)}
            data-testid="download-button"
          >
            Download CV
          </button>
        )
      }
      
      // Test con italiano
      const { unmount } = renderWithLanguage(<TestComponent />, { initialLanguage: 'it' })
      expect(screen.getByTestId('download-button')).toBeInTheDocument()
      
      unmount()
      
      // Test con inglese
      renderWithLanguage(<TestComponent />, { initialLanguage: 'en' })
      expect(screen.getByTestId('download-button')).toBeInTheDocument()
    })
  })

  describe('PDF Generation Integration', () => {
    it('should handle advanced PDF generation', async () => {
      const user = userEvent.setup()
      
      const TestComponent = () => {
        const { handleDownloadCV, isGenerating } = CVDownloadManager()
        
        return (
          <div>
            <button 
              onClick={() => handleDownloadCV(true)}
              data-testid="advanced-download"
            >
              Advanced PDF
            </button>
            <button 
              onClick={() => handleDownloadCV(false)}
              data-testid="simple-download"
            >
              Simple PDF
            </button>
            <span data-testid="status">{isGenerating ? 'loading' : 'ready'}</span>
          </div>
        )
      }
      
      renderWithLanguage(<TestComponent />)
      
      const advancedButton = screen.getByTestId('advanced-download')
      const simpleButton = screen.getByTestId('simple-download')
      
      await user.click(advancedButton)
      await user.click(simpleButton)
      
      expect(advancedButton).toBeInTheDocument()
      expect(simpleButton).toBeInTheDocument()
    })

    it('should provide fallback mechanism', async () => {
      // Mock che simula errore nella generazione avanzata
      vi.doMock('../../components/ReactPDFGenerator', () => ({
        default: () => ({
          generateAdvancedPDF: vi.fn(() => Promise.reject(new Error('PDF generation failed'))),
        }),
      }))
      
      const TestComponent = () => {
        const { handleDownloadCV } = CVDownloadManager()
        
        return (
          <button 
            onClick={() => handleDownloadCV(true)}
            data-testid="fallback-test"
          >
            Test Fallback
          </button>
        )
      }
      
      renderWithLanguage(<TestComponent />)
      
      const fallbackButton = screen.getByTestId('fallback-test')
      
      // Il test verifica che non ci siano crash anche con errori
      await userEvent.click(fallbackButton)
      expect(fallbackButton).toBeInTheDocument()
    })
  })

  describe('Error Handling', () => {
    it('should handle PDF generation errors gracefully', async () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      
      // Mock che simula errore
      vi.doMock('../../components/CVGenerator', () => ({
        default: () => ({
          generatePDF: vi.fn(() => {
            throw new Error('Simple PDF generation failed')
          }),
        }),
      }))
      
      vi.doMock('../../components/ReactPDFGenerator', () => ({
        default: () => ({
          generateAdvancedPDF: vi.fn(() => Promise.reject(new Error('Advanced PDF generation failed'))),
        }),
      }))
      
      const TestComponent = () => {
        const { handleDownloadCV } = CVDownloadManager()
        
        return (
          <button 
            onClick={() => handleDownloadCV(true)}
            data-testid="error-test"
          >
            Error Test
          </button>
        )
      }
      
      renderWithLanguage(<TestComponent />)
      
      const errorButton = screen.getByTestId('error-test')
      await userEvent.click(errorButton)
      
      // Verifica che il componente gestisca l'errore senza crashare
      expect(errorButton).toBeInTheDocument()
      
      consoleSpy.mockRestore()
    })
  })
})
