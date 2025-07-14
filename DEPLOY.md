# Portfolio di Federico Forzano

## 🌐 Deploy su GitHub Pages

Questo portfolio è configurato per il deploy automatico su GitHub Pages.

### Configurazione

1. **Repository**: Assicurati che il repository sia pubblico
2. **Branch**: Il deploy avviene dal branch `main` o `master`
3. **GitHub Pages**: Vai su Settings > Pages > Source > GitHub Actions

### Deploy Automatico

Il deploy avviene automaticamente quando:
- Fai push sul branch `main` o `master`
- Tutti i test passano
- Il build è completato con successo

### Deploy Manuale

Per deployare manualmente:

```bash
# Assicurati di essere nel branch principale
git checkout main  # o master

# Esegui lo script di deploy
./deploy.sh

# Oppure esegui i comandi manualmente
npm run test:run
npm run build
npm run deploy
```

### URL del Sito

Il sito sarà disponibile su:
```
https://[tuo-username].github.io/portfolio/
```

### Struttura del Progetto

- `src/` - Codice sorgente React
- `public/` - File statici
- `dist/` - Build di produzione (generato automaticamente)
- `.github/workflows/` - Configurazione GitHub Actions

### Comandi Disponibili

```bash
npm run dev          # Avvia server di sviluppo
npm run build        # Build di produzione
npm run preview      # Anteprima del build
npm run test         # Esegui test
npm run test:coverage # Test con coverage
npm run deploy       # Deploy su GitHub Pages
```

### Configurazione Personalizzata

Se vuoi cambiare il percorso del sito, modifica la proprietà `base` in `vite.config.js`:

```javascript
export default defineConfig({
  base: '/nome-repository/',
  // ...
})
```

### Troubleshooting

1. **Sito non accessibile**: Verifica che GitHub Pages sia abilitato nelle impostazioni del repository
2. **404 su pagine**: Assicurati che il routing sia configurato correttamente per SPA
3. **Deploy fallito**: Controlla i log di GitHub Actions per errori specifici

### Test

Il progetto include:
- Test unitari con Vitest
- Test dei componenti con Testing Library
- Coverage report
- Test di struttura progetto

Esegui i test con:
```bash
npm run test:run      # Esegui tutti i test
npm run test:coverage # Test con coverage
npm run test:watch    # Test in modalità watch
```
