// =====================================================
// CONFIGURAZIONI BARCHETTA - SISTEMA MODULARE
// =====================================================
// Importa tutte le configurazioni delle barchette da file separati
// Ogni file contiene la configurazione SVG per una specifica andatura

import { PruaAlVento } from './prua-al-vento.js'
import { Bolina } from './bolina.js'
import { Traverso } from './traverso.js'
import { LascoLargo } from './lasco-largo.js'
import { FilDiRuota } from './fil-di-ruota.js'

// =====================================================
// MAPPA COMPLETA DELLE CONFIGURAZIONI
// =====================================================
// Ogni angolo (0°, 45°, 90°, etc.) è mappato alla sua configurazione
// Per personalizzare una barchetta, modifica il file corrispondente

export const BOAT_CONFIGURATIONS = {
  // Andature principali
  0: PruaAlVento,      // Prua a vento - Contro vento
  45: Bolina,            // Bolina normale
  90: Traverso,          // Traverso - Vento al lato
  135: LascoLargo,       // Lasco largo
  180: FilDiRuota,       // Fil di ruota - Vento in poppa
  
  // Andature opposte (stesso design, lato opposto)
  225: {
    ...LascoLargo,
    name: "Lasco largo (opposto)",
    description: "Navigazione di lasco largo, vele lascate (lato opposto)"
  },
  
  270: {
    ...Traverso,
    name: "Traverso (opposto)",
    description: "Navigazione al traverso, vele semi-lascare (lato opposto)"
  },
  
  315: {
    ...Bolina,
    name: "Bolina (opposto)",
    description: "Navigazione di bolina, vele semi-cazzate (lato opposto)"
  }
}

// =====================================================
// FUNZIONI HELPER
// =====================================================

/**
 * Ottiene la configurazione per un angolo specifico
 * @param {number} angle - Angolo in gradi (0-360)
 * @returns {Object} Configurazione della barchetta
 */
export const getBoatConfiguration = (angle) => {
  const normalizedAngle = ((angle % 360) + 360) % 360
  const snapAngle = Math.round(normalizedAngle / 45) * 45
  return BOAT_CONFIGURATIONS[snapAngle] || BOAT_CONFIGURATIONS[0]
}

/**
 * Ottiene tutte le configurazioni disponibili
 * @returns {Object} Mappa completa delle configurazioni
 */
export const getAllBoatConfigurations = () => {
  return BOAT_CONFIGURATIONS
}

/**
 * Ottiene la lista degli angoli supportati
 * @returns {Array<number>} Array degli angoli in gradi
 */
export const getSupportedAngles = () => {
  return Object.keys(BOAT_CONFIGURATIONS).map(Number).sort((a, b) => a - b)
}

// =====================================================
// VALIDAZIONE CONFIGURAZIONI
// =====================================================

/**
 * Valida che una configurazione abbia tutti gli elementi necessari
 * @param {Object} config - Configurazione da validare
 * @returns {boolean} True se valida
 */
export const validateBoatConfiguration = (config) => {
  const requiredElements = ['hull', 'mast', 'mainSail', 'jib', 'wind', 'wake']
  
  if (!config || !config.elements) return false
  
  return requiredElements.every(element => 
    config.elements[element] !== undefined
  )
}

// Valida tutte le configurazioni all'avvio
const validateAllConfigurations = () => {
  const invalid = []
  
  Object.entries(BOAT_CONFIGURATIONS).forEach(([angle, config]) => {
    if (!validateBoatConfiguration(config)) {
      invalid.push(angle)
    }
  })
  
  if (invalid.length > 0) {
    console.warn(`Invalid boat configurations for angles: ${invalid.join(', ')}`)
  }
}

// Esegui validazione in development
if (process.env.NODE_ENV === 'development') {
  validateAllConfigurations()
}

export default BOAT_CONFIGURATIONS
