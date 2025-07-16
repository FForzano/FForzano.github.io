import { describe, it, expect } from 'vitest'

describe('Project Structure Tests', () => {
  it('should have all essential source files', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const srcPath = path.resolve(process.cwd(), 'src')
    expect(fs.existsSync(srcPath)).toBe(true)
    
    // Verifica file principali
    expect(fs.existsSync(path.join(srcPath, 'App.jsx'))).toBe(true)
    expect(fs.existsSync(path.join(srcPath, 'main.jsx'))).toBe(true)
    expect(fs.existsSync(path.join(srcPath, 'index.css'))).toBe(true)
  })

  it('should have all component files', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const componentsPath = path.resolve(process.cwd(), 'src/components')
    expect(fs.existsSync(componentsPath)).toBe(true)
    
    const expectedComponents = [
      'Navbar.jsx',
      'Hero.jsx',
      'About.jsx',
      'Skills.jsx',
      'Projects.jsx',
      'Contact.jsx',
      'Footer.jsx',
      'LanguageSelector.jsx',
      'StaticPDFDownload.jsx'
    ]
    
    expectedComponents.forEach(component => {
      expect(fs.existsSync(path.join(componentsPath, component))).toBe(true)
    })
  })

  it('should have translation system files', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    // Verifica sistema di traduzioni
    expect(fs.existsSync(path.resolve(process.cwd(), 'src/translations/index.js'))).toBe(true)
    expect(fs.existsSync(path.resolve(process.cwd(), 'src/contexts/LanguageContext.jsx'))).toBe(true)
    expect(fs.existsSync(path.resolve(process.cwd(), 'src/hooks/useTranslation.js'))).toBe(true)
  })

  it('should have documentation files', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const expectedDocs = [
      'README.md',
      'docs/README.md',
      'docs/TESTING_GUIDE.md',
      'docs/INTERNATIONALIZATION.md',
      'docs/CV_GENERATION.md',
      'docs/DOCKER.md',
      'docs/GUIDA_COMPLETA_BARCHETTA.md'
    ]
    
    expectedDocs.forEach(doc => {
      expect(fs.existsSync(path.resolve(process.cwd(), doc))).toBe(true)
    })
  })

  it('should have test setup files', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const testPath = path.resolve(process.cwd(), 'src/test')
    expect(fs.existsSync(testPath)).toBe(true)
    expect(fs.existsSync(path.join(testPath, 'setup.jsx'))).toBe(true)
    expect(fs.existsSync(path.join(testPath, 'utils.js'))).toBe(true)
  })

  it('should have CV static files directory', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const cvDirectoryPath = path.resolve(process.cwd(), 'public/cv')
    expect(fs.existsSync(cvDirectoryPath)).toBe(true)
    
    // Verifica che esistano i file README per le istruzioni
    const readmePath = path.resolve(process.cwd(), 'public/cv/README.md')
    expect(fs.existsSync(readmePath)).toBe(true)
  })

  it('should have environment configuration', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    // Verifica file di configurazione environment
    expect(fs.existsSync(path.resolve(process.cwd(), '.env.example'))).toBe(true)
    expect(fs.existsSync(path.resolve(process.cwd(), '.gitignore'))).toBe(true)
  })
})
