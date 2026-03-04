# Lección 03: El Recorrido por el Dashboard de WordPress

## Objetivos
- Navegar por el panel de administración de WordPress con confianza
- Entender qué hace cada sección del dashboard
- Personalizar el dashboard para mostrar información útil
- Saber dónde encontrar todo lo que necesitas

---

## Acceder al Dashboard

1. Inicia tu sitio en Local WP
2. Haz clic en **"WP Admin"** o navega a `http://learning-wordpress.local/wp-admin/`
3. Inicia sesión con tus credenciales (`admin` / `admin`)

Lo primero que ves después de iniciar sesión es la **pantalla principal del Dashboard**.

---

## Pantalla Principal del Dashboard

La pantalla principal del Dashboard muestra una colección de **widgets** (paneles de información):

### Panel de Bienvenida
- Accesos rápidos para personalizar tu sitio, escribir una entrada, gestionar widgets, etc.
- Puedes ocultarlo haciendo clic en "Dismiss" en la esquina superior derecha del panel

### De un Vistazo
- Muestra cuántas entradas, páginas y comentarios tiene tu sitio
- Muestra tu tema actual y la versión de WordPress
- Una instantánea rápida del contenido de tu sitio

### Actividad
- Muestra las entradas publicadas recientemente
- Muestra los comentarios recientes pendientes de moderación

### Borrador Rápido
- Un mini editor para apuntar rápidamente una idea de entrada (se guarda como borrador)

### Eventos y Noticias de WordPress
- Próximos eventos de la comunidad WordPress
- Últimas noticias de WordPress.org

### Personalizar el Dashboard
- Haz clic en **"Screen Options"** (esquina superior derecha) para mostrar/ocultar widgets
- Arrastra y suelta los widgets para reorganizarlos
- La mayoría de profesionales ocultan todo excepto "De un Vistazo" y "Actividad"

---

## La Barra Lateral de Administración - Sección por Sección

La barra lateral izquierda es tu navegación principal. Repasemos cada elemento:

### 1. Dashboard
- **Home** — la pantalla principal del dashboard (lo que acabamos de ver)
- **Updates** — muestra las actualizaciones disponibles para el núcleo de WordPress, temas y plugins

### 2. Posts
Donde gestionas las **entradas del blog** (contenido cronológico, basado en fechas).
- **All Posts** — lista de todas las entradas, con opciones para editar, eliminar o editar en bloque
- **Add New Post** — crear una nueva entrada de blog
- **Categories** — organizar las entradas en categorías (ej., "Noticias", "Tutoriales")
- **Tags** — añadir etiquetas de palabras clave a las entradas para una mayor organización

### 3. Media
La **Biblioteca de Medios** — todos los archivos subidos (imágenes, PDFs, vídeos, audio).
- **Library** — explorar todos los medios subidos en vista de cuadrícula o lista
- **Add New Media File** — subir nuevos archivos
- También puedes subir medios directamente al editar una entrada o página

### 4. Pages
Donde gestionas las **páginas estáticas** (Acerca de, Contacto, Servicios, etc.).
- **All Pages** — lista de todas las páginas
- **Add New Page** — crear una nueva página
- Las páginas no tienen categorías ni etiquetas — son contenido independiente

### 5. Comments
Gestiona los comentarios dejados en las entradas del blog.
- Aprobar, responder, editar, marcar como spam o eliminar comentarios
- Configura las reglas de moderación de comentarios en Settings → Discussion

### 6. Appearance
Controla el **aspecto** de tu sitio.
- **Themes** — instalar, activar y gestionar temas
- **Customize** — el Personalizador de WordPress (vista previa en vivo de los cambios)
- **Widgets** — gestionar bloques de contenido en barras laterales y pies de página
- **Menus** — crear y gestionar menús de navegación
- **Theme File Editor** — editar el código del tema directamente (¡usar con precaución!)

### 7. Plugins
Gestiona la **funcionalidad** del sitio.
- **Installed Plugins** — ver todos los plugins, activarlos/desactivarlos
- **Add New Plugin** — buscar e instalar plugins del repositorio de WordPress
- **Plugin File Editor** — editar el código de los plugins directamente (no uses esto a menos que sepas lo que haces)

### 8. Users
Gestiona las **cuentas de usuario** y los roles.
- **All Users** — lista de todos los usuarios del sitio
- **Add New User** — crear una nueva cuenta de usuario
- **Profile** — editar tu propio perfil (nombre para mostrar, email, contraseña, etc.)

### 9. Tools
Funciones de utilidad.
- **Available Tools** — enlaces a press-this y otras herramientas
- **Import** — importar contenido desde otras plataformas (Blogger, Tumblr, etc.)
- **Export** — exportar tu contenido de WordPress como XML
- **Site Health** — información de diagnóstico sobre tu sitio

### 10. Settings
Configura el **comportamiento** de tu sitio.
- **General** — título del sitio, descripción, URL, zona horaria, formato de fecha
- **Writing** — categoría predeterminada de entradas, formato de entrada
- **Reading** — qué muestra tu página de inicio, cuántas entradas mostrar
- **Discussion** — configuración de comentarios y reglas de moderación
- **Media** — tamaños de imagen predeterminados
- **Permalinks** — estructura de URLs para tus entradas y páginas
- **Privacy** — configuración de la página de política de privacidad

---

## La Admin Bar (Barra Superior)

La barra oscura en la parte superior de cada página (también visible en el front-end cuando estás conectado):

| Elemento | Qué Hace |
|----------|----------|
| **Logo de WordPress** | Enlaza a WordPress.org, documentación y foros |
| **Nombre del sitio** | Pasa el ratón para obtener un enlace al front-end |
| **Updates** | Muestra si hay actualizaciones disponibles (insignia con número) |
| **Comments** | Muestra los comentarios pendientes (insignia con número) |
| **+ New** | Crear rápidamente una nueva entrada, página, medio o usuario |
| **Tu nombre (lado derecho)** | Editar perfil, cerrar sesión |

---

## Screen Options y Ayuda

Dos funciones que a menudo se pasan por alto en la **esquina superior derecha** de cada página de administración:

### Screen Options
- Haz clic para mostrar/ocultar columnas y elementos en la página actual
- Las opciones cambian dependiendo de la página en la que estés
- Ejemplo: En la lista de Posts, puedes mostrar/ocultar columnas como Author, Categories, Tags, Date

### Help
- Haz clic para obtener ayuda contextual sobre la página actual
- Útil cuando olvidas lo que hace una configuración específica

---

## Atajos de Teclado

WordPress tiene algunos atajos de teclado útiles:

| Atajo | Acción |
|-------|--------|
| `Alt + Shift + N` | Nueva entrada (en el editor) |
| `/` | Abrir el insertador de bloques (en el editor Gutenberg) |

Para la moderación de comentarios, activa los atajos en **Users → Profile → Keyboard Shortcuts**.

---

## Ejercicios

1. **Explora cada elemento de la barra lateral**: Haz clic en cada sección de la barra lateral izquierda. No cambies nada — solo mira lo que hay disponible.

2. **Personaliza el dashboard**: Haz clic en "Screen Options" en la pantalla principal del Dashboard y oculta todo excepto "De un Vistazo" y "Actividad".

3. **Revisa las páginas de Settings**: Visita cada página dentro de Settings (General, Writing, Reading, Discussion, Media, Permalinks, Privacy) y lee las opciones. Anota lo que controla cada una.

4. **Visita tu sitio desde la barra de administración**: Pasa el ratón sobre el nombre de tu sitio en la barra superior y haz clic en "Visit Site". Luego haz clic de nuevo en el nombre de tu sitio para volver al dashboard.

5. **Comprueba Site Health**: Ve a **Tools → Site Health** y mira lo que reporta. Será más útil más adelante, pero familiarízate con dónde está.

---

## Puntos Clave

- La **barra lateral izquierda** es tu navegación principal — contiene todo
- **Posts** son para contenido del blog, **Pages** son para contenido estático
- **Appearance** controla el aspecto de tu sitio (temas, menús, widgets)
- **Plugins** añaden funcionalidad
- **Settings** configura el comportamiento (especialmente Permalinks y Reading)
- **Screen Options** (esquina superior derecha) te permite personalizar cada página de administración
- La **admin bar** proporciona acceso rápido a acciones comunes
- Puedes ocultar el panel de bienvenida y reorganizar los widgets del dashboard

---

**Siguiente Lección:** [Lección 04 - Entradas vs Páginas](lesson-04.md)
