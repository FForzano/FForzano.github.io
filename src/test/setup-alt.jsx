import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Setup DOM polyfills
import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
  resources: 'usable'
})

global.window = dom.window
global.document = dom.window.document
global.HTMLElement = dom.window.HTMLElement
global.Node = dom.window.Node

// Setup window properties
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

window.scrollTo = vi.fn()

// Mock observers
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock Framer Motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => children,
    section: ({ children, ...props }) => children,
    a: ({ children, ...props }) => children,
    button: ({ children, ...props }) => children,
    h1: ({ children, ...props }) => children,
    h2: ({ children, ...props }) => children,
    h3: ({ children, ...props }) => children,
    p: ({ children, ...props }) => children,
    span: ({ children, ...props }) => children,
  },
  AnimatePresence: ({ children }) => children,
}))

// Mock Lucide React icons
vi.mock('lucide-react', () => ({
  Menu: () => 'Menu',
  X: () => 'X',
  ArrowDown: () => 'ArrowDown',
  Download: () => 'Download',
  Github: () => 'Github',
  Linkedin: () => 'Linkedin',
  Mail: () => 'Mail',
  ExternalLink: () => 'ExternalLink',
  Eye: () => 'Eye',
  Heart: () => 'Heart',
  ArrowUp: () => 'ArrowUp',
  Send: () => 'Send',
  MapPin: () => 'MapPin',
  Phone: () => 'Phone',
  Globe: () => 'Globe',
  Languages: () => 'Languages',
}))
