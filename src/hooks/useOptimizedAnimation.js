import { useEffect, useRef, useState } from 'react'

/**
 * Hook per animazioni statiche che previene il flickering
 * Utilizzato per animare liste di elementi (pubblicazioni, progetti, esperienze)
 * Si attiva una sola volta quando l'elemento entra nel viewport
 */
export const useStaticAnimation = (items) => {
  const [animatedItems, setAnimatedItems] = useState(new Set())
  const [hasTriggered, setHasTriggered] = useState(false)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)
  const isInitializedRef = useRef(false)

  useEffect(() => {
    // Se è già inizializzato, non fare nulla
    if (isInitializedRef.current) return
    
    // Cleanup del timeout precedente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Se non c'è il container, esci
    if (!containerRef.current) return
    
    const checkVisibility = () => {
      if (!containerRef.current || isInitializedRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Controlla se l'elemento è visibile nel viewport
      if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
        isInitializedRef.current = true
        setHasTriggered(true)
        
        // Anima tutti gli elementi immediatamente
        const allItems = new Set(items.map((_, index) => index))
        setAnimatedItems(allItems)
      }
    }
    
    // Controlla immediatamente
    checkVisibility()
    
    // Se non è ancora visibile, imposta un timeout per controllare dopo
    if (!isInitializedRef.current) {
      timeoutRef.current = setTimeout(() => {
        checkVisibility()
      }, 100)
    }
    
    // Aggiungi listener per lo scroll solo se non è ancora inizializzato
    const handleScroll = () => {
      if (!isInitializedRef.current) {
        checkVisibility()
      }
    }
    
    if (!isInitializedRef.current) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items.length])

  return { containerRef, animatedItems, hasTriggered }
}

/**
 * Hook generalizzato per sezioni singole che previene il flickering
 * Utilizzato per animare sezioni intere (hobbies, about, etc.)
 * Si attiva una sola volta quando la sezione entra nel viewport
 */
export const useNoFlickerAnimation = (targetRef = null) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const containerRef = useRef(null)
  const timeoutRef = useRef(null)
  const isInitializedRef = useRef(false)

  const refToUse = targetRef || containerRef

  useEffect(() => {
    // Se è già inizializzato, non fare nulla
    if (isInitializedRef.current) return
    
    // Cleanup del timeout precedente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Se non c'è il container, esci
    if (!refToUse.current) return
    
    const checkVisibility = () => {
      if (!refToUse.current || isInitializedRef.current) return
      
      const rect = refToUse.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Controlla se l'elemento è visibile nel viewport
      if (rect.top < viewportHeight * 0.8 && rect.bottom > viewportHeight * 0.2) {
        isInitializedRef.current = true
        setHasTriggered(true)
        setIsVisible(true)
      }
    }
    
    // Controlla immediatamente
    checkVisibility()
    
    // Se non è ancora visibile, imposta un timeout per controllare dopo
    if (!isInitializedRef.current) {
      timeoutRef.current = setTimeout(() => {
        checkVisibility()
      }, 100)
    }
    
    // Aggiungi listener per lo scroll solo se non è ancora inizializzato
    const handleScroll = () => {
      if (!isInitializedRef.current) {
        checkVisibility()
      }
    }
    
    if (!isInitializedRef.current) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [refToUse])

  return { ref: containerRef, isVisible, hasTriggered }
}
