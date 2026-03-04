# Lección 06: La Biblioteca de Medios

## Objetivos
- Subir y gestionar imágenes, archivos y medios en WordPress
- Entender los tamaños de imagen y la optimización
- Usar la biblioteca de medios de forma eficaz
- Aprender buenas prácticas para nombrar archivos y organizarlos

---

## ¿Qué es la Biblioteca de Medios?

La Biblioteca de Medios es donde WordPress almacena todos los archivos subidos:
- Imágenes (JPG, PNG, GIF, WebP, SVG con plugins)
- Documentos (PDF, DOC, XLSX)
- Audio (MP3, WAV, OGG)
- Vídeo (MP4, MOV, AVI)

Accede a ella en **Media → Library** en la barra lateral.

---

## Subir Medios

### Método 1: Página de la Biblioteca de Medios
1. Ve a **Media → Add New Media File**
2. Arrastra y suelta archivos en el área de subida, o haz clic en **"Select Files"**
3. Puedes subir varios archivos a la vez

### Método 2: Mientras Editas Contenido
1. En el editor de bloques, añade un bloque **Image** (escribe `/image`)
2. Elige **"Upload"**, **"Media Library"** o **"Insert from URL"**
3. El archivo se sube a la Biblioteca de Medios automáticamente

### Método 3: Arrastrar y Soltar
- Mientras editas una entrada/página, arrastra una imagen directamente desde tu escritorio al editor
- WordPress crea un bloque Image y sube el archivo automáticamente

---

## La Interfaz de la Biblioteca de Medios

### Vista de Cuadrícula (predeterminada)
- Muestra miniaturas de todos los medios
- Haz clic en cualquier elemento para ver los detalles y editar
- Filtra por tipo (Imágenes, Audio, Vídeo, Documentos) o por fecha

### Vista de Lista
- Cambia con el icono en la esquina superior izquierda
- Muestra más detalles: nombre del archivo, autor, fecha, adjunto a
- Mejor para gestionar muchos archivos

### Panel de Detalles del Medio
Haz clic en cualquier elemento multimedia para ver:
- **Vista previa** de la imagen
- **Title** — el nombre para mostrar (editable)
- **Caption** — se muestra debajo de la imagen en el front-end
- **Alt Text** — importante para accesibilidad y SEO (describe la imagen)
- **Description** — descripción más larga (raramente se muestra)
- **File URL** — el enlace directo al archivo
- **Uploaded to** — a qué entrada/página está adjunto este medio
- **Tamaño del archivo y dimensiones**

---

## Tamaños de Imagen en WordPress

Cuando subes una imagen, WordPress crea automáticamente **múltiples tamaños**:

| Tamaño | Dimensiones por Defecto | Propósito |
|--------|------------------------|-----------|
| **Thumbnail** | 150 x 150 px | Vista previa pequeña, recortada en cuadrado |
| **Medium** | 300 x 300 px máx. | Imágenes dentro del contenido |
| **Medium Large** | 768 px de ancho | Imágenes responsive |
| **Large** | 1024 x 1024 px máx. | Imágenes de contenido a ancho completo |
| **Full** | Tamaño original | Resolución completa |

### Configurar Tamaños por Defecto
1. Ve a **Settings → Media**
2. Ajusta las dimensiones para Thumbnail, Medium y Large
3. **Recomendación:** Deja los valores por defecto a menos que tengas una razón específica para cambiarlos

### ¿Por Qué Múltiples Tamaños?
- WordPress sirve el **tamaño apropiado** según dónde se muestra la imagen
- Una miniatura en una barra lateral no necesita una imagen de 4000px
- Esto mejora significativamente la **velocidad de carga** de la página

---

## Buenas Prácticas con Imágenes

### Antes de Subir

1. **Redimensiona las imágenes antes de subirlas**
   - Una foto de 5000x3000 de tu cámara es demasiado grande
   - Para la mayoría de sitios web, las imágenes no deberían superar los **2000px de ancho**
   - Imágenes hero/banner: 1920px de ancho es el estándar
   - Imágenes dentro del contenido: 1200px de ancho suele ser suficiente

2. **Elige el formato correcto**
   | Formato | Ideal Para |
   |---------|-----------|
   | **JPG/JPEG** | Fotos, imágenes con muchos colores |
   | **PNG** | Gráficos con transparencia, capturas de pantalla, logotipos |
   | **WebP** | Formato moderno — archivos más pequeños, buena calidad (no todos los navegadores lo soportan) |
   | **SVG** | Logotipos e iconos (requiere un plugin para subirlos) |
   | **GIF** | Animaciones sencillas |

3. **Comprime las imágenes**
   - Usa herramientas gratuitas antes de subir:
     - **TinyPNG** (tinypng.com) — compresión con arrastrar y soltar
     - **Squoosh** (squoosh.app) — optimizador de imágenes de Google
   - O instala un plugin de WordPress (lo veremos en el Módulo 4)

4. **Nombra los archivos de forma descriptiva**
   - Mal: `IMG_20240315_001.jpg`, `screenshot.png`
   - Bien: `blue-widget-product-photo.jpg`, `team-office-photo.jpg`
   - Usa guiones, no espacios ni guiones bajos
   - Esto ayuda al SEO — los motores de búsqueda leen los nombres de archivo

### Después de Subir

5. **Establece siempre el Alt Text**
   - Describe la imagen para lectores de pantalla (accesibilidad)
   - Usado por los motores de búsqueda (SEO)
   - Ejemplo: "Miembros del equipo trabajando juntos en la oficina"
   - No abuses de las palabras clave — describe lo que realmente se ve

6. **Establece un Title**
   - WordPress usa el nombre del archivo como título por defecto
   - Cámbialo a algo legible

---

## Trabajar con Imágenes en el Editor

### Añadir un Bloque de Imagen
1. Escribe `/image` o haz clic en "+" y selecciona Image
2. Sube, selecciona de la Biblioteca de Medios o inserta desde URL
3. La imagen aparece en tu contenido

### Configuración del Bloque Image

**Barra de herramientas del bloque** (encima de la imagen):
- **Alignment** — izquierda, centro, derecha, ancho, ancho completo
- **Link** — enlazar la imagen a su archivo multimedia, página adjunta o URL personalizada
- **Replace** — cambiar la imagen
- **Crop** — recortar la imagen

**Configuración del bloque** (barra lateral derecha):
- **Alt Text** — establecer o editar el texto alternativo
- **Image Size** — elegir Thumbnail, Medium, Large o Full
- **Image Dimensions** — establecer ancho/alto personalizados
- **Border Radius** — redondear las esquinas

### Bloque Gallery
Para mostrar múltiples imágenes:
1. Escribe `/gallery` y selecciona Gallery
2. Sube o selecciona varias imágenes
3. Organízalas en una cuadrícula
4. Configura las columnas (1-8) en los ajustes del bloque

### Bloque Cover
Para imágenes con texto superpuesto:
1. Escribe `/cover` y selecciona Cover
2. Sube o selecciona una imagen de fondo
3. Escribe texto encima de la imagen
4. Ajusta el color y la opacidad de la superposición

---

## Organizar los Medios

WordPress no tiene carpetas en la Biblioteca de Medios por defecto. Así es como puedes mantenerte organizado:

### Opciones Integradas
- **Search** — usa la barra de búsqueda para encontrar medios por nombre de archivo o título
- **Filtrar por fecha** — desplegable para filtrar por mes/año
- **Filtrar por tipo** — Imágenes, Audio, Vídeo, Documentos

### Convención de Nombres de Archivo
Como no hay carpetas, usa una convención de nombres:
```
[tipo]-[tema]-[detalle].jpg

Ejemplos:
hero-homepage-banner.jpg
team-john-smith-headshot.jpg
product-blue-widget-front.jpg
blog-wordpress-tips-featured.jpg
icon-phone-contact.png
```

### Opción con Plugins
Si necesitas carpetas, plugins como **FileBird** o **Real Media Library** añaden gestión de carpetas a la Biblioteca de Medios. Cubriremos los plugins en el Módulo 4.

---

## Editar Imágenes en WordPress

WordPress tiene un editor de imágenes básico integrado:

1. Ve a **Media → Library**
2. Haz clic en una imagen para abrirla
3. Haz clic en **"Edit Image"** debajo de la vista previa

### Herramientas de Edición Disponibles:
- **Crop** — selecciona un área y recorta
- **Rotate** — rotar a la izquierda o a la derecha
- **Flip** — voltear horizontal o verticalmente
- **Scale** — redimensionar la imagen (solo reducir, no ampliar)

### Aplicar Cambios A:
- **All image sizes** — cambia todos los tamaños generados
- **Thumbnail only** — solo cambia la miniatura
- **All except thumbnail** — cambia todo menos la miniatura

**Nota:** Para edición más avanzada, usa una herramienta externa (Canva, Photoshop, GIMP) y vuelve a subir.

---

## Límites de Subida de Archivos

### Límites por Defecto
- WordPress tiene un tamaño máximo de subida (normalmente 32MB-128MB dependiendo de tu hosting)
- En Local WP, esto es configurable

### Comprobar Tu Límite
1. Ve a **Media → Add New Media File**
2. Debajo del área de subida, verás "Maximum upload file size: XXX MB"

### Aumentar el Límite (si es necesario)
En Local WP:
1. Abre Site Shell desde Local
2. Encuentra el archivo `php.ini`
3. Cambia `upload_max_filesize` y `post_max_size`

En la mayoría de hostings, contacta con tu proveedor o edita `.htaccess`.

---

## Ejercicios

1. **Sube 5 imágenes**: Encuentra 5 imágenes de stock gratuitas (prueba unsplash.com o pexels.com). Nómbralas de forma descriptiva antes de subirlas. Súbelas a la Biblioteca de Medios.

2. **Establece el Alt Text**: Para cada imagen subida, haz clic en ella en la Biblioteca de Medios y escribe un texto alternativo descriptivo.

3. **Añade imágenes al contenido**: Edita una de tus páginas o entradas y añade imágenes usando el bloque Image. Prueba diferentes alineaciones (izquierda, centro, ancho).

4. **Crea una Galería**: Crea una nueva página llamada "Gallery" y añade un bloque Gallery con más de 4 imágenes. Prueba a cambiar el número de columnas.

5. **Prueba el bloque Cover**: Añade un bloque Cover a tu página de inicio con una imagen de fondo y texto superpuesto.

6. **Edita una imagen**: Selecciona una imagen en la Biblioteca de Medios y prueba el editor integrado — recórtala, luego deshaz el cambio.

---

## Puntos Clave

- La **Biblioteca de Medios** almacena todas tus subidas (imágenes, documentos, audio, vídeo)
- WordPress crea **múltiples tamaños** de cada imagen subida automáticamente
- **Optimiza las imágenes antes de subirlas** — redimensiónalas y comprímelas
- **Establece siempre el Alt Text** — es fundamental para la accesibilidad y el SEO
- Usa **nombres de archivo descriptivos** con guiones (ej., `team-photo-office.jpg`)
- Bloques de imagen habituales: **Image**, **Gallery**, **Cover**
- WordPress tiene un editor de imágenes básico integrado para recortes y rotaciones
- Usa una **convención de nombres** consistente para mantener tu Biblioteca de Medios organizada

---

**Siguiente Lección:** [Lección 07 - Configuración de WordPress a Fondo](lesson-07.md)
