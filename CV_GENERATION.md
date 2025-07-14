# Sistema di Generazione CV Dinamico / Dynamic CV Generation System

## 🇮🇹 Sistema CV Italiano

### ✨ **Caratteristiche Principali**

Il portfolio ora include un **sistema avanzato di generazione CV dinamico** che crea automaticamente PDF personalizzati basati sui contenuti del sito web.

#### **🚀 Funzionalità**
- **Generazione dinamica**: Il CV viene creato in tempo reale dai dati del sito
- **Bilingue**: PDF generati in italiano o inglese a seconda della lingua selezionata
- **Design professionale**: Layout pulito e moderno ottimizzato per ATS
- **Contenuto aggiornato**: Sempre sincronizzato con le informazioni del portfolio
- **Fallback**: File HTML di backup per compatibilità massima

#### **📁 Struttura del Sistema**
```
src/components/
├── CVGenerator.jsx          # Generatore semplice con jsPDF
├── ReactPDFGenerator.jsx    # Generatore avanzato con @react-pdf/renderer  
├── CVDownloadManager.jsx    # Manager unificato con fallback
└── Hero.jsx                 # Integrazione nel componente principale

public/
└── cv-fallback.html         # Backup statico HTML
```

#### **🔧 Tecnologie Utilizzate**
- **jsPDF**: Generazione PDF leggera e veloce
- **@react-pdf/renderer**: PDF avanzati con layout professionale
- **React Context**: Dati tradotti dinamicamente
- **Automatic Fallback**: Sistema di recupero a cascata

#### **⚡ Come Funziona**
1. **Click sul pulsante "Scarica CV"** nel Hero
2. **Sistema preferito**: Genera PDF con @react-pdf/renderer
3. **Fallback automatico**: Se fallisce, usa jsPDF
4. **Emergency fallback**: Reindirizza a cv-fallback.html
5. **Download automatico**: File scaricato con nome dinamico

---

## 🇬🇧 English CV System

### ✨ **Key Features**

The portfolio now includes an **advanced dynamic CV generation system** that automatically creates personalized PDFs based on website content.

#### **🚀 Capabilities**
- **Dynamic generation**: CV created in real-time from site data
- **Bilingual**: PDFs generated in Italian or English based on selected language
- **Professional design**: Clean, modern layout optimized for ATS
- **Updated content**: Always synchronized with portfolio information
- **Fallback**: HTML backup file for maximum compatibility

#### **📁 System Structure**
```
src/components/
├── CVGenerator.jsx          # Simple generator with jsPDF
├── ReactPDFGenerator.jsx    # Advanced generator with @react-pdf/renderer  
├── CVDownloadManager.jsx    # Unified manager with fallback
└── Hero.jsx                 # Integration in main component

public/
└── cv-fallback.html         # Static HTML backup
```

#### **🔧 Technologies Used**
- **jsPDF**: Lightweight and fast PDF generation
- **@react-pdf/renderer**: Advanced PDFs with professional layout
- **React Context**: Dynamically translated data
- **Automatic Fallback**: Cascading recovery system

#### **⚡ How It Works**
1. **Click "Download CV" button** in Hero section
2. **Preferred system**: Generate PDF with @react-pdf/renderer
3. **Automatic fallback**: If fails, use jsPDF
4. **Emergency fallback**: Redirect to cv-fallback.html
5. **Automatic download**: File downloaded with dynamic name

---

## 🛠️ Configurazione Tecnica / Technical Configuration

### **Installazione Dipendenze / Dependencies Installation**
```bash
npm install jspdf html2canvas @react-pdf/renderer
```

### **Struttura Dati CV / CV Data Structure**
Il sistema estrae automaticamente i dati da:
- **Traduzioni**: `src/translations/index.js`
- **Componenti**: Hero, About, Skills, Projects
- **Contesti React**: LanguageContext per localizzazione

### **Personalizzazione / Customization**

#### **Modifica Layout PDF / Modify PDF Layout**
Edita `ReactPDFGenerator.jsx`:
```javascript
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    // Personalizza qui / Customize here
  }
})
```

#### **Aggiunta Sezioni / Add Sections**
Nel componente `CVDocument`:
```javascript
// Aggiungi nuova sezione / Add new section
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Nuova Sezione</Text>
  {/* Contenuto / Content */}
</View>
```

#### **Modifica Stili / Modify Styles**
In `CVGenerator.jsx` per la versione semplice:
```javascript
doc.setFontSize(16)
doc.setTextColor(59, 130, 246) // Primary blue
```

### **🎨 Design del CV / CV Design**

#### **Sezioni Incluse / Included Sections**
1. **Header** - Nome, titolo, contatti
2. **Profilo** - Descrizione professionale
3. **Formazione** - Percorso accademico
4. **Esperienza** - Lavoro e ricerca
5. **Competenze** - Skills tecniche
6. **Progetti** - Portfolio principale
7. **Pubblicazioni** - Paper e conferenze

#### **Formattazione / Formatting**
- **Font**: Helvetica (universalmente compatibile)
- **Colori**: Schema blu/grigio professionale
- **Layout**: Single-column, ATS-friendly
- **Dimensioni**: A4 standard
- **Margini**: 30pt per leggibilità ottimale

### **🔄 Sistema di Fallback / Fallback System**

1. **Primo tentativo**: @react-pdf/renderer (layout avanzato)
2. **Secondo tentativo**: jsPDF (generazione semplice)
3. **Ultimo risorsa**: cv-fallback.html (visualizzazione web)

### **📱 Responsive e Accessibilità / Responsive & Accessibility**

- **Pulsante disabilitato** durante generazione
- **Indicatore di caricamento** con spinner
- **Messaggi di errore** localizzati
- **Gestione stati** con loading/error/success

### **🚀 Deploy e Performance / Deployment & Performance**

#### **Build Ottimizzazioni / Build Optimizations**
- Librerie PDF code-splitted automaticamente
- Generazione lato client (no server required)
- Cache dei template per performance migliori

#### **Compatibilità Browser / Browser Compatibility**
- ✅ Chrome/Chromium
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ⚠️ IE non supportato (come previsto per React)

### **🎯 Esempi di Utilizzo / Usage Examples**

#### **Download Programmatico / Programmatic Download**
```javascript
import CVDownloadManager from './components/CVDownloadManager'

const { handleDownloadCV } = CVDownloadManager()

// Download versione avanzata / Advanced version download
await handleDownloadCV(true)

// Download versione semplice / Simple version download  
await handleDownloadCV(false)
```

#### **Personalizzazione Nome File / Filename Customization**
Il nome del file generato segue il pattern:
```
Federico_Forzano_CV_[IT|EN]_[ANNO].pdf
```

---

## 🔧 Troubleshooting

### **Problemi Comuni / Common Issues**

1. **PDF non si genera**
   - Verifica console browser per errori
   - Prova la versione semplice (jsPDF)
   - Usa fallback HTML

2. **Layout non corretto**
   - Controlla stili in `ReactPDFGenerator.jsx`
   - Verifica lunghezza testi per overflow

3. **Traduzioni mancanti**
   - Aggiorna `src/translations/index.js`
   - Riavvia server di sviluppo

### **Debug Mode / Modalità Debug**
```javascript
// In CVDownloadManager.jsx
console.log('Generating PDF with language:', language)
console.log('Translation data:', t('hero.title'))
```

---

## 📈 Roadmap Future / Future Roadmap

### **Miglioramenti Pianificati / Planned Improvements**
- [ ] Template CV multipli
- [ ] Esportazione in formato Word
- [ ] Integrazione con API esterne
- [ ] Cache intelligente per template
- [ ] Preview PDF prima del download
- [ ] Firma digitale opzionale

### **Ottimizzazioni Performance / Performance Optimizations**
- [ ] Lazy loading componenti PDF
- [ ] Web Workers per generazione pesante
- [ ] CDN per assets statici
- [ ] Compressione PDF avanzata

---

**Ultimo aggiornamento**: 1 Luglio 2025  
**Versione sistema**: 1.0.0  
**Compatibilità**: React 18+, Node 18+
