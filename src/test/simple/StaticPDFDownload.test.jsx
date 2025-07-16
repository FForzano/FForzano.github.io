import { describe, it, expect, vi } from 'vitest'
import StaticPDFDownload from '../../components/StaticPDFDownload'

// Mock del hook useTranslation
vi.mock('../../hooks/useTranslation', () => ({
  useTranslation: () => ({
    language: 'it'
  })
}))

describe('StaticPDFDownload', () => {
  it('should return handleDownloadCV function and isGenerating false', () => {
    const result = StaticPDFDownload()
    
    expect(result).toHaveProperty('handleDownloadCV')
    expect(result).toHaveProperty('isGenerating', false)
    expect(typeof result.handleDownloadCV).toBe('function')
  })

  it('should create download link when handleDownloadCV is called', () => {
    // Mock DOM methods
    const mockLink = {
      href: '',
      download: '',
      target: '',
      click: vi.fn()
    }
    
    const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue(mockLink)
    const appendChildSpy = vi.spyOn(document.body, 'appendChild').mockImplementation(() => {})
    const removeChildSpy = vi.spyOn(document.body, 'removeChild').mockImplementation(() => {})
    
    const result = StaticPDFDownload()
    
    result.handleDownloadCV()
    
    expect(createElementSpy).toHaveBeenCalledWith('a')
    expect(mockLink.href).toBe('/cv/Federico_Forzano_CV_IT.pdf')
    expect(mockLink.download).toMatch(/Federico_Forzano_CV_IT_\d{4}\.pdf/)
    expect(mockLink.target).toBe('_blank')
    expect(mockLink.click).toHaveBeenCalled()
    expect(appendChildSpy).toHaveBeenCalledWith(mockLink)
    expect(removeChildSpy).toHaveBeenCalledWith(mockLink)
    
    // Cleanup
    createElementSpy.mockRestore()
    appendChildSpy.mockRestore()
    removeChildSpy.mockRestore()
  })
})
