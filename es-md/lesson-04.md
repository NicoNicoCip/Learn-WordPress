# Lección 04: Entradas vs Páginas - Cuándo Usar Cada Una

## Objetivos
- Entender la diferencia fundamental entre Entradas y Páginas
- Saber cuándo usar cada una
- Crear tu primera Entrada y tu primera Página
- Aprender los conceptos básicos del editor de bloques Gutenberg

---

## Entradas vs Páginas: La Diferencia Principal

| Característica | Entradas (Posts) | Páginas (Pages) |
|----------------|-----------------|-----------------|
| **Propósito** | Contenido de blog/noticias — temporal, basado en fechas | Contenido estático — permanente, independiente |
| **Fecha** | Siempre tienen fecha de publicación | Sin fecha visible |
| **Categorías/Etiquetas** | Sí — se pueden organizar y filtrar | No — independientes |
| **Orden** | Se muestran automáticamente del más reciente al más antiguo | Se muestran en el orden personalizado que establezcas |
| **Comentarios** | Habilitados por defecto | Deshabilitados por defecto |
| **Autor** | Muestra el autor por defecto | Normalmente no muestra el autor |
| **Aparece en** | Feed del blog, archivos, RSS | Menús de navegación, como páginas independientes |
| **Ejemplos** | Artículos de noticias, entradas de blog, anuncios | Acerca de, Contacto, Servicios, Inicio, Política de Privacidad |

### Regla Sencilla
- **¿Tendría sentido este contenido con una fecha?** --> Es una **Entrada**
- **¿Es este contenido permanente y debería encontrarse a través del menú?** --> Es una **Página**

---

## Cuándo Usar Entradas

Usa entradas cuando el contenido sea:
- **Sensible al tiempo** — noticias, anuncios, actualizaciones
- **Parte de una serie** — entradas de blog, tutoriales, artículos
- **Categorizable** — pertenece a una categoría (ej., "Noticias de la Empresa", "Trucos y Consejos")
- **Destinado a crecer** — seguirás añadiendo más con el tiempo

### Ejemplos:
- "Acabamos de Lanzar Nuestra Nueva Línea de Productos" (anuncio)
- "10 Consejos para un Mejor Diseño Web" (artículo de blog)
- "Boletín Mensual de la Empresa - Marzo 2026" (contenido recurrente)

---

## Cuándo Usar Páginas

Usa páginas cuando el contenido sea:
- **Permanente** — no cambia con frecuencia
- **Independiente** — tiene sentido por sí solo, no forma parte de una serie
- **Parte de la estructura del sitio** — pertenece al menú de navegación
- **No depende de la fecha** — sería raro con una fecha de "Publicado el"

### Ejemplos:
- Página de Inicio
- Quiénes Somos
- Nuestros Servicios
- Contacto
- Política de Privacidad / Términos del Servicio
- Portfolio
- Preguntas Frecuentes
- Equipo / Personal

---

## Crear Tu Primera Página

Vamos a crear una página "Acerca de":

1. Ve a **Pages → Add New Page** en la barra lateral
2. Ahora estás en el **Editor de Bloques Gutenberg**

### El Editor de Bloques (Gutenberg)

WordPress usa un **editor basado en bloques**. Todo es un "bloque":
- Los párrafos son bloques
- Los encabezados son bloques
- Las imágenes son bloques
- Listas, citas, botones — todos son bloques

#### Elementos Clave de la Interfaz:
- **Área del título** (arriba) — escribe aquí el título de tu página
- **Área de contenido** — donde añades los bloques
- **Botón "+"** — haz clic para añadir un nuevo bloque
- **Barra lateral derecha** — configuración del bloque seleccionado o de la página
  - **Pestaña Block** — configuración del bloque seleccionado actualmente
  - **Pestaña Page** — configuración de toda la página (imagen destacada, slug de la URL, etc.)

### Crear la Página Acerca de:

1. **Título**: Escribe `About Us`
2. **Primer bloque**: Haz clic en el área de contenido y escribe un párrafo:
   ```
   Welcome to our company. We are dedicated to providing excellent service.
   ```
3. **Añadir un encabezado**: Pulsa Enter, luego escribe `/heading` y selecciona "Heading". Escribe: `Our Mission`
4. **Añadir otro párrafo**: Pulsa Enter y escribe:
   ```
   Our mission is to deliver high-quality solutions that make a difference.
   ```
5. **Añadir una lista**: Pulsa Enter, escribe `/list` y selecciona "List". Añade algunos elementos:
   - Quality first
   - Customer satisfaction
   - Innovation
6. Haz clic en **"Publish"** (esquina superior derecha)
7. Haz clic en **"Publish"** de nuevo para confirmar
8. Haz clic en **"View Page"** para verla en el front-end

---

## Crear Tu Primera Entrada

Ahora vamos a crear una entrada de blog:

1. Ve a **Posts → Add New Post**
2. **Título**: Escribe `Welcome to Our Blog`
3. **Contenido**: Escribe un párrafo:
   ```
   This is our first blog post! We're excited to share news, tips, and updates with you. Stay tuned for more content coming soon.
   ```
4. **Asignar una Categoría**:
   - En la barra lateral derecha, busca la sección **Categories** (bajo la pestaña Post)
   - Haz clic en **"Add New Category"**
   - Escribe `General` y haz clic en "Add New Category"
   - Asegúrate de que esté marcada
5. **Añadir Etiquetas**:
   - En la barra lateral derecha, busca la sección **Tags**
   - Escribe `welcome, first post` y pulsa Enter
6. Haz clic en **"Publish"** --> **"Publish"** de nuevo
7. Haz clic en **"View Post"** para verla

---

## Trabajar con el Editor de Bloques

### Añadir Bloques
Hay varias formas de añadir bloques:
1. Haz clic en el botón **"+"** que aparece entre los bloques
2. Haz clic en el botón **"+"** en la barra de herramientas superior izquierda
3. Escribe **`/`** en un bloque vacío para buscar tipos de bloque
4. Pulsa **Enter** para crear un nuevo bloque de párrafo

### Tipos de Bloques Comunes
| Bloque | Qué Hace | Atajo |
|--------|----------|-------|
| Paragraph | Texto normal | Solo empieza a escribir |
| Heading | Encabezados de sección (H2, H3, etc.) | `/heading` |
| Image | Insertar una imagen | `/image` |
| List | Lista con viñetas o numerada | `/list` |
| Quote | Una cita con estilo | `/quote` |
| Button | Un botón de llamada a la acción | `/button` |
| Columns | Diseño en múltiples columnas | `/columns` |
| Separator | Una línea horizontal | `/separator` |
| Spacer | Espacio vertical entre bloques | `/spacer` |

### Controles del Bloque
Cuando haces clic en un bloque, obtienes:
- **Barra de herramientas del bloque** (aparece encima del bloque) — opciones de formato
- **Configuración del bloque** (barra lateral derecha, pestaña Block) — configuración detallada
- **Menú de tres puntos** en la barra de herramientas — mover, duplicar, eliminar, etc.

### Mover Bloques
- Usa las **flechas arriba/abajo** en la barra de herramientas del bloque
- **Arrastra y suelta** usando el icono de seis puntos
- Usa el **menú de tres puntos → Move to** para un posicionamiento preciso

### Atajos de Teclado en el Editor
| Atajo | Acción |
|-------|--------|
| `Ctrl + B` | Negrita |
| `Ctrl + I` | Cursiva |
| `Ctrl + K` | Insertar enlace |
| `Ctrl + Z` | Deshacer |
| `Ctrl + Shift + Z` | Rehacer |
| `Ctrl + S` | Guardar borrador / Actualizar |
| `Enter` | Nuevo bloque |
| `Shift + Enter` | Nueva línea dentro del mismo bloque |

---

## Configuración de Páginas/Entradas (Barra Lateral Derecha)

### Para Páginas:
- **Status & Visibility** — borrador, publicado, programado, visibilidad (público/privado)
- **URL (Slug)** — la ruta de la URL (ej., `/about-us`)
- **Featured Image** — una imagen destacada para la página
- **Page Attributes** — página padre (para jerarquía), plantilla, orden
- **Discussion** — habilitar/deshabilitar comentarios

### Para Entradas (opciones adicionales):
- **Categories** — asignar a una o más categorías
- **Tags** — añadir palabras clave descriptivas
- **Excerpt** — un breve resumen (usado en los feeds del blog)
- **Author** — quién escribió esta entrada

---

## Jerarquía de Páginas (Páginas Padre/Hijo)

Las páginas se pueden organizar jerárquicamente:
- Una página "Servicios" podría ser la padre
- "Diseño Web", "SEO", "Marketing" podrían ser páginas hijas
- Esto crea URLs como `/services/web-design/`

Para establecer una página padre:
1. Edita la página hija
2. En la barra lateral derecha → pestaña **Page** → **Page Attributes**
3. Selecciona la página padre del desplegable

---

## Ejercicios

1. **Crea 3 páginas más**: Crea páginas para "Services", "Contact" y "Blog" (puedes dejarlas casi vacías por ahora — solo añade un título y un breve párrafo).

2. **Crea 2 entradas más**: Crea dos entradas de blog con diferentes categorías. Intenta usar diferentes tipos de bloques (encabezados, listas, imágenes).

3. **Practica con los bloques**: En una de tus páginas, practica añadiendo y organizando estos bloques: Heading, Paragraph, Image (sube cualquier imagen), List, Button, Columns.

4. **Establece una página padre**: Crea una página hija dentro de "Services" llamada "Web Design". Comprueba la estructura de la URL.

5. **Explora la configuración de entradas**: En una de tus entradas, explora la barra lateral derecha — intenta establecer una imagen destacada, añadir un extracto y cambiar el slug de la URL.

---

## Puntos Clave

- **Entradas** = contenido basado en fechas y categorizado (blogs, noticias)
- **Páginas** = contenido estático e independiente (Acerca de, Contacto, Servicios)
- El **editor de bloques Gutenberg** es la herramienta con la que creas contenido en ambos casos
- Todo en el editor es un **bloque** — escribe `/` para buscar tipos de bloque
- Las páginas pueden tener **jerarquía padre-hijo** para estructuras de URL organizadas
- La **barra lateral derecha** contiene configuraciones importantes para cada entrada/página
- Usa `Shift + Enter` para una nueva línea, `Enter` para un nuevo bloque

---

**Siguiente Lección:** [Lección 05 - Categorías, Etiquetas y Taxonomías](lesson-05.md)
