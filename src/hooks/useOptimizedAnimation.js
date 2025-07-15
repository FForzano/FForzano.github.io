import { useEffect, useRef, useState } from 'react'

export const useOptimizedAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
          // Disconnetti l'observer dopo la prima animazione
          observer.disconnect()
        }
      },
      { 
        threshold,
        rootMargin: '50px' // Inizia l'animazione un po' prima
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold, hasAnimated])

  return { ref: elementRef, isVisible, hasAnimated }
}

export const useStaggeredAnimation = (items, delay = 0.1) => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [hasInitialized, setHasInitialized] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (hasInitialized) return // Evita re-inizializzazione
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasInitialized) {
          setHasInitialized(true)
          // Anima gli elementi in sequenza
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => new Set([...prev, index]))
            }, index * delay * 100)
          })
          observer.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Inizia ancora prima
      }
    )

    const currentContainer = containerRef.current
    if (currentContainer && !hasInitialized) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [items.length, delay, hasInitialized])

  return { containerRef, visibleItems, hasInitialized }
}

// Hook per animazioni statiche (una volta sola) - versione ottimizzata
export const useStaticAnimation = (items) => {
  const [animatedItems, setAnimatedItems] = useState(new Set())
  const [hasTriggered, setHasTriggered] = useState(false)
  const containerRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (hasTriggered || !containerRef.current) return
    
    // Cleanup dell'observer precedente
    if (observerRef.current) {
      observerRef.current.disconnect()
    }
    
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
          // Anima tutti gli elementi immediatamente
          const allItems = new Set(items.map((_, index) => index))
          setAnimatedItems(allItems)
          // Disconnetti immediatamente dopo il trigger
          if (observerRef.current) {
            observerRef.current.disconnect()
            observerRef.current = null
          }
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '100px'
      }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observerRef.current.observe(currentContainer)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [items.length, hasTriggered])

  return { containerRef, animatedItems, hasTriggered }
}
