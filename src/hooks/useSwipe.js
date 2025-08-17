import React, { useState, useEffect, useRef, useCallback } from 'react'

const useSwipe = ({
  onSwipedLeft = () => {},
  onSwipedRight = () => {},
  onSwipedUp = () => {},
  onSwipedDown = () => {},
  onSwipeStart = () => {},
  onSwipeEnd = () => {},
  onSwiped = () => {},
  onTap = () => {},
  preventDefaultTouchmoveEvent = false,
  trackMouse = false,
  trackTouch = true,
  minSwipeDistance = 50,
  delta = 10,
  itemsCount = 0,
  enableHorizontalScroll = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const elementRef = useRef(null)

  // Touch tracking
  const touchStartRef = useRef({ x: 0, y: 0 })
  const lastTouchRef = useRef({ x: 0, y: 0 })

  // Calculate position based on current index and drag offset
  const getTranslateX = () => {
    const baseTranslate = -currentIndex * 100
    const dragTranslate = isDragging ? (dragOffset / (elementRef.current?.offsetWidth || 1)) * 100 : 0
    return baseTranslate + dragTranslate
  }

  const onTouchStart = (e) => {
    if (!trackTouch) return
    console.log('Touch start:', e.targetTouches[0])
    setTouchEnd({ x: null, y: null })
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
    setIsDragging(false) // Non è ancora dragging, potrebbe essere tap o scroll
    onSwipeStart(e)
  }

  const onTouchMove = (e) => {
    if (!trackTouch) return
    const currentTouch = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    }
    console.log('Touch move:', { currentTouch, touchStart, isDragging })
    if (touchStart.x !== null && touchStart.y !== null) {
      const diffX = currentTouch.x - touchStart.x
      const diffY = currentTouch.y - touchStart.y
      console.log('Touch diff:', { diffX, diffY, absDiffX: Math.abs(diffX), absDiffY: Math.abs(diffY) })
      
      const isHorizontalMove = Math.abs(diffX) > Math.abs(diffY)
      const threshold = 5 // Soglia ridotta per iniziare il drag
      
      if (Math.abs(diffX) > threshold || Math.abs(diffY) > threshold) {
        if (isHorizontalMove && Math.abs(diffX) > threshold) {
          // È un movimento orizzontale, inizia il drag del carousel
          if (!isDragging) {
            setIsDragging(true)
            console.log('Started horizontal drag with diffX:', diffX)
          }
          setDragOffset(diffX)
          console.log('Setting drag offset:', diffX)
          if (preventDefaultTouchmoveEvent) {
            e.preventDefault()
            e.stopPropagation()
          }
        } else if (!isHorizontalMove && Math.abs(diffY) > threshold) {
          // È un movimento verticale, lascia che il browser gestisca lo scroll
          console.log('Vertical scroll detected, diffY:', diffY)
          // Non preventDefault per permettere scroll verticale
        }
      }
    }
  }

  const onTouchEnd = (e) => {
    if (!trackTouch || !touchStart.x) return
    const currentTouch = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    }
    console.log('Touch end:', { currentTouch, touchStart, wasDragging: isDragging, currentIndex })
    setTouchEnd(currentTouch)
    
    if (isDragging) {
      // Era un drag, gestisci lo swipe
      console.log('Processing drag end...')
      setIsDragging(false)
      setDragOffset(0)
      
      const distanceX = touchStart.x - currentTouch.x
      const distanceY = touchStart.y - currentTouch.y
      console.log('Touch distances:', { distanceX, distanceY, minSwipeDistance, itemsCount, currentIndex })
      // Swipe orizzontale
      const isLeftSwipe = distanceX > minSwipeDistance
      const isRightSwipe = distanceX < -minSwipeDistance
    // Swipe verticale
      const isUpSwipe = distanceY > minSwipeDistance
      const isDownSwipe = distanceY < -minSwipeDistance
      console.log('Swipe detection:', { isLeftSwipe, isRightSwipe, isUpSwipe, isDownSwipe })
      if (isLeftSwipe && currentIndex < itemsCount - 1) {
        console.log('Executing left swipe -> next slide')
        setCurrentIndex(prev => prev + 1)
        onSwipedLeft()
        onSwiped('left')
      } else if (isRightSwipe && currentIndex > 0) {
        console.log('Executing right swipe -> prev slide')
        setCurrentIndex(prev => prev - 1)
        onSwipedRight()
        onSwiped('right')
      } else if (isUpSwipe) {
        onSwipedUp()
        onSwiped('up')
      } else if (isDownSwipe) {
        onSwipedDown()
        onSwiped('down')
      } else if (Math.abs(distanceX) < delta && Math.abs(distanceY) < delta) {
        onTap()
      }
    } else {
      // Non era un drag, potrebbe essere un tap - lascia che l'evento si propaghi normalmente
      console.log('Touch end without drag - allowing tap to propagate')
    }
    
    onSwipeEnd(e)
  }

  const onMouseDown = (e) => {
    if (!trackMouse) return
    setTouchEnd(null)
    setTouchStart(e.clientX)
    setIsDragging(true)
    onSwipeStart(e)
  }

  const onMouseMove = (e) => {
    if (!trackMouse || !isDragging) return
    const currentMouse = e.clientX
    if (touchStart !== null) {
      const diff = currentMouse - touchStart
      setDragOffset(diff)
    }
  }

  const onMouseUp = (e) => {
    if (!trackMouse || !touchStart || !isDragging) return
    
    const currentMouse = e.clientX
    setTouchEnd(currentMouse)
    setIsDragging(false)
    setDragOffset(0)
    
    const distance = touchStart - currentMouse
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe && currentIndex < itemsCount - 1) {
      setCurrentIndex(prev => prev + 1)
      onSwipedLeft()
      onSwiped('left')
    } else if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
      onSwipedRight()
      onSwiped('right')
    } else if (Math.abs(distance) < delta) {
      onTap()
    }
  }

  // Navigation functions
  const goToSlide = (index) => {
    if (index >= 0 && index < itemsCount) {
      setCurrentIndex(index)
    }
  }

  const nextSlide = () => {
    if (currentIndex < itemsCount - 1) {
      setCurrentIndex(prev => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }

  // useEffect per gestire wheel event
  useEffect(() => {
    if (!enableHorizontalScroll || !elementRef.current) return

    const element = elementRef.current
    console.log('Setting up wheel listener on element:', element)
    
    const wheelHandler = (e) => {
      console.log('Wheel event received:', { 
        deltaX: e.deltaX, 
        deltaY: e.deltaY, 
        shiftKey: e.shiftKey,
        currentIndex,
        itemsCount 
      })
      
      // Rileva scroll orizzontale o shift+scroll verticale
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey
      
      if (isHorizontalScroll) {
        console.log('Horizontal scroll detected!')
        e.preventDefault()
        e.stopPropagation()
        
        const scrollDirection = e.deltaX > 0 || (e.shiftKey && e.deltaY > 0) ? 1 : -1
        console.log('Scroll direction:', scrollDirection)
        
        if (scrollDirection > 0 && currentIndex < itemsCount - 1) {
          console.log('Moving to next slide')
          setCurrentIndex(prev => prev + 1)
        } else if (scrollDirection < 0 && currentIndex > 0) {
          console.log('Moving to prev slide')
          setCurrentIndex(prev => prev - 1)
        }
      }
    }
    
    element.addEventListener('wheel', wheelHandler, { passive: false })
    console.log('Wheel listener added')

    return () => {
      console.log('Removing wheel listener')
      element.removeEventListener('wheel', wheelHandler)
    }
  }, [enableHorizontalScroll, currentIndex, itemsCount])

  // Handlers for container
  const handlers = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave: () => {
      if (isDragging) {
        setIsDragging(false)
        setDragOffset(0)
      }
    },
    ref: elementRef,
  }

  return {
    currentIndex,
    setCurrentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
    handlers,
    getTranslateX,
    isDragging,
    canGoNext: currentIndex < itemsCount - 1,
    canGoPrev: currentIndex > 0,
  }
}

export default useSwipe
