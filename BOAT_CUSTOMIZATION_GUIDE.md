# Guida alla Personalizzazione della Barchetta

## Panoramica
Questo documento spiega come personalizzare facilmente le immagini della barchetta e le loro animazioni per ogni andatura di navigazione nel sistema di navigazione circolare.

## Nuove Funzionalità: Animazioni Modulari
Il sistema ora supporta animazioni completamente modulari e personalizzabili per ogni elemento della barca. Ogni andatura può avere animazioni uniche che riflettono le condizioni di navigazione specifiche.

### Vantaggi delle Animazioni Modulari
- **Personalizzazione Totale**: Ogni elemento ha animazioni specifiche
- **Realismo**: Animazioni che riflettono le condizioni di vento
- **Flessibilità**: Facile modificare intensità e durata
- **Estensibilità**: Supporto per nuove proprietà di animazione
- **Debugging**: Validazione automatica delle configurazioni

## Struttura del Codice

### File di Configurazione
Le configurazioni delle barchette sono ora organizzate in file separati nella cartella `src/assets/boat-designs/`:

```
src/assets/boat-designs/
├── index.js              # File principale con mapping e funzioni helper
├── bolina-stretta.js     # Configurazione per 0° (bolina stretta)
├── bolina.js             # Configurazione per 45° (bolina)
├── traverso.js           # Configurazione per 90° (traverso)
├── lasco-largo.js        # Configurazione per 135° (lasco largo)
└── fil-di-ruota.js       # Configurazione per 180° (fil di ruota)
```

### Vantaggi della Struttura Modulare
- **Organizzazione**: Ogni andatura ha il suo file dedicato
- **Manutenibilità**: Facile trovare e modificare una specifica configurazione
- **Riusabilità**: Le configurazioni possono essere importate in altri componenti
- **Versioning**: Tracciare modifiche specifiche per ogni andatura
- **Collaborazione**: Più persone possono lavorare su andature diverse

### Angoli di Navigazione
Il sistema supporta 8 angoli di navigazione a 45° di distanza:
- **0°** - Bolina stretta (contro vento)
- **45°** - Bolina
- **90°** - Traverso
- **135°** - Lasco largo
- **180°** - Fil di ruota (vento in poppa)
- **225°** - Lasco largo (lato opposto)
- **270°** - Traverso (lato opposto)
- **315°** - Bolina (lato opposto)

## Come Personalizzare

### 1. Modifica degli Elementi SVG

Ogni file di configurazione in `src/assets/boat-designs/` ha questa struttura:

```javascript
// Esempio: src/assets/boat-designs/bolina.js
export const Bolina = {
  name: "Nome dell'andatura",
  description: "Descrizione dell'andatura",
  tension: 0.8, // Tensione delle vele (0.0 - 1.0)
  elements: {
    hull: "SVG path per lo scafo",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "SVG path per la vela principale",
    jib: "SVG path per il fiocco",
    wind: "SVG path per l'indicatore di vento",
    wake: "SVG path per la scia"
  }
}
```

### 2. Sistema di Coordinate SVG

La barchetta usa un sistema di coordinate SVG 24x24:
- **Centro**: (12, 12)
- **Parte alta**: y = 0-12
- **Parte bassa**: y = 12-24
- **Sinistra**: x = 0-12
- **Destra**: x = 12-24

### 3. Elementi Personalizzabili

#### Scafo (hull)
- **Corrente**: Triangolo semplice `"M12 20 L10 16 L14 16 Z"`
- **Personalizzazione**: Puoi creare forme più complesse per lo scafo

#### Albero (mast)
- **Corrente**: Linea verticale dal centro dello scafo verso l'alto
- **Personalizzazione**: Modifica lunghezza, spessore o posizione

#### Vela Principale (mainSail)
- **Personalizzazione**: Modifica la forma per rappresentare diverse tensioni
- **Suggerimento**: Più lontana dall'albero = vela più lasca

#### Fiocco (jib)
- **Personalizzazione**: Vela davanti all'albero
- **Suggerimento**: Segue la stessa logica della vela principale

#### Indicatore di Vento (wind)
- **Personalizzazione**: Frecce o linee per mostrare la direzione del vento
- **Suggerimento**: Dovrebbe puntare nella direzione del vento

#### Scia (wake)
- **Personalizzazione**: Forma delle onde dietro la barca
- **Suggerimento**: Può variare in base alla velocità/andatura

### 4. Proprietà di Animazione

#### Tension (tensione)
- **Range**: 0.0 - 1.0
- **Effetto**: Controlla l'opacità delle vele
- **0.0**: Vele molto lasche (vento in poppa)
- **1.0**: Vele molto tese (bolina stretta)

#### Animazioni Modulari
Ogni elemento può avere animazioni personalizzate:

```javascript
animations: {
  wake: {
    opacity: {
      idle: [0.05, 0.15, 0.05],    // Valori per stato inattivo
      active: [0.1, 0.3, 0.1]      // Valori per stato attivo
    },
    scale: {
      idle: 1,                     // Scala per stato inattivo
      active: [1, 1.15, 1]         // Animazione scala per stato attivo
    },
    duration: 2.5,                 // Durata dell'animazione
    repeat: Infinity,              // Ripetizione infinita
    ease: "easeInOut"             // Tipo di easing
  },
  mainSail: {
    opacity: {
      base: 0.5,                   // Opacità base
      variation: 0.3               // Variazione per animazione
    },
    scale: {
      idle: 1,
      active: [1, 1.08, 1]
    },
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut"
  }
  // ... altri elementi: jib, wind, hull, mast
}
```

**Proprietà Supportate:**
- `opacity`: Animazione dell'opacità
  - `idle/active`: Array `[start, peak, end]`
  - `base/variation`: Valore base + variazione
- `scale`: Animazione della scala
  - `idle`: Valore fisso o array
  - `active`: Array `[start, peak, end]`
- `duration`: Durata in secondi
- `repeat`: Ripetizioni (numero o `Infinity`)
- `ease`: Tipo di easing

## Esempi di Personalizzazione

### Esempio 1: Scafo più Dettagliato
```javascript
hull: "M12 20 L10 16 L11 15 L13 15 L14 16 Z M11 15 L13 15 L13 14 L11 14 Z"
```

### Esempio 2: Albero con Pennone
```javascript
mast: { 
  x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5,
  boom: "M8 12 L16 12" // Pennone orizzontale
}
```

### Esempio 3: Vela con Più Dettagli
```javascript
mainSail: "M12 4 L12 16 L18 14 C20 12 20 8 18 7 L12 4 Z"
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

### Esempio 6: Animazioni Asimmetriche
```javascript
animations: {
  wind: {
    opacity: {
      idle: [0.3, 0.7, 0.3],
      active: [0.4, 0.8, 0.4]
    },
    scale: {
      idle: 1,
      active: [1, 1.3, 1]
    },
    duration: 1.5,                // Veloce
    repeat: Infinity,
    ease: "easeOut"               // Easing aggressivo
  },
  jib: {
    opacity: {
      base: 0.5,
      variation: 0.2
    },
    scale: {
      idle: 1,
      active: [1, 1.05, 1]
    },
    duration: 4.2,                // Timing diverso
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

### Step 2: Implementazione
1. Apri il file specifico per l'andatura (es. `src/assets/boat-designs/bolina.js`)
2. Modifica i path SVG negli `elements`
3. Salva il file
4. Le modifiche saranno caricate automaticamente dal sistema modulare

### Step 3: Test
1. Esegui `npm run dev` per avviare il server di sviluppo
2. Naviga tra le sezioni per vedere le diverse andature
3. Rifinisci i dettagli fino ad ottenere il risultato desiderato

## Strumenti Utili

### Editor SVG Consigliati
- **Inkscape** (gratuito)
- **Adobe Illustrator**
- **Figma** (per design semplici)
- **SVG-Edit** (online)

### Coordinate Helper
Per trovare le coordinate esatte, puoi usare questo template SVG:
```svg
<svg width="240" height="240" viewBox="0 0 24 24">
  <grid stroke="#ccc" strokeWidth="0.1"/>
  <circle cx="12" cy="12" r="0.5" fill="red"/>
  <!-- I tuoi elementi qui -->
</svg>
```

## Suggerimenti Avanzati

### Animazioni Personalizzate
Puoi aggiungere animazioni personalizzate per ogni elemento:
```javascript
// Esempio di vela che si gonfia
animate={{
  d: isActive ? [normalSail, inflatedSail, normalSail] : normalSail
}}
```

### Elementi Condizionali
Puoi mostrare elementi diversi in base all'andatura:
```javascript
// Esempio: spinnaker solo con vento in poppa
...(orientation === 180 && { spinnaker: "M12 4 L8 8 L16 8 Z" })
```

### Colori Personalizzati
Anche se attualmente usa `currentColor`, puoi specificare colori:
```javascript
fill="url(#sailGradient)" // Usa un gradiente definito
```

## Struttura dei Files

```
src/
├── components/
│   └── SimpleCircularNavigation.jsx  # Componente principale (usa le configurazioni)
├── assets/
│   └── boat-designs/                 # Configurazioni delle barchette
│       ├── index.js                  # Mapping centrale e funzioni helper
│       ├── bolina-stretta.js         # Configurazione 0°
│       ├── bolina.js                 # Configurazione 45°
│       ├── traverso.js               # Configurazione 90°
│       ├── lasco-largo.js            # Configurazione 135°
│       └── fil-di-ruota.js           # Configurazione 180°
```

### Workflow di Personalizzazione Migliorato

#### Per Modificare una Singola Andatura:
1. **Identifica l'andatura**: Trova il file corrispondente (es. `bolina.js` per 45°)
2. **Modifica**: Cambia i path SVG nel file specifico
3. **Testa**: Il sistema caricherà automaticamente le modifiche
4. **Commit**: Versiona le modifiche per quella specifica andatura

#### Per Creare una Nuova Variante:
1. **Copia**: Duplica un file esistente (es. `bolina.js` → `bolina-custom.js`)
2. **Modifica**: Personalizza la configurazione
3. **Importa**: Aggiungi l'import in `index.js`
4. **Mappa**: Assegna la nuova configurazione ad un angolo

#### Per Validare le Configurazioni:
Il sistema include funzioni di validazione automatica che controllano:
- Presenza di tutti gli elementi necessari
- Validità dei path SVG
- Coerenza dei dati

## Troubleshooting

### Problema: La barchetta non si vede
- Controlla che i path SVG siano validi
- Verifica che le coordinate siano nel range 0-24
- Assicurati che `opacity` non sia 0

### Problema: Animazione non funziona
- Verifica che `tension` sia nel range 0.0-1.0
- Controlla che i path siano compatibili con Framer Motion
- Assicurati che `isActive` sia true

### Problema: Elementi sovrapposti
- Riordina gli elementi nel JSX (dal basso verso l'alto)
- Usa `z-index` se necessario
- Verifica le coordinate di ogni elemento

## Esempi Completi

### Esempio 1: Personalizzazione della Bolina
```javascript
// File: src/assets/boat-designs/bolina.js
export const Bolina = {
  name: "Bolina Custom",
  description: "Bolina con scafo personalizzato",
  tension: 0.8,
  elements: {
    hull: "M12 20 L10 16 L11 15 L13 15 L14 16 Z M11 15 L13 15 L13 14 L11 14 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L18 14 C19 12 19 8 18 7 L12 4 Z",
    jib: "M12 4 L12 12 L7 10 C6 9 6 7 7 6 L12 4 Z",
    wind: "M12 2 L15 0 M13 1 L15 0 L17 1",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  }
}
```

### Esempio 2: Aggiunta di Nuovi Elementi
```javascript
// File: src/assets/boat-designs/fil-di-ruota.js
export const FilDiRuota = {
  name: "Fil di ruota con Spinnaker",
  description: "Poppa con spinnaker gonfia",
  tension: 0.2,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L23 8 L23 14 Z",
    jib: "M12 4 L12 12 L1 8 L1 14 Z",
    spinnaker: "M12 4 Q6 8 12 12 Q18 8 12 4 Z", // Elemento aggiuntivo
    wind: "M12 2 L12 10 M10 8 L12 10 L14 8",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  }
}
```

Consulta i file in `src/assets/boat-designs/` per vedere implementazioni complete di ogni andatura.

Buona personalizzazione! 🚤⛵
