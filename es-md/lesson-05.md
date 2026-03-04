# Lección 05: Categorías, Etiquetas y Taxonomías

## Objetivos
- Entender cómo WordPress organiza el contenido con categorías y etiquetas
- Conocer la diferencia entre categorías y etiquetas y cuándo usar cada una
- Crear y gestionar categorías y etiquetas
- Comprender qué son las taxonomías

---

## ¿Qué Son las Taxonomías?

Una **taxonomía** es una forma de agrupar y clasificar contenido. WordPress tiene dos taxonomías integradas para las entradas:

1. **Categorías** — agrupaciones amplias (como capítulos de un libro)
2. **Etiquetas (Tags)** — descriptores específicos (como las entradas del índice de un libro)

### Categorías vs Etiquetas

| Característica | Categorías | Etiquetas |
|----------------|-----------|-----------|
| **Propósito** | Agrupación/clasificación amplia | Temas/palabras clave específicas |
| **¿Obligatorias?** | Sí — toda entrada debe tener al menos una | No — completamente opcionales |
| **Jerarquía** | Sí — pueden tener categorías padre/hijo | No — estructura plana únicamente |
| **Cantidad típica por entrada** | 1-3 | 3-10 |
| **Valor por defecto** | "Uncategorized" si no se selecciona ninguna | Ninguna |
| **Ideal para** | Estructura del sitio y navegación | Descubrimiento de contenido y búsqueda |

### Analogía
Piensa en una librería:
- **Categorías** = las secciones: Ficción, No Ficción, Ciencia, Historia
- **Etiquetas** = etiquetas descriptivas: superventas, premiado, novedad, bolsillo

---

## Planificar Tus Categorías

Antes de crear categorías, planifícalas según el contenido de tu sitio:

### Buena Estructura de Categorías (para un blog de empresa):
- Noticias de la Empresa
- Perspectivas del Sector
- Trucos y Tutoriales
- Casos de Estudio
- Actualizaciones del Producto

### Reglas para Buenas Categorías:
1. **Mantenlas amplias** — 5-10 categorías es lo ideal para la mayoría de sitios
2. **Hazlas claras** — un visitante debería saber qué encontrará en cada una
3. **Mantenlas equilibradas** — evita tener 50 entradas en una categoría y 2 en otra
4. **Usa la jerarquía con moderación** — un nivel de subcategorías suele ser suficiente

### Ejemplos de Malas Categorías:
- Demasiado específica: "Entrada sobre nuestra reunión del lunes" (esto debería ser una etiqueta)
- Demasiado vaga: "Cosas" u "Otros"
- Demasiadas: más de 30 categorías con 1-2 entradas cada una

---

## Gestionar Categorías

### Crear Categorías

**Método 1: Desde la página de Categorías**
1. Ve a **Posts → Categories**
2. Rellena:
   - **Name**: El nombre para mostrar (ej., "Company News")
   - **Slug**: La versión amigable para URL (se genera automáticamente, ej., `company-news`)
   - **Parent Category**: Selecciona si es una subcategoría
   - **Description**: Opcional — algunos temas la muestran
3. Haz clic en **"Add New Category"**

**Método 2: Mientras editas una entrada**
1. En el editor de entradas, busca **Categories** en la barra lateral derecha
2. Haz clic en **"Add New Category"**
3. Escribe el nombre y haz clic en "Add New Category"

### Editar Categorías
1. Ve a **Posts → Categories**
2. Pasa el ratón sobre una categoría y haz clic en **"Edit"** o **"Quick Edit"**
3. Puedes cambiar el nombre, slug, padre y descripción

### Eliminar Categorías
1. Ve a **Posts → Categories**
2. Pasa el ratón sobre una categoría y haz clic en **"Delete"**
3. Las entradas de esa categoría se moverán a la categoría predeterminada ("Uncategorized")

### Establecer la Categoría Predeterminada
1. Ve a **Settings → Writing**
2. Cambia **"Default Post Category"** a tu categoría preferida
3. Renombra "Uncategorized" a algo mejor (como "General")

---

## Gestionar Etiquetas

### Crear Etiquetas

**Método 1: Desde la página de Tags**
1. Ve a **Posts → Tags**
2. Rellena:
   - **Name**: El nombre para mostrar
   - **Slug**: Versión amigable para URL (se genera automáticamente)
   - **Description**: Opcional
3. Haz clic en **"Add New Tag"**

**Método 2: Mientras editas una entrada**
1. En el editor de entradas, busca **Tags** en la barra lateral derecha
2. Escribe los nombres de las etiquetas separados por comas
3. Pulsa Enter para añadirlas

### Buenas Prácticas para Etiquetas
- Usa **minúsculas** para mantener la coherencia
- Usa **etiquetas existentes** cuando sea posible (comprueba lo que ya has creado)
- No crees etiquetas que solo vayas a usar una vez
- Las etiquetas deben ser útiles para los visitantes que buscan en tu contenido
- 3-5 etiquetas por entrada es un buen objetivo

---

## Cómo Afectan las Categorías y Etiquetas a Tu Sitio

### Páginas de Archivo
WordPress crea automáticamente páginas de archivo para cada categoría y etiqueta:
- `tusitio.com/category/company-news/` — muestra todas las entradas en "Company News"
- `tusitio.com/tag/wordpress/` — muestra todas las entradas etiquetadas con "wordpress"

Estas páginas están estilizadas por tu tema y se pueden personalizar más adelante con Elementor.

### Navegación
Las categorías se usan comúnmente en:
- Menús de navegación principales
- Widgets de la barra lateral
- Enlaces del pie de página
- Filtros de la página del blog

### Impacto en SEO
- Las **categorías** crean una jerarquía de contenido que los motores de búsqueda entienden
- Las **etiquetas** ayudan con el enlazado interno y el descubrimiento de contenido
- No crees demasiadas de ninguna — genera páginas de archivo con poco contenido que perjudican el SEO

---

## Ejemplo Práctico

Supongamos que estás construyendo un sitio para una agencia de diseño web:

### Categorías:
```
Web Design
├── UI Design
├── UX Design
Digital Marketing
├── SEO
├── Social Media
Case Studies
Company News
```

### Etiquetas (usadas en todas las categorías):
```
wordpress, elementor, responsive-design, e-commerce,
small-business, redesign, mobile-first, branding,
analytics, conversion-rate
```

### Ejemplo de Entrada:
- **Título**: "5 Responsive Design Tips for Small Business Websites"
- **Categoría**: Web Design → UI Design
- **Etiquetas**: responsive-design, small-business, mobile-first

---

## Entender las Taxonomías (Más a Fondo)

Las categorías y las etiquetas son ejemplos de **taxonomías** — sistemas para clasificar contenido. El núcleo de WordPress proporciona dos:

| Taxonomía | Tipo | Se Aplica A |
|-----------|------|-------------|
| Category | Jerárquica | Entradas |
| Tag | No jerárquica (plana) | Entradas |

**Nota:** Las páginas no tienen categorías ni etiquetas por defecto. Si necesitas organizar páginas, usarás menús y jerarquía de páginas (padre/hijo).

Algunos plugins y temas añaden **taxonomías personalizadas**. Por ejemplo:
- WooCommerce añade "Product Categories" y "Product Tags" (separadas de las categorías/etiquetas de entradas normales)
- Un plugin de portfolio podría añadir "Portfolio Categories"
- Un plugin inmobiliario podría añadir "Property Type" y "Location"

No necesitas preocuparte por las taxonomías personalizadas ahora — solo ten en cuenta que existen.

---

## Ejercicios

1. **Renombra "Uncategorized"**: Ve a Posts → Categories, edita "Uncategorized" y renómbrala a "General".

2. **Crea una estructura de categorías**: Crea 4-5 categorías que tengan sentido para un blog de empresa. Crea al menos una con una subcategoría (categoría hija).

3. **Establece la categoría predeterminada**: Ve a Settings → Writing y cambia la categoría predeterminada de "Uncategorized" a "General".

4. **Crea entradas con categorías y etiquetas**: Crea 3 entradas, cada una en una categoría diferente, con 3-5 etiquetas relevantes cada una.

5. **Visualiza las páginas de archivo**: Después de crear entradas, visita la página de archivo de una categoría yendo a `http://learning-wordpress.local/category/tu-slug-de-categoria/`. Observa cómo WordPress agrupa automáticamente las entradas.

6. **Revisa la página de Tags**: Ve a Posts → Tags para ver todas las etiquetas que has creado. Fíjate en cómo muestra el recuento de entradas que usan cada etiqueta.

---

## Puntos Clave

- Las **categorías** son grupos amplios (obligatorias, jerárquicas) — piensa en "secciones"
- Las **etiquetas** son descriptores específicos (opcionales, planas) — piensa en "palabras clave"
- Toda entrada necesita al menos una categoría; las etiquetas son opcionales
- Planifica tus categorías antes de empezar a crear contenido
- No te excedas — 5-10 categorías y un número moderado de etiquetas es lo ideal
- WordPress crea **páginas de archivo** automáticas para cada categoría y etiqueta
- Renombra "Uncategorized" a algo significativo como "General"

---

**Siguiente Lección:** [Lección 06 - La Biblioteca de Medios](lesson-06.md)
