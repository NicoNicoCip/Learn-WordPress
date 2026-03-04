# Lección 08: Comprendiendo los Themes

## Objetivos
- Comprender qué son los themes de WordPress y cómo funcionan
- Conocer la diferencia entre themes gratuitos y premium
- Aprender a evaluar y elegir un theme
- Comprender los themes padre e hijo

---

## ¿Qué es un Theme?

Un theme de WordPress controla la **apariencia visual** y el **diseño** de tu sitio. Determina:
- Cómo se ven tu cabecera y pie de página
- La disposición de páginas y entradas (barra lateral, ancho completo, etc.)
- La tipografía (fuentes, tamaños, interlineado)
- Los colores y estilos
- Qué opciones de plantilla están disponibles

### Concepto Clave
**Un theme controla la presentación, no el contenido.** Puedes cambiar de theme sin perder tus entradas, páginas, medios ni configuraciones. Tu contenido permanece en la base de datos; el theme solo cambia cómo se muestra.

---

## Cómo Funcionan los Themes (Por Dentro)

Un theme es una carpeta de archivos dentro de `wp-content/themes/`:

```
wp-content/themes/your-theme/
├── style.css          ← Hoja de estilos principal + metadatos del theme
├── functions.php      ← Funcionalidad del theme (registra menús, widgets, etc.)
├── index.php          ← Plantilla de respaldo
├── header.php         ← Cabecera del sitio
├── footer.php         ← Pie de página del sitio
├── sidebar.php        ← Barra lateral
├── single.php         ← Plantilla de entrada individual
├── page.php           ← Plantilla de página individual
├── archive.php        ← Páginas de archivo de categorías/etiquetas
├── 404.php            ← Plantilla de "Página no encontrada"
├── screenshot.png     ← Imagen de vista previa del theme
└── ...más archivos de plantilla
```

No necesitas editar estos archivos, especialmente porque usaremos Elementor para el diseño. Pero comprender la estructura te ayudará a solucionar problemas más adelante.

---

## Themes Gratuitos vs Premium

| Aspecto | Themes Gratuitos | Themes Premium |
|---------|-----------------|----------------|
| **Coste** | 0 € | 30-100+ € (pago único o anual) |
| **Dónde encontrarlos** | Directorio de themes de WordPress.org | ThemeForest, sitios de desarrolladores de themes |
| **Soporte** | Solo foros de la comunidad | Soporte dedicado del desarrollador |
| **Actualizaciones** | Variable — algunos abandonados | Actualizaciones regulares (normalmente) |
| **Características** | Básicas | Más opciones de personalización, demos, plantillas de página |
| **Calidad** | Variable | Generalmente mayor calidad |
| **Seguridad** | Revisados por WordPress.org | Depende del desarrollador |

### Para Usuarios de Elementor
Dado que Elementor se encarga de la mayor parte del diseño, no necesitas un theme con muchas funciones. De hecho, **un theme minimalista es mejor** porque:
- No entrará en conflicto con los estilos de Elementor
- Carga más rápida (menos código)
- Menos problemas de compatibilidad

**Themes recomendados para Elementor:**
1. **Hello Elementor** (gratuito) — creado por el equipo de Elementor, ultra-minimalista, diseñado específicamente para Elementor
2. **Astra** (gratuito + de pago) — ligero, altamente personalizable, excelente integración con Elementor
3. **GeneratePress** (gratuito + de pago) — enfocado en rendimiento, código limpio
4. **OceanWP** (gratuito + de pago) — muchas funciones integradas y demos

---

## Elegir un Theme: Qué Buscar

### Imprescindibles
1. **Actualizaciones regulares** — última actualización en los últimos 6 meses
2. **Compatibilidad con la versión de WordPress** — funciona con la última versión de WordPress
3. **Diseño responsive** — se ve bien en móvil, tablet y escritorio
4. **Buenas reseñas/valoraciones** — 4+ estrellas con muchas reseñas
5. **Soporte activo** — el desarrollador responde a las preguntas

### Deseables
- Importación de contenido demo (un clic para obtener un sitio pre-diseñado)
- Múltiples diseños de cabecera/pie de página
- Compatibilidad con WooCommerce (si vas a construir sitios de comercio electrónico)
- Preparado para traducción (si necesitas sitios multilingües)

### Señales de Alerta
- Sin actualizar en más de un año
- Valoraciones bajas o muchas quejas sin resolver
- Funciones excesivas que no necesitas (los themes sobrecargados ralentizan tu sitio)
- Sin documentación
- Requiere muchos complementos de pago para funciones básicas

---

## Themes Padre e Hijo

### ¿Qué es un Theme Hijo?
Un theme hijo **hereda** toda la funcionalidad y los estilos de otro theme (el "padre") mientras te permite realizar personalizaciones que no se sobrescribirán cuando el theme padre se actualice.

```
Theme Padre (ej., Astra)
    ↓ proporciona estilos y funcionalidad base
Theme Hijo (ej., Astra Child)
    ↓ tus personalizaciones van aquí
```

### ¿Por Qué Usar un Theme Hijo?
- **Personalizaciones seguras** — tus cambios sobreviven a las actualizaciones del theme padre
- **Fácil de revertir** — elimina el theme hijo para volver al padre
- **Separación limpia** — mantiene tus cambios separados del theme original

### Cuándo Necesitas un Theme Hijo
- Cuando necesitas editar archivos de plantilla del theme (PHP)
- Cuando quieres añadir CSS personalizado que no se pierda en una actualización
- Cuando necesitas sobrescribir funciones específicas del theme

### Cuándo No Necesitas un Theme Hijo
- Cuando usas Elementor para todo tu diseño (Elementor almacena los diseños en la base de datos, no en archivos del theme)
- Cuando solo usas el Personalizador de WordPress para los cambios
- Cuando el theme tiene su propio panel de opciones para la personalización

**Para este curso:** Como estamos usando Elementor, probablemente no necesitarás un theme hijo de inmediato. Pero es bueno conocerlos.

---

## Los Themes Predeterminados de WordPress

WordPress viene con varios themes predeterminados (nombrados por año):
- **Twenty Twenty-Five** (o el theme del último año)
- **Twenty Twenty-Four**
- **Twenty Twenty-Three**

Son buenos para aprender pero normalmente no se usan para sitios profesionales de clientes. Demuestran las capacidades de WordPress y sirven como respaldo.

**Buena práctica:** Mantén un theme predeterminado instalado como respaldo. Si tu theme activo falla, WordPress cambiará automáticamente a un theme predeterminado para que tu sitio no se caiga completamente.

---

## Block Themes vs Themes Clásicos

WordPress tiene dos tipos de themes:

### Themes Clásicos
- Usan archivos de plantilla PHP (header.php, footer.php, etc.)
- Se personalizan a través del Personalizador, opciones del theme o código
- Funcionan bien con Elementor y otros constructores de páginas
- **Esto es lo que usaremos** — Hello Elementor es un theme clásico

### Block Themes (Edición Completa del Sitio / FSE)
- Usan archivos de plantilla HTML con marcado de bloques
- Se personalizan completamente a través del editor de bloques (Gutenberg)
- El Editor del Sitio te permite editar cabeceras, pies de página y plantillas visualmente
- Enfoque más reciente — WordPress se está moviendo en esta dirección
- No los uses con Elementor — están diseñados para Gutenberg

**Para tu trabajo con Elementor**, quédate con los themes clásicos.

---

## Ejercicios

1. **Explora el directorio de themes**: Ve a **Appearance → Themes → Add New Theme** en tu administración de WordPress. Navega por los themes populares y destacados. Observa la vista previa, valoraciones e información de "Última actualización".

2. **Previsualiza un theme**: Haz clic en cualquier theme y luego haz clic en **"Live Preview"** para ver cómo se vería en tu sitio sin activarlo.

3. **Comprueba los themes instalados**: Ve a **Appearance → Themes** para ver qué themes están instalados actualmente. Deberías ver el theme activo actual y 1-2 themes predeterminados.

4. **Investiga Hello Elementor**: Busca "Hello Elementor" en el directorio de themes. Lee su descripción y reseñas. Lo instalaremos en la próxima lección.

5. **Compara themes**: Previsualiza 3 themes diferentes en tu sitio y anota las diferencias en diseño, tipografía y sensación general.

---

## Puntos Clave

- Un theme controla cómo **se ve** tu sitio, no tu contenido
- Puedes **cambiar de theme sin perder contenido** — el contenido se almacena en la base de datos
- Para usuarios de Elementor, **los themes minimalistas son mejores** (Hello Elementor, Astra, GeneratePress)
- Comprueba **actualizaciones recientes, buenas valoraciones y diseño responsive** al elegir un theme
- Los **themes hijo** te permiten personalizar de forma segura sin perder cambios en las actualizaciones
- Mantén un **theme predeterminado instalado** como respaldo
- Usa **themes clásicos** (no block themes) cuando trabajes con Elementor

---

**Siguiente Lección:** [Lección 09 - Instalar y Configurar un Theme](lesson-09-installing-theme.md)
