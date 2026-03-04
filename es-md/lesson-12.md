# Lección 12: El Personalizador de WordPress

## Objetivos
- Usar el Personalizador de WordPress para ajustes globales del sitio
- Configurar la identidad del sitio (logo, favicon)
- Añadir CSS personalizado
- Comprender el papel del Personalizador al usar Elementor

---

## ¿Qué es el Personalizador?

El **Personalizador de WordPress** es una herramienta visual para realizar cambios globales en el sitio con una **vista previa en vivo**. Te permite modificar ajustes y ver los resultados en tiempo real antes de publicar.

Accede en: **Appearance → Customize** (o haz clic en "Customize" en la barra de administración mientras ves tu sitio)

---

## Interfaz del Personalizador

### Disposición:
- **Panel izquierdo**: Ajustes y opciones organizados por sección
- **Panel derecho**: Vista previa en vivo de tu sitio
- **Barra superior**: Navegación (botón atrás, vista previa de dispositivos, publicar)

### Vista Previa de Dispositivos
En la parte inferior del panel izquierdo, verás iconos de dispositivos:
- **Escritorio** — vista de ancho completo
- **Tablet** — vista con ancho de tablet
- **Móvil** — vista con ancho de teléfono

Úsalos para comprobar cómo se ve tu sitio en diferentes dispositivos.

---

## Secciones del Personalizador (Hello Elementor)

El Personalizador de Hello Elementor es minimalista. Esto es lo que encontrarás:

### Site Identity
La sección más importante del Personalizador:

| Ajuste | Qué Hacer |
|--------|-----------|
| **Logo** | Sube el logo de tu sitio (recomendado PNG con transparencia, 200-300px de ancho) |
| **Site Title** | El nombre de tu sitio (se muestra si no hay logo configurado) |
| **Tagline** | Breve descripción del sitio |
| **Display Site Title and Tagline** | Mostrar/ocultar estos en la cabecera |
| **Site Icon (Favicon)** | Imagen cuadrada (mín. 512×512px) para las pestañas del navegador |

### Menus
La misma gestión de menús que Appearance → Menus, pero con una vista previa en vivo.

### Widgets
Lo mismo que Appearance → Widgets, pero con una vista previa en vivo.

### Homepage Settings
Lo mismo que Settings → Reading — elige si la página de inicio muestra las últimas entradas o una página estática.

### Additional CSS
Añade CSS personalizado que se aplica a todo el sitio. Aquí es donde pones pequeños ajustes de estilo sin editar archivos del theme.

---

## Añadir CSS Personalizado

La sección **Additional CSS** es útil para pequeños ajustes de estilo:

1. Ve a **Appearance → Customize → Additional CSS**
2. Escribe tu CSS en el editor
3. Ve los cambios en tiempo real en la vista previa

### Ejemplos de Fragmentos CSS:

**Ocultar el título de la página en todas las páginas:**
```css
.page .entry-title {
    display: none;
}
```

**Cambiar el color de los enlaces:**
```css
a {
    color: #0066cc;
}
a:hover {
    color: #004499;
}
```

**Añadir más espacio entre párrafos:**
```css
.entry-content p {
    margin-bottom: 1.5em;
}
```

### Cuándo Usar Additional CSS vs Estilos de Elementor
- **Additional CSS**: Para cambios globales del sitio que afectan a páginas que no son de Elementor (entradas de blog, páginas de archivo, áreas controladas por la administración)
- **Estilos de Elementor**: Para páginas construidas con Elementor (Elementor tiene sus propios controles de estilo — úsalos en su lugar)

---

## Personalizador con Otros Themes

Si cambias a un theme con más funciones (como Astra), el Personalizador tendrá muchas más secciones:

| Sección | Qué Controla |
|---------|-------------|
| Global | Colores base, tipografía, ancho del contenedor |
| Header Builder | Colocación del logo, estilo del menú, búsqueda, botones |
| Breadcrumb | Migas de pan de navegación |
| Blog | Diseño del blog, meta de entradas, páginas de archivo |
| Sidebar | Diseño y ancho de la barra lateral |
| Footer Builder | Columnas del pie de página, copyright, widgets |
| Colors & Background | Esquema de colores de todo el sitio |
| Typography | Familias de fuentes, tamaños, pesos |
| Buttons | Estilos de botones, colores, bordes |
| Layout | Ancho del contenido, relleno |

Por eso algunas personas eligen Astra o GeneratePress — ofrecen más control a través del Personalizador sin necesitar Elementor Pro.

---

## Personalizador vs Elementor vs Ajustes del Theme

Comprender cuándo usar cada uno:

| Qué Estás Cambiando | Dónde Hacerlo |
|---------------------|---------------|
| Logo del sitio y favicon | Customizer → Site Identity |
| Diseño y disposición de páginas | Editor de Elementor |
| Colores y fuentes globales (páginas de Elementor) | Elementor → Site Settings |
| Diseño de entradas de blog | Personalizador o ajustes del theme (si están disponibles) |
| Menús de navegación | Customizer → Menus o Appearance → Menus |
| Diseño del pie de página (con Elementor) | Elementor Theme Builder (Pro) o plugin Header Footer |
| Pequeños ajustes CSS | Customizer → Additional CSS |
| Ajustes SEO | Plugin SEO (Yoast/RankMath) |

---

## Publicar y Programar Cambios

### Publicar Inmediatamente
- Haz clic en **"Publish"** en el Personalizador para aplicar los cambios inmediatamente

### Guardar como Borrador
- Haz clic en el **icono de engranaje** junto a Publish
- Selecciona **"Save Draft"** para guardar sin publicar
- Tus cambios se guardan pero no son visibles para los visitantes
- Vuelve más tarde para publicar

### Programar Cambios
- Haz clic en el icono de engranaje junto a Publish
- Selecciona **"Schedule"**
- Elige una fecha y hora
- Los cambios se activarán automáticamente en ese momento
- Útil para lanzamientos coordinados (nuevo logo, rediseño, etc.)

---

## Ejercicios

1. **Configura la Identidad del Sitio**: Sube un logo (o usa una imagen de marcador de posición), establece un favicon y configura el título y eslogan de tu sitio.

2. **Previsualiza en diferentes dispositivos**: Usa los botones de vista previa de dispositivos para ver cómo se ve tu sitio en escritorio, tablet y móvil.

3. **Añade CSS personalizado**: Ve a Additional CSS y añade una regla simple (como cambiar un color u ocultar un elemento). Observa la vista previa en vivo.

4. **Prueba guardar como borrador**: Haz un cambio, guárdalo como borrador y luego cierra el Personalizador. Vuelve a abrirlo para encontrar tu borrador.

5. **Explora los menús en el Personalizador**: Navega a la sección Menus e intenta editar tu menú con la vista previa en vivo.

---

## Puntos Clave

- El **Personalizador** proporciona edición con vista previa en vivo para ajustes globales del sitio
- Úsalo para la **identidad del sitio** (logo, favicon), **menús** y **pequeños ajustes CSS**
- **Additional CSS** es donde añades ajustes de estilo globales del sitio
- Cuando usas Elementor, el papel del Personalizador se reduce — Elementor maneja la mayor parte del diseño
- Puedes **guardar como borrador** o **programar** los cambios del Personalizador
- Los themes con más funciones (Astra, GeneratePress) añaden muchas más opciones al Personalizador
- Usa la **vista previa de dispositivos** para comprobar las vistas de móvil y tablet

---

**Siguiente Módulo:** [Módulo 3 - Construcción de Páginas con Elementor](../Module-03-Elementor/lesson-13-installing-elementor.md)
