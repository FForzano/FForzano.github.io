/**
 * Accessibility utilities for the portfolio
 */

// Prefers reduced motion check
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Focus management utilities
export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  )
  
  const firstFocusableElement = focusableElements[0]
  const lastFocusableElement = focusableElements[focusableElements.length - 1]
  
  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus()
          e.preventDefault()
        }
      }
    }
  }
  
  element.addEventListener('keydown', handleTabKey)
  
  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

// Announce to screen readers
export const announce = (message, priority = 'polite') => {
  const announcer = document.createElement('div')
  announcer.setAttribute('aria-live', priority)
  announcer.setAttribute('aria-atomic', 'true')
  announcer.style.position = 'absolute'
  announcer.style.left = '-10000px'
  announcer.style.width = '1px'
  announcer.style.height = '1px'
  announcer.style.overflow = 'hidden'
  
  document.body.appendChild(announcer)
  announcer.textContent = message
  
  setTimeout(() => {
    document.body.removeChild(announcer)
  }, 1000)
}

// Keyboard navigation helpers
export const handleKeyboardNavigation = (event, actions) => {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      actions.onActivate?.()
      break
    case 'Escape':
      actions.onEscape?.()
      break
    case 'ArrowDown':
      event.preventDefault()
      actions.onDown?.()
      break
    case 'ArrowUp':
      event.preventDefault()
      actions.onUp?.()
      break
    case 'ArrowLeft':
      event.preventDefault()
      actions.onLeft?.()
      break
    case 'ArrowRight':
      event.preventDefault()
      actions.onRight?.()
      break
    case 'Home':
      event.preventDefault()
      actions.onHome?.()
      break
    case 'End':
      event.preventDefault()
      actions.onEnd?.()
      break
  }
}

// High contrast mode detection
export const isHighContrastMode = () => {
  return window.matchMedia('(prefers-contrast: high)').matches
}

// Color scheme preference
export const getColorSchemePreference = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

// Skip link functionality
export const createSkipLink = (targetId, text = 'Skip to main content') => {
  const skipLink = document.createElement('a')
  skipLink.href = `#${targetId}`
  skipLink.textContent = text
  skipLink.className = 'skip-link'
  skipLink.style.position = 'absolute'
  skipLink.style.top = '-40px'
  skipLink.style.left = '6px'
  skipLink.style.background = '#000'
  skipLink.style.color = '#fff'
  skipLink.style.padding = '8px'
  skipLink.style.textDecoration = 'none'
  skipLink.style.zIndex = '100'
  skipLink.style.borderRadius = '4px'
  
  skipLink.addEventListener('focus', () => {
    skipLink.style.top = '6px'
  })
  
  skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px'
  })
  
  document.body.insertBefore(skipLink, document.body.firstChild)
  
  return skipLink
}

// Animation preferences
export const getAnimationPreferences = () => {
  const reducedMotion = prefersReducedMotion()
  
  return {
    reducedMotion,
    duration: reducedMotion ? 0 : undefined,
    transition: reducedMotion ? 'none' : undefined
  }
}
