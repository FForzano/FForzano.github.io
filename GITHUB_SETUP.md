# 🚀 Guida Setup GitHub Pages

## Passi per configurare GitHub Pages

### 1. Crea/Configura il Repository GitHub

**⚠️ IMPORTANTE:** Per avere l'URL `https://FForzano.github.io/`, il repository deve chiamarsi esattamente:
```
FForzano.github.io
```

```bash
# Se non hai ancora un repository, crealo
git init
git add .
git commit -m "Initial commit"

# Aggiungi il remote
git remote add origin https://github.com/FForzano/FForzano.github.io.git

# Push del codice
git push -u origin main
```

### 2. Configura GitHub Pages

1. Vai su GitHub.com e apri il tuo repository
2. Clicca su **Settings** (in alto a destra)
3. Scorri fino a **Pages** nel menu laterale
4. In **Source** seleziona **GitHub Actions**
5. Clicca **Save**

### 3. Attiva GitHub Actions

1. Vai nella tab **Actions** del repository
2. Se richiesto, clicca **Enable GitHub Actions**
3. Il workflow si avvierà automaticamente al prossimo push

### 4. Verifica il Deploy

1. Vai nella tab **Actions** per vedere lo stato del deploy
2. Una volta completato, il sito sarà disponibile su:
   ```
   https://FForzano.github.io/
   ```

### 5. Deploy Manuale (Opzionale)

Se preferisci il deploy manuale:

```bash
# Assicurati di essere nel branch principale
git checkout main

# Esegui lo script di deploy
./deploy.sh

# Oppure esegui i comandi singolarmente
npm run test:run
npm run build
npm run deploy
```

### 6. Personalizzazione

**Dominio Personalizzato:**
1. Crea un file `CNAME` nella cartella `public/` con il tuo dominio
2. Configura il DNS del tuo dominio per puntare a GitHub Pages

**Percorso Personalizzato:**
Se vuoi un percorso diverso dalla root, modifica `vite.config.js`:

```javascript
export default defineConfig({
  base: '/sottocartella/',
  // ...
})
```

**⚠️ Repository Standard vs Speciale:**
- Repository `[username].github.io` → URL: `https://[username].github.io/`
- Repository `portfolio` → URL: `https://[username].github.io/portfolio/`

### 7. Troubleshooting

**Problema:** Sito non accessibile
**Soluzione:** Verifica che GitHub Pages sia abilitato e che il deploy sia completato

**Problema:** 404 su pagine interne
**Soluzione:** GitHub Pages non supporta il routing SPA. Aggiungi un file `404.html` che reindirizzi a `index.html`

**Problema:** Deploy fallito
**Soluzione:** Controlla i log in GitHub Actions per errori specifici

### 8. Monitoraggio

- **GitHub Actions**: Vedi lo stato dei deploy in tempo reale
- **Test automatici**: Ogni deploy esegue i test automaticamente
- **Build status**: Badge disponibili per README

### 9. Comandi Utili

```bash
# Sviluppo locale
npm run dev

# Test
npm run test:run
npm run test:coverage

# Build e preview
npm run build
npm run preview

# Deploy
npm run deploy
```

### 10. Sicurezza

- Il repository deve essere **pubblico** per GitHub Pages gratuito
- I **secrets** sono gestiti automaticamente da GitHub Actions
- Non committare mai API keys o credenziali nel codice
