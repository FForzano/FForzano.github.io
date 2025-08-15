import it from './lang/it';
import en from './lang/en';

export const translations = {
  it,
  en
}

export default { it, en };

export const getTranslation = (language, key) => {
  const keys = key.split('.')
  let value = translations[language]
  
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k]
    } else {
      return key // Fallback to key if translation not found
    }
  }
  
  return value || key
}
