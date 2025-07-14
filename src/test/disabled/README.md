# Test Disabilitati Temporaneamente

## Perché sono disabilitati?

I test in questa cartella sono stati temporaneamente disabilitati perché richiedono:

1. **Rendering DOM completo** - I test dei componenti React hanno problemi con l'ambiente di test attuale
2. **Browser Environment** - I test e2e richiedono un browser reale
3. **Viewport Testing** - I test responsive richiedono simulazione di diverse dimensioni schermo

## Errori Comuni

### Error: Cannot use 'in' operator to search for 'animation' in undefined
Questo errore si verifica quando React DOM cerca di accedere a proprietà del browser che non sono disponibili nell'ambiente di test happy-dom.

### Soluzioni Future

1. **Configurare jsdom** invece di happy-dom per i test di rendering
2. **Aggiungere Playwright** per i test e2e
3. **Configurare testing-library** con mock appropriati
4. **Separare test logici da test di rendering**

## Test Attualmente Funzionanti

I test nella cartella `src/test/simple/` funzionano perché testano:
- ✅ Logica pura (senza rendering)
- ✅ Funzioni utility
- ✅ Configurazione
- ✅ Struttura del progetto

## Come Riattivare

Per riattivare questi test:

1. Sposta i file da `src/test/disabled/` a `src/test/`
2. Risolvi i problemi di ambiente di test
3. Aggiorna i mock per supportare React DOM

## Struttura Test

```
src/test/
├── simple/           # ✅ Test logici funzionanti
├── disabled/         # ❌ Test di rendering disabilitati
│   ├── components/   # Test componenti React
│   ├── integration/  # Test di integrazione
│   ├── e2e.test.jsx  # Test end-to-end
│   ├── responsive.test.jsx # Test responsive
│   └── translation.test.jsx # Test rendering traduzioni
└── setup.jsx        # Configurazione test
```

## Priorità

1. **Mantenere i test logici** funzionanti per CI/CD
2. **Aggiungere test di rendering** quando l'ambiente è stabile
3. **Implementare e2e testing** con strumenti dedicati
