# Navigazione Circolare Unificata con Barchetta a Vela

## Panoramica
Il sistema di navigazione del portfolio utilizza un **singolo indicatore circolare** con una barchetta a vela animata che si muove lungo un percorso circolare. La barchetta rappresenta il progresso attraverso le diverse sezioni del portfolio, cambiando orientamento e configurazione delle vele in base alla posizione.

## Miglioramenti Implementati

### 🎯 **Caratteristiche Ottimizzate**
- **Angoli in gradi**: Mostra angoli precisi (0°, 45°, 90°, etc.) invece di frazioni
- **Vele adaptive**: Le vele della barchetta cambiano configurazione in base all'andatura
- **Posizionamento intelligente**: Trattini posizionati sui multipli di 45° per allineamento perfetto
- **Navigazione migliorata**: Trattini completamente cliccabili con feedback visivo

### 🧭 **Sistema di Posizionamento**
I trattini delle sezioni sono posizionati automaticamente sui multipli di 45°:
- Sezione 1: 0° (Nord)
- Sezione 2: 45° (Nord-Est)
- Sezione 3: 90° (Est)
- Sezione 4: 135° (Sud-Est)
- Sezione 5: 180° (Sud)
- Sezione 6: 225° (Sud-Ovest)
- Sezione 7: 270° (Ovest)
- Sezione 8: 315° (Nord-Ovest)

### ⛵ **Configurazioni delle Vele**
Le vele cambiano automaticamente in base all'andatura:

| Angolo | Andatura | Configurazione Vele | Tensione |
|--------|----------|-------------------|----------|
| 0° | Bolina stretta | Vele molto chiuse | 90% |
| 45° | Bolina | Vele leggermente aperte | 80% |
| 90° | Traverso | Vele perpendicolari | 60% |
| 135° | Lasco largo | Vele aperte | 40% |
| 180° | Fil di ruota | Vele completamente aperte | 20% |
| 225° | Lasco largo | Vele aperte (opposto) | 40% |
| 270° | Traverso | Vele perpendicolari (opposto) | 60% |
| 315° | Bolina | Vele chiuse (opposto) | 80% |

## Componenti Principali

### 1. `SimpleCircularNavigation.jsx`
Il componente principale ottimizzato per semplicità e performance.

**Caratteristiche:**
- Cerchio unificato con progresso fluido
- Trattini radiali per sezioni e punti cardinali
- Animazioni leggere e performanti
- Navigazione cliccabile sulle sezioni

**Props:**
- `currentSection`: Indice della sezione corrente
- `totalSections`: Numero totale di sezioni
- `onSectionClick`: Callback per navigazione
- `size`: Dimensione ('sm', 'md', 'lg')
- `className`: Classi CSS aggiuntive

### 2. `SectionIndicator.jsx`
Wrapper che integra la navigazione circolare nel layout.

**Caratteristiche:**
- Posizionamento fisso a destra
- Contenitore con effetto glassmorphism
- Animazioni hover fluide
- Integrazione perfetta con `SimpleCircularNavigation`

### 3. `AdaptiveSailingBoat.jsx`
Componente integrato per la barchetta con vele adattive.

**Caratteristiche:**
- 8 configurazioni di vela nautiche
- Animazioni di movimento realistiche
- Feedback visivo per lo stato attivo
- Scia animata durante la navigazione
- Sfondo glassmorphism
- Animazioni hover
- Responsive design

## Elementi Visivi

### Trattini Radiali
Il sistema utilizza due tipi di trattini:

1. **Trattini delle sezioni** (lunghi e prominenti)
   - Uno per ogni sezione del portfolio
   - Colore più intenso per la sezione attiva
   - Cliccabili per navigazione diretta

2. **Trattini cardinali** (corti e discreti)
   - Ai punti cardinali (0°, 90°, 180°, 270°)
   - Orientamento di riferimento
   - Colore neutro e opacità ridotta

### Arco di Progresso
- Cerchio che si riempie progressivamente
- Animazione fluida con transizioni ease-out
- Strokecap arrotondato per eleganza
- Colore eredita dal tema attivo

### Barchetta Animata
- Movimento lungo la circonferenza
- Rotazione che segue la direzione
- Vele che cambiano configurazione
- Animazioni di scala durante il movimento

## Interazioni Utente

### Navigazione
- **Click sui trattini**: Navigazione diretta alla sezione
- **Hover generale**: Scaling leggero del contenitore
- **Feedback visivo**: Transizioni fluide

### Accessibilità
- Area di click ingrandita per i trattini
- Contrasti di colore appropriati
- Supporto per navigazione keyboard
- Animazioni rispettose delle preferenze utente

## Configurazione

### Dimensioni
```javascript
const dimensions = {
  sm: { radius: 28, boat: 14, container: 70 },
  md: { radius: 36, boat: 18, container: 84 },
  lg: { radius: 44, boat: 22, container: 100 }
}
```

### Animazioni
- **Spring motion**: Stiffness 100, damping 30
- **Progresso**: Transizione 700ms ease-out
- **Barchetta**: Ciclo infinito di 3 secondi
- **Vele**: Animazioni sfasate per realismo

### Colori e Stili
- Eredità automatica dal tema (`currentColor`)
- Opacità variabile per gerarchia visiva
- Glassmorphism per il contenitore
- Ombre soft per profondità

## Integrazione

### In SectionIndicator
```jsx
<SimpleCircularNavigation 
  currentSection={currentSection}
  totalSections={totalSections}
  onSectionClick={onSectionClick}
  size="md"
  className="text-primary-600 dark:text-primary-400"
/>
```

### Posizionamento
- Fixed a destra dello schermo
- Centrato verticalmente
- z-index elevato per visibilità
- Responsive su tutti i device

## Performance

### Ottimizzazioni
- `useMotionValue` per animazioni hardware-accelerated
- `useSpring` per transizioni naturali
- `useTransform` per calcoli efficienti
- SVG ottimizzati per rendering veloce

### Rendering
- Componenti memoizzati
- Calcoli angolari cached
- Transizioni CSS per stati semplici
- Framer Motion per animazioni complesse

## Vantaggi del Design Unificato

1. **Semplicità visiva**: Un solo elemento invece di multiple icone
2. **Comprensione intuitiva**: Il progresso è immediatamente visibile
3. **Interazione naturale**: Click sui trattini per navigazione
4. **Scalabilità**: Funziona con qualsiasi numero di sezioni
5. **Eleganza**: Design minimale e funzionale

## Personalizzazioni Future

### Estensioni Possibili
- Etichette delle sezioni sui trattini
- Animazioni di transizione tra sezioni
- Indicatori di completamento per sezione
- Temi nautici stagionali
- Gesture touch per mobile

### Varianti Alternative
- Rosa dei venti completa
- Indicatori di tempo di lettura
- Progresso basato su scroll
- Modalità compass con magnetismo
- Integrazione con weather API

## Troubleshooting

### Problemi Comuni
- **Trattini non cliccabili**: Verificare area di click
- **Animazioni laggose**: Ridurre stiffness spring
- **Colori non ereditati**: Controllare className parent

### Debug
- Console log per angoli e posizioni
- React DevTools per performance
- Inspect SVG per rendering issues

## Andature Nautiche Simulate

La barchetta cambia configurazione in base alla posizione angolare:

| Angolo | Andatura | Descrizione |
|--------|----------|-------------|
| 0° | Bolina stretta | Vele molto chiuse, massima tensione |
| 45° | Bolina | Vele leggermente aperte |
| 90° | Traverso | Vele perpendicolari al vento |
| 135° | Lasco largo | Vele aperte |
| 180° | Fil di ruota | Vele completamente aperte |
| 225° | Lasco largo | Vele aperte (lato opposto) |
| 270° | Traverso | Vele perpendicolari (lato opposto) |
| 315° | Bolina | Vele leggermente aperte (lato opposto) |

## Animazioni e Transizioni

### Movimento della Barchetta
- Utilizza `useMotionValue` e `useSpring` per animazioni fluide
- Transizioni di tipo "spring" per movimento naturale
- Durata dinamica basata sulla distanza percorsa

### Orientamento delle Vele
- Calcolo automatico basato sull'angolo di navigazione
- Transizioni fluide tra diverse configurazioni
- Opacità variabile per simulare tensione delle vele

### Effetti Visivi
- Scia animata che appare durante il movimento
- Scaling della barchetta durante l'animazione
- Indicatori di direzione e velocità

## Configurazione e Personalizzazione

### Dimensioni
```javascript
const dimensions = {
  sm: { radius: 30, boat: 14, container: 70 },
  md: { radius: 36, boat: 18, container: 84 },
  lg: { radius: 42, boat: 22, container: 96 }
}
```

### Colori e Stili
- Utilizza `currentColor` per eredità automatica dei colori
- Opacità variabile per diversi stati
- Transizioni CSS per cambi di tema

### Animazioni
- Configurabili tramite props di `framer-motion`
- Timing personalizzabile per diverse velocità
- Easing functions per movimento naturale

## Integrazione con SectionIndicator

Il componente `SectionIndicator` utilizza la navigazione circolare per mostrare la posizione attuale:

```jsx
<CircularNavigation 
  progress={progress} 
  size="md"
  className="transition-all duration-300"
/>
```

## Accessibilità

- `aria-label` per navigazione keyboard
- Contrasti di colore appropriati
- Indicatori visivi alternativi al colore
- Supporto per animazioni ridotte

## Performance

- Utilizzo di `useMotionValue` per animazioni performanti
- Componenti memoizzati per evitare re-render
- SVG ottimizzati per rendering efficiente
- Animazioni hardware-accelerated

## Personalizzazioni Future

Possibili estensioni del sistema:

1. **Condizioni Meteorologiche**
   - Vento variabile
   - Onde e mari mossi
   - Effetti di tempesta

2. **Interazioni Avanzate**
   - Drag and drop per navigazione
   - Hover effects più dettagliati
   - Feedback aptici su mobile

3. **Indicatori Aggiuntivi**
   - Bussola dinamica
   - Profondità del mare
   - Correnti marine

4. **Temi Nautici**
   - Diversi tipi di imbarcazione
   - Stagioni e ambientazioni
   - Stili di navigazione storici

## Troubleshooting

### Problemi Comuni
- **Animazione laggy**: Ridurre la frequenza di aggiornamento
- **Orientamento errato**: Verificare calcoli angolari
- **Rendering SVG**: Controllare viewBox e dimensioni

### Debug
- Utilizzare `showDetails={true}` per indicatori di debug
- Console.log per valori di progress e angoli
- React DevTools per performance profiling
