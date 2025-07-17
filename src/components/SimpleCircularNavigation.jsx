import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { getBoatConfiguration } from '../assets/boat-designs'

// Componente per la navigazione circolare unificata
const SimpleCircularNavigation = ({ 
  currentSection, 
  totalSections, 
  onSectionClick, 
  size = 'md', 
  className = '' 
}) => {
  const prevSectionRef = useRef(currentSection)
  const [showIndicator, setShowIndicator] = useState(true)
  const [isActivelyNavigating, setIsActivelyNavigating] = useState(false)
  const indicatorTimeoutRef = useRef(null)
  const navigationTimeoutRef = useRef(null)
  
  // Dimensioni basate sulla size e responsive
  const dimensions = {
    sm: { 
      radius: 28, 
      boat: 18, 
      container: 74,
      // Versioni mobile più compatte
      mobile: { radius: 24, boat: 16, container: 64 }
    },
    md: { 
      radius: 36, 
      boat: 24, 
      container: 88,
      mobile: { radius: 30, boat: 20, container: 76 }
    },
    lg: { 
      radius: 44, 
      boat: 28, 
      container: 104,
      mobile: { radius: 36, boat: 24, container: 88 }
    }
  }
  
  // Detecta se siamo su mobile (puoi anche usare un hook personalizzato)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const currentDimensions = isMobile ? dimensions[size].mobile : dimensions[size]
  const { radius, boat, container } = currentDimensions
  
  // Calcola gli angoli per le sezioni (sempre 8 posizioni a 45°)
  const allAngles = [0, 45, 90, 135, 180, 225, 270, 315]
  const sectionAngles = allAngles.slice(0, totalSections)
  
  // Calcola il progresso basato sulla sezione corrente
  const currentAngle = sectionAngles[currentSection] || 0
  const progress = currentAngle / 360
  
  // Motion values per animazioni fluide
  const motionProgress = useMotionValue(0)
  const springProgress = useSpring(motionProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
  
  // Calcola l'angolo dalla progress
  const angle = useTransform(springProgress, [0, 1], [0, 360])
  
  // Calcola posizione x,y dal angolo
  const x = useTransform(angle, (a) => Math.cos((a - 90) * Math.PI / 180) * radius)
  const y = useTransform(angle, (a) => Math.sin((a - 90) * Math.PI / 180) * radius)
  
  // Orientamento delle vele basato sull'angolo corrente (valore target, non animato)
  const sailOrientationTarget = Math.round(currentAngle / 45) * 45
  
  // Aggiorna la progress quando cambia la sezione
  useEffect(() => {
    motionProgress.set(progress)
    prevSectionRef.current = currentSection
    
    // Mostra l'indicatore quando cambia sezione
    setShowIndicator(true)
    
    // Indica che siamo attivamente navigando
    setIsActivelyNavigating(true)
    
    // Nascondi l'indicatore dopo 3 secondi su mobile
    if (isMobile) {
      if (indicatorTimeoutRef.current) {
        clearTimeout(indicatorTimeoutRef.current)
      }
      indicatorTimeoutRef.current = setTimeout(() => {
        setShowIndicator(false)
      }, 3000)
    }
    
    // Nascondi lo stato di navigazione attiva dopo 2 secondi
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current)
    }
    navigationTimeoutRef.current = setTimeout(() => {
      setIsActivelyNavigating(false)
    }, 2000)
    
    return () => {
      if (indicatorTimeoutRef.current) {
        clearTimeout(indicatorTimeoutRef.current)
      }
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current)
      }
    }
  }, [currentSection, progress, motionProgress, isMobile])
  
  // Calcola gli indicatori per tutte le posizioni a 45°
  const allSectionMarks = allAngles.map((angle, index) => ({
    angle,
    isActive: index === currentSection,
    isClickable: index < totalSections, // Solo le sezioni esistenti sono clickabili
    index
  }))
  
  // Punti cardinali di riferimento
//   const cardinalAngles = [0, 90, 180, 270]
  const cardinalAngles = []

  const circumference = 2 * Math.PI * radius
  
  // Handler per riattivare la navigazione quando si interagisce con i puntini
  const handleIndicatorInteraction = () => {
    setIsActivelyNavigating(true)
    if (navigationTimeoutRef.current) {
      clearTimeout(navigationTimeoutRef.current)
    }
    navigationTimeoutRef.current = setTimeout(() => {
      setIsActivelyNavigating(false)
    }, 2000)
  }
  
  return (
    <div className={`relative ${className}`} style={{ width: container, height: container }}>
      {/* Cerchio di navigazione */}
      <svg
        width={container}
        height={container}
        className="absolute inset-0"
        viewBox={`0 0 ${container} ${container}`}
      >
        {/* Cerchio di base */}
        <circle
          cx={container / 2}
          cy={container / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        
        {/* Cerchio di glow sottile */}
        <circle
          cx={container / 2}
          cy={container / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.02"
          filter="blur(2px)"
        />
        
        {/* Punti cardinali discreti */}
        {cardinalAngles.map((angle) => {
          const pointX = container / 2 + Math.cos((angle - 90) * Math.PI / 180) * radius
          const pointY = container / 2 + Math.sin((angle - 90) * Math.PI / 180) * radius
          
          return (
            <circle
              key={`cardinal-${angle}`}
              cx={pointX}
              cy={pointY}
              r="0.8"
              fill="currentColor"
              opacity="0.12"
            />
          )
        })}
        
        {/* Arco di progresso */}
        <circle
          cx={container / 2}
          cy={container / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          strokeLinecap="round"
          transform={`rotate(-90 ${container / 2} ${container / 2})`}
          opacity="0.7"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      
      {/* Indicatori delle sezioni esterni - Tutti i punti a 45° */}
      <motion.div
        className="absolute inset-0 transition-opacity duration-700"
        animate={{
          opacity: isActivelyNavigating ? 1 : 0.3
        }}
        onMouseEnter={handleIndicatorInteraction}
        onMouseLeave={() => {}} // Mantiene l'interazione attiva
      >
        {allSectionMarks.map(({ angle, isActive, isClickable, index }) => {
          // Maggiore distanza tra puntini e cerchio per non far toccare la barchetta
          const indicatorRadius = radius + Math.max(18, radius * 0.5)
          const centerX = container / 2 + Math.cos((angle - 90) * Math.PI / 180) * indicatorRadius
          const centerY = container / 2 + Math.sin((angle - 90) * Math.PI / 180) * indicatorRadius
          
          // Dimensioni area cliccabile - aumentata per migliore UX
          const clickableSize = 40
          
          return (
            <motion.button
              key={`section-${index}`}
              onClick={isClickable ? () => {
                onSectionClick(index)
                handleIndicatorInteraction()
              } : undefined}
              className={`absolute group flex items-center justify-center rounded-full z-20 ${
                isClickable ? 'cursor-pointer' : 'cursor-default'
              }`}
              style={{
                left: centerX - clickableSize / 2,     // Centra perfettamente l'area cliccabile
                top: centerY - clickableSize / 2,      // Centra perfettamente l'area cliccabile
                width: clickableSize,
                height: clickableSize,
              }}
              whileHover={isClickable ? { scale: 1.15 } : {}}
              whileTap={isClickable ? { scale: 0.9 } : {}}
              aria-label={isClickable ? `Go to section ${index + 1} (${angle}°)` : `Position ${angle}°`}
              title={isClickable ? `Section ${index + 1}` : `${angle}°`}
              disabled={!isClickable}
              onMouseEnter={handleIndicatorInteraction}
            >
            {/* Punto principale - perfettamente centrato nell'area cliccabile */}
            <motion.div
              className={`rounded-full transition-all duration-300 pointer-events-none ${
                isActive
                  ? 'bg-primary-500 shadow-sm'
                  : isClickable
                  ? 'bg-white/40 dark:bg-neutral-600/40 group-hover:bg-primary-300 dark:group-hover:bg-primary-600'
                  : 'bg-white/20 dark:bg-neutral-600/20'
              }`}
              style={{
                width: isActive ? 8 : 6,
                height: isActive ? 8 : 6,
              }}
              animate={{
                width: isActive ? 8 : 6,
                height: isActive ? 8 : 6,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Alone sottile per l'indicatore attivo */}
            {isActive && (
              <motion.div
                className="absolute rounded-full bg-primary-400/20 pointer-events-none"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.6, 0.1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: 32,
                  height: 32,
                  left: (clickableSize - 32) / 2,  // Centra l'alone di 32px nell'area cliccabile
                  top: (clickableSize - 32) / 2,   // Centra l'alone di 32px nell'area cliccabile
                }}
              />
            )}
          </motion.button>
        )
      })}
      </motion.div>
      
      {/* Barchetta animata */}
      <motion.div
        className="absolute z-20 pointer-events-none"
        style={{
          left: useTransform(x, (xVal) => container / 2 + xVal - boat / 2),
          top: useTransform(y, (yVal) => container / 2 + yVal - boat / 2),
          width: boat,
          height: boat,
          // Rotazione radiale + specchiamento per angoli > 180°
          transform: useTransform(angle, (a) => {
            const normalizedAngle = ((a % 360) + 360) % 360
            const shouldMirror = normalizedAngle > 180
            return `rotate(${a}deg) ${shouldMirror ? 'scaleX(-1)' : ''}`
          }),
          transformOrigin: 'center center',
          // Sottile alone per migliorare la visibilità
          filter: 'drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))'
        }}
      >
        <AdaptiveSailingBoat 
          size={boat}
          sailOrientation={sailOrientationTarget}
          isActive={true}
        />
      </motion.div>
      
      {/* Centro di navigazione - Indicatore angolo corrente */}
      {showIndicator && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <motion.div
            className="bg-white/70 dark:bg-neutral-800/70 backdrop-blur-sm px-1.5 py-0.5 rounded-full text-xs border border-white/20 dark:border-neutral-600/20 pointer-events-none
                       hidden sm:block md:px-2 md:py-1" // Nascosto su mobile, visibile da sm in su
            key={currentAngle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-mono text-xs font-medium">
              {currentAngle}°
            </span>
          </motion.div>
        </div>
      )}
      
      {/* Indicatore mobile compatto - Solo su schermi piccoli */}
      {showIndicator && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none sm:hidden">
          <motion.div
            className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-2 py-1 rounded-md text-xs border border-white/20 dark:border-neutral-600/20"
            key={currentAngle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-mono text-xs font-medium">
              {currentAngle}°
            </span>
          </motion.div>
        </div>
      )}
    </div>
  )
}

// =====================================================
// COMPONENTE BARCHETTA CON CONFIGURAZIONI MODULARI
// =====================================================
// Questo componente renderizza la barchetta usando le configurazioni
// importate da file separati in src/assets/boat-designs/

const AdaptiveSailingBoat = ({ size, sailOrientation, isActive }) => {
  // sailOrientation ora è un valore numerico statico
  const config = getBoatConfiguration(sailOrientation)
  
  // Detect dark mode
  const isDarkMode = document.documentElement.classList.contains('dark')
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className="text-current"
    >
      {/* Scia leggera */}
      <path 
        d={config.elements.wake}
        fill="currentColor" 
        opacity="0.1"
      />
      
      {/* Scafo */}
      <path 
        d={typeof config.elements.hull === 'string' ? config.elements.hull : config.elements.hull.path}
        fill={typeof config.elements.hull === 'string' ? "currentColor" : (isDarkMode && config.elements.hull.darkFill ? config.elements.hull.darkFill : config.elements.hull.fill)}
        stroke={typeof config.elements.hull === 'string' ? "none" : config.elements.hull.stroke}
        strokeWidth={typeof config.elements.hull === 'string' ? 0 : config.elements.hull.strokeWidth}
        opacity={typeof config.elements.hull === 'string' ? "0.95" : config.elements.hull.opacity}
      />
      
      {/* Albero - supporta sia line che path */}
      {config.elements.mast.path ? (
        <path 
          d={config.elements.mast.path}
          fill={config.elements.mast.fill || "none"}
          stroke={config.elements.mast.stroke || "currentColor"}
          strokeWidth={config.elements.mast.strokeWidth || 1.5}
          strokeLinecap={config.elements.mast.strokeLinecap || "butt"}
          opacity={config.elements.mast.opacity || 0.9}
        />
      ) : (
        <line 
          x1={config.elements.mast.x1}
          y1={config.elements.mast.y1}
          x2={config.elements.mast.x2}
          y2={config.elements.mast.y2}
          stroke={config.elements.mast.stroke || "currentColor"}
          strokeWidth={config.elements.mast.strokeWidth || 1.5}
          strokeLinecap={config.elements.mast.strokeLinecap || "butt"}
          opacity={config.elements.mast.opacity || 0.9}
        />
      )}
      
      {/* Vela principale dinamica - supporta sia string che object */}
      <path 
        d={typeof config.elements.mainSail === 'string' ? config.elements.mainSail : config.elements.mainSail.path}
        fill={typeof config.elements.mainSail === 'string' ? "currentColor" : (config.elements.mainSail.fill || "currentColor")}
        stroke={typeof config.elements.mainSail === 'string' ? "none" : (config.elements.mainSail.stroke || "none")}
        strokeWidth={typeof config.elements.mainSail === 'string' ? 0 : (config.elements.mainSail.strokeWidth || 0)}
        opacity={typeof config.elements.mainSail === 'string' ? (0.5 + (config.tension || 0) * 0.2) : (config.elements.mainSail.opacity || 0.6)}
      />
      
      {/* Fiocco dinamico - supporta sia string che object */}
      <path 
        d={typeof config.elements.jib === 'string' ? config.elements.jib : config.elements.jib.path}
        fill={typeof config.elements.jib === 'string' ? "currentColor" : (config.elements.jib.fill || "currentColor")}
        stroke={typeof config.elements.jib === 'string' ? "none" : (config.elements.jib.stroke || "none")}
        strokeWidth={typeof config.elements.jib === 'string' ? 0 : (config.elements.jib.strokeWidth || 0)}
        opacity={typeof config.elements.jib === 'string' ? (0.4 + (config.tension || 0) * 0.15) : (config.elements.jib.opacity || 0.5)}
      />
      
      {/* Spinnaker - solo se presente nella configurazione */}
      {config.elements.spinnaker && config.elements.spinnaker.path && (
        <path 
          d={config.elements.spinnaker.path}
          fill={config.elements.spinnaker.fill || "currentColor"}
          stroke={config.elements.spinnaker.stroke || "none"}
          strokeWidth={config.elements.spinnaker.strokeWidth || 0}
          opacity={config.elements.spinnaker.opacity || 0.7}
        />
      )}
      
      {/* Indicatore di vento dinamico */}
      <path 
        d={config.elements.wind}
        stroke="currentColor" 
        strokeWidth="0.6" 
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

export default SimpleCircularNavigation
