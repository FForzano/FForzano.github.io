import { useState, useEffect, useRef } from 'react'

const useSwipe = (itemsCount, options = {}) => {
  const {
    threshold = 50,
    preventDefaultTouchmoveEvent = false,
    delta = 10,
    trackMouse = false,
    trackTouch = true,
    rotationAngle = 0,
    onSwiped = () => {},
    onSwipedLeft = () => {},
    onSwipedRight = () => {},
    onSwipedUp = () => {},
    onSwipedDown = () => {},
    onSwipeStart = () => {},
    onTap = () => {},
  } = options

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState({ x: null, y: null })
  const [touchEnd, setTouchEnd] = useState({ x: null, y: null })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const elementRef = useRef(null)

  const minSwipeDistance = threshold

  // Calculate position based on current index and drag offset
  const getTranslateX = () => {
    const baseTranslate = -currentIndex * 100
    const dragTranslate = isDragging ? (dragOffset / (elementRef.current?.offsetWidth || 1)) * 100 : 0
    return baseTranslate + dragTranslate
  }

  const onTouchStart = (e) => {
    if (!trackTouch) return
    setTouchEnd({ x: null, y: null })
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
    setIsDragging(true)
    onSwipeStart(e)
  }

  const onTouchMove = (e) => {
    if (!trackTouch || !isDragging) return
    const currentTouch = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    }
    if (touchStart.x !== null && touchStart.y !== null) {
      const diffX = currentTouch.x - touchStart.x
      const diffY = currentTouch.y - touchStart.y
      // Scegli la direzione dominante
      if (Math.abs(diffX) > Math.abs(diffY)) {
        setDragOffset(diffX)
      } else {
        setDragOffset(diffY)
      }
    }
    if (preventDefaultTouchmoveEvent) {
      e.preventDefault()
    }
  }

  const onTouchEnd = (e) => {
    if (!trackTouch || !touchStart.x || !isDragging) return
    const currentTouch = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    }
    setTouchEnd(currentTouch)
    setIsDragging(false)
    setDragOffset(0)
    const distanceX = touchStart.x - currentTouch.x
    const distanceY = touchStart.y - currentTouch.y
    // Swipe orizzontale
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    // Swipe verticale
    const isUpSwipe = distanceY > minSwipeDistance
    const isDownSwipe = distanceY < -minSwipeDistance
    if (isLeftSwipe && currentIndex < itemsCount - 1) {
      setCurrentIndex(prev => prev + 1)
      onSwipedLeft()
      onSwiped('left')
    } else if (isRightSwipe && currentIndex > 0) {
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
