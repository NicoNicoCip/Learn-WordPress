# Lección 26: Añadir Productos

## Objetivos
- Añadir productos simples con imágenes, precios y descripciones
- Comprender los tipos de productos (simple, variable, digital)
- Configurar categorías y etiquetas de productos
- Configurar inventario, envíos y productos relacionados

---

## Tipos de Productos en WooCommerce

| Tipo | Qué Es | Ejemplo |
|------|-----------|---------|
| **Simple** | Un producto único con un solo precio | Una camiseta en una sola talla/color |
| **Variable** | Un producto con opciones (talla, color) | Una camiseta con opciones de talla y color |
| **Agrupado** | Una colección de productos simples relacionados | Un conjunto de accesorios relacionados |
| **Externo/Afiliado** | Un producto que se vende en otro sitio | Producto de afiliado de Amazon |
| **Virtual** | Un producto no físico (sin envío) | Un servicio de consultoría |
| **Descargable** | Un producto digital | Un e-book, plantilla o software |

---

## Añadir un Producto Simple

### Paso 1: Crear el Producto

1. Ve a **Products → Add New**
2. Introduce el **Nombre del Producto**: p. ej., "Camiseta Azul Clásica"
3. Escribe una **Descripción del Producto** en el editor principal (esto aparece en la página completa del producto):
   ```
   Our Classic Blue T-Shirt is made from 100% organic cotton for
   ultimate comfort. Features a relaxed fit and durable stitching
   that lasts wash after wash.
   ```

### Paso 2: Sección de Datos del Producto

Debajo del editor, verás el panel de **Product Data**. Asegúrate de que "Simple product" está seleccionado.

#### Pestaña General
| Campo | Qué Introducir |
|-------|-------------|
| **Regular Price** | El precio normal (p. ej., 29,99 $) |
| **Sale Price** | El precio con descuento (opcional — p. ej., 24,99 $) |
| **Sale dates** | Programa cuándo empieza/termina la oferta |

#### Pestaña Inventory
| Campo | Qué Introducir |
|-------|-------------|
| **SKU** | Referencia — identificador único (p. ej., "BTS-001") |
| **Manage Stock** | Marca para activar la gestión de inventario |
| **Stock Quantity** | Cuántos tienes (p. ej., 50) |
| **Allow Backorders** | ¿Permitir compras cuando no hay stock? |
| **Low Stock Threshold** | Recibe una notificación cuando el stock baje de esta cifra |
| **Sold Individually** | Limitar a 1 por pedido |

#### Pestaña Shipping
| Campo | Qué Introducir |
|-------|-------------|
| **Weight** | Peso del producto (para cálculos de envío) |
| **Dimensions** | Largo x Ancho x Alto |
| **Shipping Class** | Deja el valor por defecto a menos que tengas clases de envío personalizadas |

#### Pestaña Linked Products
| Campo | Qué Introducir |
|-------|-------------|
| **Upsells** | Productos mostrados en la página del producto ("También te puede gustar") |
| **Cross-sells** | Productos mostrados en el carrito ("Te podría interesar") |

#### Pestaña Advanced
| Campo | Qué Introducir |
|-------|-------------|
| **Purchase Note** | Nota enviada al cliente después de la compra |
| **Menu Order** | Orden de visualización (números más bajos aparecen primero) |
| **Enable Reviews** | Permitir reseñas de clientes en este producto |

### Paso 3: Descripción Corta
En el lado derecho (o debajo, dependiendo de tu pantalla), busca **Product Short Description**:
- Escribe una descripción breve de 1-2 frases
- Aparece junto a la imagen del producto en la página del producto
- Ejemplo: "Camiseta cómoda de 100% algodón orgánico. Color azul clásico. Disponible en todas las tallas."

### Paso 4: Imagen del Producto
En la barra lateral derecha:
1. Busca **"Product Image"**
2. Haz clic en **"Set product image"**
3. Sube o selecciona la **foto principal del producto**
4. Esta es la imagen principal que se muestra en la tienda y en la página del producto

### Paso 5: Galería del Producto
Debajo de la imagen del producto:
1. Haz clic en **"Add product gallery images"**
2. Sube o selecciona **fotos adicionales** (diferentes ángulos, detalles, fotos de estilo de vida)
3. Aparecen como miniaturas debajo de la imagen principal en la página del producto

### Paso 6: Categorías del Producto
En la barra lateral derecha:
1. Busca **"Product categories"**
2. Marca una categoría existente o haz clic en **"+ Add new product category"**
3. Ejemplos de categorías: Ropa, Camisetas, Accesorios
4. Puedes crear categorías padre/hijo (Ropa → Camisetas)

### Paso 7: Etiquetas del Producto
- Añade etiquetas como: `algodón`, `azul`, `camiseta`, `casual`, `unisex`
- Las etiquetas ayudan con la búsqueda y el filtrado

### Paso 8: Publicar
Haz clic en **"Publish"** para poner el producto en línea.

---

## Añadir un Producto Variable

Los productos variables tienen opciones como talla y color.

### Paso 1: Crear el Producto
1. Ve a **Products → Add New**
2. Nombre: "Camiseta Premium de Algodón"
3. En Product Data, selecciona **"Variable product"**

### Paso 2: Configurar Atributos

1. Ve a la pestaña **Attributes** en Product Data
2. Haz clic en **"Add new"** (o selecciona un atributo existente)
3. Crea un atributo:
   - **Name**: "Talla"
   - **Values**: S | M | L | XL (separa con ` | `)
   - Marca **"Used for variations"**
   - Haz clic en **"Save attributes"**
4. Añade otro atributo:
   - **Name**: "Color"
   - **Values**: Azul | Negro | Blanco
   - Marca **"Used for variations"**
   - Haz clic en **"Save attributes"**

### Paso 3: Crear Variaciones

1. Ve a la pestaña **Variations**
2. Haz clic en **"Generate variations"** (esto crea todas las combinaciones: S/Azul, S/Negro, M/Azul, etc.)
3. Haz clic en **"OK"** para confirmar

### Paso 4: Configurar Cada Variación

1. Haz clic en una variación para expandirla (p. ej., "Talla: S, Color: Azul")
2. Configura:
   - **Regular Price** (¡obligatorio!) — p. ej., 29,99 $
   - **Sale Price** — opcional
   - **SKU** — opcional pero recomendado (p. ej., "PCT-S-AZU")
   - **Stock** — stock opcional por variación
   - **Image** — sube una imagen específica para esta variación
3. Repite para todas las variaciones (o establece el mismo precio para todas)

**Consejo:** Para establecer el mismo precio para todas las variaciones, usa "Set regular prices" en el desplegable de la parte superior de la sección de Variaciones.

### Paso 5: Publicar

---

## Añadir un Producto Digital/Descargable

Para e-books, plantillas, software, etc.

1. Crea un nuevo producto
2. Selecciona **"Simple product"**
3. Marca **"Virtual"** (sin envío) y **"Downloadable"**
4. Aparecen nuevos campos:

| Campo | Qué Introducir |
|-------|-------------|
| **Downloadable files** | Haz clic en "Add File" → sube el archivo o introduce la URL |
| **Download limit** | Cuántas veces el cliente puede descargarlo (en blanco = ilimitado) |
| **Download expiry** | Cuántos días permanece activo el enlace de descarga |

5. Configura el precio, la descripción y la imagen como de costumbre
6. Publica

---

## Gestión de Productos

### Lista de Productos
Ve a **Products → All Products** para ver todos tus productos:
- **Filtrar** por categoría, tipo o estado de stock
- **Edición masiva** — selecciona varios productos y cambia categoría, precio, estado de stock, etc.
- **Edición rápida** — edita los datos básicos en línea sin abrir el editor completo

### Estados del Producto
| Estado | Significado |
|--------|---------|
| **Published** | Activo y visible en la tienda |
| **Draft** | No visible — trabajo en progreso |
| **Pending** | En espera de revisión |
| **Private** | Solo visible para administradores |

### Duplicar Productos
- Pasa el cursor sobre un producto en la lista → haz clic en **"Duplicate"**
- Se crea una copia como borrador — edita los detalles y publica
- Ideal para crear productos similares rápidamente

---

## Organización de Productos

### Categorías
- Crea categorías significativas: Ropa, Electrónica, Hogar y Jardín
- Usa jerarquía: Ropa → Hombre → Camisetas
- Gestiona en **Products → Categories**
- Añade descripciones e imágenes a las categorías (algunos temas las muestran)

### Etiquetas
- Más específicas que las categorías
- Útiles para filtrado y búsqueda
- Gestiona en **Products → Tags**

---

## Ejercicios

1. **Añade 3 productos simples**: Crea tres productos diferentes con:
   - Título, descripción, descripción corta
   - Precio (y un precio de oferta en al menos uno)
   - Imagen de producto + 2 imágenes de galería
   - Categoría y etiquetas
   - SKU y cantidad de stock

2. **Crea un producto variable**: Añade un producto con al menos 2 atributos (p. ej., Talla y Color) y genera variaciones con precios individuales.

3. **Crea un producto digital**: Añade un producto descargable (usa cualquier archivo PDF o imagen como descarga).

4. **Configura las categorías de productos**: Crea una jerarquía con al menos una categoría padre y dos categorías hijo. Asigna tus productos a ellas.

5. **Visita la página de la tienda**: Ve a la página Shop de tu sitio para ver tus productos mostrados. Prueba a hacer clic en la página de un producto.

6. **Prueba el carrito**: Añade un producto al carrito desde la página de la tienda. Visualiza el carrito. Prueba a cambiar las cantidades.

---

## Puntos Clave

- Los **productos simples** son artículos únicos con un solo precio
- Los **productos variables** tienen opciones (talla, color) con variaciones separadas
- Los productos **virtuales/descargables** no requieren envío
- Cada producto necesita: **título, precio, descripción, imagen y categoría**
- La **imagen del producto** es la foto principal; las imágenes de **galería** muestran ángulos adicionales
- Usa **SKUs** para el seguimiento del inventario
- Las **categorías de productos** crean la estructura organizativa de tu tienda
- Usa **"Duplicate"** para crear rápidamente productos similares
- Revisa tu **página de la tienda** y las **páginas de productos** después de añadir productos para verificar que todo se ve bien

---

**Siguiente Lección:** [Lección 27 - Pasarelas de Pago y Envíos](lesson-27-payments-shipping.md)
