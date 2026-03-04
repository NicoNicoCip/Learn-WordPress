# Lección 07: Ajustes de WordPress a Fondo

## Objetivos
- Configurar correctamente todos los ajustes esenciales de WordPress
- Establecer los enlaces permanentes adecuados (estructura de URL)
- Configurar los ajustes de lectura (visualización de la página de inicio)
- Entender cada página de ajustes y cuándo modificarla

---

## Settings → General

**Ruta:** Settings → General

| Ajuste | Qué Hace | Recomendado |
|--------|----------|-------------|
| **Site Title** | El nombre de tu sitio web (aparece en la pestaña del navegador, cabecera) | El nombre de tu negocio/sitio |
| **Tagline** | Una breve descripción de tu sitio | Un eslogan o descripción breve |
| **WordPress Address (URL)** | Dónde están instalados los archivos de WordPress | ¡No cambies esto! |
| **Site Address (URL)** | La URL pública que usan los visitantes | ¡No cambies esto! |
| **Administration Email** | Email para notificaciones de administración | Tu email real |
| **Membership** | Permitir que cualquiera se registre | Normalmente desmarcado (a menos que necesites registro de usuarios) |
| **New User Default Role** | Rol asignado a nuevos registrados | Subscriber (el más seguro) |
| **Site Language** | Idioma de la interfaz de administración | Tu idioma preferido |
| **Timezone** | Usado para programar entradas | Tu zona horaria |
| **Date Format** | Cómo se muestran las fechas | Tu preferencia |
| **Time Format** | Cómo se muestran las horas | Tu preferencia |

### Acciones a Realizar:
1. Establece tu **Site Title** con algo significativo
2. Escribe un **Tagline** claro (o déjalo vacío — ¡algunos temas muestran "Just another WordPress site" si no lo cambias!)
3. Configura tu **Timezone**
4. **Nunca cambies** el WordPress Address o Site Address a menos que sepas exactamente lo que haces — esto puede romper tu sitio

---

## Settings → Writing

**Ruta:** Settings → Writing

| Ajuste | Qué Hace | Recomendado |
|--------|----------|-------------|
| **Default Post Category** | Categoría para entradas cuando no se selecciona ninguna | Cambiar de "Uncategorized" a tu categoría general |
| **Default Post Format** | Formato de entrada (Estándar, Vídeo, Cita, etc.) | Standard |

Esta página es sencilla. La acción principal:
- Establece tu **Default Post Category** con el nombre al que hayas renombrado "Uncategorized"

---

## Settings → Reading

**Ruta:** Settings → Reading

Esta es una de las páginas de ajustes **más importantes**.

### Tu Página de Inicio Muestra

| Opción | Qué Hace |
|--------|----------|
| **Your latest posts** | La página de inicio muestra una lista de tus entradas recientes del blog (como un blog tradicional) |
| **A static page** | La página de inicio muestra una página específica que hayas creado (como un sitio web empresarial) |

**Para la mayoría de sitios profesionales, elige "A static page":**
1. Selecciona **"A static page"**
2. **Homepage**: Selecciona la página que usarás como inicio (crea primero una página "Home" si no lo has hecho)
3. **Posts page**: Selecciona una página para usar como listado de blog (crea una página "Blog" — puede estar vacía, WordPress la rellenará automáticamente)

### Otros Ajustes de Lectura

| Ajuste | Qué Hace | Recomendado |
|--------|----------|-------------|
| **Blog pages show at most** | Número de entradas por página | 10 está bien |
| **Syndication feeds show** | Número de elementos en el feed RSS | 10 está bien |
| **For each post in a feed, include** | Texto completo o resumen en RSS | Summary |
| **Search engine visibility** | Disuadir a los motores de búsqueda de indexar | **¡Desmarca esto!** (A menos que estés en desarrollo y no quieras que Google encuentre tu sitio todavía) |

### ¡Advertencia Crítica!
La casilla "Search engine visibility" ("Discourage search engines from indexing this site") debería estar:
- **Marcada** mientras estás desarrollando en local o construyendo el sitio
- **Desmarcada** cuando el sitio esté en producción — ¡olvidar esto significa que Google no indexará tu sitio!

---

## Settings → Discussion

**Ruta:** Settings → Discussion

Controla los **comentarios** y la interacción de usuarios.

### Ajustes Clave:

| Ajuste | Qué Hace | Recomendado para Sitios Empresariales |
|--------|----------|--------------------------------------|
| **Allow people to submit comments on new posts** | Activar/desactivar comentarios globalmente | Desmarcar si no quieres un blog con comentarios |
| **Comment author must fill out name and email** | Requerir identificación | Marcar |
| **Users must be registered and logged in to comment** | Restringir quién puede comentar | Normalmente desmarcar |
| **Automatically close comments on posts older than X days** | Cerrar automáticamente discusiones antiguas | 30-90 días es habitual |
| **Comment must be manually approved** | Moderar todos los comentarios | Marcar — previene spam |
| **Comment moderation** | Retener comentarios con cierto contenido | El valor por defecto está bien |
| **Disallowed comment keys** | Bloquear comentarios con ciertas palabras | Añadir palabras de spam según sea necesario |

### Si No Quieres Comentarios en Absoluto:
1. Desmarca "Allow people to submit comments on new posts"
2. Esto aplica solo a entradas **nuevas** — las entradas existentes mantienen su configuración actual
3. Para desactivar comentarios en entradas existentes, edítalas en lote (Posts → All Posts → Select All → Bulk Actions → Edit → Comments: Do not allow)

---

## Settings → Media

**Ruta:** Settings → Media

Controla los **tamaños de imagen** que WordPress genera al subir.

| Ajuste | Por Defecto | Propósito |
|--------|-------------|-----------|
| **Thumbnail size** | 150 × 150 | Previsualizaciones pequeñas |
| **Medium size** | 300 × 300 máx. | Imágenes en contenido |
| **Large size** | 1024 × 1024 máx. | Imágenes a ancho completo |

**Recomendación:** Deja los valores por defecto a menos que tu tema o diseño requiera tamaños específicos.

### Organizar Medios
- **"Organize my uploads into month- and year-based folders"** — Mantén esto marcado. Crea carpetas como `/uploads/2025/06/` que evitan tener miles de archivos en un solo directorio.

---

## Settings → Permalinks (¡Crítico!)

**Ruta:** Settings → Permalinks

Esto controla la **estructura de URLs** de tu sitio. Es una de las primeras cosas que debes configurar.

### Estructuras Disponibles:

| Estructura | URL de Ejemplo | ¿Recomendada? |
|-----------|---------------|---------------|
| **Plain** | `?p=123` | Nunca — fea y mala para SEO |
| **Day and name** | `/2026/03/02/sample-post/` | Para sitios de noticias |
| **Month and name** | `/2026/03/sample-post/` | Para blogs |
| **Numeric** | `/archives/123` | Nunca |
| **Post name** | `/sample-post/` | **¡Sí — usa esta!** |
| **Custom** | Tú la defines | Para necesidades específicas |

### Configúralo Ahora:
1. Selecciona **"Post name"**
2. Haz clic en **"Save Changes"**

**¿Por qué "Post name"?**
- URLs limpias y legibles: `tusitio.com/sobre-nosotros/` en vez de `tusitio.com/?p=5`
- Mejor para SEO — las palabras clave en la URL ayudan a los motores de búsqueda
- Mejor para compartir — la gente puede leer y confiar en la URL
- Cortas y profesionales

### Advertencia Importante:
**Cambia los enlaces permanentes PRIMERO, antes de crear mucho contenido.** Cambiarlos después puede romper enlaces existentes y perjudicar el SEO. En un sitio en producción con contenido existente, cambiar los enlaces permanentes requiere configurar redirecciones.

---

## Settings → Privacy

**Ruta:** Settings → Privacy

- Selecciona o crea una **página de Política de Privacidad**
- WordPress puede generar una plantilla de política de privacidad para ti
- Requerido por ley en muchas regiones (RGPD en Europa, CCPA en California)

### Acciones a Realizar:
1. Haz clic en **"Create a new Privacy Policy page"** si no lo has hecho ya
2. Edita la página generada para que coincida con las prácticas reales de tu sitio
3. O selecciona una página de política de privacidad existente

---

## Lista de Configuración Inicial

Aquí está el orden para configurar un nuevo sitio WordPress:

1. **Settings → General**
   - Establecer Site Title y Tagline
   - Configurar Timezone
   - Eliminar "Just another WordPress site" del Tagline

2. **Settings → Permalinks**
   - Seleccionar "Post name" → Save Changes

3. **Settings → Reading**
   - Establecer "A static page" para la página de inicio (después de crear las páginas Home y Blog)
   - Marcar "Discourage search engines" durante el desarrollo

4. **Settings → Discussion**
   - Configurar los ajustes de comentarios según tus necesidades

5. **Settings → Writing**
   - Establecer la Default Post Category

6. **Settings → Media**
   - Normalmente dejar los valores por defecto

7. **Settings → Privacy**
   - Crear o asignar una página de política de privacidad

---

## Ejercicios

1. **Configura los ajustes generales**: Establece el título de tu sitio, eslogan y zona horaria. Elimina "Just another WordPress site" si aún está ahí.

2. **Establece los Permalinks a "Post name"**: Esto es crítico — hazlo ahora antes de crear mucho contenido.

3. **Configura tu página de inicio**:
   - Crea una página llamada "Home" (si no lo has hecho ya)
   - Crea una página llamada "Blog"
   - Ve a Settings → Reading → selecciona "A static page"
   - Establece Homepage como "Home" y Posts page como "Blog"
   - Visita tu sitio para ver el cambio

4. **Configura los comentarios**: Decide si quieres comentarios en tu sitio. Si no, desmarca el ajuste en Discussion. Si sí, activa la moderación.

5. **Verifica la visibilidad en buscadores**: Asegúrate de que está marcada mientras desarrollas en local (la desmarcaremos al publicar).

6. **Crea una política de privacidad**: Usa la página Settings → Privacy para crear una.

---

## Puntos Clave

- **Establece los Permalinks a "Post name" inmediatamente** — hazlo antes de crear contenido
- **Configura una página de inicio estática** en los ajustes de Reading para sitios profesionales/empresariales
- **Elimina "Just another WordPress site"** de tu eslogan
- **Marca "Discourage search engines"** durante el desarrollo, desmárcalo al publicar
- **Activa la moderación de comentarios** si permites comentarios
- Las páginas de ajustes más críticas son: **Permalinks**, **Reading** y **General**
- Siempre configura los ajustes **antes** de construir tu contenido

---

**Siguiente Módulo:** [Módulo 2 - Temas y Apariencia](lesson-08-understanding-themes.md)
