# Esempio Pratico di Personalizzazione Barchetta

## Esempio: Barchetta con Scafo Dettagliato

Ecco come modificare la barchetta per l'andatura di **Bolina (45°)** con uno scafo più dettagliato:

### Prima (Originale)
```javascript
45: {
  name: "Bolina",
  description: "Navigazione di bolina, vele semi-cazzate",
  tension: 0.8,
  elements: {
    hull: "M12 20 L10 16 L14 16 Z", // Scafo triangolare semplice
    // ... altri elementi
  }
}
```

### Dopo (Personalizzato)
```javascript
45: {
  name: "Bolina",
  description: "Navigazione di bolina, vele semi-cazzate",
  tension: 0.8,
  elements: {
    hull: "M12 20 L10 16 L10.5 15.5 L11 15 L13 15 L13.5 15.5 L14 16 Z M11 15 L13 15 L13 14 L11 14 Z", // Scafo con dettagli
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    mainSail: "M12 4 L12 16 L18 14 C19 12 19 8 18 7 L12 4 Z", // Vela con curvatura
    jib: "M12 4 L12 12 L7 10 C6 9 6 7 7 6 L12 4 Z", // Fiocco con curvatura
    wind: "M12 2 L15 0 M13 1 L15 0 L17 1 M15 0.5 L16 0.5", // Indicatore vento più dettagliato
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18 M10 19 Q8 20 6 19" // Scia più elaborata
  }
}
```

## Come Testare le Modifiche

1. **Apri il file**: `src/components/SimpleCircularNavigation.jsx`
2. **Trova la configurazione**: Cerca `BOAT_CONFIGURATIONS`
3. **Modifica l'andatura**: Sostituisci i path SVG per l'angolo desiderato
4. **Salva il file**: Il server di sviluppo aggiornerà automaticamente
5. **Testa**: Naviga alla sezione corrispondente per vedere le modifiche

## Strumenti per Creare Path SVG

### Metodo 1: Editor Visuale (Consigliato)
1. Vai su https://editor.method.ac/
2. Crea la tua barchetta
3. Esporta come SVG
4. Copia i path elements

### Metodo 2: Coordinate Manuali
```javascript
// Esempio di scafo più dettagliato
hull: `
  M12 20        // Muovi al centro bottom
  L10 16        // Linea verso sinistra
  L10.5 15.5    // Piccolo dettaglio
  L11 15        // Continua verso l'alto
  L13 15        // Attraversa verso destra
  L13.5 15.5    // Piccolo dettaglio
  L14 16        // Verso il punto destro
  Z             // Chiudi il path
  M11 15        // Nuovo sub-path per dettaglio interno
  L13 15        // Linea orizzontale
  L13 14        // Verso l'alto
  L11 14        // Indietro
  Z             // Chiudi sub-path
`
```

## Suggerimenti di Design

### Scafo
- **Semplice**: Triangolo `M12 20 L10 16 L14 16 Z`
- **Dettagliato**: Forma a V con dettagli `M12 20 L10 16 L10.5 15.5 L11 15 L13 15 L13.5 15.5 L14 16 Z`
- **Realistico**: Forma di barca con chiglia `M12 20 L10 16 L11 15 L13 15 L14 16 Z M12 20 L12 21 L12 20`

### Vele
- **Piatte**: Linee rette
- **Gonfie**: Curve con `C` (curve bezier)
- **Dettagliate**: Aggiungi pieghe o rife

### Indicatore Vento
- **Semplice**: Frecce base
- **Dettagliato**: Frecce con coda o bandierine
- **Animato**: Elementi che si muovono

## Esempi di Personalizzazione Completa

### Barchetta Moderna
```javascript
180: { // Vento in poppa
  name: "Fil di ruota - Moderna",
  description: "Barca moderna con spinnaker",
  tension: 0.2,
  elements: {
    hull: "M12 20 L9 16 L10 15 L14 15 L15 16 Z M10 15 L14 15 L14 14 L10 14 Z",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 2 },
    mainSail: "M12 4 L12 16 L20 12 L20 8 L12 4 Z",
    jib: "M12 4 L12 12 L4 8 L4 4 L12 4 Z",
    spinnaker: "M12 4 Q6 8 12 12 Q18 8 12 4 Z", // Spinnaker gonfia
    wind: "M12 2 L12 0 M10 1 L12 0 L14 1 M12 0.5 Q10 1 12 1.5 Q14 1 12 0.5",
    wake: "M12 18 Q8 20 4 18 Q8 16 12 18 Q16 16 20 18 Q16 20 12 18"
  }
}
```

### Barchetta Classica
```javascript
0: { // Bolina stretta
  name: "Bolina - Classica",
  description: "Barca a vela classica",
  tension: 0.9,
  elements: {
    hull: "M12 20 L10 16 L11 15 L13 15 L14 16 Z M11 15 L13 15 L13 14 L11 14 Z M12 20 L12 21",
    mast: { x1: 12, y1: 16, x2: 12, y2: 4, strokeWidth: 1.5 },
    boom: "M8 12 L16 12", // Boma
    mainSail: "M12 4 L12 12 L16 11 L16 6 Z M12 12 L16 12 L16 11", // Vela con rife
    jib: "M12 4 L12 10 L8 9 L8 6 Z M12 10 L8 10 L8 9", // Fiocco con rife
    wind: "M12 2 L12 0 M10 1 L12 0 L14 1",
    wake: "M12 18 Q10 19 8 18 Q10 17 12 18 Q14 17 16 18 Q14 19 12 18"
  }
}
```

## Debugging

### Problemi Comuni
1. **Barchetta non visibile**: Controlla che i path siano validi
2. **Elementi sovrapposti**: Riordina nel JSX
3. **Animazione non funziona**: Verifica i valori di `tension`

### Tool di Debug
Aggiungi questa griglia temporanea per vedere le coordinate:
```javascript
{/* Griglia di debug - rimuovi dopo */}
<defs>
  <pattern id="grid" width="2" height="2" patternUnits="userSpaceOnUse">
    <path d="M 2 0 L 0 0 0 2" fill="none" stroke="#ccc" strokeWidth="0.1"/>
  </pattern>
</defs>
<rect width="24" height="24" fill="url(#grid)" opacity="0.3"/>
```

Con questa struttura, personalizzare la barchetta è ora molto più semplice e organizzato! 🚤
