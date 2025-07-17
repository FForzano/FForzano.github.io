import { describe, it, expect } from 'vitest'
import { translations } from '../../translations'

describe('Translation System', () => {
  it('should have Italian translations', () => {
    expect(translations.it).toBeDefined()
    expect(translations.it.nav).toBeDefined()
    expect(translations.it.nav.home).toBe('Home')
    expect(translations.it.nav.about).toBe('Chi sono')
    expect(translations.it.nav.experience).toBe('Esperienza')
    expect(translations.it.nav.research).toBe('Ricerca')
    expect(translations.it.nav.projects).toBe('Progetti')
    expect(translations.it.nav.hobbies).toBe('Hobbies')
    expect(translations.it.nav.contact).toBe('Contatti')
  })

  it('should have English translations', () => {
    expect(translations.en).toBeDefined()
    expect(translations.en.nav).toBeDefined()
    expect(translations.en.nav.home).toBe('Home')
    expect(translations.en.nav.about).toBe('About')
    expect(translations.en.nav.experience).toBe('Experience')
    expect(translations.en.nav.research).toBe('Research')
    expect(translations.en.nav.projects).toBe('Projects')
    expect(translations.en.nav.hobbies).toBe('Hobbies')
    expect(translations.en.nav.contact).toBe('Contact')
  })

  it('should have hero section translations', () => {
    // Italian
    expect(translations.it.hero.title).toBe("Dottorando in Scienze dell'Ingegneria e Co-fondatore di FPC DIDATTICA 4.0 S.R.L.")
    expect(translations.it.hero.greeting).toBe('Ciao, sono')
    
    // English
    expect(translations.en.hero.title).toBe('PhD Student in Engineering and Co-founder of FPC DIDATTICA 4.0 S.R.L.')
    expect(translations.en.hero.greeting).toBe('Hi, I\'m')
  })

  it('should have about section translations', () => {
    expect(translations.it.about.title).toBe('Chi sono')
    expect(translations.en.about.title).toBe('About me')
  })

  it('should have projects section translations', () => {
    expect(translations.it.projects.title).toBe('I miei progetti')
    expect(translations.en.projects.title).toBe('My projects')
  })

  it('should have contact section translations', () => {
    expect(translations.it.contact.title).toBe('Mettiamoci in contatto')
    expect(translations.en.contact.title).toBe('Let\'s get in touch')
  })

  it('should have footer translations', () => {
    expect(translations.it.footer).toBeDefined()
    expect(translations.en.footer).toBeDefined()
    expect(typeof translations.it.footer.description).toBe('string')
    expect(typeof translations.en.footer.description).toBe('string')
  })

  it('should have consistent structure between languages', () => {
    const italianKeys = Object.keys(translations.it)
    const englishKeys = Object.keys(translations.en)
    
    expect(italianKeys).toEqual(englishKeys)
  })

  it('should have CV download translations', () => {
    expect(translations.it.hero.downloadCV).toBeDefined()
    expect(translations.en.hero.downloadCV).toBeDefined()
    expect(typeof translations.it.hero.downloadCV).toBe('string')
    expect(typeof translations.en.hero.downloadCV).toBe('string')
  })

  it('should have research section translations', () => {
    expect(translations.it.research).toBeDefined()
    expect(translations.en.research).toBeDefined()
    expect(translations.it.research.title).toBe('Ricerca e Pubblicazioni')
    expect(translations.en.research.title).toBe('Research & Publications')
  })

  it('should have experience section translations', () => {
    expect(translations.it.experience).toBeDefined()
    expect(translations.en.experience).toBeDefined()
    expect(translations.it.experience.title).toBe('Esperienze Professionali')
    expect(translations.en.experience.title).toBe('Experience')
  })

  it('should have navigation all required sections', () => {
    const requiredSections = ['home', 'about', 'experience', 'research', 'projects', 'hobbies', 'contact']
    
    requiredSections.forEach(section => {
      expect(translations.it.nav[section]).toBeDefined()
      expect(translations.en.nav[section]).toBeDefined()
    })
  })
})