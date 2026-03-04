# Lección 10: Menús y Navegación

## Objetivos
- Crear y gestionar menús de navegación
- Añadir páginas, entradas, categorías y enlaces personalizados a los menús
- Crear menús desplegables (subelementos)
- Asignar menús a ubicaciones del theme
- Comprender las mejores prácticas de menús

---

## ¿Qué Son los Menús de WordPress?

Los menús son los **enlaces de navegación** que ayudan a los visitantes a moverse por tu sitio. Normalmente se encuentran en:
- **Cabecera** (barra de navegación principal)
- **Pie de página** (enlaces del footer)
- **Barra lateral** (a veces se usa para navegación secundaria)

WordPress tiene un sistema dedicado de gestión de menús que te permite crear menús y asignarlos a ubicaciones definidas por tu theme.

---

## Crear Tu Primer Menú

### Paso 1: Abrir el Editor de Menús

1. Ve a **Appearance → Menus**
2. Verás el editor de menús con dos secciones:
   - **Lado izquierdo**: Elementos que puedes añadir al menú (Páginas, Entradas, Enlaces Personalizados, Categorías)
   - **Lado derecho**: La estructura del menú (actualmente vacía)

### Paso 2: Crear un Nuevo Menú

1. En el campo **"Menu Name"**, escribe: `Main Navigation`
2. Haz clic en **"Create Menu"**

### Paso 3: Añadir Páginas al Menú

1. En el lado izquierdo, bajo **"Pages"**, verás tus páginas existentes
2. Haz clic en **"View All"** para ver todas las páginas
3. Marca las casillas junto a las páginas que quieras en tu menú:
   - Inicio
   - Sobre Nosotros
   - Servicios
   - Blog
   - Contacto
4. Haz clic en **"Add to Menu"**

### Paso 4: Ordenar los Elementos del Menú

Los elementos aparecen en el lado derecho. Puedes:
- **Arrastrar y soltar** para reordenarlos
- Los elementos en la parte superior aparecen primero (más a la izquierda en un menú horizontal)

Orden recomendado:
1. Inicio
2. Sobre Nosotros
3. Servicios
4. Blog
5. Contacto

### Paso 5: Asignar una Ubicación del Menú

1. En la parte inferior del editor de menús, encuentra **"Menu Settings"**
2. Bajo **"Display location"**, marca **"Primary"** (o "Header Menu" — el nombre depende de tu theme)
3. Haz clic en **"Save Menu"**

### Paso 6: Ver Tu Menú

Visita tu sitio para ver el menú de navegación en la cabecera.

---

## Crear Menús Desplegables (Subelementos)

Los menús desplegables muestran elementos anidados cuando pasas el ratón sobre un elemento padre.

### Cómo Crear Desplegables:

1. Añade todos los elementos que quieras al menú
2. Arrastra un elemento del menú **ligeramente a la derecha** bajo otro elemento
3. Se indentará y se convertirá en un **subelemento**

### Ejemplo de Estructura:
```
Inicio
Sobre Nosotros
Servicios              ← elemento padre
  ├── Diseño Web       ← subelemento (desplegable)
  ├── SEO              ← subelemento
  └── Marketing        ← subelemento
Blog
Contacto
```

### Para Crear Esto:
1. Añade las páginas "Servicios", "Diseño Web", "SEO" y "Marketing" al menú
2. Arrastra "Diseño Web" bajo "Servicios" y ligeramente a la derecha hasta que se indente
3. Haz lo mismo con "SEO" y "Marketing"
4. Guarda el menú

**Consejo:** Puedes crear varios niveles de profundidad (sub-subelementos), pero evita pasar de 2 niveles — resulta confuso para los usuarios en móvil.

---

## Tipos de Elementos de Menú

### Páginas
- El tipo de elemento de menú más común
- Enlaza a tus páginas de WordPress

### Entradas
- Enlaza a entradas de blog específicas
- No se usa comúnmente en la navegación principal

### Enlaces Personalizados
- Enlaza a **cualquier URL** (interna o externa)
- Útil para:
  - Enlaces externos (redes sociales, sitios asociados)
  - Enlaces de anclaje (`#nombre-seccion`)
  - Enlaces a páginas fuera de WordPress

**Para añadir un enlace personalizado:**
1. En el panel izquierdo, expande **"Custom Links"**
2. Introduce la **URL** y el **Link Text**
3. Haz clic en **"Add to Menu"**

### Categorías
- Enlaza a páginas de archivo de categorías
- Útil para sitios con mucho contenido de blog

**Ejemplo:** Añadir una categoría "Noticias" al menú enlazaría a la página que muestra todas las entradas en la categoría Noticias.

---

## Editar Elementos del Menú

Haz clic en la **flecha hacia abajo** de cualquier elemento del menú para expandir sus ajustes:

| Ajuste | Qué Hace |
|--------|----------|
| **Navigation Label** | El texto que se muestra en el menú (no tiene que coincidir con el título de la página) |
| **Title Attribute** | Texto de información emergente que se muestra al pasar el ratón (opcional) |
| **Open link in a new tab** | Abre el enlace en una nueva pestaña del navegador (actívalo primero en Screen Options) |
| **CSS Classes** | Añade clases CSS personalizadas para el estilo (actívalo primero en Screen Options) |

### Renombrar Elementos del Menú
Puedes mostrar un nombre diferente al título de la página:
1. Expande el elemento del menú
2. Cambia el **"Navigation Label"**
3. Ejemplo: Tu página es "Sobre Nosotros" pero quieres que el menú diga solo "Nosotros"

### Activar Opciones Avanzadas
Haz clic en **"Screen Options"** (esquina superior derecha) y marca:
- **Link Target** — para activar "Abrir en nueva pestaña"
- **CSS Classes** — para añadir clases personalizadas
- **Link Relationship (XFN)** — para atributos rel de enlaces
- **Description** — para añadir descripciones (algunos themes las muestran)

---

## Crear Múltiples Menús

Puedes crear diferentes menús para diferentes ubicaciones:

### Configuración Común de Menús:
1. **Navegación Principal** → Cabecera (ubicación primaria)
2. **Menú del Pie de Página** → Footer (menú más corto con enlaces legales)

### Crear un Menú de Pie de Página:
1. Ve a **Appearance → Menus**
2. Haz clic en el enlace **"Create a new menu"**
3. Nómbralo `Footer Menu`
4. Añade elementos como: Política de Privacidad, Términos de Servicio, Contacto, Mapa del Sitio
5. Bajo "Display location", marca **"Footer"** (si está disponible en tu theme)
6. Guarda

---

## Gestionar Menús en el Personalizador

También puedes gestionar menús a través del Personalizador con una vista previa en vivo:

1. Ve a **Appearance → Customize → Menus**
2. Selecciona un menú para editar o crea uno nuevo
3. Añade, elimina y reordena elementos con una vista previa en vivo
4. Haz clic en **"Publish"** para guardar

Esto es útil porque puedes ver los cambios en tiempo real.

---

## Mejores Prácticas para Menús

### Haz:
- Mantén el menú principal con **5-7 elementos** como máximo
- Pon los elementos más importantes primero (o último — estas posiciones reciben más atención)
- Usa **etiquetas claras y concisas** ("Servicios" en vez de "Lo Que Podemos Hacer Por Ti")
- Incluye una **llamada a la acción** como último elemento (ej., "Contáctanos" o "Pide Presupuesto")
- Prueba el menú en móvil — asegúrate de que los desplegables funcionan

### No Hagas:
- No sobrecargues el menú con demasiados elementos
- No pases de 2 niveles de desplegable
- No uses etiquetas vagas como "Más" o "Varios"
- No pongas todo el mapa del sitio en la navegación
- No olvides probar en dispositivos móviles

### Consideraciones para Móvil
- La mayoría de los themes convierten automáticamente el menú en un **menú hamburguesa** en móvil
- Los menús largos se convierten en listas desplazables en móvil — mantenlos cortos
- Asegúrate de que tus páginas más importantes sean fácilmente accesibles

---

## Ejercicios

1. **Crea un menú de navegación principal**: Añade las páginas Inicio, Sobre Nosotros, Servicios, Blog y Contacto. Asígnalo a la ubicación Primary/Header.

2. **Crea elementos desplegables**: Añade subpáginas bajo "Servicios" como elementos desplegables (crea páginas simples para "Diseño Web", "SEO", "Marketing" si no existen).

3. **Añade un enlace personalizado**: Añade un enlace personalizado a tu menú que se abra en una nueva pestaña (cualquier URL externa).

4. **Crea un menú de pie de página**: Crea un segundo menú con Política de Privacidad, Términos y Contacto. Asígnalo a la ubicación Footer.

5. **Renombra un elemento del menú**: Cambia el Navigation Label de uno de tus elementos de menú para que sea diferente del título de su página.

6. **Prueba en móvil**: Usa el modo responsive de tu navegador (F12 → alternar barra de herramientas de dispositivo) para ver cómo se ve tu menú en móvil.

---

## Puntos Clave

- Crea menús en **Appearance → Menus**
- Arrastra elementos **hacia la derecha** para crear subelementos desplegables
- **Asigna menús a ubicaciones** (Primary/Header, Footer) definidas por tu theme
- Los elementos de menú pueden ser **páginas, entradas, categorías o enlaces personalizados**
- Puedes **renombrar las etiquetas del menú** independientemente de los títulos de las páginas
- Mantén los menús principales con **5-7 elementos** con un máximo de 2 niveles de desplegable
- Crea **menús separados** para cabecera y pie de página
- Siempre **prueba en móvil** — la mayoría de visitantes usan el teléfono

---

**Siguiente Lección:** [Lección 11 - Widgets y Barras Laterales](lesson-11-widgets-sidebars.md)
