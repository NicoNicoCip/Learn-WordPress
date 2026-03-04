# Lección 31: Fundamentos de SEO para WordPress

## Objetivos
- Entender cómo los motores de búsqueda encuentran y posicionan tu sitio
- Optimizar cada página y entrada para los motores de búsqueda
- Usar Yoast SEO de forma efectiva
- Implementar los fundamentos del SEO técnico

---

## Cómo Funcionan los Motores de Búsqueda

### El Proceso Básico:
1. **Rastreo (Crawling)** — Google envía "bots" para descubrir y escanear tus páginas
2. **Indexación (Indexing)** — Google almacena y categoriza tu contenido
3. **Posicionamiento (Ranking)** — Google decide dónde mostrar tus páginas en los resultados de búsqueda

### Qué Afecta al Posicionamiento:
- **Calidad del contenido** — contenido relevante, útil y bien escrito
- **Palabras clave** — los términos que la gente busca coinciden con tu contenido
- **Velocidad del sitio** — los sitios más rápidos se posicionan mejor
- **Diseño móvil** — el diseño responsive para móvil es obligatorio
- **Backlinks** — otros sitios que enlazan al tuyo
- **SEO técnico** — estructura del sitio correcta, sitemaps, URLs limpias
- **Experiencia de usuario** — tasa de rebote baja, buena navegación

---

## SEO On-Page (Por Página/Entrada)

### Para Cada Página y Entrada, Optimiza Esto:

#### 1. SEO Title (Etiqueta de Título)
El elemento de SEO on-page más importante:
- Aparece como el titular clicable en los resultados de Google
- Mantenlo por debajo de **60 caracteres**
- Incluye tu **palabra clave objetivo** cerca del principio
- Hazlo atractivo — determina si la gente hace clic

**Ejemplos:**
- Malo: "Inicio"
- Bueno: "Servicios Profesionales de Diseño Web | Tu Empresa"
- Malo: "Sobre Nosotros"
- Bueno: "Sobre Nuestra Agencia — 10 Años de Diseño Premiado"

#### 2. Meta Description
El fragmento que se muestra debajo del título en los resultados de Google:
- Mantenlo por debajo de **155 caracteres**
- Incluye tu palabra clave objetivo de forma natural
- Escribe un resumen atractivo que anime a hacer clic
- Incluye una llamada a la acción

**Ejemplo:**
"Diseñamos sitios web impresionantes que generan resultados. Más de 10 años de experiencia, más de 200 proyectos completados. Solicita una consulta gratuita hoy."

#### 3. URL Slug
La URL de la página:
- Mantenlo **corto y descriptivo**
- Incluye la palabra clave principal
- Usa guiones entre las palabras
- Elimina palabras innecesarias (un, el, y, etc.)

**Ejemplos:**
- Malo: `tusitio.com/nuestros-servicios-profesionales-de-diseno-web-para-pequenas-empresas`
- Bueno: `tusitio.com/servicios-diseno-web`

#### 4. Encabezados (H1-H6)
- Usa **un H1** por página (normalmente el título principal)
- Usa **H2** para las secciones principales
- Usa **H3** para las subsecciones
- Incluye palabras clave de forma natural en los encabezados
- Usa una jerarquía lógica (H1 → H2 → H3, nunca saltes niveles)

#### 5. Contenido
- Escribe **de forma natural** — no llenes de palabras clave
- Apunta a **300+ palabras** en cada página (más para entradas de blog)
- Usa **palabras clave y términos relacionados** de forma natural
- Divide el texto con encabezados, listas e imágenes
- Enlazado interno — enlaza a otras páginas de tu sitio

#### 6. Imágenes
- Usa **nombres de archivo descriptivos** (ejemplo-diseno-web.jpg, no IMG_001.jpg)
- Escribe **texto alternativo (alt text)** significativo para cada imagen
- Incluye palabras clave en el alt text donde sea natural
- Comprime las imágenes para carga rápida

---

## Usar Yoast SEO

### El Panel de Yoast
Al editar cualquier entrada o página, desplázate hacia abajo para encontrar el panel de Yoast SEO:

### Focus Keyphrase
1. Introduce la palabra clave o frase principal para esta página
2. Yoast analiza tu contenido para esa palabra clave
3. Verifica: título, meta description, URL, encabezados, contenido, imágenes

### Análisis SEO
Yoast muestra puntos de colores:
- **Verde** — bien, optimizado correctamente
- **Naranja** — podría mejorar
- **Rojo** — necesita atención

Recomendaciones comunes:
- "The focus keyphrase doesn't appear in the SEO title"
- "The meta description is too short"
- "No internal links appear in this page"
- "Images on this page do not have alt attributes with the focus keyphrase"

### Análisis de Legibilidad
Verifica qué tan fácil es leer tu contenido:
- Longitud de oraciones (mantén por debajo de 20 palabras de media)
- Longitud de párrafos (mantén por debajo de 150 palabras)
- Uso de palabras de transición ("sin embargo", "por lo tanto", "además")
- Uso de voz pasiva (minimízalo)
- Distribución de subtítulos (añade encabezados cada 300 palabras)

### Vista Previa del Snippet
Muestra cómo aparecerá tu página en Google:
1. Haz clic en **"Edit snippet"** en el panel de Yoast
2. Personaliza el **SEO Title** y la **Meta Description**
3. Ve una vista previa del resultado de búsqueda en Google

---

## SEO Técnico

### XML Sitemap
Yoast genera automáticamente un sitemap:
- Ubicado en: `tusitio.com/sitemap_index.xml`
- Lista todas tus páginas, entradas e imágenes
- Envíalo a Google Search Console cuando tu sitio esté en producción

### Robots.txt
Controla qué páginas pueden rastrear los motores de búsqueda:
- Yoast gestiona esto automáticamente
- Accede en: `tusitio.com/robots.txt`

### URLs Canónicas
Previene problemas de contenido duplicado:
- Yoast añade automáticamente etiquetas canónicas
- Indica a los motores de búsqueda qué versión de una página es la "oficial"

### Schema Markup (Datos Estructurados)
Ayuda a los motores de búsqueda a entender tu contenido:
- Yoast añade schema básico automáticamente
- Tipos: Article, Organization, Product, FAQ, etc.
- Puede resultar en rich snippets en resultados de búsqueda (estrellas, precios, FAQs)

---

## Checklist SEO para Cada Página

Antes de publicar cualquier página o entrada:

- [ ] **SEO Title** establecido y por debajo de 60 caracteres
- [ ] **Meta Description** establecida y por debajo de 155 caracteres
- [ ] **URL Slug** corto e incluye la palabra clave
- [ ] **Focus Keyphrase** establecida en Yoast
- [ ] **Puntuación SEO de Yoast** en verde (o al menos naranja)
- [ ] **Encabezado H1** usado una vez e incluye la palabra clave
- [ ] **Encabezados H2/H3** usados para las secciones
- [ ] **Enlaces internos** a otras páginas de tu sitio
- [ ] **Imágenes tienen alt text** con inclusión natural de la palabra clave
- [ ] **Contenido de 300+ palabras** (más para entradas de blog)
- [ ] **Puntuación de legibilidad** buena (verde o naranja en Yoast)

---

## SEO Local (Para Negocios Locales)

Si construyes sitios para negocios locales:

1. **Google Business Profile** — crea/reclama el listado del negocio (lo más importante)
2. **Consistencia NAP** — Nombre, Dirección, Teléfono deben ser idénticos en todas partes
3. **Palabras clave locales** — incluye ciudad/región en títulos y contenido (ej., "Diseño Web en Madrid")
4. **Google Maps** — incrusta un mapa en la página de contacto
5. **Reseñas de clientes** — incentiva las reseñas en Google
6. **Schema local** — añade datos estructurados de LocalBusiness

---

## Estrategia de Contenido para SEO

### Entradas de Blog para Tráfico
Publicar regularmente entradas de blog útiles genera tráfico orgánico:
1. **Investiga palabras clave** — encuentra qué busca tu audiencia
   - Usa herramientas gratuitas: "People also ask" de Google, AnswerThePublic, Ubersuggest
2. **Escribe contenido útil** — responde preguntas que tiene tu audiencia
3. **Apunta a 1,000-2,000 palabras** para entradas de blog
4. **Publica consistentemente** — semanal o quincenal
5. **Actualiza entradas antiguas** — refresca el contenido para mantenerlo relevante

### Investigación de Palabras Clave (Básica)
1. Piensa en qué buscan tus clientes
2. Usa Google — escribe una consulta y mira:
   - Sugerencias de autocompletado
   - Cajas de "People also ask"
   - "Búsquedas relacionadas" en la parte inferior
3. Estas son palabras clave reales que la gente usa — crea contenido alrededor de ellas

---

## Ejercicios

1. **Optimiza tu página de inicio**: Establece una focus keyphrase, escribe un SEO title y una meta description. Consigue que la puntuación de Yoast sea verde.

2. **Optimiza tu página Acerca de**: Igual que arriba — keyphrase, título, descripción.

3. **Optimiza una entrada de blog**: Crea una nueva entrada de blog (500+ palabras) apuntando a una palabra clave específica. Sigue la checklist SEO de arriba.

4. **Añade enlaces internos**: En cada página, añade al menos un enlace a otra página de tu sitio.

5. **Comprueba tu sitemap**: Visita `tu-sitio.local/sitemap_index.xml` y ve todas las páginas listadas.

6. **Revisa todo el alt text**: Repasa tu Biblioteca de Medios y asegúrate de que cada imagen tiene alt text descriptivo.

---

## Puntos Clave

- El SEO se trata de hacer tu sitio **descubrible** y **relevante** para los motores de búsqueda
- **SEO on-page**: título, meta description, URL, encabezados, contenido, imágenes
- **Yoast SEO** proporciona una checklist — apunta a puntuaciones verdes en cada página
- **SEO Title** es el elemento individual más importante (menos de 60 caracteres, incluye la palabra clave)
- La **calidad del contenido** es lo que más importa — escribe contenido útil y bien estructurado
- El **SEO técnico** (sitemaps, URLs canónicas, schema) lo gestiona Yoast automáticamente
- El **enlazado interno** ayuda a los motores de búsqueda y usuarios a navegar tu sitio
- **Publica en el blog consistentemente** para construir tráfico orgánico con el tiempo

---

**Siguiente Lección:** [Lección 32 - Optimización del Rendimiento](lesson-32-performance.md)
