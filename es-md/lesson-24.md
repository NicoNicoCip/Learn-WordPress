# Lección 24: Plugins de Optimización de Imágenes y Rendimiento

## Objetivos
- Comprender cómo las imágenes afectan al rendimiento del sitio
- Instalar y configurar un plugin de optimización de imágenes
- Aprender sobre lazy loading y formatos de imagen modernos
- Utilizar herramientas de prueba de rendimiento

---

## Por Qué la Optimización de Imágenes es Importante

Las imágenes son normalmente los **archivos más grandes** de cualquier página web:
- Una página de inicio sin optimizar puede pesar 5-10MB (sobre todo imágenes)
- Una página de inicio optimizada puede estar por debajo de 1MB
- **Los sitios más rápidos posicionan mejor en Google** y convierten más visitantes
- **El 53% de los usuarios móviles abandonan** si una página tarda más de 3 segundos en cargar

---

## Estrategias de Optimización de Imágenes

### 1. Redimensiona Antes de Subir
- Fotos de cámara: normalmente 4000-6000px de ancho — **demasiado grandes**
- Ancho máximo recomendado:
  - Héroes a ancho completo: **1920px**
  - Imágenes de contenido: **1200px**
  - Miniaturas: **300-400px**
- Herramientas: Photoshop, GIMP, Canva o herramientas online como Squoosh

### 2. Elige el Formato Correcto

| Formato | Mejor Para | Tamaño de Archivo |
|--------|---------|-----------|
| **JPEG** | Fotos, imágenes complejas | Pequeño-mediano |
| **PNG** | Gráficos con transparencia, capturas de pantalla | Mayor |
| **WebP** | Todo (reemplazo moderno de JPEG/PNG) | El más pequeño |
| **SVG** | Logos, iconos, ilustraciones | Mínimo (vectorial) |
| **AVIF** | Formato de nueva generación (soporte limitado) | Muy pequeño |

**WebP** es el mejor formato de uso general — 25-35% más pequeño que JPEG con calidad similar.

### 3. Comprime las Imágenes
- **Compresión con pérdida**: Reduce ligeramente la calidad para archivos mucho más pequeños (normalmente imperceptible)
- **Compresión sin pérdida**: Reduce el tamaño del archivo sin pérdida de calidad (ahorro menor)
- Herramientas online: TinyPNG, Squoosh, ShortPixel online

### 4. Lazy Loading
- **Lazy loading** significa que las imágenes que están fuera de la pantalla (no visibles) solo se cargan cuando el usuario hace scroll hasta ellas
- Reduce drásticamente el tiempo de carga inicial de la página
- WordPress tiene **lazy loading integrado** (desde la versión 5.5) para imágenes
- Elementor también soporta lazy loading

---

## Plugin de Optimización de Imágenes — Smush

### Instalación
1. **Plugins → Add New** → busca "Smush"
2. Instala y activa **"Smush — Lazy Load Images, Optimize & Compress Images"**

### Configuración

1. Ve a **Smush → Dashboard** (o sigue el asistente de configuración)

2. **Bulk Smush**:
   - Haz clic en **"Bulk Smush Now"** para optimizar todas las imágenes existentes
   - La versión gratuita comprime hasta 50 imágenes a la vez
   - Repite hasta que todas las imágenes estén procesadas

3. **Ajustes a configurar**:

**Optimización Automática:**
- Activa **"Automatically optimize new uploads"** — cada imagen que subas a partir de ahora se comprimirá automáticamente

**Lazy Loading:**
- Ve a **Smush → Lazy Load**
- Activa lazy loading para imágenes
- Esto posterga la carga de las imágenes que no están en pantalla

**Redimensionar Imágenes Originales:**
- Activa **"Resize full size images"**
- Establece el ancho máximo en **2560px** (o 1920px)
- Esto redimensiona automáticamente las subidas demasiado grandes

### Plugin Alternativo: ShortPixel

ShortPixel es otra opción excelente:
- Ofrece **conversión a WebP** en el nivel gratuito
- Compresión agresiva con buena calidad
- 100 créditos de imagen gratuitos al mes

### Plugin Alternativo: Imagify

Del equipo de WP Rocket:
- Fácil de usar
- Conversión a WebP
- 20MB gratuitos al mes

---

## Otros Plugins de Rendimiento

### WP Super Cache (Ya Instalado)
Lo configuramos en la Lección 22. Almacena en caché las páginas para una entrega más rápida.

### Consejos Adicionales de Rendimiento

**Minificación:**
Algunos plugins pueden minificar tu CSS y JavaScript (eliminar espacios en blanco y comentarios para reducir el tamaño de los archivos):
- **Autoptimize** (gratuito) — minifica y combina archivos CSS/JS
- Ten cuidado: la minificación a veces puede romper el diseño de las páginas

**CDN (Red de Distribución de Contenido):**
Un CDN almacena copias de los archivos de tu sitio en servidores de todo el mundo, sirviendo el contenido desde el servidor más cercano al visitante:
- **Cloudflare** (nivel gratuito disponible) — CDN + seguridad + rendimiento
- Normalmente se configura a través de tu proveedor de hosting
- No es necesario para desarrollo local, pero es importante para sitios en producción

---

## Pruebas de Rendimiento

### Herramientas

**Google PageSpeed Insights** (para sitios en producción):
- URL: https://pagespeed.web.dev/
- Prueba tanto en móvil como en escritorio
- Da una puntuación de 0-100 y recomendaciones específicas
- No puede probar sitios locales — solo URLs públicas

**GTmetrix** (para sitios en producción):
- URL: https://gtmetrix.com/
- Informe de rendimiento detallado con gráficos de cascada
- Muestra exactamente qué archivos son lentos

**Chrome DevTools (funciona en local):**
1. Abre tu sitio en Chrome
2. Pulsa **F12** → pestaña **Network**
3. Recarga la página
4. Mira cada archivo cargado, su tamaño y tiempo de carga
5. Fíjate en la **barra inferior** para ver el tamaño total de la página y el tiempo de carga

**Lighthouse (integrado en Chrome):**
1. Pulsa **F12** → pestaña **Lighthouse**
2. Haz clic en **"Analyze page load"**
3. Obtén puntuaciones de Rendimiento, Accesibilidad, Buenas Prácticas y SEO

---

## Lista de Verificación de Rendimiento

### Imágenes:
- [ ] Todas las imágenes tienen el tamaño adecuado (no más grandes de lo necesario)
- [ ] Las imágenes están comprimidas (Smush o similar)
- [ ] Lazy loading está activado
- [ ] Se usa formato WebP cuando es posible

### Plugins:
- [ ] El caché está activado (WP Super Cache)
- [ ] No hay plugins sin usar instalados
- [ ] Todos los plugins están actualizados

### General:
- [ ] Eliminar temas no utilizados
- [ ] Usar un tema ligero (Hello Elementor)
- [ ] Minimizar el número de fuentes cargadas (2 como máximo)
- [ ] No usar demasiados scripts externos (widgets sociales, widgets de chat, etc.)

---

## Ejercicios

1. **Instala Smush**: Instala, activa y ejecuta una optimización masiva de todas las imágenes existentes.

2. **Activa lazy loading**: Configura Smush para que cargue las imágenes de forma diferida.

3. **Activa la optimización automática**: Activa la optimización automática para las futuras subidas.

4. **Prueba con DevTools**: Abre tu página de inicio en Chrome, pulsa F12, ve a la pestaña Network y anota el tamaño total de la página. Haz una captura de pantalla o apunta el número.

5. **Ejecuta Lighthouse**: Usa la pestaña Lighthouse de Chrome para probar tu sitio local. Anota tus puntuaciones de Rendimiento, Accesibilidad y SEO.

6. **Optimiza una imagen grande**: Busca una foto grande en internet (3000px+), súbela a WordPress sin optimizar y anota el tamaño. Luego elimínala, redimensiónala y comprímela primero, y vuelve a subirla. Compara los tamaños.

---

## Puntos Clave

- Las imágenes son normalmente la **causa principal de sitios web lentos**
- **Redimensiona las imágenes antes de subirlas** — máximo 1920px de ancho para héroes, 1200px para contenido
- **Instala un plugin de optimización** (Smush, ShortPixel o Imagify) para comprimir automáticamente
- **Activa lazy loading** — solo carga las imágenes cuando son visibles en pantalla
- El **formato WebP** es un 25-35% más pequeño que JPEG — úsalo cuando sea posible
- **Prueba el rendimiento** con Chrome DevTools, Lighthouse y la pestaña Network
- Combinado con el caché (WP Super Cache), la optimización de imágenes marca la mayor diferencia en rendimiento
- **No optimices en exceso** — lo suficientemente bueno es suficiente, no pases horas persiguiendo los últimos kilobytes

---

**Siguiente Módulo:** [Módulo 5 - Conceptos Básicos de WooCommerce](../Module-05-WooCommerce/lesson-25-woocommerce-setup.md)
