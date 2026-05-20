const CACHE_KEY_PREFIX = 'cronicas_trans_';
const BATCH_DEBOUNCE_MS = 50;

interface TranslationRequest {
  text: string;
  source: string;
  target: string;
  resolve: (value: string) => void;
  reject: (reason: any) => void;
}

class TranslateService {
  // Caché en memoria para búsquedas sincrónicas ultra rápidas
  // Clave: "origen_destino_textoOriginal", Valor: "textoTraducido"
  private cache = new Map<string, string>();

  // Cola de procesamiento por lotes (batching)
  private queue: TranslationRequest[] = [];
  private debounceTimer: any = null;

  constructor() {
    this.loadCacheFromStorage();
  }

  /**
   * Carga todas las traducciones previamente guardadas desde el localStorage
   */
  private loadCacheFromStorage() {
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(CACHE_KEY_PREFIX)) {
          const value = localStorage.getItem(key);
          if (value) {
            this.cache.set(key.slice(CACHE_KEY_PREFIX.length), value);
          }
        }
      }
    } catch (e) {
      console.warn('Error al cargar traducciones desde localStorage:', e);
    }
  }

  /**
   * Guarda una traducción tanto en localStorage como en la memoria caché
   */
  private setCache(originalText: string, translatedText: string, source: string, target: string) {
    const cacheKey = `${source}_${target}_${originalText}`;
    this.cache.set(cacheKey, translatedText);
    try {
      localStorage.setItem(`${CACHE_KEY_PREFIX}${cacheKey}`, translatedText);
    } catch (e) {
      console.warn('Error al guardar traducción en localStorage:', e);
    }
  }

  /**
   * Recupera una traducción desde la memoria caché
   */
  public getFromCache(text: string, source: string, target: string): string | null {
    if (source === target) return text;
    const cacheKey = `${source}_${target}_${text}`;
    return this.cache.get(cacheKey) || null;
  }

  /**
   * Traducción dinámica de un texto individual.
   * Si ya está en caché, resuelve de inmediato. Si no, lo encola para traducirlo en lote.
   */
  public translate(text: string, source: string = 'es', target: string = 'en'): Promise<string> {
    const trimmed = text.trim();
    if (!trimmed || source === target) {
      return Promise.resolve(text);
    }

    const cached = this.getFromCache(trimmed, source, target);
    if (cached) {
      return Promise.resolve(cached);
    }

    return new Promise((resolve, reject) => {
      this.queue.push({
        text: trimmed,
        source,
        target,
        resolve,
        reject,
      });

      this.scheduleBatchProcess();
    });
  }

  /**
   * Programa el procesamiento de la cola por lotes usando debounce
   */
  private scheduleBatchProcess() {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.processQueue();
    }, BATCH_DEBOUNCE_MS);
  }

  /**
   * Procesa la cola actual de solicitudes de traducción
   */
  private async processQueue() {
    if (this.queue.length === 0) return;

    const currentBatch = [...this.queue];
    this.queue = [];
    this.debounceTimer = null;

    // Agrupar las solicitudes por idioma origen e idioma destino
    const groups: { [key: string]: TranslationRequest[] } = {};
    currentBatch.forEach((req) => {
      const groupKey = `${req.source}_${req.target}`;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(req);
    });

    // Procesar cada grupo de idioma de manera independiente
    for (const groupKey of Object.keys(groups)) {
      const requests = groups[groupKey];
      const source = requests[0].source;
      const target = requests[0].target;
      const uniqueTexts = Array.from(new Set(requests.map((r) => r.text)));

      try {
        // Ejecutar las peticiones en paralelo para máxima velocidad (la API GTX soporta alta concurrencia y es súper rápida)
        const translationPromises = uniqueTexts.map(text =>
          this.fetchTranslationFromGoogle(text, source, target)
        );

        const translations = await Promise.all(translationPromises);

        // Mapear los textos originales con sus traducciones resultantes
        const translationMap = new Map<string, string>();
        uniqueTexts.forEach((text, index) => {
          const translated = translations[index] || text;
          translationMap.set(text, translated);
          this.setCache(text, translated, source, target);
        });

        // Resolver todas las promesas pendientes en el grupo
        requests.forEach((req) => {
          const result = translationMap.get(req.text) || req.text;
          req.resolve(result);
        });
      } catch (error) {
        console.error('El lote de traducción falló, usando los textos originales como respaldo:', error);
        // Respaldo: resolver con el texto original en caso de error
        requests.forEach((req) => {
          req.resolve(req.text);
        });
      }
    }
  }

  /**
   * Realiza la petición de red a la API abierta Google Translate GTX (libre de CORS, rápida y sin claves)
   */
  private async fetchTranslationFromGoogle(
    text: string,
    source: string,
    target: string
  ): Promise<string> {
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`¡Error HTTP! Estado: ${response.status}`);
      }

      const data = await response.json();

      let translatedText = '';
      if (data && data[0]) {
        // Google divide el texto por oraciones, reconstruimos el párrafo completo
        data[0].forEach((item: any) => {
          if (item && item[0]) {
            translatedText += item[0];
          }
        });
      }

      if (translatedText) {
        return translatedText.trim();
      } else {
        throw new Error('Respuesta de traducción vacía');
      }
    } catch (err) {
      console.warn(`Error al traducir el texto: "${text.substring(0, 20)}..."`, err);
      // Retornar el texto original como respaldo para garantizar que la app siga funcionando sin problemas
      return text;
    }
  }
}

export const translateService = new TranslateService();
