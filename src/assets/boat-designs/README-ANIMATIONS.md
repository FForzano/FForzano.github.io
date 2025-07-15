# Sistema di Animazioni Modulari - Configurazioni Barchette

Questo sistema permette di configurare facilmente le animazioni per ogni elemento della barca in base all'andatura nautica.

## Struttura delle Animazioni

### Proprietà di Animazione Supportate

#### Opacity (Opacità)
```javascript
opacity: {
  idle: [0.05, 0.15, 0.05],     // Array per stato inattivo [start, peak, end]
  active: [0.1, 0.3, 0.1]       // Array per stato attivo [start, peak, end]
}
// OPPURE
opacity: {
  base: 0.5,                    // Valore base fisso
  variation: 0.3                // Variazione da applicare (+/-)
}
```

#### Scale (Scala)
```javascript
scale: {
  idle: 1,                      // Scala per stato inattivo
  active: [1, 1.15, 1]          // Array per stato attivo [start, peak, end]
}
```

#### Parametri Comuni
- `duration`: Durata dell'animazione in secondi
- `repeat`: Numero di ripetizioni (`Infinity` per infinito)
- `ease`: Tipo di easing (`"easeInOut"`, `"easeIn"`, `"easeOut"`, `"linear"`)

## Elementi Animabili

### wake (Scia)
La scia della barca - rappresenta la velocità e l'energia del movimento
```javascript
wake: {
  opacity: {
    idle: [0.05, 0.15, 0.05],
    active: [0.1, 0.3, 0.1]
  },
  scale: {
    idle: 1,
    active: [1, 1.15, 1]
  },
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut"
}
```

### mainSail (Vela Principale)
La vela principale - riflette la tensione del vento
```javascript
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
  ease: "easeInOut"
}
```

### jib (Fiocco)
Il fiocco - seconda vela, movimenti coordinati con la principale
```javascript
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
  ease: "easeInOut"
}
```

### wind (Indicatore Vento)
L'indicatore del vento - mostra direzione e intensità
```javascript
wind: {
  opacity: {
    idle: [0.4, 0.8, 0.4],
    active: [0.5, 0.9, 0.5]
  },
  scale: {
    idle: 1,
    active: [1, 1.25, 1]
  },
  duration: 2.0,
  repeat: Infinity,
  ease: "easeInOut"
}
```

### hull (Scafo)
Lo scafo della barca - movimento base dell'imbarcazione
```javascript
hull: {
  scale: {
    idle: 1,
    active: [1, 1.02, 1]
  },
  opacity: {
    base: 0.95,
    variation: 0.02
  },
  duration: 4.0,
  repeat: Infinity,
  ease: "easeInOut"
}
```

### mast (Albero)
L'albero della barca - elemento strutturale, movimento minimo
```javascript
mast: {
  opacity: {
    base: 0.9,
    variation: 0.05
  },
  scale: {
    idle: 1,
    active: [1, 1.008, 1]
  },
  duration: 5.0,
  repeat: Infinity,
  ease: "easeInOut"
}
```

## Personalizzazione per Andatura

### Bolina Stretta (0°) - Contro Vento
- Animazioni più contenute
- Tensione elevata (tension: 0.9)
- Durate più lunghe per stabilità

### Traverso (90°) - Vento Laterale
- Animazioni bilanciate
- Tensione media (tension: 0.6)
- Movimenti moderati

### Lasco Largo (135°) - Vento Favorevole
- Animazioni più pronunciate
- Tensione bassa (tension: 0.4)
- Scie più intense

### Fil di Ruota (180°) - Vento in Poppa
- Animazioni molto attive
- Tensione minima (tension: 0.2)
- Massima intensità di movimento

## Esempi di Personalizzazione

### Animazione più Intensa
```javascript
wake: {
  opacity: {
    idle: [0.1, 0.3, 0.1],        // Più visibile
    active: [0.2, 0.5, 0.2]       // Molto più visibile
  },
  scale: {
    idle: 1,
    active: [1, 1.3, 1]           // Scala maggiore
  },
  duration: 1.5,                  // Più veloce
  repeat: Infinity,
  ease: "easeInOut"
}
```

### Animazione più Delicata
```javascript
mainSail: {
  opacity: {
    base: 0.8,
    variation: 0.05                // Variazione minima
  },
  scale: {
    idle: 1,
    active: [1, 1.01, 1]           // Scala minima
  },
  duration: 6.0,                   // Più lenta
  repeat: Infinity,
  ease: "easeInOut"
}
```

### Animazione con Timing Diverso
```javascript
jib: {
  opacity: {
    idle: [0.3, 0.7, 0.3],
    active: [0.4, 0.8, 0.4]
  },
  scale: {
    idle: 1,
    active: [1, 1.05, 1]
  },
  duration: 4.2,                   // Timing specifico
  repeat: Infinity,
  ease: "easeOut"                  // Easing diverso
}
```

## Utilizzo nel Codice

Il sistema è integrato automaticamente nel componente `SimpleCircularNavigation.jsx`:

```javascript
import { getBoatConfiguration } from './index.js'

// Ottieni configurazione per angolo specifico
const config = getBoatConfiguration(45)

// Le animazioni vengono convertite automaticamente in props per framer-motion
const animationProps = getAnimationProps('wake')
```

## Debug e Validazione

### Validazione Automatica
In modalità development, tutte le configurazioni sono validate automaticamente:
- Elementi SVG richiesti
- Struttura delle animazioni
- Parametri di durata e easing validi

### Console Warnings
Configurazioni non valide vengono mostrate nella console con dettagli specifici.

## Best Practices

1. **Coerenza delle Durate**: Usa durate simili per elementi correlati
2. **Variazioni Graduali**: Aumenta gradualmente l'intensità con il vento
3. **Easing Appropriato**: Usa `easeInOut` per movimenti naturali
4. **Scale Moderate**: Evita scale troppo grandi che possono distrarre
5. **Opacità Bilanciata**: Mantieni sempre visibilità degli elementi essenziali

## Configurazioni Attuali

- **bolina-stretta.js**: Animazioni contenute, alta tensione
- **bolina.js**: Animazioni moderate, tensione media-alta
- **traverso.js**: Animazioni bilanciate, tensione media
- **lasco-largo.js**: Animazioni pronunciate, tensione bassa
- **fil-di-ruota.js**: Animazioni intense, tensione minima

Le configurazioni opposte (225°, 270°, 315°) ereditano automaticamente le animazioni dalle configurazioni principali.
