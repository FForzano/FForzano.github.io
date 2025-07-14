import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock React DOM internals before it gets loaded
vi.mock('react-dom', async () => {
  const actual = await vi.importActual('react-dom')
  return {
    ...actual,
    // Override any problematic functions if needed
  }
})

// Setup window properties
if (typeof window !== 'undefined') {
  window.matchMedia = vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))

  window.scrollTo = vi.fn()
}

// Setup document.createElement to return elements with proper style objects
if (typeof document !== 'undefined') {
  const originalCreateElement = document.createElement
  document.createElement = function(tagName) {
    const element = originalCreateElement.call(this, tagName)
    
    // Ensure every element has a proper style object
    if (!element.style) {
      element.style = {}
    }
    
    // Add all the CSS properties that React DOM might check
    const cssProperties = [
      'WebkitAnimation', 'webkitAnimation', 'MozAnimation', 'msAnimation', 
      'OAnimation', 'animation', 'WebkitTransform', 'webkitTransform',
      'MozTransform', 'msTransform', 'OTransform', 'transform'
    ]
    
    cssProperties.forEach(prop => {
      if (!(prop in element.style)) {
        element.style[prop] = ''
      }
    })
    
    return element
  }
}

// Mock observers
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock per Framer Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock per Lucide React icons
vi.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon">☰</div>,
  X: () => <div data-testid="close-icon">✕</div>,
  ArrowDown: () => <div data-testid="arrow-down-icon">↓</div>,
  Download: () => <div data-testid="download-icon">⬇</div>,
  Github: () => <div data-testid="github-icon">G</div>,
  Linkedin: () => <div data-testid="linkedin-icon">L</div>,
  Mail: () => <div data-testid="mail-icon">@</div>,
  ExternalLink: () => <div data-testid="external-link-icon">🔗</div>,
  Eye: () => <div data-testid="eye-icon">👁</div>,
  Heart: () => <div data-testid="heart-icon">❤</div>,
  ArrowUp: () => <div data-testid="arrow-up-icon">↑</div>,
  Send: () => <div data-testid="send-icon">📤</div>,
  MapPin: () => <div data-testid="map-pin-icon">📍</div>,
  Phone: () => <div data-testid="phone-icon">📞</div>,
  Globe: () => <div data-testid="globe-icon">🌐</div>,
  Languages: () => <div data-testid="languages-icon">🌐</div>,
}))

// Mock per PDF libraries
vi.mock('jspdf', () => ({
  jsPDF: vi.fn(() => ({
    internal: {
      pageSize: {
        getWidth: () => 210,
        getHeight: () => 297,
      },
      getNumberOfPages: () => 1,
    },
    setFont: vi.fn(),
    setFontSize: vi.fn(),
    setTextColor: vi.fn(),
    setDrawColor: vi.fn(),
    text: vi.fn(),
    line: vi.fn(),
    splitTextToSize: vi.fn(() => ['text']),
    addPage: vi.fn(),
    setPage: vi.fn(),
    save: vi.fn(),
  })),
}))

vi.mock('@react-pdf/renderer', () => ({
  Document: ({ children }) => <div data-testid="pdf-document">{children}</div>,
  Page: ({ children }) => <div data-testid="pdf-page">{children}</div>,
  Text: ({ children }) => <span data-testid="pdf-text">{children}</span>,
  View: ({ children }) => <div data-testid="pdf-view">{children}</div>,
  StyleSheet: {
    create: vi.fn(() => ({})),
  },
  pdf: vi.fn(() => ({
    toBlob: vi.fn(() => Promise.resolve(new Blob())),
  })),
  Font: {
    register: vi.fn(),
  },
}))

// Mock per window.scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
})

// Mock per URL.createObjectURL
Object.defineProperty(window.URL, 'createObjectURL', {
  value: vi.fn(() => 'mock-url'),
  writable: true,
})

Object.defineProperty(window.URL, 'revokeObjectURL', {
  value: vi.fn(),
  writable: true,
})

// Mock per document.createElement e appendChild
const mockLink = {
  href: '',
  download: '',
  click: vi.fn(),
}

Object.defineProperty(document, 'createElement', {
  value: vi.fn(() => mockLink),
  writable: true,
})

Object.defineProperty(document.body, 'appendChild', {
  value: vi.fn(),
  writable: true,
})

Object.defineProperty(document.body, 'removeChild', {
  value: vi.fn(),
  writable: true,
})

// Configurazione globale
beforeAll(() => {
  // Imposta la viewport per i test responsive
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: 1024,
  })
  
  Object.defineProperty(window, 'innerHeight', {
    writable: true,
    configurable: true,
    value: 768,
  })

  // Mock per IntersectionObserver (usato da Framer Motion)
  global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }))

  // Mock per ResizeObserver
  global.ResizeObserver = vi.fn(() => ({
    observe: vi.fn(),
    disconnect: vi.fn(),
    unobserve: vi.fn(),
  }))
})
