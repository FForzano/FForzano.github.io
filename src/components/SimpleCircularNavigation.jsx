import React, { useEffect, useRef } from 'react'
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
  
  // Dimensioni basate sulla size
  const dimensions = {
    sm: { radius: 28, boat: 16, container: 74 },
    md: { radius: 36, boat: 20, container: 88 },
    lg: { radius: 44, boat: 24, container: 104 }
  }
  
  const { radius, boat, container } = dimensions[size]
  
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
  
  // Orientamento delle vele basato sull'angolo corrente
  const sailOrientation = useTransform(angle, (a) => {
    const normalizedAngle = ((a % 360) + 360) % 360
    return Math.round(normalizedAngle / 45) * 45
  })
  
  // Aggiorna la progress quando cambia la sezione
  useEffect(() => {
    motionProgress.set(progress)
    prevSectionRef.current = currentSection
  }, [currentSection, progress, motionProgress])
  
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
      {allSectionMarks.map(({ angle, isActive, isClickable, index }) => {
        const indicatorRadius = radius + 16
        const indicatorX = container / 2 + Math.cos((angle - 90) * Math.PI / 180) * indicatorRadius
        const indicatorY = container / 2 + Math.sin((angle - 90) * Math.PI / 180) * indicatorRadius
        
        return (
          <motion.button
            key={`section-${index}`}
            onClick={isClickable ? () => onSectionClick(index) : undefined}
            className={`absolute group flex items-center justify-center ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
            style={{
              left: indicatorX - 12,
              top: indicatorY - 12,
              width: 24,
              height: 24,
            }}
            whileHover={isClickable ? { scale: 1.3 } : {}}
            whileTap={isClickable ? { scale: 0.8 } : {}}
            aria-label={isClickable ? `Go to section ${index + 1} (${angle}°)` : `Position ${angle}°`}
            title={isClickable ? `Section ${index + 1}` : `${angle}°`}
            disabled={!isClickable}
          >
            {/* Punto principale - tutti visibili ma solo alcuni clickabili */}
            <motion.div
              className={`absolute rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-primary-500 shadow-sm'
                  : isClickable
                  ? 'bg-white/40 dark:bg-neutral-600/40 group-hover:bg-primary-300 dark:group-hover:bg-primary-600'
                  : 'bg-white/20 dark:bg-neutral-600/20'
              }`}
              style={{
                width: isActive ? 8 : 6,
                height: isActive ? 8 : 6,
                left: isActive ? 8 : 9,
                top: isActive ? 8 : 9,
              }}
              animate={{
                width: isActive ? 8 : 6,
                height: isActive ? 8 : 6,
                left: isActive ? 8 : 9,
                top: isActive ? 8 : 9,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Alone sottile per l'indicatore attivo */}
            {isActive && (
              <motion.div
                className="absolute rounded-full bg-primary-400/20"
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.6, 0.1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  width: 24,
                  height: 24,
                  left: 0,
                  top: 0,
                }}
              />
            )}
          </motion.button>
        )
      })}
      
      {/* Barchetta animata */}
      <motion.div
        className="absolute z-10 pointer-events-none"
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
          transformOrigin: 'center center'
        }}
      >
        <AdaptiveSailingBoat 
          size={boat}
          sailOrientation={sailOrientation}
          isActive={true}
        />
      </motion.div>
      
      {/* Centro di navigazione - Indicatore angolo corrente */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs border border-white/20 dark:border-neutral-600/20"
          key={currentAngle}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-mono text-xs font-medium">
            {currentAngle}°
          </span>
        </motion.div>
      </div>
    </div>
  )
}

// =====================================================
// COMPONENTE BARCHETTA CON CONFIGURAZIONI MODULARI
// =====================================================
// Questo componente renderizza la barchetta usando le configurazioni
// importate da file separati in src/assets/boat-designs/

const AdaptiveSailingBoat = ({ size, sailOrientation, isActive }) => {
  const currentOrientation = useTransform(sailOrientation, (o) => o)
  const config = getBoatConfiguration(currentOrientation.get())
  
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
