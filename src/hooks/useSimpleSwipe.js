import { useState, useEffect, useRef } from 'react'

const useSimpleSwipe = ({
  itemsCount = 0,
  enableHorizontalScroll = false,
  onTap = () => {}
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const elementRef = useRef(null)

  // Refs per mantenere i valori aggiornati nelle funzioni
  const currentIndexRef = useRef(currentIndex)
  const itemsCountRef = useRef(itemsCount)
  const onTapRef = useRef(onTap)
  const isDraggingRef = useRef(false)

  // Touch tracking
  const touchStartRef = useRef({ x: 0, y: 0 })
  const lastTouchRef = useRef({ x: 0, y: 0 })
  const activeTouch = useRef(null) // Track which touch is active
  const lastTouchStartTime = useRef(0) // Debounce touch start

  // Update refs when values change
  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  useEffect(() => {
    itemsCountRef.current = itemsCount
  }, [itemsCount])

  useEffect(() => {
    onTapRef.current = onTap
  }, [onTap])

  useEffect(() => {
    isDraggingRef.current = isDragging
  }, [isDragging])

  // Calculate position based on current index and drag offset
  const getTranslateX = () => {
    const baseTranslate = -currentIndex * 100
    const dragTranslate = isDragging ? (dragOffset / (elementRef.current?.offsetWidth || 1)) * 100 : 0
    return baseTranslate + dragTranslate
  }

  // Touch handlers stabilizzati con useRef
  const handleTouchStart = useRef((e) => {
    const now = Date.now()

    // Verifica che l'evento provenga dal nostro container o dai suoi figli
    if (!elementRef.current || !elementRef.current.contains(e.target)) {
      return
    }

    // Se stiamo già draggando, ignora qualsiasi nuovo touch start
    if (isDraggingRef.current) {
      return
    }

    // Se c'è già un touch attivo, ignora
    if (activeTouch.current !== null) {
      return
    }

    // Debounce: ignora touch start troppo ravvicinati (< 50ms)
    if (now - lastTouchStartTime.current < 50) {
      return
    }

    lastTouchStartTime.current = now
    const touch = e.touches[0]
    activeTouch.current = touch.identifier
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    lastTouchRef.current = { x: touch.clientX, y: touch.clientY }
    setDragOffset(0)
    isDraggingRef.current = false
    setIsDragging(false)
  })

  const handleTouchMove = useRef((e) => {
    // Trova il touch che stiamo trackando
    const touch = Array.from(e.touches).find(t => t.identifier === activeTouch.current)
    if (!touch) {
      return
    }

    const deltaX = touch.clientX - touchStartRef.current.x
    const deltaY = touch.clientY - touchStartRef.current.y

    // Appena il gesto pende orizzontale, anche di pochissimo, blocca lo
    // scroll di default: aspettare la soglia di 10px per farlo lascerebbe
    // al browser una finestra per iniziare un pan nativo (che poi vince la
    // gara su un secondo preventDefault tardivo). touch-action: pan-y in
    // index.css è la difesa primaria; questo è un rinforzo a costo zero.
    if (Math.abs(deltaX) >= Math.abs(deltaY)) {
      e.preventDefault()
    }

    // La soglia dei 10px resta solo per decidere quando attivare lo stato
    // visivo di drag, per non scattare su micro-movimenti/tremolii.
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      if (!isDraggingRef.current) {
        isDraggingRef.current = true
        setIsDragging(true)
      }
      setDragOffset(deltaX)
    }

    lastTouchRef.current = { x: touch.clientX, y: touch.clientY }
  })

  const handleTouchEnd = useRef((e) => {
    // Trova il touch che si è concluso
    const touch = Array.from(e.changedTouches).find(t => t.identifier === activeTouch.current)
    if (!touch) {
      return
    }

    const deltaX = lastTouchRef.current.x - touchStartRef.current.x
    const deltaY = lastTouchRef.current.y - touchStartRef.current.y
    const wasDragging = isDraggingRef.current

    if (wasDragging) {
      // Era un drag - determina se cambiare slide
      const threshold = elementRef.current ? elementRef.current.offsetWidth * 0.3 : 100

      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0 && currentIndexRef.current > 0) {
          // Swipe destro - slide precedente
          setCurrentIndex(prev => prev - 1)
        } else if (deltaX < 0 && currentIndexRef.current < itemsCountRef.current - 1) {
          // Swipe sinistro - slide successiva
          setCurrentIndex(prev => prev + 1)
        }
      }
    } else if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
      // Era un tap
      onTapRef.current()
    }

    // Reset state
    activeTouch.current = null
    isDraggingRef.current = false
    setIsDragging(false)
    setDragOffset(0)
    lastTouchStartTime.current = 0 // Reset debounce timestamp
  })

  const handleTouchCancel = useRef((e) => {
    // Verifica se il touch cancellato è il nostro
    const touch = Array.from(e.changedTouches).find(t => t.identifier === activeTouch.current)
    if (!touch) {
      return
    }

    // Reset completo dello state
    activeTouch.current = null
    isDraggingRef.current = false
    setIsDragging(false)
    setDragOffset(0)
    lastTouchStartTime.current = 0 // Reset debounce timestamp
  })

  // Effect per aggiungere event listeners - STABILE, nessuna dipendenza che cambia
  useEffect(() => {
    const element = elementRef.current
    if (!element) {
      return
    }

    // Usa le funzioni .current che non cambiano mai
    const startHandler = handleTouchStart.current
    const moveHandler = handleTouchMove.current
    const endHandler = handleTouchEnd.current
    const cancelHandler = handleTouchCancel.current

    element.addEventListener('touchstart', startHandler, { passive: false, capture: true })
    element.addEventListener('touchmove', moveHandler, { passive: false, capture: true })
    element.addEventListener('touchend', endHandler, { passive: false, capture: true })
    element.addEventListener('touchcancel', cancelHandler, { passive: false, capture: true })

    return () => {
      element.removeEventListener('touchstart', startHandler)
      element.removeEventListener('touchmove', moveHandler)
      element.removeEventListener('touchend', endHandler)
      element.removeEventListener('touchcancel', cancelHandler)
    }
  }, []) // NESSUNA DIPENDENZA - solo mount/unmount

  // Wheel support per desktop
  useEffect(() => {
    if (!enableHorizontalScroll) return

    const element = elementRef.current
    if (!element) return

    const handleWheel = (e) => {
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey

      if (isHorizontalScroll) {
        e.preventDefault()

        const direction = e.deltaX > 0 || (e.shiftKey && e.deltaY > 0) ? 1 : -1

        if (direction > 0 && currentIndex < itemsCount - 1) {
          setCurrentIndex(prev => prev + 1)
        } else if (direction < 0 && currentIndex > 0) {
          setCurrentIndex(prev => prev - 1)
        }
      }
    }

    element.addEventListener('wheel', handleWheel, { passive: false })
    return () => element.removeEventListener('wheel', handleWheel)
  }, [enableHorizontalScroll, currentIndex, itemsCount])

  // Navigation functions - semplici, senza useCallback
  const nextSlide = () => {
    setCurrentIndex(prev => prev < itemsCountRef.current - 1 ? prev + 1 : prev)
  }

  const prevSlide = () => {
    setCurrentIndex(prev => prev > 0 ? prev - 1 : prev)
  }

  const goToSlide = (index) => {
    if (index >= 0 && index < itemsCountRef.current) {
      setCurrentIndex(index)
    }
  }

  return {
    elementRef,
    currentIndex,
    isDragging,
    nextSlide,
    prevSlide,
    goToSlide,
    getTranslateX,
    canGoNext: currentIndex < itemsCount - 1,
    canGoPrev: currentIndex > 0,
    // Compatibility con il vecchio API
    handlers: {}
  }
}

export default useSimpleSwipe
