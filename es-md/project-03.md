# Proyecto 03: Construir una Tienda Simple con WooCommerce

## Descripcion General
Construye una tienda en linea completa con WooCommerce. Este proyecto reune todo lo aprendido en el curso, especialmente los Modulos 3, 4 y 5.

**Tiempo estimado:** 4-6 horas

---

## El Encargo

**Cliente:** "Evergreen Goods" — una tienda en linea que vende productos ecologicos y sostenibles para el hogar (bolsas reutilizables, productos de bambu, productos de limpieza naturales, etc.).

**Requisitos:**
- Tienda en linea limpia y profesional
- Catalogo de productos con categorias
- Carrito de la compra y proceso de pago (checkout)
- Procesamiento de pagos (Stripe en modo de prueba)
- Configuracion de envios
- Historia de la marca
- Pagina de contacto

---

## Paginas a Construir

### 1. Pagina de Inicio (Landing de la Tienda)
**Secciones a incluir:**
- Banner hero: "Vida Sostenible Hecha Simple" con una imagen de estilo de vida
- Categorias de productos destacadas (3-4 tarjetas de categoria con imagenes)
- Productos destacados/mas vendidos (4 productos)
- Adelanto de la historia de la marca (imagen + texto + boton "Saber Mas")
- Seccion "Por Que Elegirnos" (3-4 cajas con icono: Ecologico, Envio Gratuito en Pedidos Superiores a 50$, Satisfaccion Garantizada, Embalaje Sostenible)
- Suscripcion al newsletter
- Testimonios de clientes (3 resenas)

### 2. Pagina de la Tienda (WooCommerce)
- Catalogo de productos con filtros en la barra lateral
- Navegacion por categorias
- Tarjetas de producto bien disenadas
- Paginacion

### 3. Pagina Sobre Nosotros
**Contenido a incluir:**
- Historia y mision de la marca
- Compromiso con la sostenibilidad (con iconos/estadisticas)
- Numeros de "Nuestro Impacto" (arboles salvados, plastico reducido, etc.)
- Seccion del equipo

### 4. Pagina de Contacto
**Contenido a incluir:**
- Formulario de contacto (Nombre, Email, Asunto, Mensaje)
- Informacion de atencion al cliente (email, telefono, horario)
- Acordeon de preguntas frecuentes (envios, devoluciones, tallas)
- Enlaces a redes sociales

### 5. Pagina del Blog
- 3 entradas de blog sobre sostenibilidad:
  1. "10 Cambios Faciles para una Cocina Mas Sostenible"
  2. "Como Reducir el Plastico en Tu Rutina Diaria"
  3. "La Verdad Sobre el Greenwashing: Que Buscar"

### 6. Paginas Adicionales de WooCommerce
Estas se generan automaticamente pero deben funcionar:
- Pagina del carrito
- Pagina de checkout
- Pagina Mi Cuenta

---

## Productos a Crear

Crea al menos **12 productos** en 4 categorias:

### Categoria: Cocina y Comedor (3 productos)

**Producto 1: Set de Utensilios de Bambu (Simple)**
- Precio: $24.99
- Descripcion: Set de 5 utensilios de bambu — espatula, cuchara, tenedor, cuchillo y palillos
- SKU: BUS-001
- Imagen: foto de utensilios de bambu

**Producto 2: Envolturas de Cera de Abeja (Variable)**
- Variaciones: Pequena ($12.99), Mediana ($16.99), Grande ($19.99), Pack Variado ($29.99)
- Descripcion: Envolturas de alimentos reutilizables para sustituir el film plastico
- SKU: BFW-001
- Imagen: foto de envolturas de cera de abeja

**Producto 3: Set de Bolsas Reutilizables para la Compra (Simple)**
- Precio: $15.99, Precio de oferta: $12.99
- Descripcion: Set de 6 bolsas de malla para la compra de frutas y verduras
- SKU: RPB-001

### Categoria: Cuidado Personal (3 productos)

**Producto 4: Pack de 4 Cepillos de Dientes de Bambu (Simple)**
- Precio: $9.99
- SKU: BT-001

**Producto 5: Pastilla de Champu (Variable)**
- Variaciones: Lavanda ($11.99), Menta ($11.99), Sin Perfume ($10.99)
- SKU: SB-001

**Producto 6: Desodorante Natural (Variable)**
- Variaciones: Citricos, Cedro, Sin Perfume — todos a $13.99
- SKU: ND-001

### Categoria: Limpieza del Hogar (3 productos)

**Producto 7: Limpiador Multiusos Concentrado (Simple)**
- Precio: $14.99
- Descripcion: Rinde para 10 botellas de limpiador multiusos
- SKU: APC-001

**Producto 8: Pack de 5 Panos de Limpieza Reutilizables (Simple)**
- Precio: $18.99
- SKU: RCC-001

**Producto 9: Laminas de Detergente para la Ropa (Simple)**
- Precio: $16.99
- Descripcion: 60 laminas, envase sin plastico
- SKU: LDS-001

### Categoria: Para Llevar (3 productos)

**Producto 10: Botella de Agua de Acero Inoxidable (Variable)**
- Variaciones: 500ml ($22.99), 750ml ($27.99), 1L ($32.99)
- Colores: Negro Mate, Verde Bosque, Azul Oceano
- SKU: SWB-001

**Producto 11: Bolsa Tote de Algodon Organico (Simple)**
- Precio: $14.99
- SKU: OCT-001

**Producto 12: Taza de Cafe Reutilizable (Variable)**
- Variaciones: 350ml ($18.99), 450ml ($21.99)
- SKU: RCC-002

### Requisitos de los Productos:
- Cada producto debe tener: **titulo, descripcion, descripcion corta, precio, SKU, categoria, imagen del producto y 2 o mas imagenes de galeria**
- Al menos **3 productos deben ser Variables** (con opciones de tamano/color/aroma)
- Al menos **2 productos deben estar en Oferta** (con precio de oferta)
- Marcar **4 productos como Destacados**

---

## Configuracion de la Tienda

### Zonas de Envio:

**Zona 1: Nacional**
- Envio Gratuito para pedidos superiores a $50
- Tarifa Plana: $7.99 (Envio Estandar)

**Zona 2: Internacional**
- Tarifa Plana: $19.99

### Pagos:
- Stripe (modo de prueba)
- PayPal (opcional)

### Impuestos:
- Configura al menos una tasa impositiva para tu region

### Politicas de la Tienda:
- Pagina de Politica de Envios
- Pagina de Politica de Devoluciones/Reembolsos
- Pagina de Politica de Privacidad

---

## Especificaciones de Diseno

### Paleta de Colores
| Color | Hex | Uso |
|-------|-----|-----|
| Verde Bosque | `#2d6a4f` | Primario, botones |
| Verde Salvia | `#95d5b2` | Acentos, resaltados |
| Crema Calido | `#fefae0` | Fondos claros |
| Carbon Oscuro | `#1b1b1b` | Texto |
| Blanco | `#ffffff` | Tarjetas, fondos |
| Ambar | `#e09f3e` | Insignias de oferta, CTAs |

### Fuentes
- **Titulares:** Raleway (Limpia, moderna)
- **Cuerpo:** Nunito o Lato (Amigable, legible)

### Fotografia
- Buscar en Unsplash/Pexels: eco friendly products, sustainable living, bamboo products, zero waste, natural home

---

## Requisitos Tecnicos

- [ ] WooCommerce instalado y configurado
- [ ] Mas de 12 productos con detalles completos, imagenes y categorias
- [ ] Productos variables con variaciones funcionales
- [ ] Productos destacados mostrados en la pagina de inicio
- [ ] Productos en oferta mostrando insignias de descuento
- [ ] Zonas de envio configuradas (nacional + internacional)
- [ ] Envio gratuito para pedidos superiores a $50
- [ ] Pasarela de pago Stripe en modo de prueba
- [ ] Completar una compra de prueba con exito
- [ ] El formulario de contacto funciona
- [ ] El blog tiene 3 entradas
- [ ] Adaptable a moviles
- [ ] SEO configurado en todas las paginas
- [ ] Todas las imagenes de productos optimizadas
- [ ] Aviso de la tienda activo ("Envio gratuito en pedidos superiores a $50!")

---

## Desafios Extra

1. Anadir una seccion de **"Novedades"** a la pagina de inicio
2. Crear **imagenes de categorias de productos** y usar el shortcode `[product_categories]`
3. Anadir **productos de venta cruzada** en la pagina del carrito
4. Crear un **codigo de cupon** (por ejemplo, WELCOME10 para un 10% de descuento en el primer pedido)
5. Anadir una **guia de tallas** o un **acordeon de preguntas frecuentes** en las paginas de producto
6. Crear una pagina de **"Impacto en la Sostenibilidad"** con contadores (arboles salvados, plastico reducido)
7. Configurar la **imagen de marca en las plantillas de email** (WooCommerce → Settings → Emails → personalizar colores/cabecera)

---

## Lista de Comprobacion de Pruebas

Antes de dar por completado este proyecto:

- [ ] Navegar por la tienda y filtrar por categoria
- [ ] Ver la pagina de un producto simple — toda la informacion se muestra correctamente
- [ ] Ver un producto variable — las variaciones funcionan (seleccionar un tamano cambia el precio)
- [ ] Anadir articulos al carrito — el carrito se actualiza correctamente
- [ ] Actualizar cantidades en el carrito — el total se recalcula
- [ ] Eliminar un articulo del carrito — funciona correctamente
- [ ] Pasar al checkout — todos los campos se muestran
- [ ] Completar una compra de prueba con la tarjeta de prueba de Stripe (4242 4242 4242 4242)
- [ ] Se muestra la pagina de confirmacion del pedido
- [ ] El pedido aparece en WooCommerce → Orders
- [ ] Se envia el email de notificacion del pedido
- [ ] El envio gratuito se aplica cuando el total del carrito supera los $50
- [ ] Los productos en oferta muestran los precios con descuento tachando el precio original
- [ ] La pagina de la tienda se ve bien en movil
- [ ] Las paginas de producto se ven bien en movil
- [ ] El carrito y el checkout funcionan en movil

---

## Criterios de Evaluacion

| Criterio | Verificacion |
|----------|--------------|
| Mas de 12 productos con detalles completos e imagenes | |
| Los productos variables funcionan correctamente | |
| La pagina de la tienda esta bien organizada con categorias | |
| El flujo de compra completo funciona (modo de prueba) | |
| Los envios estan correctamente configurados | |
| La pagina de inicio muestra los productos de forma efectiva | |
| El diseno es coherente y profesional | |
| Adaptable a moviles en todas las paginas | |
| SEO configurado en todas las paginas | |
| El formulario de contacto y el blog son funcionales | |
| El aviso de la tienda y las promociones son visibles | |
| Todos los enlaces y la navegacion funcionan | |

---

## Felicidades!

Si has completado los tres proyectos de practica, tienes experiencia practica con:
- Sitios WordPress corporativos/de negocio
- Sitios centrados en blog/contenido
- Tiendas en linea con WooCommerce

Estos son los tres tipos mas comunes de sitios WordPress que construiras profesionalmente. Estas listo para empezar a construir sitios reales para clientes!
