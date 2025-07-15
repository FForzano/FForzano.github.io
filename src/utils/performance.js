/**
 * Performance monitoring utilities for animations
 */

// Frame rate monitoring
let frameCount = 0
let lastTime = performance.now()
let fps = 0

export const startFPSMonitoring = () => {
  const updateFPS = () => {
    frameCount++
    const now = performance.now()
    
    if (now - lastTime >= 1000) {
      fps = Math.round((frameCount * 1000) / (now - lastTime))
      frameCount = 0
      lastTime = now
      
      // Log performance warnings in development
      if (process.env.NODE_ENV === 'development' && fps < 30) {
        console.warn(`⚠️ Low FPS detected: ${fps} FPS`)
      }
    }
    
    requestAnimationFrame(updateFPS)
  }
  
  requestAnimationFrame(updateFPS)
}

export const getCurrentFPS = () => fps

// Animation performance helper
export const withPerformanceMonitoring = (animationName, callback) => {
  if (process.env.NODE_ENV !== 'development') {
    return callback()
  }
  
  const startTime = performance.now()
  const result = callback()
  const endTime = performance.now()
  
  const duration = endTime - startTime
  if (duration > 16) { // More than one frame at 60fps
    console.warn(`⚠️ Slow animation detected: ${animationName} took ${duration.toFixed(2)}ms`)
  }
  
  return result
}

// Scroll performance monitoring
let scrollCallbacks = []
let scrollTimeout

export const addScrollCallback = (callback) => {
  scrollCallbacks.push(callback)
}

export const removeScrollCallback = (callback) => {
  scrollCallbacks = scrollCallbacks.filter(cb => cb !== callback)
}

// Optimized scroll handler with throttling
export const optimizedScrollHandler = () => {
  if (scrollTimeout) return
  
  scrollTimeout = requestAnimationFrame(() => {
    scrollCallbacks.forEach(callback => {
      try {
        callback()
      } catch (error) {
        console.error('Error in scroll callback:', error)
      }
    })
    scrollTimeout = null
  })
}

// Memory usage monitoring
export const logMemoryUsage = (label = 'Memory usage') => {
  if (process.env.NODE_ENV !== 'development' || !performance.memory) return
  
  const { usedJSHeapSize, totalJSHeapSize } = performance.memory
  const usedMB = Math.round(usedJSHeapSize / 1024 / 1024)
  const totalMB = Math.round(totalJSHeapSize / 1024 / 1024)
  
  console.log(`📊 ${label}: ${usedMB}MB / ${totalMB}MB`)
}

// Animation frame budget monitoring
export const monitorAnimationBudget = (animationName, duration = 16) => {
  if (process.env.NODE_ENV !== 'development') return () => {}
  
  const start = performance.now()
  
  return () => {
    const elapsed = performance.now() - start
    const budgetUsed = (elapsed / duration) * 100
    
    if (budgetUsed > 80) {
      console.warn(`⚠️ Animation budget exceeded: ${animationName} used ${budgetUsed.toFixed(1)}% of ${duration}ms budget`)
    }
  }
}
