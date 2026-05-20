import { useTranslation as useTranslationFromContext } from '../contexts/LanguageContext';

/**
 * Hook personalizado para acceder al contexto de traducción.
 * Proporciona currentLanguage, changeLanguage, el estado de carga (loading) y la función de traducción `t`.
 */
export function useTranslation() {
  return useTranslationFromContext();
}
export default useTranslation;

