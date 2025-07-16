# 🌐 Sistema di Internazionalizzazione

## Come usare le traduzioni nel portfolio

### 📁 Struttura del sistema i18n

```
src/
├── contexts/
│   └── LanguageContext.jsx    # Context per gestire la lingua
├── hooks/
│   └── useTranslation.js      # Hook per le traduzioni
├── translations/
│   └── index.js               # File con tutte le traduzioni
└── components/
    └── LanguageSelector.jsx   # Componente selettore lingua
```

### 🔧 Come funziona

1. **LanguageContext**: Gestisce lo stato della lingua corrente e la persistenza in localStorage
2. **useTranslation Hook**: Fornisce la funzione `t()` per tradurre le stringhe
3. **LanguageSelector**: Componente UI per cambiare lingua

### 📝 Come aggiungere nuove traduzioni

1. **Apri** `src/translations/index.js`
2. **Aggiungi** la chiave nella struttura nested per entrambe le lingue:

```javascript
export const translations = {
  it: {
    // Sezione esistente
    newSection: {
      title: 'Nuovo Titolo',
      description: 'Nuova descrizione in italiano'
    }
  },
  en: {
    // Sezione esistente
    newSection: {
      title: 'New Title',
      description: 'New description in English'
    }
  }
}
```

3. **Usa** nei componenti:

```jsx
import { useTranslation } from '../hooks/useTranslation'

const MyComponent = () => {
  const { t } = useTranslation()
  
  return (
    <div>
      <h1>{t('newSection.title')}</h1>
      <p>{t('newSection.description')}</p>
    </div>
  )
}
```

### 🎛️ Controllo lingua

- **Automatico**: Salva la preferenza in localStorage
- **Toggle**: Pulsante per cambiare IT/EN
- **Default**: Italiano (it)

### 📋 Traduzioni implementate

- ✅ **Navigazione**: Home, About, Skills, Projects, Contact
- ✅ **Hero Section**: Saluto, titolo, descrizione, CTA
- ✅ **About Section**: Presentazione, percorso, formazione
- ✅ **Skills Section**: Titoli categorie, descrizioni
- ✅ **Projects Section**: Titoli, descrizioni, categorie
- ✅ **Contact Section**: Form, informazioni contatto
- ✅ **Footer**: Links, copyright, informazioni

### 🚀 Estensioni future

- Aggiungere altre lingue (es. francese, spagnolo)
- Traduzioni per date e numeri
- Pluralizzazione automatica
- Caricamento dinamico delle traduzioni
