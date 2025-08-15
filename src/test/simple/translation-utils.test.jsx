import { describe, it, expect } from 'vitest'
import { getTranslation } from '../../translations'

describe('Translation Utilities', () => {
  it('should get nested translation', () => {
    const translation = getTranslation('it', 'nav.home')
    expect(translation).toBe('Home')
  })

  it('should get deep nested translation', () => {
    const translation = getTranslation('en', 'contact.form.name')
    expect(translation).toBe('Name')
  })

  it('should return key if translation not found', () => {
    const translation = getTranslation('it', 'non.existent.key')
    expect(translation).toBe('non.existent.key')
  })

  it('should handle non-existent language', () => {
    const translation = getTranslation('fr', 'nav.home')
    expect(translation).toBe('nav.home')
  })

  it('should handle empty key', () => {
    const translation = getTranslation('it', '')
    expect(translation).toBe('')
  })

  it('should get simple translation', () => {
    const titleIt = getTranslation('it', 'hero.title')
    const titleEn = getTranslation('en', 'hero.title')
    
    expect(titleIt).toBe("Dottorando in Scienze dell'Ingegneria e Co-fondatore di FPC DIDATTICA 4.0 S.R.L.")
    expect(titleEn).toBe('PhD Student in Engineering and Co-founder of FPC DIDATTICA 4.0 S.R.L.')
  })

  // Removed test for about.education as the key no longer exists in translations
})
