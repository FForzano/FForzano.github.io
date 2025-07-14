import { describe, it, expect } from 'vitest'

describe('Build and Configuration Tests', () => {
  it('should have development environment variables', () => {
    // Verifica che l'ambiente di sviluppo sia configurato
    expect(import.meta.env.DEV).toBe(true)
    expect(import.meta.env.MODE).toBe('test')
  })

  it('should have proper package.json scripts', async () => {
    // Test per verificare che i package scripts essenziali esistano
    const fs = await import('fs')
    const path = await import('path')
    
    const packageJsonPath = path.resolve(process.cwd(), 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    
    expect(packageJson.scripts).toBeDefined()
    expect(packageJson.scripts.dev).toBeDefined()
    expect(packageJson.scripts.build).toBeDefined()
    expect(packageJson.scripts.preview).toBeDefined()
    expect(packageJson.scripts.test).toBeDefined()
  })

  it('should have required dependencies', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const packageJsonPath = path.resolve(process.cwd(), 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    
    // Verifica dipendenze essenziali
    expect(packageJson.dependencies.react).toBeDefined()
    expect(packageJson.dependencies['react-dom']).toBeDefined()
    expect(packageJson.dependencies['framer-motion']).toBeDefined()
    expect(packageJson.dependencies['lucide-react']).toBeDefined()
    expect(packageJson.dependencies['react-router-dom']).toBeDefined()
  })

  it('should have test dependencies', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const packageJsonPath = path.resolve(process.cwd(), 'package.json')
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
    
    // Verifica dipendenze di test
    expect(packageJson.devDependencies.vitest).toBeDefined()
    expect(packageJson.devDependencies['@testing-library/react']).toBeDefined()
    expect(packageJson.devDependencies['@testing-library/jest-dom']).toBeDefined()
  })

  it('should have Tailwind CSS configuration', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const tailwindConfigPath = path.resolve(process.cwd(), 'tailwind.config.js')
    expect(fs.existsSync(tailwindConfigPath)).toBe(true)
  })

  it('should have Vite configuration', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const viteConfigPath = path.resolve(process.cwd(), 'vite.config.js')
    expect(fs.existsSync(viteConfigPath)).toBe(true)
  })

  it('should have ESLint configuration', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const eslintConfigPath = path.resolve(process.cwd(), '.eslintrc.cjs')
    expect(fs.existsSync(eslintConfigPath)).toBe(true)
  })

  it('should have Docker configuration', async () => {
    const fs = await import('fs')
    const path = await import('path')
    
    const dockerfilePath = path.resolve(process.cwd(), 'Dockerfile')
    const dockerComposePath = path.resolve(process.cwd(), 'docker-compose.yml')
    
    expect(fs.existsSync(dockerfilePath)).toBe(true)
    expect(fs.existsSync(dockerComposePath)).toBe(true)
  })
})
