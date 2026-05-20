import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { translateService } from '../services/translateService';

type Language = 'es' | 'en';

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  loading: boolean;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Excluir elementos de la traducción automática del DOM
const BLACKLISTED_TAGS = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'CODE', 'PRE', 'SVG', 'PATH'];
const BLACKLISTED_CLASSES = ['no-translate', 'navbar__toggle', 'navbar__brand-icon'];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cronicas_lang') as Language;
      return saved === 'en' || saved === 'es' ? saved : 'es';
    } catch {
      return 'es';
    }
  });

  const [loading, setLoading] = useState(false);
  
  // Realizar seguimiento de las actualizaciones de estado para las llamadas a t() en componentes
  const [translationVersion, setTranslationVersion] = useState(0);

  // Mapeo inverso para restaurar el texto en español desde el inglés
  // Clave: texto en inglés, Valor: texto en español
  const englishToSpanish = useRef<Map<string, string>>(new Map());
  const observerRef = useRef<MutationObserver | null>(null);
  const isTranslatingDOM = useRef(false);

  // Actualizar localStorage cuando cambia el idioma
  useEffect(() => {
    try {
      localStorage.setItem('cronicas_lang', currentLanguage);
    } catch (e) {
      console.warn('Error al guardar el idioma en localStorage:', e);
    }
  }, [currentLanguage]);

  // Función de asistencia para la traducción sincrónica de strings de React
  const t = (text: string): string => {
    if (currentLanguage === 'es' || !text.trim()) return text;
    
    const cached = translateService.getFromCache(text, 'es', currentLanguage);
    if (cached) {
      // Registrar mapeo inverso
      englishToSpanish.current.set(cached, text);
      return cached;
    }

    // Activar traducción asincrónica y actualizar el estado al resolver para re-renderizar
    translateService.translate(text, 'es', currentLanguage).then((translated) => {
      englishToSpanish.current.set(translated, text);
      setTranslationVersion((v) => v + 1);
    });

    return text; // Retornar el español como respaldo mientras se traduce
  };

  const changeLanguage = (lang: Language) => {
    if (lang === currentLanguage) return;
    setLoading(true);
    setCurrentLanguage(lang);
    // El estado de carga es breve para dar una sensación de fluidez y respuesta rápida
    setTimeout(() => setLoading(false), 300);
  };

  // Asistente: verificar si un string de texto debe traducirse
  const shouldTranslate = (text: string | null): boolean => {
    if (!text) return false;
    const trimmed = text.trim();
    if (!trimmed) return false;
    
    // Ignorar números puros, caracteres especiales e iconos
    if (/^[0-9\s\-_–—()\[\].,\/#!$%\^&\*;:{}=\-_`~"'+|<>?@\\◈→←↑↓]*$/.test(trimmed)) {
      return false;
    }
    
    return true;
  };

  // Asistente: verificar si un elemento o sus ancestros están en la lista negra
  const isBlacklisted = (element: Element | null): boolean => {
    let el = element;
    while (el) {
      if (BLACKLISTED_TAGS.includes(el.tagName)) return true;
      if (BLACKLISTED_CLASSES.some(cls => el!.classList.contains(cls))) return true;
      if (el.getAttribute('translate') === 'no') return true;
      el = el.parentElement;
    }
    return false;
  };

  // Recorrer el árbol del DOM y traducir los nodos de texto y atributos aplicables
  const translateDOM = (root: Node, lang: Language) => {
    if (isTranslatingDOM.current) return;
    isTranslatingDOM.current = true;

    const textNodesToTranslate: { node: Node; original: string }[] = [];
    const attributeNodesToTranslate: { element: Element; attr: string; original: string }[] = [];

    const walk = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as Element;
        if (isBlacklisted(element)) return;

        // Verificar marcadores de posición (placeholders) de entradas
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          const placeholder = element.getAttribute('placeholder');
          if (shouldTranslate(placeholder)) {
            attributeNodesToTranslate.push({ element, attr: 'placeholder', original: placeholder! });
          }
        }

        // Verificar textos de ayuda o títulos flotantes
        const title = element.getAttribute('title');
        if (shouldTranslate(title)) {
          attributeNodesToTranslate.push({ element, attr: 'title', original: title! });
        }

        // Verificar etiquetas ARIA
        const ariaLabel = element.getAttribute('aria-label');
        if (shouldTranslate(ariaLabel)) {
          attributeNodesToTranslate.push({ element, attr: 'aria-label', original: ariaLabel! });
        }
      }

      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (parent && !isBlacklisted(parent)) {
          const val = node.nodeValue;
          if (shouldTranslate(val)) {
            textNodesToTranslate.push({ node, original: val! });
          }
        }
      }

      let child = node.firstChild;
      while (child) {
        walk(child);
        child = child.nextSibling;
      }
    };

    walk(root);

    // Aplicar las traducciones
    if (lang === 'en') {
      // Traducir nodos de texto
      textNodesToTranslate.forEach(({ node, original }) => {
        const trimmed = original.trim();
        const cached = translateService.getFromCache(trimmed, 'es', 'en');
        
        if (cached) {
          englishToSpanish.current.set(cached, trimmed);
          // Preservar los espacios en blanco que rodean el texto
          const leadingSpace = original.match(/^\s*/)?.[0] || '';
          const trailingSpace = original.match(/\s*$/)?.[0] || '';
          node.nodeValue = leadingSpace + cached + trailingSpace;
        } else {
          translateService.translate(trimmed, 'es', 'en').then((translated) => {
            englishToSpanish.current.set(translated, trimmed);
            const leadingSpace = original.match(/^\s*/)?.[0] || '';
            const trailingSpace = original.match(/\s*$/)?.[0] || '';
            node.nodeValue = leadingSpace + translated + trailingSpace;
          });
        }
      });

      // Traducir atributos
      attributeNodesToTranslate.forEach(({ element, attr, original }) => {
        const trimmed = original.trim();
        const cached = translateService.getFromCache(trimmed, 'es', 'en');

        if (cached) {
          englishToSpanish.current.set(cached, trimmed);
          element.setAttribute(attr, cached);
        } else {
          translateService.translate(trimmed, 'es', 'en').then((translated) => {
            englishToSpanish.current.set(translated, trimmed);
            element.setAttribute(attr, translated);
          });
        }
      });
    } else {
      // Restaurar el texto en español
      textNodesToTranslate.forEach(({ node, original }) => {
        const trimmed = original.trim();
        const spanish = englishToSpanish.current.get(trimmed);
        if (spanish) {
          const leadingSpace = original.match(/^\s*/)?.[0] || '';
          const trailingSpace = original.match(/\s*$/)?.[0] || '';
          node.nodeValue = leadingSpace + spanish + trailingSpace;
        }
      });

      attributeNodesToTranslate.forEach(({ element, attr, original }) => {
        const trimmed = original.trim();
        const spanish = englishToSpanish.current.get(trimmed);
        if (spanish) {
          element.setAttribute(attr, spanish);
        }
      });
    }

    isTranslatingDOM.current = false;
  };

  // Ejecutar la traducción a nivel de DOM en el cambio de idioma y observar mutaciones
  useEffect(() => {
    const rootElement = document.getElementById('root') || document.body;
    
    // Realizar la traducción inicial de toda la página
    translateDOM(rootElement, currentLanguage);

    // Configurar MutationObserver para vigilar cambios dinámicos del DOM (como ruteo o inyección de contenidos)
    const observer = new MutationObserver((mutations) => {
      let shouldReprocess = false;
      
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Nuevos elementos añadidos al DOM
          for (let i = 0; i < mutation.addedNodes.length; i++) {
            const node = mutation.addedNodes[i];
            if (node.nodeType === Node.ELEMENT_NODE && !isBlacklisted(node as Element)) {
              shouldReprocess = true;
              break;
            }
            if (node.nodeType === Node.TEXT_NODE && shouldTranslate(node.nodeValue)) {
              shouldReprocess = true;
              break;
            }
          }
        } else if (mutation.type === 'characterData') {
          // Contenido de texto mutado por los re-renders de React
          const parent = mutation.target.parentElement;
          if (parent && !isBlacklisted(parent)) {
            const val = mutation.target.nodeValue;
            if (shouldTranslate(val)) {
              // Si el idioma actual es EN y el texto cambió a español, o viceversa, se vuelve a procesar
              const trimmed = val!.trim();
              if (currentLanguage === 'en' && !englishToSpanish.current.has(trimmed)) {
                shouldReprocess = true;
                break;
              } else if (currentLanguage === 'es' && englishToSpanish.current.has(trimmed)) {
                shouldReprocess = true;
                break;
              }
            }
          }
        }
        if (shouldReprocess) break;
      }

      if (shouldReprocess) {
        // Desconectar temporalmente para evitar procesar nuestras propias actualizaciones en un bucle infinito
        observer.disconnect();
        translateDOM(rootElement, currentLanguage);
        observer.observe(rootElement, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }
    });

    observer.observe(rootElement, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    observerRef.current = observer;

    // Traducción del título del documento (pestaña del navegador)
    const pageTitle = document.title;
    if (currentLanguage === 'en') {
      translateService.translate(pageTitle, 'es', 'en').then((translated) => {
        document.title = translated;
      });
    } else {
      const originalTitle = englishToSpanish.current.get(pageTitle);
      if (originalTitle) {
        document.title = originalTitle;
      } else {
        document.title = 'Crónicas de la Calle — Memoria Urbana de Medellín';
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [currentLanguage, translationVersion]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, loading, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation debe usarse dentro de un LanguageProvider');
  }
  return context;
};
