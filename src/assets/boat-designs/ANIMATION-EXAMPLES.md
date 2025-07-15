# Esempi di Personalizzazione Animazioni Modulari

## Esempio 1: Animazione "Mare Mosso"
Per condizioni di vento forte, aggiungi più movimento:

```javascript
// In lasco-largo.js
wake: {
  opacity: {
    idle: [0.08, 0.25, 0.08],
    active: [0.15, 0.4, 0.15]
  },
  scale: {
    idle: 1,
    active: [1, 1.25, 1]
  },
  duration: 1.8,                 // Più veloce
  repeat: Infinity,
  ease: "easeInOut"
},
mainSail: {
  opacity: {
    base: 0.4,
    variation: 0.4               // Maggiore variazione
  },
  scale: {
    idle: 1,
    active: [1, 1.12, 1]
  },
  duration: 2.5,                 // Più veloce
  repeat: Infinity,
  ease: "easeInOut"
}
```

## Esempio 2: Animazione "Calma Piatta"
Per condizioni di vento leggero, riduci il movimento:

```javascript
// In bolina-stretta.js
wake: {
  opacity: {
    idle: [0.01, 0.03, 0.01],
    active: [0.02, 0.05, 0.02]
  },
  scale: {
    idle: 1,
    active: [1, 1.005, 1]
  },
  duration: 5.0,                 // Più lento
  repeat: Infinity,
  ease: "easeInOut"
},
mainSail: {
  opacity: {
    base: 0.8,
    variation: 0.05              // Variazione minima
  },
  scale: {
    idle: 1,
    active: [1, 1.01, 1]
  },
  duration: 6.0,                 // Più lento
  repeat: Infinity,
  ease: "easeInOut"
}
```

## Esempio 3: Animazione "Regata"
Per competizioni, aggiungi dinamismo:

```javascript
// In traverso.js
wake: {
  opacity: {
    idle: [0.1, 0.3, 0.1],
    active: [0.2, 0.5, 0.2]
  },
  scale: {
    idle: 1,
    active: [1, 1.2, 1]
  },
  duration: 2.0,
  repeat: Infinity,
  ease: "easeOut"                // Easing più aggressivo
},
wind: {
  opacity: {
    idle: [0.6, 0.9, 0.6],
    active: [0.7, 1.0, 0.7]
  },
  scale: {
    idle: 1,
    active: [1, 1.3, 1]
  },
  duration: 1.5,                 // Molto veloce
  repeat: Infinity,
  ease: "easeOut"
}
```

## Esempio 4: Animazione "Crepuscolo"
Per condizioni serali, usa tonalità più soft:

```javascript
// In qualsiasi configurazione
hull: {
  scale: {
    idle: 1,
    active: [1, 1.008, 1]
  },
  opacity: {
    base: 0.85,                  // Meno intenso
    variation: 0.05
  },
  duration: 8.0,                 // Molto lento
  repeat: Infinity,
  ease: "easeInOut"
},
mast: {
  opacity: {
    base: 0.7,                   // Più tenue
    variation: 0.1
  },
  scale: {
    idle: 1,
    active: [1, 1.003, 1]
  },
  duration: 10.0,                // Lentissimo
  repeat: Infinity,
  ease: "easeInOut"
}
```

## Esempio 5: Nuova Proprietà di Animazione
Aggiungi supporto per rotazione:

```javascript
// 1. Aggiungi nel file di configurazione
wind: {
  opacity: {
    idle: [0.4, 0.8, 0.4],
    active: [0.5, 0.9, 0.5]
  },
  scale: {
    idle: 1,
    active: [1, 1.25, 1]
  },
  rotation: {                    // Nuova proprietà
    idle: 0,
    active: [0, 5, 0]            // Rotazione di 5 gradi
  },
  duration: 2.0,
  repeat: Infinity,
  ease: "easeInOut"
}
```

```javascript
// 2. Aggiorna la funzione getAnimationProps nel componente
const getAnimationProps = (elementName) => {
  const animConfig = config.animations?.[elementName]
  if (!animConfig) return {}
  
  const state = isActive ? 'active' : 'idle'
  const animate = {}
  
  // Gestisci opacity
  if (animConfig.opacity) {
    // ... logica esistente
  }
  
  // Gestisci scale
  if (animConfig.scale) {
    // ... logica esistente
  }
  
  // Gestisci rotation (nuova)
  if (animConfig.rotation) {
    if (typeof animConfig.rotation === 'object') {
      if (animConfig.rotation[state]) {
        animate.rotate = animConfig.rotation[state]
      }
    } else {
      animate.rotate = animConfig.rotation
    }
  }
  
  return { animate, transition }
}
```

## Esempio 6: Animazione Condizionale
Animazioni diverse in base alle condizioni:

```javascript
// In index.js, aggiungi helper per condizioni
export const getBoatConfigurationWithConditions = (angle, conditions = {}) => {
  const baseConfig = getBoatConfiguration(angle)
  
  // Condizioni meteo
  if (conditions.weather === 'stormy') {
    return {
      ...baseConfig,
      animations: {
        ...baseConfig.animations,
        wake: {
          ...baseConfig.animations.wake,
          duration: baseConfig.animations.wake.duration * 0.5, // Più veloce
          scale: {
            idle: 1,
            active: [1, 1.3, 1] // Più intenso
          }
        }
      }
    }
  }
  
  // Condizioni di regata
  if (conditions.racing) {
    return {
      ...baseConfig,
      animations: {
        ...baseConfig.animations,
        wind: {
          ...baseConfig.animations.wind,
          duration: 1.0, // Molto veloce
          scale: {
            idle: 1,
            active: [1, 1.4, 1] // Molto intenso
          }
        }
      }
    }
  }
  
  return baseConfig
}
```

## Esempio 7: Animazione Sequenziale
Animazioni che si susseguono in sequenza:

```javascript
// Usa delay per creare sequenze
mainSail: {
  opacity: {
    base: 0.5,
    variation: 0.3
  },
  scale: {
    idle: 1,
    active: [1, 1.08, 1]
  },
  duration: 3.5,
  repeat: Infinity,
  ease: "easeInOut",
  delay: 0                       // Inizia subito
},
jib: {
  opacity: {
    base: 0.4,
    variation: 0.25
  },
  scale: {
    idle: 1,
    active: [1, 1.1, 1]
  },
  duration: 3.0,
  repeat: Infinity,
  ease: "easeInOut",
  delay: 0.5                     // Inizia dopo 500ms
}
```

## Test delle Animazioni

```javascript
// Aggiungi in un file di test
describe('Animation System', () => {
  test('should handle custom animation properties', () => {
    const config = getBoatConfiguration(90)
    
    expect(config.animations.wake).toHaveProperty('opacity')
    expect(config.animations.wake).toHaveProperty('scale')
    expect(config.animations.wake).toHaveProperty('duration')
    expect(config.animations.wake).toHaveProperty('ease')
  })
  
  test('should validate animation structure', () => {
    const config = getBoatConfiguration(45)
    
    Object.keys(config.animations).forEach(elementName => {
      const animation = config.animations[elementName]
      expect(animation).toHaveProperty('duration')
      expect(typeof animation.duration).toBe('number')
      expect(animation.duration).toBeGreaterThan(0)
    })
  })
})
```

Questi esempi mostrano la flessibilità del sistema di animazioni modulari, permettendo personalizzazioni avanzate mantenendo la semplicità d'uso.
