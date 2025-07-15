import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hobbies from './components/Hobbies'
import SectionIndicator from './components/SectionIndicator'
import SectionTransition from './components/SectionTransition'
import ScrollHint from './components/ScrollHint'

const AppContent = () => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const [showTransition, setShowTransition] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState('down')
  
  const sectionIds = ['home', 'about', 'experience', 'research', 'projects', 'hobbies', 'contact', 'footer']

  // Scroll to section function
  const goToSection = (index, direction = 'down') => {
    if (index >= 0 && index < sectionIds.length && !isScrolling) {
      setCurrentSection(index)
      setIsScrolling(true)
      setShowTransition(true)
      setTransitionDirection(direction)
      
      const targetElement = document.getElementById(sectionIds[index])
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
      
      // Reset states after scroll
      setTimeout(() => {
        setIsScrolling(false)
        setShowTransition(false)
      }, 1000)
    }
  }

  // Handle wheel scroll
  useEffect(() => {
    let lastScrollTime = 0
    
    const handleWheel = (e) => {
      const now = Date.now()
      
      // Throttle scroll events
      if (now - lastScrollTime < 800 || isScrolling) {
        return
      }
      
      const delta = e.deltaY
      const isScrollingDown = delta > 0
      
      // Get current section element
      const currentSectionElement = document.getElementById(sectionIds[currentSection])
      if (!currentSectionElement) return
      
      // Check if we're at the boundaries of the current section
      const sectionRect = currentSectionElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      // Calculate section boundaries
      const sectionTop = currentSectionElement.offsetTop
      const sectionBottom = sectionTop + currentSectionElement.offsetHeight
      const viewportTop = scrollTop
      const viewportBottom = scrollTop + windowHeight
      
      let shouldChangeSections = false
      
      if (isScrollingDown) {
        // Check if we're at the bottom of the current section
        const isAtBottom = (viewportBottom >= sectionBottom - 50) // 50px tolerance
        shouldChangeSections = isAtBottom && currentSection < sectionIds.length - 1
      } else {
        // Check if we're at the top of the current section
        const isAtTop = (viewportTop <= sectionTop + 50) // 50px tolerance
        shouldChangeSections = isAtTop && currentSection > 0
      }
      
      if (shouldChangeSections) {
        e.preventDefault()
        lastScrollTime = now
        
        const direction = isScrollingDown ? 1 : -1
        const newSection = Math.max(0, Math.min(sectionIds.length - 1, currentSection + direction))
        
        if (newSection !== currentSection) {
          goToSection(newSection, direction > 0 ? 'down' : 'up')
        }
      }
    }

    // Add wheel event listener
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [currentSection, isScrolling, sectionIds])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !isScrolling) {
        e.preventDefault()
        
        const direction = e.key === 'ArrowDown' ? 1 : -1
        const newSection = Math.max(0, Math.min(sectionIds.length - 1, currentSection + direction))
        
        if (newSection !== currentSection) {
          goToSection(newSection, direction > 0 ? 'down' : 'up')
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSection, isScrolling, sectionIds])

  // Track current section based on scroll position (for manual scrolling)
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return

      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const viewportCenter = scrollPosition + windowHeight / 2

      // Find the section that contains the center of the viewport
      for (let i = 0; i < sectionIds.length; i++) {
        const element = document.getElementById(sectionIds[i])
        if (element) {
          const elementTop = element.offsetTop
          const elementBottom = elementTop + element.offsetHeight
          
          // Check if viewport center is within this section
          if (viewportCenter >= elementTop && viewportCenter <= elementBottom) {
            if (currentSection !== i) {
              setCurrentSection(i)
            }
            break
          }
        }
      }
    }

    // Debounce scroll handler
    let scrollTimeout
    const debouncedHandleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 50)
    }

    window.addEventListener('scroll', debouncedHandleScroll)
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [isScrolling, sectionIds, currentSection])

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 transition-all duration-500">
      <Navbar />
      
      {/* Section Indicator */}
      <SectionIndicator 
        currentSection={currentSection}
        totalSections={sectionIds.length}
        onSectionClick={goToSection}
      />
      
      {/* Section Transition */}
      <SectionTransition 
        isVisible={showTransition}
        direction={transitionDirection}
      />
      
      {/* Scroll Hint */}
      <ScrollHint />
      
      <Routes>
        <Route path="/" element={
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Hero />
            <About />
            <Experience />
            <Research />
            <Projects />
            <section id="hobbies" className="section-container relative">
              <Hobbies />
            </section>
            <Contact />
          </motion.main>
        } />
      </Routes>
      <footer id="footer" className="section-container relative">
        <Footer />
      </footer>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
