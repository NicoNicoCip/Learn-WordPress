# Lección 14: Secciones, Columnas y Widgets — Los Bloques de Construcción

## Objetivos
- Entender la jerarquía Sección → Columna → Widget
- Crear y configurar secciones con diferentes diseños de columnas
- Añadir, mover y estilizar widgets
- Aprender las tres pestañas de configuración: Content, Style, Advanced

---

## La Jerarquía de Elementor

Cada página de Elementor se construye con tres niveles:

```
Section (fila a ancho completo)
  └── Column (división vertical dentro de una sección)
       └── Widget (el contenido real — texto, imagen, botón, etc.)
```

Piensa en ello como una tabla:
- **Section** = una fila
- **Column** = una celda en esa fila
- **Widget** = contenido dentro de la celda

---

## Secciones

### ¿Qué es una Sección?
Una sección es una **fila horizontal a ancho completo** que abarca tu página. Es el bloque de construcción más grande.

### Crear una Sección
1. Haz clic en el icono **"+"** en el canvas (o el círculo rojo "+" en la parte inferior)
2. Elige una **estructura de columnas**:
   - 1 columna (ancho completo)
   - 2 columnas (50/50)
   - 3 columnas (33/33/33)
   - Y más variaciones (25/75, 75/25, etc.)
3. La sección aparece en tu página

### Ajustes de Sección
Haz clic en el **asa azul** en la parte superior de una sección para seleccionarla. El panel izquierdo muestra:

**Pestaña Content:**
- **Layout**: Boxed o Full Width
- **Content Width**: Establece el ancho máximo del contenido (ej., 1140px)
- **Column Gap**: Espacio entre columnas (No Gap, Narrow, Default, Extended, Wide)
- **Height**: Default, Min Height, o Fit to Screen
- **Vertical Align**: Top, Middle, Bottom, Space Between
- **HTML Tag**: Elemento HTML semántico (div, header, footer, section, etc.)

**Pestaña Style:**
- **Background**: Color, imagen, degradado, vídeo o presentación
- **Background Overlay**: Añade una capa de color/degradado sobre el fondo
- **Border**: Añade bordes y radio de borde
- **Shape Divider**: Añade formas decorativas (ondas, triángulos, etc.) arriba/abajo
- **Typography**: Color de texto y tipografía por defecto

**Pestaña Advanced:**
- **Margin & Padding**: Espaciado exterior e interior de la sección
- **Motion Effects**: Animaciones de scroll, parallax
- **Responsive**: Mostrar/ocultar en dispositivos específicos
- **Custom CSS**: Añade CSS solo para esta sección (Pro)
- **Attributes**: Atributos HTML personalizados

### Menú Contextual de Sección
Haz clic derecho en el asa de una sección para:
- **Copy / Paste** — copiar secciones enteras
- **Duplicate** — crear una copia idéntica debajo
- **Save as Template** — guardar para reutilizar
- **Delete** — eliminar la sección

---

## Columnas

### ¿Qué es una Columna?
Las columnas son **divisiones verticales** dentro de una sección. Contienen widgets.

### Ajustar el Ancho de Columnas
1. Pasa el ratón entre dos columnas hasta que veas un **asa de redimensionado azul**
2. Arrastra a la izquierda o derecha para ajustar el porcentaje de ancho
3. Los anchos de columna se muestran como porcentajes (ej., 60% / 40%)

### Ajustes de Columna
Haz clic en el **asa gris de la columna** (en la parte superior de la columna) para seleccionarla:

**Pestaña Content:**
- **Column Width**: Porcentaje exacto
- **Vertical Align**: Cómo se alinean los widgets verticalmente

**Pestaña Style:**
- **Background**: Color, imagen, degradado
- **Border**: Bordes y radio de borde
- **Typography**: Estilos de texto por defecto para esta columna

**Pestaña Advanced:**
- **Margin & Padding**: Espaciado para esta columna específica
- **Responsive**: Mostrar/ocultar en dispositivos específicos
- **Custom CSS**: CSS específico de columna (Pro)

### Añadir/Eliminar Columnas
- **Clic derecho** en el asa de columna → **Add New Column** (añade una columna)
- **Clic derecho** en el asa de columna → **Delete** (elimina una columna)
- O **Duplicate** una columna para crear una copia

---

## Widgets

### ¿Qué es un Widget?
Los widgets son los **elementos de contenido reales** — texto, imágenes, botones, iconos, reproductores de vídeo, etc.

### Añadir Widgets
1. Encuentra un widget en el **panel izquierdo**
2. **Arrástralo** a una columna en el canvas
3. O haz clic en el **"+"** dentro de una columna vacía para explorar widgets

### Widgets Gratuitos Esenciales

| Widget | Qué Hace |
|--------|----------|
| **Heading** | Títulos de sección y encabezados (H1-H6) |
| **Text Editor** | Contenido de texto enriquecido (párrafos, listas, formato) |
| **Image** | Muestra una imagen |
| **Button** | Un botón clickeable de llamada a la acción |
| **Icon** | Muestra un icono de Font Awesome u otras bibliotecas |
| **Spacer** | Añade espacio vertical entre elementos |
| **Divider** | Un separador de línea horizontal |
| **Google Maps** | Incrusta un mapa de Google |
| **Video** | Incrusta YouTube, Vimeo o vídeo autoalojado |
| **Icon Box** | Combo de icono + encabezado + descripción |
| **Image Box** | Combo de imagen + encabezado + descripción |
| **Star Rating** | Muestra una calificación con estrellas |
| **Progress Bar** | Barra de progreso/habilidad animada |
| **Counter** | Número con conteo animado |
| **Testimonial** | Testimonio de cliente con imagen y texto |
| **Accordion** | Secciones de contenido plegables (estilo FAQ) |
| **Tabs** | Paneles de contenido con pestañas |
| **Social Icons** | Enlaces de iconos de redes sociales |
| **Alert** | Cuadro de aviso/mensaje descartable |

### Pestañas de Edición de Widget
Cada widget tiene **tres pestañas** en el panel izquierdo:

---

## Las Tres Pestañas: Content, Style, Advanced

### Pestaña Content
Controla **qué** muestra el widget:
- Contenido de texto, encabezados, etiquetas de botones
- Fuente de imagen, URL de vídeo
- URLs de enlaces
- Opciones de contenido específicas del widget

**Ejemplo (widget Button):**
- Text: "Empezar"
- Link: `/contacto`
- Icon: icono opcional antes/después del texto
- Alignment: izquierda, centro, derecha

### Pestaña Style
Controla **cómo** se ve el widget:
- Colores (texto, fondo, borde)
- Tipografía (familia de fuente, tamaño, peso, altura de línea)
- Padding y espaciado dentro del widget
- Borde y radio de borde
- Sombra de caja
- Estados hover (cómo se ve cuando el ratón pasa por encima)

**Ejemplo (widget Button):**
- Typography: Familia de fuente, tamaño, peso
- Text Color: Estados Normal y Hover
- Background Color: Normal y Hover
- Border: Ancho, color, radio
- Padding: Espacio dentro del botón
- Box Shadow: Efecto de sombra

### Pestaña Advanced
Controla el **comportamiento** y **posicionamiento**:
- **Layout**: Ancho, alineación, posicionamiento personalizado
- **Motion Effects**: Animaciones de entrada, efectos de scroll
- **Background**: Fondo a nivel de widget
- **Border**: Borde a nivel de widget
- **Responsive**: Mostrar/ocultar en escritorio, tablet o móvil
- **Custom CSS**: CSS específico del widget (Pro)
- **Attributes**: Atributos de datos personalizados

---

## Trabajando con Padding y Margin

Entender la diferencia es crítico:

```
|--- Margin (espacio FUERA del elemento) ---|
|                                            |
|  |--- Border ---|                          |
|  |               |                         |
|  |  |-- Padding (espacio DENTRO) --|       |
|  |  |                              |       |
|  |  |    El contenido va aquí      |       |
|  |  |                              |       |
|  |  |------------------------------|       |
|  |                                 |       |
|  |---------------------------------|       |
|                                            |
|--------------------------------------------|
```

- **Margin**: Espacio entre elementos (empuja otros elementos)
- **Padding**: Espacio entre el borde del elemento y su contenido

### Configurar Padding/Margin en Elementor
1. Selecciona cualquier elemento (sección, columna o widget)
2. Ve a la pestaña **Advanced**
3. Encuentra **Margin** y **Padding**
4. Introduce valores en px, em, % o vh
5. Haz clic en el **icono de cadena** para establecer todos los lados a la vez, o desvincula para configurar cada lado individualmente

---

## Práctica: Construir una Sección Simple

Vamos a construir una sección hero:

### Paso 1: Crear una Sección
1. Haz clic en "+" y selecciona un diseño de **una sola columna**

### Paso 2: Configurar la Sección
1. Haz clic en el asa de la sección (pestaña azul)
2. **Pestaña Content**: Establece Height → Min Height → `500px`
3. **Pestaña Style**:
   - Background → Classic → Color → elige un azul oscuro (#1a1a2e)
4. **Pestaña Advanced**: Establece Padding → `60px` arriba y abajo

### Paso 3: Añadir un Heading
1. Arrastra el widget **Heading** a la columna
2. **Pestaña Content**:
   - Title: "Bienvenido a Nuestra Web"
   - HTML Tag: H1
   - Alignment: Center
3. **Pestaña Style**:
   - Text Color: Blanco (#ffffff)
   - Typography: Font Size → 48px, Weight → Bold

### Paso 4: Añadir un Text Editor
1. Arrastra el widget **Text Editor** debajo del encabezado
2. **Pestaña Content**: Escribe "Creamos sitios web bonitos que generan resultados."
3. **Pestaña Style**:
   - Text Color: Gris claro (#cccccc)
   - Typography: Font Size → 20px
   - Alignment: Center

### Paso 5: Añadir un Button
1. Arrastra el widget **Button** debajo del texto
2. **Pestaña Content**: Text → "Empezar", Alignment → Center
3. **Pestaña Style**:
   - Background Color: un color de acento brillante (#e94560)
   - Border Radius: 25px (para esquinas redondeadas)
   - Padding: 15px arriba/abajo, 40px izquierda/derecha

### Paso 6: Guardar
Presiona **Ctrl + S** para guardar tu trabajo.

---

## Ejercicios

1. **Construye la sección hero** descrita arriba paso a paso.

2. **Crea una sección de 3 columnas**: Añade una sección con 3 columnas. En cada columna, añade un widget Icon Box con un icono, encabezado y descripción diferentes (como una sección de "características" o "servicios").

3. **Practica redimensionando columnas**: Crea una sección de 2 columnas y arrastra el divisor para hacer 30/70, luego 70/30, y luego de vuelta a 50/50.

4. **Explora la pestaña Style**: Selecciona cualquier widget y experimenta con todas las opciones de la pestaña Style. Cambia colores, fuentes, bordes, sombras. Siempre puedes Ctrl+Z para deshacer.

5. **Usa el Navigator**: Abre el Navigator (Ctrl+I) y úsalo para seleccionar, reordenar y renombrar elementos. Familiarízate con la navegación de la estructura de tu página.

6. **Practica padding y margin**: Selecciona diferentes elementos y ajusta su padding y margin. Observa cómo cambia el diseño.

---

## Puntos Clave

- Elementor usa una jerarquía **Sección → Columna → Widget**
- Las **Secciones** son filas a ancho completo, las **Columnas** las dividen, los **Widgets** son el contenido
- Cada elemento tiene **3 pestañas**: Content (qué), Style (cómo se ve), Advanced (comportamiento)
- **Arrastra y redimensiona** columnas tirando del divisor entre ellas
- **Padding** = espacio dentro de un elemento; **Margin** = espacio fuera
- Usa el **Navigator** (Ctrl+I) para gestionar estructuras de página complejas
- **Clic derecho** en elementos para acciones rápidas (copiar, pegar, duplicar, eliminar)
- **Ctrl+S** guarda, **Ctrl+Z** deshace

---

**Siguiente Lección:** [Lección 15 - Tipografía, Colores y Estilos Globales](lesson-15-global-styles.md)
