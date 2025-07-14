import { describe, it, expect } from 'vitest'
import { translations } from '../../translations'

describe('Translation System', () => {
  it('should have Italian translations', () => {
    expect(translations.it).toBeDefined()
    expect(translations.it.nav).toBeDefined()
    expect(translations.it.nav.home).toBe('Home')
    expect(translations.it.nav.about).toBe('About')
    expect(translations.it.nav.skills).toBe('Skills')
    expect(translations.it.nav.projects).toBe('Progetti')
    expect(translations.it.nav.contact).toBe('Contatti')
  })

  it('should have English translations', () => {
    expect(translations.en).toBeDefined()
    expect(translations.en.nav).toBeDefined()
    expect(translations.en.nav.home).toBe('Home')
    expect(translations.en.nav.about).toBe('About')
    expect(translations.en.nav.skills).toBe('Skills')
    expect(translations.en.nav.projects).toBe('Projects')
    expect(translations.en.nav.contact).toBe('Contact')
  })

  it('should have hero section translations', () => {
    // Italian
    expect(translations.it.hero.title).toBe('Dottorando in Ingegneria & Developer')
    expect(translations.it.hero.greeting).toBe('Ciao, sono')
    
    // English
    expect(translations.en.hero.title).toBe('PhD Student in Engineering & Developer')
    expect(translations.en.hero.greeting).toBe('Hi, I\'m')
  })

  it('should have about section translations', () => {
    expect(translations.it.about.title).toBe('Chi sono')
    expect(translations.en.about.title).toBe('About me')
  })

  it('should have skills section translations', () => {
    expect(translations.it.skills.title).toBe('Le mie competenze')
    expect(translations.en.skills.title).toBe('My skills')
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
    expect(translations.it.hero.downloadCV).toBe('Scarica CV')
    expect(translations.en.hero.downloadCV).toBe('Download CV')
  })

  it('should have form translations', () => {
    expect(translations.it.contact.form).toBeDefined()
    expect(translations.en.contact.form).toBeDefined()
    expect(translations.it.contact.form.name).toBe('Nome')
    expect(translations.en.contact.form.name).toBe('Name')
  })
})
