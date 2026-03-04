# Lección 11: Widgets y Barras Laterales

## Objetivos
- Comprender qué son los widgets y las áreas de widgets (barras laterales)
- Añadir, configurar y eliminar widgets
- Conocer los tipos comunes de widgets
- Comprender cómo encajan los widgets en el WordPress moderno

---

## ¿Qué Son los Widgets?

Los **widgets** son pequeños bloques de contenido que puedes colocar en áreas designadas de tu sitio. Añaden contenido y funciones fuera del contenido principal de tus páginas/entradas.

Las **Áreas de Widgets** (también llamadas "sidebars") son las ubicaciones donde se pueden colocar los widgets. A pesar del nombre "sidebar", las áreas de widgets pueden estar en cualquier lugar que tu theme defina:
- Barra lateral (columna izquierda o derecha)
- Pie de página (una o más columnas de footer)
- Área de cabecera (algunos themes)

---

## Áreas de Widgets en Hello Elementor

Hello Elementor es minimalista y proporciona áreas de widgets limitadas por defecto. La mayoría de themes (como Astra) ofrecen más.

Cuando usas Elementor para tu diseño, dependerás menos de los widgets porque Elementor tiene su propio sistema de widgets. Sin embargo, comprender los widgets de WordPress es importante porque:
- Muchos themes y plugins los usan
- Las barras laterales de blogs los usan comúnmente
- Las áreas de pie de página los usan frecuentemente
- Los encontrarás en sitios existentes

---

## Gestionar Widgets

### Acceder al Editor de Widgets

Hay dos formas de gestionar widgets:

**Método 1: Editor de Widgets basado en bloques (más nuevo)**
1. Ve a **Appearance → Widgets**
2. Verás tus áreas de widgets con un editor basado en bloques
3. Añade bloques igual que en el editor de entradas

**Método 2: A través del Personalizador**
1. Ve a **Appearance → Customize → Widgets**
2. Selecciona un área de widgets
3. Añade y configura widgets con una vista previa en vivo

### Añadir Widgets

1. Ve a **Appearance → Widgets**
2. Haz clic en el botón **"+"** en el área de widgets donde quieras añadir contenido
3. Busca o navega por los widgets/bloques disponibles
4. Haz clic para añadir, luego configura

### Eliminar Widgets

1. Haz clic en el widget en el área de widgets
2. Haz clic en el menú de tres puntos (⋮)
3. Selecciona **"Remove"**

---

## Tipos Comunes de Widgets

| Widget | Qué Hace |
|--------|----------|
| **Paragraph** | Mostrar texto |
| **Image** | Mostrar una imagen |
| **Search** | Una barra de búsqueda para tu sitio |
| **Recent Posts** | Lista de tus últimas entradas de blog |
| **Recent Comments** | Lista de los últimos comentarios |
| **Archives** | Archivos mensuales/anuales de entradas |
| **Categories** | Lista o desplegable de categorías de entradas |
| **Navigation Menu** | Mostrar un menú que hayas creado |
| **Custom HTML** | Añadir código HTML sin procesar |
| **Calendar** | Un calendario que muestra entradas por fecha |
| **Tag Cloud** | Mostrar tus etiquetas en una nube visual |
| **RSS** | Mostrar un feed de otro sitio |

### Widgets de Plugins
Muchos plugins añaden sus propios widgets:
- **WooCommerce**: Carrito, búsqueda de productos, categorías de productos, filtros
- **Formularios de contacto**: Mostrar un formulario en la barra lateral
- **Redes sociales**: Enlaces sociales, feeds, botones de seguir

---

## Usos Comunes de las Áreas de Widgets

### Widgets de Barra Lateral (para blogs)
Una barra lateral de blog típica podría incluir:
1. Barra de búsqueda
2. Sobre el autor (texto + imagen)
3. Entradas Recientes
4. Categorías
5. Enlaces a redes sociales
6. Suscripción al boletín

### Widgets del Pie de Página
Un pie de página típico podría incluir:
1. Columna 1: Sobre la empresa + información de contacto
2. Columna 2: Enlaces rápidos (widget de menú)
3. Columna 3: Entradas recientes o enlaces sociales
4. Columna 4: Suscripción al boletín u horario comercial

---

## Widgets vs Widgets de Elementor

No confundas estos dos:

| Widgets de WordPress | Widgets de Elementor |
|---------------------|---------------------|
| Van en áreas de widgets definidas por el theme | Van en cualquier parte de los diseños de Elementor |
| Se gestionan en Appearance → Widgets | Se gestionan en el editor de Elementor |
| Opciones de colocación limitadas | Libertad total de arrastrar y soltar |
| Opciones de estilo básicas | Control de estilo completo |

**Cuando usas Elementor:** Principalmente usarás los propios widgets de Elementor dentro del constructor de páginas. Los widgets de WordPress son relevantes principalmente para:
- Barras laterales de blog (si tu plantilla de blog tiene barra lateral)
- Áreas que Elementor no controla (depende de tu configuración)
- Adiciones rápidas a las áreas del pie de página

---

## El Editor de Widgets por Bloques

WordPress moderno usa el **editor de bloques para widgets** (los mismos bloques que el editor de entradas). Esto significa que puedes añadir:
- Párrafos, encabezados, imágenes, listas
- Columnas para diseños multicolumna dentro de un área de widgets
- Cualquier tipo de bloque disponible en el editor de entradas

### Bloque de Widget Heredado
Si un plugin proporciona un widget de estilo antiguo que no tiene un equivalente en bloques:
1. Añade el bloque **"Legacy Widget"**
2. Selecciona el widget de estilo antiguo del desplegable
3. Configúralo dentro del bloque

---

## Ejercicios

1. **Explora las áreas de widgets**: Ve a Appearance → Widgets y observa qué áreas de widgets proporciona tu theme.

2. **Añade widgets a una barra lateral**: Si tu theme tiene un área de widgets en la barra lateral, añade un bloque de Búsqueda, un bloque de Entradas Recientes y un bloque de Categorías.

3. **Añade contenido al pie de página**: Si tu theme tiene áreas de widgets en el pie de página, añade algo de texto, una imagen y un widget de menú de navegación.

4. **Usa el Personalizador**: Ve a Appearance → Customize → Widgets e intenta añadir/editar widgets con la vista previa en vivo.

5. **Elimina un widget**: Practica eliminando un widget que hayas añadido.

---

## Puntos Clave

- Los **widgets** son bloques de contenido que se colocan en **áreas de widgets** (barras laterales, pies de página)
- Gestiónalos en **Appearance → Widgets** o a través del **Personalizador**
- WordPress moderno usa el **editor de bloques** para widgets
- Widgets comunes: Search, Recent Posts, Categories, Navigation Menu, Custom HTML
- Cuando usas **Elementor**, dependerás menos de los widgets de WordPress y más del propio sistema de widgets de Elementor
- Los plugins a menudo añaden sus propios widgets (WooCommerce, formularios de contacto, etc.)
- Los widgets son más útiles para **barras laterales de blogs** y **áreas del pie de página**

---

**Siguiente Lección:** [Lección 12 - El Personalizador](lesson-12-customizer.md)
