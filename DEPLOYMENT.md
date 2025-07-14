# Deployment Guide / Guida al Deploy

## 🇮🇹 Guida al Deploy Italiano

### 🚀 Deploy su Vercel (Consigliato)

1. **Preparazione**
   ```bash
   # Testa la build locale
   npm run build
   npm run preview
   ```

2. **Deploy automatico**
   - Collega il repository GitHub a Vercel
   - Vercel rileverà automaticamente Vite
   - Build automatica ad ogni push

3. **Configurazione Vercel**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

### 🌐 Deploy su Netlify

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Netlify.toml (opzionale)**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### 🐳 Deploy con Docker

1. **Build locale**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

2. **Deploy su server**
   ```bash
   # Su server con Docker
   docker-compose up -d
   ```

### ☁️ Deploy su DigitalOcean/AWS

1. **Usando Nginx**
   ```bash
   # Build del progetto
   npm run build
   
   # Copia i file nella directory web
   cp -r dist/* /var/www/html/
   ```

2. **Configurazione Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

---

## 🇬🇧 English Deployment Guide

### 🚀 Vercel Deploy (Recommended)

1. **Preparation**
   ```bash
   # Test local build
   npm run build
   npm run preview
   ```

2. **Automatic deploy**
   - Connect GitHub repository to Vercel
   - Vercel will automatically detect Vite
   - Automatic build on every push

3. **Vercel configuration**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite"
   }
   ```

### 🌐 Netlify Deploy

1. **Build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Netlify.toml (optional)**
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

### 🐳 Docker Deploy

1. **Local build**
   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

2. **Server deploy**
   ```bash
   # On server with Docker
   docker-compose up -d
   ```

### ☁️ DigitalOcean/AWS Deploy

1. **Using Nginx**
   ```bash
   # Build the project
   npm run build
   
   # Copy files to web directory
   cp -r dist/* /var/www/html/
   ```

2. **Nginx configuration**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

---

## 🔧 Variabili d'Ambiente / Environment Variables

### File `.env` (opzionale)
```bash
# API URLs (se necessarie)
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=f.forzano99@gmail.com

# Analytics (opzionale)
VITE_GA_ID=G-XXXXXXXXXX
```

### Configurazione per produzione
```bash
# Vercel
vercel env add VITE_API_URL

# Netlify
netlify env:set VITE_API_URL https://api.example.com
```

## ✅ Checklist Pre-Deploy

### Build e Test
- [ ] `npm run build` completa senza errori
- [ ] `npm run preview` funziona correttamente
- [ ] Test su dispositivi mobili
- [ ] Test cambio lingua
- [ ] Verifica link e form

### SEO e Performance
- [ ] Meta tags configurati
- [ ] Immagini ottimizzate
- [ ] Compressione abilitata
- [ ] HTTPS configurato

### Funzionalità
- [ ] Navigazione funzionante
- [ ] Form di contatto operativo
- [ ] Link social corretti
- [ ] Download CV funzionante

### Monitoraggio
- [ ] Analytics configurato
- [ ] Error tracking impostato
- [ ] Performance monitoring

## 🎯 Domini Suggeriti

- `federicoforzano.dev`
- `federico-forzano.com`
- `forzano.dev`
- `quantumdev.it`

## 📊 Performance Tips

### Ottimizzazioni
```bash
# Analisi bundle
npm run build
npx vite-bundle-analyzer dist

# Test performance
npm install -g lighthouse
lighthouse https://yourdomain.com
```

### CDN e Caching
- Configura CDN per assets statici
- Abilita compressione gzip/brotli
- Imposta cache headers appropriati

---

**Ultima modifica:** 1 Luglio 2025  
**Stato:** ✅ Pronto per il deploy
