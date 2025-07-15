# Boat Designs - Configurazioni Barchette

Questa cartella contiene le configurazioni modulari per le barchette del sistema di navigazione circolare.

## Struttura

```
boat-designs/
├── README.md             # Questo file
├── index.js              # Mapping centrale e funzioni helper
├── bolina-stretta.js     # 0° - Bolina stretta (contro vento)
├── bolina.js             # 45° - Bolina normale
├── traverso.js           # 90° - Traverso (vento al lato)
├── lasco-largo.js        # 135° - Lasco largo
└── fil-di-ruota.js       # 180° - Fil di ruota (vento in poppa)
```

## Come Personalizzare

### 1. Modifica una Configurazione Esistente
```bash
# Esempio: personalizza la bolina
vim bolina.js

# Modifica gli elementi SVG
export const Bolina = {
  name: "Bolina Custom",
  elements: {
    hull: "M12 20 L10 16 L14 16 Z",  # ← Modifica questo
    // ... altri elementi
  }
}
```

### 2. Crea una Nuova Configurazione
```bash
# Copia una configurazione esistente
cp bolina.js bolina-custom.js

# Modifica la nuova configurazione
vim bolina-custom.js

# Aggiungi l'import in index.js
vim index.js
```

### 3. Testa le Modifiche
```bash
# Avvia il server di sviluppo
npm run dev

# Naviga tra le sezioni per vedere le modifiche
```

## Formato delle Configurazioni

Ogni file deve esportare un oggetto con questa struttura:

```javascript
export const NomeConfigurazione = {
  name: "Nome dell'andatura",
  description: "Descrizione dell'andatura",
  tension: 0.8, // 0.0 - 1.0 (tensione delle vele)
  elements: {
    hull: "SVG path per lo scafo",
    mast: { 
      x1: 12, y1: 16, x2: 12, y2: 4, 
      strokeWidth: 1.5 
    },
    mainSail: "SVG path per la vela principale",
    jib: "SVG path per il fiocco",
    wind: "SVG path per l'indicatore di vento",
    wake: "SVG path per la scia"
  }
}
```

## Sistema di Coordinate

- **Canvas**: 24x24 unità SVG
- **Centro**: (12, 12)
- **Scafo**: Posizionato in basso (y=16-20)
- **Albero**: Verticale dal centro dello scafo
- **Vele**: Si estendono dall'albero

## Validazione

Il sistema include validazione automatica che controlla:
- Presenza di tutti gli elementi necessari
- Validità dei path SVG
- Coerenza dei dati

## Esempi di Personalizzazione

### Scafo Dettagliato
```javascript
hull: "M12 20 L10 16 L11 15 L13 15 L14 16 Z M11 15 L13 15 L13 14 L11 14 Z"
```

### Vela con Curvatura
```javascript
mainSail: "M12 4 L12 16 L18 14 C19 12 19 8 18 7 L12 4 Z"
```

### Elemento Aggiuntivo
```javascript
elements: {
  // ... elementi standard
  spinnaker: "M12 4 Q6 8 12 12 Q18 8 12 4 Z", // Spinnaker gonfia
  boom: "M8 12 L16 12" // Boma orizzontale
}
```

## Strumenti Consigliati

- **Inkscape** (gratuito) - Editor SVG professionale
- **Figma** - Per design semplici
- **SVG-Edit** - Editor online
- **VS Code** - Con estensioni SVG per preview

## Troubleshooting

### Problema: Barchetta non visibile
- Verifica che i path SVG siano validi
- Controlla che le coordinate siano nel range 0-24
- Assicurati che `tension` sia tra 0.0 e 1.0

### Problema: Errore di import
- Verifica che l'export sia corretto (`export const NomeConfigurazione`)
- Controlla che sia importato correttamente in `index.js`
- Assicurati che il nome del file sia corretto

### Problema: Animazione non funziona
- Verifica che tutti gli elementi necessari siano presenti
- Controlla che i path SVG siano compatibili con Framer Motion
- Assicurati che la configurazione sia mappata correttamente

Per ulteriori dettagli, consulta la documentazione completa in:
- `BOAT_CUSTOMIZATION_GUIDE.md`
- `BOAT_CUSTOMIZATION_EXAMPLES.md`
