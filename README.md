# Portfolio Federico Forzano / Federico Forzano's Portfolio

**🇮🇹 Italiano** | **🇬🇧 English**

---

## 🇮🇹 **Versione Italiana**

Portfolio moderno e responsive di Federico Forzano, dottorando in Ingegneria presso l'Università di Ferrara, specializzato in quantum information science e sviluppatore con esperienza in tecnologie web moderne.

## ✨ **Caratteristiche**
- **Bilingue** - Supporto completo per italiano e inglese
- **Design responsive** - Ottimizzato per tutti i dispositivi
- **Animazioni fluide** - Utilizzando Framer Motion
- **Portfolio personalizzato** - Con progetti di ricerca e sviluppo
- **CV dinamico** - Generazione automatica PDF dai contenuti del sito

---

## 🇬🇧 **English Version**

Modern and responsive portfolio of Federico Forzano, PhD student in Engineering at the University of Ferrara, specialized in quantum information science and developer with experience in modern web technologies.

### ✨ **Features**
- **Bilingual** - Full support for Italian and English
- **Responsive design** - Optimized for all devices
- **Smooth animations** - Using Framer Motion
- **Personalized portfolio** - With research and development projects
- **Dynamic CV** - Automatic PDF generation from site content

---

## 🚀 Tecnologie utilizzate / Technologies used

- **React 18** - Libreria per l'interfaccia utente / UI Library
- **Vite** - Build tool veloce e moderno / Fast and modern build tool
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Libreria per animazioni / Animation library
- **React Router** - Routing per Single Page Application / SPA Routing
- **Lucide React** - Icone moderne e personalizzabili / Modern customizable icons
- **jsPDF & @react-pdf/renderer** - Generazione CV dinamica / Dynamic CV generation
- **Docker** - Containerizzazione per sviluppo / Development containerization
- **i18n** - Sistema di internazionalizzazione / Internationalization system

## 🛠️ Setup del progetto / Project Setup

### Prerequisiti / Prerequisites

- Node.js (versione 18 o superiore / version 18 or higher)
- npm o yarn
- Docker (opzionale / optional, per ambiente containerizzato / for containerized environment)

### Installazione locale / Local Installation

1. **Clona il repository / Clone the repository**
   ```bash
   git clone <url-del-repository>
   cd portfolio
   ```

2. **Installa le dipendenze / Install dependencies**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo / Start development server**
   ```bash
   npm run dev
   ```

4. **Apri il browser / Open browser**
   ```
   http://localhost:3000
   ```

### Setup con Docker / Docker Setup

1. **Costruisci e avvia con Docker Compose / Build and start with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Oppure usa Docker direttamente / Or use Docker directly**
   ```bash
   # Costruisci l'immagine / Build the image
   docker build -t portfolio .
   
   # Avvia il container / Start the container
   docker run -p 3000:3000 -v $(pwd):/app portfolio
   ```

## 📝 Script disponibili

- `npm run dev` - Avvia il server di sviluppo
- `npm run build` - Costruisce l'app per la produzione
- `npm run preview` - Anteprima del build di produzione
- `npm run lint` - Esegue il linting del codice

## 🎨 Personalizzazione

### Colori
I colori principali sono configurati in `tailwind.config.js`. Puoi modificare la palette di colori:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... altri toni
    900: '#1e3a8a',
  },
}
```

### Contenuti
I contenuti del portfolio si trovano nei seguenti componenti:
- `src/components/Hero.jsx` - Sezione hero con informazioni principali
- `src/components/About.jsx` - Sezione about
- `src/components/Skills.jsx` - Competenze tecniche
- `src/components/Projects.jsx` - Progetti del portfolio
- `src/components/Contact.jsx` - Informazioni di contatto

### Animazioni
Le animazioni sono gestite con Framer Motion. Puoi personalizzarle modificando gli oggetti `variants` nei componenti.

## � Documentazione / Documentation

- **[CV_GENERATION.md](./CV_GENERATION.md)** - Sistema di generazione CV dinamico / Dynamic CV generation system
- **[INTERNATIONALIZATION.md](./INTERNATIONALIZATION.md)** - Guida al sistema i18n / i18n system guide  
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Guida completa al deploy / Complete deployment guide
- **[TESTING.md](./TESTING.md)** - Checklist di testing / Testing checklist
- **[DOCKER.md](./DOCKER.md)** - Configurazione Docker / Docker configuration

## �📁 Struttura del progetto

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── Dockerfile
├── docker-compose.yml
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🚀 Deploy

### Build per produzione
```bash
npm run build
```

### Deploy su Vercel/Netlify
Il progetto è già configurato per il deploy su piattaforme come Vercel o Netlify. Basta collegare il repository e la build avverrà automaticamente.

## 📧 Contatti

Per domande o suggerimenti:
- Email: f.forzano99@gmail.com
- LinkedIn: [Federico Forzano](https://linkedin.com/in/federico-forzano)
- GitHub: [FForzano](https://github.com/FForzano)

## 🎯 Status del Progetto

### ✅ Completato
- [x] Struttura React con Vite e Tailwind CSS
- [x] Sistema di internazionalizzazione completo (IT/EN)
- [x] Tutti i componenti localizzati
- [x] Contenuti personalizzati dal CV
- [x] Design responsive e animazioni
- [x] Build di produzione funzionante
- [x] Configurazione Docker
- [x] Documentazione completa

### 🚀 Pronto per il Deploy
Il portfolio è completamente funzionale e testato:
- ✅ Build di produzione senza errori
- ✅ Preview funzionante
- ✅ Internazionalizzazione completa
- ✅ Responsive design
- ✅ Contenuti personalizzati

### 📈 Prossimi Miglioramenti (Opzionali)
- [ ] Ottimizzazione SEO avanzata
- [ ] Integrazione con CMS headless
- [ ] Analytics e tracking
- [ ] PWA (Progressive Web App)
- [ ] Modalità scura

## 📄 Licenza

Questo progetto è rilasciato sotto licenza MIT.
Personal portfolio website
