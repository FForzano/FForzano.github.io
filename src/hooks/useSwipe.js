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
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
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
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
    onSwipeStart(e)
  }

  const onTouchMove = (e) => {
    if (!trackTouch || !isDragging) return
    const currentTouch = e.targetTouches[0].clientX
    if (touchStart !== null) {
      const diff = currentTouch - touchStart
      setDragOffset(diff)
    }
    if (preventDefaultTouchmoveEvent) {
      e.preventDefault()
    }
  }

  const onTouchEnd = (e) => {
    if (!trackTouch || !touchStart || !isDragging) return
    
    const currentTouch = e.changedTouches[0].clientX
    setTouchEnd(currentTouch)
    setIsDragging(false)
    setDragOffset(0)
    
    const distance = touchStart - currentTouch
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
