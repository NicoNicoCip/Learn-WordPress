# Lección 13: Instalar Elementor + Vista General de la Interfaz

## Objetivos
- Instalar y activar el plugin Elementor
- Entender el diseño de la interfaz de Elementor
- Aprender la diferencia entre Elementor Free y Pro
- Abrir tu primera página en Elementor

---

## ¿Qué es Elementor?

Elementor es un **constructor visual de páginas con arrastrar y soltar** para WordPress. En lugar de escribir código o usar el editor de bloques básico, diseñas páginas visualmente — lo que ves es lo que tus visitantes obtienen.

### ¿Por qué Elementor?
- **Edición visual** — diseña en tiempo real, sin ir y venir con previsualizaciones
- **Sin necesidad de código** — arrastra widgets, haz clic para estilizar
- **Resultados profesionales** — crea diseños que parecen programados a medida
- **Gran comunidad** — montones de tutoriales, plantillas y complementos de terceros
- **Estándar de la industria** — usado por millones de sitios, requerido por muchas agencias

---

## Free vs Pro

| Característica | Elementor Free | Elementor Pro ($49+/año) |
|---------------|---------------|--------------------------|
| **Widgets básicos** | 40+ widgets | 100+ widgets |
| **Construcción de páginas** | Sí | Sí |
| **Theme Builder** | No | Sí — diseña cabecera, pie de página, plantillas de blog |
| **Popup Builder** | No | Sí |
| **WooCommerce Builder** | No | Sí — diseña páginas de tienda/producto |
| **Widget de Formulario** | No | Sí |
| **Global Widgets** | No | Sí — reutiliza widgets entre páginas |
| **CSS personalizado por widget** | No | Sí |
| **Plantillas** | Limitadas | 300+ plantillas pro |

### Empezando con Free
Puedes lograr mucho con la versión gratuita. Empezaremos con la versión gratuita e indicaremos cuándo una función requiere Pro. También hay plugins gratuitos de terceros que añaden algunas funciones similares a Pro (los mencionaremos también).

---

## Instalar Elementor

### Paso 1: Instalar el Plugin
1. Ve a **Plugins → Add New Plugin**
2. Busca **"Elementor"**
3. Encuentra **"Elementor Website Builder"** de Elementor.com
4. Haz clic en **"Install Now"**
5. Después de la instalación, haz clic en **"Activate"**

### Paso 2: Saltar el Asistente de Configuración
- Elementor puede mostrar un asistente de configuración — puedes seguirlo o saltarlo
- Nosotros configuraremos todo manualmente

### Paso 3: Verificar la Instalación
- Deberías ver **"Elementor"** en la barra lateral izquierda de wp-admin
- Al editar cualquier página, verás un botón **"Edit with Elementor"**

---

## Abrir una Página en Elementor

### Método 1: Desde wp-admin
1. Ve a **Pages → All Pages**
2. Pasa el ratón sobre una página
3. Haz clic en **"Edit with Elementor"**

### Método 2: Desde el editor de páginas
1. Edita cualquier página en WordPress
2. Haz clic en el botón **"Edit with Elementor"** en la parte superior

### Método 3: Desde el front-end
1. Visita cualquier página mientras estás conectado
2. Haz clic en **"Edit with Elementor"** en la barra de administración

### Crear una Nueva Página con Elementor
1. Ve a **Pages → Add New**
2. Dale un título
3. Haz clic en **"Edit with Elementor"**

---

## La Interfaz de Elementor

Cuando abres Elementor, la interfaz tiene estas áreas clave:

### Panel Izquierdo (Panel de Widgets)
El panel en el lado izquierdo contiene:

**Sección superior:**
- **Menú hamburguesa (☰)** — accede a ajustes, preferencias de usuario, navegación
- **Búsqueda de widgets** — busca widgets por nombre
- **Categorías de widgets** — navega por widgets por categoría

**Área de widgets:**
- Cuadrícula de widgets disponibles que puedes arrastrar a la página
- Categorías: Basic, General, Site, Pro, etc.

**Sección inferior:**
- **Settings (icono de engranaje)** — ajustes de página (título, diseño, imagen destacada)
- **Navigator (icono de capas)** — muestra una vista en árbol de todos los elementos de la página
- **History (icono de reloj)** — historial de deshacer/rehacer con marcas de tiempo
- **Responsive mode (iconos de dispositivos)** — cambia entre vistas de escritorio, tablet, móvil

### Canvas (Centro/Derecha)
El área principal de edición donde construyes tu página:
- **Botones "+" azules** — añade nuevas secciones
- **Arrastra widgets** del panel izquierdo al canvas
- **Haz clic en cualquier elemento** para seleccionarlo y editarlo
- **Clic derecho** para menú contextual (copiar, pegar, eliminar, etc.)

### Barra Inferior
- **Alternadores de modo responsivo** — escritorio, tablet, móvil
- **Acceso directo a ajustes de página**
- **Alternar Navigator**
- **Botón Publish/Update**

---

## Acciones Clave de la Interfaz

### Seleccionar Elementos
- **Haz clic** en un elemento del canvas para seleccionarlo
- Aparece un **borde azul** alrededor del elemento seleccionado
- El panel izquierdo cambia para mostrar los ajustes de ese elemento

### Asa del Elemento
Cuando pasas el ratón sobre un elemento, ves un asa con:
- **Icono de edición (lápiz)** — editar el elemento
- **Asa de arrastre (puntos)** — arrastrar para mover
- **Clic derecho** — copiar, pegar, duplicar, eliminar

### Asa de Sección
Cuando pasas el ratón sobre una sección (el contenedor a ancho completo), ves:
- **Pestaña azul en la parte superior** con un icono de cuadrícula
- Haz clic para seleccionar la sección
- Arrastra para mover la sección
- Clic derecho para opciones de sección

---

## Panel Navigator

El Navigator es increíblemente útil — muestra la estructura de tu página como un árbol:

1. Haz clic en el **icono de capas** en la parte inferior izquierda del panel
2. O presiona **Ctrl + I** en tu teclado

El Navigator muestra:
```
Page
├── Section 1
│   ├── Column 1
│   │   ├── Heading
│   │   └── Text Editor
│   └── Column 2
│       └── Image
├── Section 2
│   └── Column 1
│       ├── Heading
│       └── Button
```

### Funciones del Navigator:
- Haz clic en cualquier elemento para seleccionarlo en el canvas
- Arrastra elementos para reordenarlos
- Clic derecho para opciones (renombrar, duplicar, eliminar)
- El icono del ojo oculta/muestra elementos
- **Renombra elementos** para mejor organización (clic derecho → Rename)

---

## Guardar tu Trabajo

### Opciones de Guardado:
- **Publish** — publica la página (o actualiza si ya está publicada)
- **Save Draft** — guarda sin publicar
- **Save as Template** — guarda el diseño como plantilla reutilizable

### Auto-Guardado
Elementor guarda automáticamente periódicamente, pero siempre guarda manualmente antes de cerrar.

### Atajo de Teclado
- **Ctrl + S** — guardar/publicar tu página

### Salir de Elementor
- Haz clic en el **menú hamburguesa (☰)** → **Exit**
- O haz clic en la **"X"** en la esquina superior izquierda
- O haz clic en el enlace **"Back to WordPress Editor"**

---

## Ajustes de Elementor (en wp-admin)

Después de instalar, hay un elemento de menú **Elementor** en wp-admin con estos ajustes:

### Settings
- **General**: Elige qué tipos de contenido pueden usar Elementor (Pages, Posts)
- **Integrations**: Conecta Google Maps, reCAPTCHA, etc.
- **Advanced**: Método de impresión CSS, método de carga del editor
- **Performance**: Experimenta con funciones de rendimiento

### Ajuste Importante:
Ve a **Elementor → Settings → General** y asegúrate de que **"Pages"** y **"Posts"** estén marcados en "Post Types" para poder usar Elementor en ambos.

---

## Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl + S` | Guardar |
| `Ctrl + Z` | Deshacer |
| `Ctrl + Shift + Z` | Rehacer |
| `Ctrl + C` | Copiar elemento |
| `Ctrl + V` | Pegar elemento |
| `Ctrl + D` | Duplicar elemento |
| `Delete` | Eliminar elemento seleccionado |
| `Ctrl + I` | Alternar Navigator |
| `Ctrl + Shift + M` | Alternar modo responsivo |
| `Ctrl + Shift + L` | Abrir biblioteca de plantillas |
| `Ctrl + ?` | Mostrar todos los atajos de teclado |

---

## Ejercicios

1. **Instala Elementor**: Sigue los pasos de instalación de arriba.

2. **Abre una página en Elementor**: Abre tu página "Home" en Elementor. No añadas nada todavía — solo explora la interfaz.

3. **Explora el panel de widgets**: Navega por los widgets disponibles. Observa cuáles son gratuitos y cuáles son Pro.

4. **Prueba el Navigator**: Presiona Ctrl + I para abrir el Navigator. Si la página está vacía, está bien — lo usaremos más en la siguiente lección.

5. **Revisa los atajos de teclado**: Presiona Ctrl + ? para ver todos los atajos de teclado.

6. **Configura los ajustes de Elementor**: Ve a Elementor → Settings → General y asegúrate de que Pages y Posts estén activados.

---

## Puntos Clave

- Elementor es un **constructor visual de páginas con arrastrar y soltar** — sin necesidad de código
- Instálalo como cualquier plugin: **Plugins → Add New → busca "Elementor"**
- La interfaz tiene un **panel izquierdo** (widgets/ajustes) y un **canvas** (tu página)
- El **Navigator** (Ctrl + I) muestra la estructura de tu página como un árbol — úsalo a menudo
- La **versión gratuita** es suficientemente potente para empezar; Pro añade theme builder, popups, formularios
- Siempre **guarda tu trabajo** (Ctrl + S) antes de salir
- Edita cualquier página con Elementor haciendo clic en **"Edit with Elementor"**

---

**Siguiente Lección:** [Lección 14 - Secciones, Columnas y Widgets](lesson-14-sections-columns-widgets.md)
