# Lección 19: Plantillas, Guardado y Reutilización de Diseños

## Objetivos
- Usar la biblioteca de plantillas de Elementor
- Guardar tus propias secciones y páginas como plantillas
- Importar y exportar plantillas
- Trabajar eficientemente reutilizando diseños

---

## ¿Qué Son las Plantillas?

Las plantillas son **diseños prediseñados** que puedes insertar en tus páginas. Te ahorran construir todo desde cero.

### Tipos de Plantillas:

| Tipo | Qué Es |
|------|--------|
| **Page Template** | Un diseño de página completo (todas las secciones) |
| **Section Template** | Una sola sección (hero, CTA, características, etc.) |
| **My Templates** | Tus propios diseños guardados |
| **Elementor Library** | Plantillas prediseñadas de Elementor |

---

## Usar la Biblioteca de Plantillas de Elementor

### Acceder a la Biblioteca

1. Abre una página en Elementor
2. Haz clic en el **icono de carpeta** en el panel de widgets, o
3. Presiona **Ctrl + Shift + L**, o
4. Haz clic en el **icono de carpeta** que aparece en el centro del canvas al añadir una nueva sección

### Navegar por las Plantillas

La biblioteca tiene pestañas:
- **Pages** — diseños de páginas completas
- **Blocks** (Secciones) — diseños de secciones individuales (hero, FAQ, características, etc.)
- **My Templates** — tus plantillas guardadas

### Insertar una Plantilla

1. Navega y encuentra una plantilla que te guste
2. Haz clic en **"Insert"**
3. La plantilla se añade a tu página
4. Luego puedes personalizar todo el contenido, colores, fuentes e imágenes

### Plantillas Free vs Pro
- Las plantillas marcadas con un **icono de diamante** requieren Elementor Pro
- Las plantillas gratuitas están disponibles sin ninguna mejora
- Incluso las plantillas gratuitas proporcionan buenos puntos de partida

---

## Guardar tus Propias Plantillas

### Guardar una Sección como Plantilla

Esto es extremadamente útil — guarda una sección que hayas diseñado bien y reutilízala entre páginas.

1. **Clic derecho** en el asa de la sección (pestaña azul en la parte superior de la sección)
2. Haz clic en **"Save as Template"**
3. Dale un nombre descriptivo (ej., "Sección Hero - Fondo Oscuro" o "3 Columnas Servicios")
4. Haz clic en **"Save"**

### Guardar una Página Entera como Plantilla

1. Haz clic en el **menú hamburguesa (☰)** → **"Save as Template"** (o la flecha arriba junto a Update/Publish)
2. Dale un nombre (ej., "Plantilla Homepage Negocio")
3. Haz clic en **"Save"**

### Usar tus Plantillas Guardadas

1. Abre la biblioteca de plantillas (Ctrl + Shift + L)
2. Ve a la pestaña **"My Templates"**
3. Encuentra tu plantilla
4. Haz clic en **"Insert"**
5. Personaliza el contenido para la nueva página

---

## Organizar Plantillas

### Convención de Nombres
Usa un sistema de nombres claro:
```
[Tipo] - [Descripción] - [Variante]

Ejemplos:
Hero - Imagen de Fondo - Centrado
Servicios - 3 Columnas Iconos - Fondo Claro
CTA - Ancho Completo - Degradado
Testimonios - Slider - Oscuro
Footer - 4 Columnas - Con Mapa
```

### Construir una Biblioteca de Plantillas
Con el tiempo, construye una colección de secciones reutilizables:
- **Secciones hero** — 2-3 variaciones (imagen de fondo, color sólido, vídeo de fondo)
- **Servicios/Características** — 3 columnas con iconos, 4 columnas con iconos, con imágenes
- **Secciones sobre nosotros** — imagen izquierda, imagen derecha
- **Testimonios** — carrusel, cuadrícula, individual destacado
- **Secciones CTA** — simple, con imagen de fondo, con formulario
- **FAQ** — estilo acordeón
- **Contacto** — formulario + diseño de información

Esto se convierte en tu kit de diseño personal — construir nuevas páginas lleva minutos en vez de horas.

---

## Importar y Exportar Plantillas

### Exportar Plantillas
Comparte plantillas entre sitios WordPress:

1. Ve a **Elementor → My Templates** en wp-admin (o Templates → Saved Templates)
2. Encuentra la plantilla que quieres exportar
3. Haz clic en **"Export Template"**
4. Se descarga un archivo `.json`

### Importar Plantillas

1. Ve a **Elementor → My Templates**
2. Haz clic en **"Import Templates"** en la parte superior
3. Selecciona el archivo `.json`
4. Haz clic en **"Import Now"**
5. La plantilla aparece en tu biblioteca

### Casos de Uso para Importar/Exportar:
- **Mover diseños entre sitios** — desarrolla en local, exporta al sitio del cliente
- **Compartir con miembros del equipo** — distribuir diseños estandarizados
- **Respaldar tus diseños** — exporta todas las plantillas para guardarlas
- **Usar plantillas de terceros** — muchos sitios ofrecen plantillas de Elementor gratuitas como archivos JSON

---

## Kits de Plantillas y Sitios de Inicio

### Fuentes de Plantillas de Terceros

Varios servicios proporcionan kits de plantillas de Elementor gratuitos y premium:

| Fuente | Qué Ofrecen |
|--------|-------------|
| **Envato Elements** | 1000+ kits de plantillas completos (suscripción de pago) |
| **TemplateMonster** | Plantillas premium de Elementor |
| **Starter Templates by Astra** | Importaciones completas de sitios gratuitas |
| **Elementor Community** | Plantillas gratuitas compartidas por usuarios |

### Usar el Plugin Starter Templates (con tema Astra)
1. Instala el plugin **"Starter Templates"**
2. Elige Elementor como tu constructor de páginas
3. Navega por las plantillas de sitios web completos
4. Haz clic en **"Import Complete Site"** o importa páginas individuales
5. Personaliza el contenido importado

**Advertencia:** Importar un sitio completo reemplazará tu contenido existente. Hazlo en un sitio nuevo o haz una copia de seguridad primero.

---

## Flujo de Trabajo con Plantillas

### Proceso Eficiente de Construcción de Páginas:

1. **Revisa tu biblioteca de plantillas primero** — ¿tienes una sección que encaje?
2. **Revisa la biblioteca de Elementor** — ¿hay una plantilla gratuita cercana a lo que necesitas?
3. **Inserta una plantilla** como punto de partida
4. **Personaliza** el contenido (texto, imágenes, colores)
5. **Ajusta para que coincida** con tus estilos globales
6. **Guarda nuevos diseños** como plantillas para uso futuro

### Al Construir Múltiples Páginas Similares:
1. Construye la primera página completamente
2. Guárdala como plantilla de página
3. Para páginas similares, inserta la plantilla e intercambia el contenido
4. Mucho más rápido que construir desde cero cada vez

**Ejemplo:** Construir 5 páginas de servicios (Diseño Web, SEO, Marketing, Branding, Soporte):
1. Diseña el primer diseño de página de servicio
2. Guárdalo como "Plantilla Página de Servicio"
3. Crea cada nueva página → inserta la plantilla → cambia el contenido específico del servicio

---

## Ejercicios

1. **Navega por la biblioteca de plantillas**: Presiona Ctrl + Shift + L y navega por las páginas y bloques disponibles. Intenta insertar una plantilla de bloque gratuita en una página de prueba.

2. **Guarda una plantilla de sección**: Toma tu mejor sección de la página de inicio y guárdala como plantilla. Dale un nombre descriptivo.

3. **Guarda una plantilla de página**: Guarda tu página Acerca de (o Página de Inicio) como plantilla de página completa.

4. **Reutiliza una plantilla**: Crea una nueva página, inserta tu plantilla de sección guardada y modifica el contenido.

5. **Exporta y reimporta**: Exporta una de tus plantillas como archivo JSON. Elimínala de tu biblioteca. Reimportala para confirmar que el proceso funciona.

6. **Construye una colección de plantillas**: Guarda al menos 3 plantillas de sección diferentes (hero, servicios, CTA) que puedas mezclar y combinar para futuras páginas.

---

## Puntos Clave

- **Las plantillas ahorran un tiempo enorme** — no construyas desde cero cada vez
- Guarda secciones con **clic derecho → Save as Template**
- Guarda páginas desde el **menú hamburguesa → Save as Template**
- Usa una **convención de nombres** clara para tus plantillas
- **Exporta/Importa** plantillas como archivos JSON para mover entre sitios
- Construye una **biblioteca de plantillas personal** con el tiempo — este es tu kit de diseño
- **Revisa las plantillas existentes** antes de construir algo nuevo
- Los kits de plantillas de terceros pueden impulsar nuevos proyectos

---

**Siguiente Lección:** [Lección 20 - Diseño Responsivo](lesson-20-responsive-design.md)
