# Guida Completa alla Personalizzazione della Barchetta

## Panoramica

Questo documento fornisce una guida completa per personalizzare le immagini della barchetta e le relative animazioni nel sistema di navigazione circolare. Il sistema è completamente modulare e permette di customizzare ogni elemento della barca per ogni andatura di navigazione.

## Struttura del Sistema

### Organizzazione dei File

```
src/assets/boat-designs/
├── index.js              # Mapping centrale e funzioni helper
├── bolina-stretta.js     # 0° - Bolina stretta (contro vento)
├── bolina.js             # 45° - Bolina normale
├── traverso.js           # 90° - Traverso (vento al lato)
├── lasco-largo.js        # 135° - Lasco largo
└── fil-di-ruota.js       # 180° - Fil di ruota (vento in poppa)
```

### Angoli di Navigazione

Il sistema supporta 8 angoli di navigazione a 45° di distanza:
- **0°** - Bolina stretta (contro vento)
- **45°** - Bolina normale
- **90°** - Traverso
- **135°** - Lasco largo
- **180°** - Fil di ruota (vento in poppa)
- **225°** - Lasco largo (lato opposto)
- **270°** - Traverso (lato opposto)
- **315°** - Bolina (lato opposto)

*Nota: Gli angoli opposti (225°, 270°, 315°) ereditano automaticamente le configurazioni e animazioni dai corrispondenti angoli principali.*

## Struttura di una Configurazione

### Configurazione Base

```javascript
export const ExampleConfig = {
  name: "Nome dell'andatura",
  description: "Descrizione dell'andatura",
  tension: 0.5, // Tensione delle vele (0.0 - 1.0)
  
  // Elementi SVG della barca
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L22 11 L22 11 Z",
    jib: "M12 4 L12 12 L4 8 L4 6 Z",
    wind: "M12 2 L17 7 M15 5 L17 7 L15 9",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  },
  
  // Animazioni modulari per ogni elemento
  animations: {
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
    },
    // ... altre animazioni
  }
}
```

### Elementi SVG

#### Sistema di Coordinate

La barchetta usa un sistema di coordinate SVG 24x24:
- **Centro**: (12, 12)
- **Parte alta**: y = 0-12
- **Parte bassa**: y = 12-24
- **Sinistra**: x = 0-12
- **Destra**: x = 12-24

#### Elementi Personalizzabili

##### hull (Scafo)
```javascript
hull: "M12 20 L10 16 L14 16 Z"
```
- **Forma**: Triangolo che rappresenta lo scafo
- **Posizione**: Base della barca
- **Personalizzazione**: Puoi creare forme più complesse

##### mast (Albero)
```javascript
mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 }
```
- **Tipo**: Linea dal centro dello scafo verso l'alto
- **Proprietà**: Coordinate x1,y1 (base) e x2,y2 (cima), spessore
- **Personalizzazione**: Altezza, posizione, spessore

##### mainSail (Vela Principale)
```javascript
mainSail: "M12 4 L12 16 L22 11 L22 11 Z"
```
- **Forma**: Poligono che rappresenta la vela principale
- **Posizione**: Attaccata all'albero
- **Personalizzazione**: Tensione e forma riflettono l'andatura

##### jib (Fiocco)
```javascript
jib: "M12 4 L12 12 L4 8 L4 6 Z"
```
- **Forma**: Vela triangolare davanti all'albero
- **Posizione**: Prua della barca
- **Personalizzazione**: Segue la logica della vela principale

##### wind (Indicatore di Vento)
```javascript
wind: "M12 2 L17 7 M15 5 L17 7 L15 9"
```
- **Tipo**: Frecce o linee che mostrano la direzione del vento
- **Posizione**: Sopra la barca
- **Personalizzazione**: Direzione specifica per ogni andatura

##### wake (Scia)
```javascript
wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
```
- **Forma**: Onde curve dietro la barca
- **Posizione**: Dietro lo scafo
- **Personalizzazione**: Intensità varia con la velocità

### Proprietà Tension

```javascript
tension: 0.8 // Range: 0.0 - 1.0
```
- **0.0**: Vele molto lasche (vento in poppa)
- **0.5**: Vele moderate (traverso)
- **1.0**: Vele molto tese (bolina stretta)

Influisce sull'opacità base delle vele nel rendering.

## Sistema di Animazioni Modulari

### Proprietà di Animazione

#### opacity (Opacità)

**Metodo 1: idle/active**
```javascript
opacity: {
  idle: [0.05, 0.15, 0.05],    // [start, peak, end] per stato inattivo
  active: [0.1, 0.3, 0.1]      // [start, peak, end] per stato attivo
}
```

**Metodo 2: base/variation**
```javascript
opacity: {
  base: 0.5,                   // Opacità base
  variation: 0.3               // Variazione applicata (+/-)
}
```

#### scale (Scala)

```javascript
scale: {
  idle: 1,                     // Scala fissa per stato inattivo
  active: [1, 1.15, 1]         // [start, peak, end] per stato attivo
}
```

#### Parametri Comuni

```javascript
duration: 2.5,                 // Durata in secondi
repeat: Infinity,              // Ripetizioni (numero o Infinity)
ease: "easeInOut"             // Tipo di easing
```

**Tipi di easing supportati:**
- `"easeInOut"` - Accelerazione graduale
- `"easeIn"` - Accelerazione iniziale
- `"easeOut"` - Decelerazione finale
- `"linear"` - Velocità costante

### Configurazione per Andatura

#### Bolina Stretta (0°) - Contro Vento
```javascript
// Animazioni contenute, durate lunghe
wake: {
  opacity: { idle: [0.03, 0.08, 0.03], active: [0.05, 0.12, 0.05] },
  scale: { idle: 1, active: [1, 1.05, 1] },
  duration: 3.0
}
```

#### Traverso (90°) - Vento Laterale
```javascript
// Animazioni bilanciate
wake: {
  opacity: { idle: [0.06, 0.16, 0.06], active: [0.08, 0.22, 0.08] },
  scale: { idle: 1, active: [1, 1.1, 1] },
  duration: 2.3
}
```

#### Fil di Ruota (180°) - Vento in Poppa
```javascript
// Animazioni intense, durate brevi
wake: {
  opacity: { idle: [0.1, 0.25, 0.1], active: [0.15, 0.35, 0.15] },
  scale: { idle: 1, active: [1, 1.2, 1] },
  duration: 2.0
}
```

## Esempi Pratici di Personalizzazione

### Esempio 1: Scafo Dettagliato

```javascript
// Scafo con dettagli aggiuntivi
hull: "M12 20 L10 16 L11 15 L13 15 L14 16 Z M11 15 L13 15 L13 14 L11 14 Z"
```

### Esempio 2: Vela con Curve

```javascript
// Vela principale con bordi curvi
mainSail: "M12 4 L12 16 L18 14 C20 12 20 8 18 7 L12 4 Z"
```

### Esempio 3: Albero con Pennone

```javascript
// Albero con pennone orizzontale
mast: { 
  x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5,
  boom: "M8 12 L16 12" // Pennone
}
```

### Esempio 4: Animazioni Intense (Mare Mosso)

```javascript
animations: {
  wake: {
    opacity: {
      idle: [0.1, 0.3, 0.1],
      active: [0.2, 0.5, 0.2]
    },
    scale: {
      idle: 1,
      active: [1, 1.25, 1]
    },
    duration: 1.8,                // Più veloce
    repeat: Infinity,
    ease: "easeInOut"
  },
  mainSail: {
    opacity: {
      base: 0.4,
      variation: 0.4              // Maggiore variazione
    },
    scale: {
      idle: 1,
      active: [1, 1.12, 1]
    },
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut"
  },
  wind: {
    opacity: {
      idle: [0.3, 0.7, 0.3],
      active: [0.4, 0.8, 0.4]
    },
    scale: {
      idle: 1,
      active: [1, 1.3, 1]
    },
    duration: 1.5,                // Molto veloce
    repeat: Infinity,
    ease: "easeOut"               // Easing aggressivo
  }
}
```

### Esempio 5: Animazioni Delicate (Calma Piatta)

```javascript
animations: {
  wake: {
    opacity: {
      idle: [0.01, 0.03, 0.01],
      active: [0.02, 0.05, 0.02]
    },
    scale: {
      idle: 1,
      active: [1, 1.005, 1]
    },
    duration: 5.0,                // Più lento
    repeat: Infinity,
    ease: "easeInOut"
  },
  mainSail: {
    opacity: {
      base: 0.8,
      variation: 0.05             // Variazione minima
    },
    scale: {
      idle: 1,
      active: [1, 1.01, 1]
    },
    duration: 6.0,
    repeat: Infinity,
    ease: "easeInOut"
  }
}
```

## Workflow di Personalizzazione

### Step 1: Progettazione
1. Disegna la barchetta su carta o in un editor SVG
2. Identifica i punti chiave e le coordinate
3. Pianifica come le vele cambiano per ogni andatura
4. Decidi le caratteristiche delle animazioni

### Step 2: Implementazione
1. **Apri il file specifico** per l'andatura (es. `src/assets/boat-designs/bolina.js`)
2. **Modifica gli elementi SVG** nell'oggetto `elements`
3. **Configura le animazioni** nell'oggetto `animations`
4. **Salva il file** - le modifiche sono caricate automaticamente

### Step 3: Test
1. **Avvia il server**: `npm run dev`
2. **Testa la navigazione** tra le sezioni
3. **Osserva le animazioni** per lo stato attivo/inattivo
4. **Rifinisci** i dettagli fino al risultato desiderato

### Step 4: Validazione
1. **Controlla la console** per errori di validazione
2. **Esegui i test**: `npm run test:run`
3. **Verifica il build**: `npm run build`

## Strumenti di Sviluppo

### Validazione Automatica
```javascript
// Sistema di validazione integrato
if (process.env.NODE_ENV === 'development') {
  validateAllConfigurations()
}
```

### Funzioni Helper
```javascript
// Ottieni configurazione per angolo
const config = getBoatConfiguration(45)

// Ottieni tutti gli angoli supportati
const angles = getSupportedAngles()

// Valida una configurazione
const isValid = validateBoatConfiguration(config)
```

### Console Debugging
- Configurazioni non valide mostrano warning dettagliati
- Elementi mancanti vengono identificati automaticamente
- Animazioni malformate vengono segnalate

## Tecnologie Utilizzate

### Framer Motion
- **Animazioni hardware-accelerated** per performance ottimali
- **Keyframes** per animazioni complesse
- **Easing functions** per movimenti naturali

### SVG
- **Scalabilità** perfetta per tutti i dispositivi
- **Leggerezza** per performance ottimali
- **Personalizzabilità** completa delle forme

### Modularità
- **Separazione delle responsabilità** per ogni andatura
- **Riusabilità** delle configurazioni
- **Estensibilità** per future funzionalità

## Personalizzazioni Avanzate

### Animazioni Sequenziali
```javascript
// Animazioni che si susseguono
mainSail: {
  // ... configurazione base
  delay: 0        // Inizia subito
},
jib: {
  // ... configurazione base
  delay: 0.5      // Inizia dopo 500ms
}
```

### Animazioni Condizionali
```javascript
// Funzione helper per condizioni
export const getBoatConfigurationWithConditions = (angle, conditions = {}) => {
  const baseConfig = getBoatConfiguration(angle)
  
  if (conditions.weather === 'stormy') {
    return {
      ...baseConfig,
      animations: {
        ...baseConfig.animations,
        wake: {
          ...baseConfig.animations.wake,
          duration: baseConfig.animations.wake.duration * 0.5
        }
      }
    }
  }
  
  return baseConfig
}
```

### Nuove Proprietà di Animazione
```javascript
// Esempio: aggiunta di rotazione
wind: {
  opacity: { idle: [0.4, 0.8, 0.4], active: [0.5, 0.9, 0.5] },
  scale: { idle: 1, active: [1, 1.25, 1] },
  rotation: { idle: 0, active: [0, 5, 0] }, // Nuova proprietà
  duration: 2.0,
  repeat: Infinity,
  ease: "easeInOut"
}
```

## Best Practices

### 1. Coerenza delle Animazioni
- Usa durate simili per elementi correlati
- Mantieni un timing coerente tra le andature
- Usa lo stesso tipo di easing per elementi simili

### 2. Realismo Nautico
- Aumenta gradualmente l'intensità con il vento
- Rifletti la fisica della navigazione
- Considera la relazione tra tensione e movimento

### 3. Performance
- Evita animazioni troppo complesse
- Usa scale moderate (< 1.5)
- Limita il numero di elementi animati contemporaneamente

### 4. Accessibilità
- Mantieni sempre la visibilità degli elementi essenziali
- Usa contrasti sufficienti per tutti gli stati
- Considera utenti con sensibilità alle animazioni

### 5. Manutenibilità
- Commenta configurazioni complesse
- Usa nomi descrittivi per le variabili
- Documenta modifiche significative

## Troubleshooting

### Problemi Comuni

**Animazioni non visibili**
- Verifica che `duration` sia > 0
- Controlla che `repeat` sia impostato
- Assicurati che i valori di opacity siano validi

**Errori di validazione**
- Controlla che tutti gli elementi richiesti siano presenti
- Verifica la sintassi dei path SVG
- Controlla che le proprietà di animazione siano corrette

**Performance lente**
- Riduci la complessità delle animazioni
- Aumenta la durata per animazioni più fluide
- Limita il numero di elementi animati

### Debug Avanzato

```javascript
// Abilita debug dettagliato
const DEBUG = true
if (DEBUG) {
  console.log('Configurazione corrente:', config)
  console.log('Animazioni attive:', Object.keys(config.animations))
}
```

## Conclusione

Il sistema di animazioni modulari offre un controllo completo sulla personalizzazione della barchetta. Ogni elemento può essere modificato visivamente e animato in modo specifico per ogni andatura, creando un'esperienza visiva ricca e realistica.

La struttura modulare garantisce:
- **Facilità di personalizzazione** per utenti di ogni livello
- **Scalabilità** per funzionalità future
- **Manutenibilità** del codice nel tempo
- **Performance ottimali** su tutti i dispositivi

Utilizza questa guida come riferimento per creare le tue personalizzazioni uniche e portare la navigazione circolare al livello successivo!
