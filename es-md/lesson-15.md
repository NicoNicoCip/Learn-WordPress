# Leccion 15: Tipografia, Colores y Estilos Globales en Elementor

## Objetivos
- Configurar colores y fuentes globales para mantener la coherencia en todo el sitio
- Comprender los Ajustes del Sitio de Elementor
- Usar estilos globales de forma efectiva para mantener un diseno cohesivo
- Aprender las mejores practicas de tipografia para diseno web

---

## Por Que Importan los Estilos Globales

Sin estilos globales, tendrias que configurar colores y fuentes en cada widget individualmente. Los estilos globales te permiten:
- **Definir colores y fuentes una sola vez**, aplicarlos en todas partes
- **Cambiar el aspecto de todo tu sitio** editando un solo ajuste
- **Mantener la coherencia** — sin colores descoordinados por accidente
- **Trabajar mas rapido** — elige de tu paleta en lugar de introducir codigos hexadecimales

---

## Acceder a los Ajustes del Sitio

1. Abre cualquier pagina en Elementor
2. Haz clic en el **menu hamburguesa (☰)** en la esquina superior izquierda del panel
3. Haz clic en **"Site Settings"**

O haz clic en **menu hamburguesa → Site Settings** directamente.

---

## Colores Globales

### Configurar Tu Paleta de Colores

1. En Site Settings, haz clic en **"Global Colors"**
2. Veras 4 espacios de color predeterminados:
   - **Primary** — tu color principal de marca
   - **Secondary** — tu color secundario de marca
   - **Text** — color predeterminado del texto del cuerpo
   - **Accent** — para botones, enlaces, resaltados

3. Haz clic en cada color para cambiarlo. Introduce un codigo hexadecimal o usa el selector de color.

### Ejemplo de Paleta de Colores Profesional:
| Espacio | Color | Hex | Uso |
|---------|-------|-----|-----|
| Primary | Azul Oscuro | `#2c3e50` | Encabezados, elementos principales |
| Secondary | Verde Azulado | `#1abc9c` | Acentos, iconos |
| Text | Gris Oscuro | `#333333` | Texto del cuerpo |
| Accent | Coral | `#e74c3c` | Botones, CTAs, resaltados |

### Anadir Colores Personalizados
- Haz clic en **"+ Add Color"** para anadir mas colores a tu paleta
- Util para: fondo claro, fondo oscuro, gris sutil, verde de exito, etc.

### Colores Adicionales Recomendados:
- **Fondo Claro**: `#f8f9fa` — fondos de secciones claras
- **Fondo Oscuro**: `#1a1a2e` — fondos de secciones oscuras
- **Blanco**: `#ffffff` — para texto sobre fondos oscuros
- **Gris Claro**: `#6c757d` — texto sutil, pies de foto

### Usar los Colores Globales
Cuando estes editando el color de cualquier elemento:
1. Haz clic en el campo de color
2. Haz clic en el **icono del globo** (🌐) en la parte superior del selector de color
3. Selecciona de tus colores globales
4. El elemento ahora esta **vinculado** al color global — si cambias el color global mas adelante, este elemento se actualizara automaticamente

---

## Fuentes Globales (Tipografia)

### Configurar las Fuentes Globales

1. En Site Settings, haz clic en **"Global Fonts"**
2. Veras 4 espacios de tipografia predeterminados:
   - **Primary** — encabezados y titulos
   - **Secondary** — subtitulos
   - **Text** — texto del cuerpo/parrafos
   - **Accent** — texto especial (botones, insignias, etc.)

3. Haz clic en cada uno para configurar:
   - **Font Family**: Elige entre Google Fonts o fuentes del sistema
   - **Font Size**: Tamano en px, em o rem
   - **Font Weight**: Desde Thin (100) hasta Black (900)
   - **Line Height**: Espacio entre lineas (1.4-1.8 para texto del cuerpo)
   - **Letter Spacing**: Espacio entre letras

### Combinaciones de Fuentes Populares:

**Moderna y Limpia:**
- Encabezados: **Montserrat** (Bold, 700)
- Cuerpo: **Open Sans** (Regular, 400)

**Profesional:**
- Encabezados: **Playfair Display** (Bold, 700)
- Cuerpo: **Source Sans Pro** (Regular, 400)

**Minimalista:**
- Encabezados: **Poppins** (SemiBold, 600)
- Cuerpo: **Poppins** (Regular, 400)

**Corporativa:**
- Encabezados: **Raleway** (Bold, 700)
- Cuerpo: **Lato** (Regular, 400)

### Mejores Practicas de Tipografia

| Elemento | Tamano Recomendado | Peso |
|----------|-------------------|------|
| H1 (Titulo de pagina) | 36-48px | Bold (700) |
| H2 (Titulo de seccion) | 28-36px | Bold (700) |
| H3 (Subseccion) | 22-28px | SemiBold (600) |
| H4 (Encabezado menor) | 18-22px | SemiBold (600) |
| Texto del cuerpo | 16-18px | Regular (400) |
| Texto pequeno | 14px | Regular (400) |
| Texto de boton | 14-16px | SemiBold (600) |

### Directrices de Interlineado:
- **Encabezados**: 1.2-1.4 (mas ajustado)
- **Texto del cuerpo**: 1.5-1.8 (mas legible)
- **Texto pequeno**: 1.4-1.6

---

## Otros Ajustes del Sitio

### Ajustes de Diseno
En Site Settings → **Layout**:
- **Content Width**: Ancho predeterminado del contenido de la pagina (1140px es el estandar)
- **Widgets Space**: Espacio predeterminado entre widgets (20px es comun)
- **Stretched Section Fit to Content Width**: Como se comportan las secciones de ancho completo

### Lightbox
En Site Settings → **Lightbox**:
- Configura el comportamiento del lightbox de imagenes (ventana emergente al hacer clic en imagenes)
- Establece el color de fondo, color de la interfaz y funciones de galeria

### Fondo
En Site Settings → **Background**:
- Establece un color o imagen de fondo global para todo tu sitio

### Botones
En Site Settings → **Buttons**:
- Establece los estilos predeterminados de botones que se aplican a todos los botones de Elementor
- Tipografia, padding, radio de borde, colores
- Estados normal y hover

### Imagenes
En Site Settings → **Images**:
- Radio de borde predeterminado para imagenes
- Animacion hover predeterminada

---

## Crear una Pagina de Guia de Estilos

Una pagina de guia de estilos te ayuda a visualizar tu sistema de diseno. Crea una:

1. Crea una nueva pagina llamada "Guia de Estilos" (puedes despublicarla despues)
2. Abrela en Elementor
3. Anade secciones mostrando:

### Seccion 1: Colores
- Anade cajas de colores (usa widgets Spacer con colores de fondo) mostrando tu paleta
- Etiqueta cada una con el nombre del color y el codigo hexadecimal

### Seccion 2: Tipografia
- Anade encabezados mostrando los estilos desde H1 hasta H6
- Anade muestras de texto del cuerpo
- Anade muestras de texto de botones

### Seccion 3: Botones
- Muestra tus estilos de botones: primario, secundario, contorno
- Muestra los estados hover

### Seccion 4: Componentes
- Muestra elementos comunes: cajas de iconos, testimonios, tarjetas, etc.

Esta pagina sirve como referencia al construir otras paginas, asegurando la coherencia.

---

## El Proceso de Diseno

Al comenzar un nuevo sitio, configura tus estilos globales primero:

1. **Elige tu paleta de colores** (3-5 colores maximo)
   - Color principal de marca
   - Color secundario/de acento
   - Color del texto
   - Variaciones de color de fondo

2. **Elige tus fuentes** (2 fuentes maximo)
   - Una para encabezados
   - Una para texto del cuerpo
   - (Usar la misma fuente para ambos tambien esta bien)

3. **Establece la escala tipografica** (tamanos de encabezados, tamano del cuerpo, interlineados)

4. **Establece los estilos de botones** (padding, radio de borde, colores)

5. **Luego comienza a construir paginas** — con tu sistema establecido, las paginas se crean mucho mas rapido

---

## Ejercicios

1. **Configura los colores globales**: Ve a Site Settings → Global Colors. Elige una paleta de colores profesional con colores Primary, Secondary, Text y Accent. Anade 2-3 colores personalizados.

2. **Configura las fuentes globales**: Ve a Site Settings → Global Fonts. Elige una fuente para encabezados y una para el cuerpo. Configura tamanos, pesos e interlineados.

3. **Configura los estilos de botones predeterminados**: Ve a Site Settings → Buttons. Establece la tipografia, padding, radio de borde y colores para los botones predeterminados.

4. **Usa los colores globales en un widget**: Edita cualquier widget, busca un ajuste de color, haz clic en el icono del globo y selecciona un color global. Luego cambia ese color global en Site Settings y observa como se actualiza el widget.

5. **Establece el ancho del contenido**: Ve a Site Settings → Layout y establece Content Width en 1140px.

6. **Crea una pagina de guia de estilos**: Crea una pagina que muestre tus colores, tipografia y elementos comunes.

---

## Puntos Clave

- **Configura los estilos globales PRIMERO** antes de construir paginas — esto ahorra una enorme cantidad de tiempo
- **Colores Globales**: Define tu paleta una vez, usala en todas partes mediante el icono del globo
- **Fuentes Globales**: Establece la tipografia de encabezados y cuerpo en Site Settings
- Usa **2 fuentes como maximo** (una para encabezados, una para el cuerpo — o la misma fuente para ambos)
- Usa **3-5 colores** en tu paleta
- El **ancho de contenido** estandar es 1140px
- El tamano estandar del **texto del cuerpo** es 16-18px
- Cambiar un estilo global **actualiza cada elemento** que lo utiliza
- Crea una **pagina de guia de estilos** como referencia para la coherencia

---

**Siguiente Leccion:** [Leccion 16 - Construir una Pagina de Inicio desde Cero](lesson-16-building-homepage.md)
