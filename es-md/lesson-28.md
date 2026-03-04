# Lección 28: Diseñar una Página de Tienda con Elementor

## Objetivos
- Personalizar la apariencia de la página de tienda de WooCommerce
- Usar widgets de Elementor para mostrar productos
- Crear una presentación de productos atractiva
- Entender las limitaciones de Elementor Free con WooCommerce

---

## WooCommerce + Elementor: Qué Es Posible

### Con Elementor Free:
- Añadir shortcodes de WooCommerce mediante el widget Shortcode
- Diseñar contenido personalizado alrededor de la tienda
- Crear landing pages que presenten productos
- Dar estilo a la tienda con CSS personalizado

### Con Elementor Pro:
- WooCommerce Builder completo — diseña páginas de producto, páginas de tienda, carrito y checkout
- Widgets específicos de WooCommerce (Products, Product Categories, Cart, etc.)
- Control visual completo sobre cada página de WooCommerce

### Alternativas Gratuitas a Elementor Pro para WooCommerce:
- **ShopEngine** — constructor de WooCommerce gratuito para Elementor
- **JetWooBuilder** (de Jetalements) — añade widgets de WooCommerce
- **Widgets de productos** vienen con algunos temas (como Astra)

---

## Personalizar la Página de Tienda (Método Gratuito)

### Método 1: Shortcodes de WooCommerce en Elementor

WooCommerce proporciona shortcodes para mostrar productos:

| Shortcode | Qué Muestra |
|-----------|------------|
| `[products limit="8" columns="4"]` | Últimos 8 productos en 4 columnas |
| `[products category="camisetas"]` | Productos de una categoría específica |
| `[featured_products limit="4"]` | Solo productos destacados |
| `[sale_products limit="4"]` | Productos en oferta |
| `[best_selling_products limit="4"]` | Los más vendidos |
| `[recent_products limit="8"]` | Los añadidos más recientemente |
| `[product_categories]` | Cuadrícula de categorías de productos |

#### Usar Shortcodes en Elementor:
1. Abre una página en Elementor
2. Añade un widget **Shortcode**
3. Pega uno de los shortcodes de arriba
4. Los productos se mostrarán en la página

### Método 2: Crear una Landing Page de Tienda Personalizada

En lugar de depender de la página de tienda por defecto, crea una página personalizada que muestre tus productos de forma atractiva:

#### Sección 1: Hero de la Tienda
1. **Añade una Sección** — 1 columna
2. Fondo: Tu color de marca o imagen de producto con overlay
3. Min Height: 400px, Vertical Align: Middle

4. **Heading**: "Nuestros Productos" o "Explora la Colección"
5. **Text Editor**: "Descubre productos de calidad diseñados para ti."

#### Sección 2: Categorías Destacadas
1. **Añade una Sección** — 3 o 4 columnas
2. Fondo: Blanco
3. Padding: 80px arriba y abajo

4. **Encabezado de Sección** (encima de las columnas): "Compra por Categoría", H2, Centro

En cada columna:
- Widget **Image**: Sube una imagen de categoría
- **Heading** (H4): Nombre de la categoría
- **Button**: "Comprar Ahora" → enlace a la página de archivo de la categoría
- Ejemplo: `http://learning-wordpress.local/product-category/ropa/`

#### Sección 3: Productos Destacados
1. **Añade una Sección** — 1 columna
2. Padding: 80px arriba y abajo

3. **Heading**: "Productos Destacados", H2, Centro
4. Widget **Shortcode**: `[featured_products limit="4" columns="4"]`

#### Sección 4: En Oferta
1. **Añade una Sección** — 1 columna
2. Fondo: Claro (#f8f9fa)
3. Padding: 80px arriba y abajo

4. **Heading**: "En Oferta", H2, Centro
5. Widget **Shortcode**: `[sale_products limit="4" columns="4"]`

#### Sección 5: Novedades
1. **Añade una Sección** — 1 columna
2. Padding: 80px arriba y abajo

3. **Heading**: "Novedades", H2, Centro
4. Widget **Shortcode**: `[recent_products limit="8" columns="4"]`

#### Sección 6: Banner CTA
1. **Añade una Sección** — 1 columna
2. Fondo: Color de acento o imagen promocional
3. Min Height: 300px, Vertical Align: Middle

4. **Heading**: "Envío Gratuito en Pedidos Superiores a 50€", Blanco, Centro
5. **Button**: "Comprar Ahora" → enlace a la página de tienda

---

## Dar Estilo a Elementos de WooCommerce con CSS

La visualización de productos por defecto de WooCommerce se puede estilizar para que coincida con tu sitio:

### Estilo de Tarjeta de Producto
Añade a **Appearance → Customize → Additional CSS**:

```css
/* Tarjeta de producto */
.woocommerce ul.products li.product {
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s, box-shadow 0.3s;
}

/* Efecto hover */
.woocommerce ul.products li.product:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* Título del producto */
.woocommerce ul.products li.product .woocommerce-loop-product__title {
    font-size: 16px;
    font-weight: 600;
    color: #333;
}

/* Precio */
.woocommerce ul.products li.product .price {
    color: #e74c3c;
    font-size: 18px;
    font-weight: 700;
}

/* Insignia de oferta */
.woocommerce span.onsale {
    background-color: #e74c3c;
    color: #fff;
    border-radius: 50%;
    padding: 5px 10px;
}

/* Botón añadir al carrito */
.woocommerce ul.products li.product .button {
    background-color: #2c3e50;
    color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
}

.woocommerce ul.products li.product .button:hover {
    background-color: #1abc9c;
}

/* Imagen del producto */
.woocommerce ul.products li.product img {
    border-radius: 8px;
}
```

---

## Configuración del Personalizador de WooCommerce

Algunos ajustes de apariencia de la tienda están en el Personalizador de WordPress:

1. Ve a **Appearance → Customize → WooCommerce** (esta sección aparece después de instalar WooCommerce)

Ajustes disponibles:
- **Store Notice**: Muestra un aviso en todo el sitio (ej., "¡Envío gratuito esta semana!")
- **Product Catalog**: Productos por fila, filas por página, ordenación predeterminada
- **Product Images**: Recorte de miniaturas y comportamiento de la galería
- **Checkout**: Opciones de diseño de la página de checkout

### Configuración Clave:
- **Products per row**: 3 o 4 (por defecto es 4)
- **Rows per page**: 3-4 filas (para 12-16 productos por página)
- **Catalog image cropping**: Sin recorte, cuadrado 1:1 o proporción personalizada

---

## Hacer que los Productos Destaquen

### Marcar Productos como Destacados
1. Ve a **Products → All Products**
2. Haz clic en el **icono de estrella** junto a un producto para marcarlo como destacado
3. Los productos destacados aparecen en los shortcodes `[featured_products]`

### Añadir Precios de Oferta
1. Edita un producto
2. Establece un **Sale Price** inferior al Regular Price
3. Una insignia "Sale!" aparece automáticamente en el producto

### Ordenación de Productos
En **Appearance → Customize → WooCommerce → Product Catalog**:
- Ordenación predeterminada: Popularidad, Valoración, Novedad, Precio (bajo/alto)

---

## Ejercicios

1. **Crea una landing page de tienda personalizada**: Construye una página con hero, categorías destacadas, productos destacados, artículos en oferta y un banner CTA usando Elementor.

2. **Usa shortcodes de WooCommerce**: Añade al menos 3 shortcodes de productos diferentes a tu página de tienda personalizada.

3. **Da estilo a los productos**: Añade CSS personalizado para mejorar la apariencia de las tarjetas de producto (efectos hover, estilos de botón, etc.).

4. **Configura el catálogo de productos**: Ve a Appearance → Customize → WooCommerce → Product Catalog y establece productos por fila y filas por página.

5. **Destaca algunos productos**: Marca 3-4 productos como "Featured" y muéstralos en tu página de tienda.

6. **Añade un aviso de tienda**: En el Personalizador, añade un aviso a toda la tienda (ej., "¡Envío gratuito en pedidos superiores a 50€!").

---

## Puntos Clave

- Elementor Free usa **shortcodes de WooCommerce** para mostrar productos
- Crea una **landing page de tienda personalizada** con hero, categorías, productos destacados y CTAs
- **Da estilo a los productos con CSS** para que coincidan con tu marca (efectos hover, botones, insignias)
- Usa la **configuración del Personalizador de WooCommerce** para el diseño del catálogo (productos por fila, ordenación)
- **Marca productos como Destacados** para resaltarlos con el shortcode `[featured_products]`
- Elementor Pro (o alternativas gratuitas como ShopEngine) da control visual completo de WooCommerce
- El **aviso de tienda** es ideal para promociones visibles en todo el sitio

---

**Siguiente Módulo:** [Módulo 6 - Gestión del Sitio y Lanzamiento](lesson-29-users-roles.md)
