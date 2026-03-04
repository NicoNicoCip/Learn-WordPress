# Lección 32: Optimización del Rendimiento

## Objetivos
- Medir el rendimiento actual de tu sitio
- Optimizar la velocidad usando técnicas probadas
- Configurar caché y minificación
- Entender los CDN y su función

---

## Por Qué Importa el Rendimiento

- **El 53% de los usuarios móviles se van** si una página tarda más de 3 segundos en cargar
- **Google usa la velocidad de la página** como factor de posicionamiento
- **Cada 1 segundo de retraso** reduce las conversiones un 7%
- Los sitios rápidos proporcionan una mejor experiencia de usuario

### Objetivos de Rendimiento:
| Métrica | Objetivo |
|---------|---------|
| **Tiempo de carga de página** | Menos de 3 segundos |
| **Tamaño total de página** | Menos de 2MB (idealmente menos de 1MB) |
| **Número de peticiones** | Menos de 50 |
| **Largest Contentful Paint (LCP)** | Menos de 2.5 segundos |
| **First Input Delay (FID)** | Menos de 100ms |
| **Cumulative Layout Shift (CLS)** | Menos de 0.1 |

---

## Medir el Rendimiento

### Herramientas:

**Chrome Lighthouse (funciona localmente):**
1. Abre tu sitio en Chrome
2. Presiona **F12** → pestaña **Lighthouse**
3. Selecciona la categoría "Performance"
4. Haz clic en **"Analyze page load"**
5. Revisa la puntuación (0-100) y las recomendaciones específicas

**Chrome DevTools pestaña Network (funciona localmente):**
1. Presiona **F12** → pestaña **Network**
2. Refresca la página
3. Mira la barra inferior: total de peticiones, tamaño transferido, tiempo de carga
4. Ordena por tamaño para encontrar los archivos más grandes

**Google PageSpeed Insights (solo sitios en producción):**
- URL: https://pagespeed.web.dev/
- Prueba tanto móvil como escritorio
- Basado en datos reales de usuarios de Chrome

**GTmetrix (solo sitios en producción):**
- URL: https://gtmetrix.com/
- Gráfico waterfall detallado mostrando cada recurso cargado

---

## El Stack de Optimización de Rendimiento

### 1. Hosting (Sitios en Producción)
Tu proveedor de hosting tiene el mayor impacto en la velocidad:
- **Hosting económico** (3-10€/mes): Lento, recursos compartidos
- **Hosting WordPress gestionado** (15-40€/mes): Optimizado para WordPress (SiteGround, Cloudways, Kinsta)
- **Hosting premium** (30€+/mes): El más rápido, mejor soporte (WP Engine, Kinsta, Flywheel)

**Recomendación:** Para sitios de clientes, usa como mínimo SiteGround o Cloudways.

### 2. Caché (Ya Configurada)
WP Super Cache (Lección 22) se encarga de esto. Revisa:
- **Caché de página**: Sirve HTML pre-generado en lugar de procesar PHP
- **Caché del navegador**: Indica a los navegadores que almacenen archivos estáticos localmente
- **Caché de objetos**: Almacena en caché las consultas a la base de datos (requiere soporte a nivel de servidor)

### 3. Optimización de Imágenes (Ya Configurada)
Smush o similar (Lección 24) se encarga de esto:
- Comprimir todas las imágenes
- Carga diferida (lazy loading)
- Dimensionamiento correcto de imágenes
- Formato WebP cuando sea posible

### 4. Minificación
Reduce el tamaño de los archivos eliminando espacios en blanco, comentarios y caracteres innecesarios:

**Instala Autoptimize** (plugin gratuito):
1. **Plugins → Add New** → busca "Autoptimize"
2. Instala y activa
3. Ve a **Settings → Autoptimize**
4. Marca:
   - **Optimize JavaScript Code**
   - **Optimize CSS Code**
   - **Optimize HTML Code**
5. Guarda y prueba tu sitio

**Advertencia:** La minificación a veces puede romper cosas (especialmente JavaScript). Si tu sitio se ve o funciona diferente después de habilitarla:
1. Intenta desactivar la optimización de JavaScript primero
2. Si eso lo arregla, mantén la optimización de JS desactivada
3. La optimización de CSS y HTML raramente causa problemas

### 5. Optimización de Base de Datos
Con el tiempo, tu base de datos acumula datos innecesarios:
- Revisiones de entradas
- Comentarios spam
- Opciones transitorias
- Metadatos huérfanos

**Usando WP-Optimize** (plugin gratuito):
1. Instala y activa **WP-Optimize**
2. Ve a **WP-Optimize → Database**
3. Marca las optimizaciones que quieras ejecutar:
   - Limpiar todas las revisiones de entradas
   - Limpiar todos los borradores automáticos
   - Limpiar comentarios spam y en la papelera
   - Eliminar opciones transitorias expiradas
4. Haz clic en **"Run all selected optimizations"**

### 6. Reducir Peticiones HTTP
Cada archivo (CSS, JS, imagen, fuente) requiere una petición HTTP separada:
- Combinar archivos CSS/JS (Autoptimize hace esto)
- Usar menos plugins (cada uno añade CSS/JS)
- Usar fuentes de iconos o SVGs en lugar de imágenes de iconos
- Limitar scripts externos (analytics, widgets de chat, botones sociales)

### 7. Optimización de Fuentes
Google Fonts puede ralentizar tu sitio:
- Usa como máximo **2 familias de fuentes**
- Carga solo los **pesos que necesites** (400, 600, 700 — no todos)
- Considera usar **fuentes del sistema** para la carga más rápida:
  ```css
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  ```

---

## CDN (Red de Distribución de Contenidos)

### ¿Qué es un CDN?
Un CDN almacena copias de los archivos estáticos de tu sitio (imágenes, CSS, JS) en servidores alrededor del mundo. Los visitantes reciben el contenido desde el servidor más cercano.

### Beneficios:
- Tiempos de carga más rápidos para visitantes lejos de tu servidor
- Reduce la carga en tu servidor de hosting
- Proporciona protección DDoS
- Mejor rendimiento global

### Cloudflare (Opción Gratuita):
1. Crea una cuenta gratuita en https://www.cloudflare.com/
2. Añade tu dominio
3. Actualiza los nameservers de tu dominio a Cloudflare
4. Cloudflare proporciona:
   - CDN gratuito
   - SSL gratuito
   - Protección DDoS básica
   - Herramientas de optimización de rendimiento

**Nota:** La configuración del CDN ocurre a nivel de hosting/DNS, no dentro de WordPress.

---

## Consejos de Rendimiento para Elementor

Elementor añade sobrecarga. Minimízala:

1. **No uses demasiadas secciones** — combina donde sea posible
2. **Usa los iconos integrados de Elementor** en lugar de imágenes para iconos
3. **Evita animaciones excesivas** — requieren JavaScript extra
4. **Usa el experimento "Improved CSS Loading"**:
   - Elementor → Settings → Experiments → Improved CSS Loading → Active
5. **No uses demasiadas Google Fonts** — elige 1-2 y mantente con ellas
6. **Optimiza la salida CSS de Elementor**:
   - Elementor → Settings → Advanced → CSS Print Method → Internal Embedding

---

## Checklist de Rendimiento

### Victorias Rápidas (Haz Esto Primero):
- [ ] Habilita la caché (WP Super Cache)
- [ ] Optimiza todas las imágenes (Smush)
- [ ] Habilita la carga diferida (lazy loading)
- [ ] Habilita la minificación (Autoptimize)
- [ ] Usa solo 2 fuentes como máximo
- [ ] Elimina plugins y temas sin usar

### Esfuerzo Medio:
- [ ] Optimiza la base de datos (WP-Optimize)
- [ ] Reduce el número de plugins
- [ ] Diferir JavaScript no crítico
- [ ] Optimiza la configuración de Elementor

### Avanzado (Para Sitios en Producción):
- [ ] Usa un CDN (Cloudflare)
- [ ] Elige hosting rápido
- [ ] Habilita caché de objetos (si el hosting lo soporta)
- [ ] Implementa CSS crítico
- [ ] Usa imágenes WebP

---

## Ejercicios

1. **Ejecuta una prueba de Lighthouse**: Prueba tu página de inicio con Chrome Lighthouse. Anota tu puntuación de Performance y las recomendaciones específicas.

2. **Instala Autoptimize**: Habilita la optimización de CSS, JS y HTML. Limpia la caché y prueba tu sitio.

3. **Comprueba el tamaño de la página**: Usa la pestaña Network de Chrome DevTools para ver el tamaño total de tu página de inicio y el número de peticiones.

4. **Optimiza la base de datos**: Instala WP-Optimize y limpia revisiones, borradores y spam.

5. **Reduce fuentes**: Comprueba cuántas Google Fonts estás cargando. Reduce a 2 como máximo.

6. **Comparación antes/después**: Anota tu puntuación de Lighthouse antes de las optimizaciones, aplica todas las optimizaciones, limpia la caché y prueba de nuevo. Documenta la mejora.

---

## Puntos Clave

- **Carga de página en menos de 3 segundos** es el objetivo
- Los factores más importantes: **hosting, caché, imágenes y minificación**
- **Mide antes y después** para ver la mejora
- Usa **Lighthouse** (Chrome DevTools) para pruebas locales
- **Caché** (WP Super Cache) sirve páginas pre-generadas
- **Optimización de imágenes** (Smush) a menudo proporciona la mayor mejora
- **Minificación** (Autoptimize) reduce el tamaño de archivos CSS/JS/HTML
- **CDN** (Cloudflare) mejora la velocidad para visitantes globales
- Menos plugins = sitio más rápido
- 2 fuentes como máximo para el mejor rendimiento

---

**Siguiente Lección:** [Lección 33 - Publicar un Sitio](lesson-33-going-live.md)
