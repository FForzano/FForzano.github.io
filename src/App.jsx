import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </motion.main>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
