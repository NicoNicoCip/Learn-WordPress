# Lección 25: Instalación de WooCommerce + Configuración Inicial

## Objetivos
- Instalar y activar WooCommerce
- Completar el asistente de configuración
- Comprender el dashboard de WooCommerce
- Configurar los ajustes esenciales de la tienda

---

## ¿Qué es WooCommerce?

**WooCommerce** es un plugin gratuito de WordPress que convierte tu sitio en una tienda online completa. Es la plataforma de comercio electrónico más popular del mundo, utilizada por más del 25% de todas las tiendas online.

### Lo que WooCommerce Añade:
- Gestión de productos (simples, variables, digitales, agrupados)
- Carrito de compras y checkout
- Procesamiento de pagos (Stripe, PayPal y más)
- Configuración de envíos
- Gestión de pedidos
- Cuentas de clientes
- Cálculo de impuestos
- Cupones y descuentos
- Gestión de inventario
- Informes y analíticas

---

## Instalación de WooCommerce

### Paso 1: Instalación
1. Ve a **Plugins → Add New Plugin**
2. Busca **"WooCommerce"**
3. Instala y activa **"WooCommerce"** de Automattic

### Paso 2: Asistente de Configuración
Después de la activación, WooCommerce lanza un asistente de configuración. Síguelo:

**Datos de la Tienda:**
- País/Región
- Dirección
- Sector (elige el que corresponda)
- Número de productos (aproximado)

**Tipos de Productos:**
- Productos físicos
- Descargas digitales
- Suscripciones (requiere extensión de pago)

**Datos del Negocio:**
- Elige qué funciones gratuitas instalar (puedes omitir la mayoría de sugerencias de complementos)
- Sé selectivo — no instales todo lo que te sugieren

**Tema:**
- Omite esto — ya estamos usando Hello Elementor
- O elige "Continuar con mi tema activo"

**Completa el asistente** y haz clic en "Ir al Dashboard" o continúa a la página de inicio de WooCommerce.

---

## Dashboard de WooCommerce

Después de la configuración, verás **WooCommerce** en la barra lateral del administrador con estas subsecciones:

| Sección | Qué Hace |
|---------|-------------|
| **Home** | Panel de vista general con tareas de configuración y rendimiento de la tienda |
| **Orders** | Ver y gestionar pedidos de clientes |
| **Customers** | Lista de clientes y detalles |
| **Coupons** | Crear códigos de descuento |
| **Reports** | Informes de ventas, clientes e inventario |
| **Settings** | Configurar todos los ajustes de la tienda |
| **Status** | Estado del sistema, herramientas y registros |
| **Extensions** | Explorar e instalar extensiones de WooCommerce |

También verás **Products** añadido a la barra lateral del administrador — aquí es donde gestionas tu catálogo de productos.

---

## Ajustes Esenciales de WooCommerce

Ve a **WooCommerce → Settings** y configura estas pestañas:

### Pestaña General
| Ajuste | Recomendación |
|---------|---------------|
| **Store Address** | La dirección de tu negocio |
| **Selling Location(s)** | "Vender a todos los países" o países específicos |
| **Shipping Location(s)** | A dónde realizas envíos |
| **Enable taxes** | Marca si necesitas cobrar impuestos |
| **Currency** | Tu moneda local |

### Pestaña Products
| Ajuste | Recomendación |
|---------|---------------|
| **Shop Page** | Selecciona la página que WooCommerce usa como tienda |
| **Add to Cart behaviour** | "Redirigir a la página del carrito tras añadir exitosamente" — marca si lo deseas |
| **Weight Unit** | kg o lbs |
| **Dimensions Unit** | cm o in |
| **Enable Reviews** | A tu elección — las reseñas de productos generan confianza |

### Pestaña Accounts & Privacy
| Ajuste | Recomendación |
|---------|---------------|
| **Guest checkout** | Permitir — reduce la fricción (los clientes no necesitan una cuenta para comprar) |
| **Account creation** | Permitir durante el checkout — da a los clientes la opción |
| **Privacy Policy** | Enlace a tu página de política de privacidad |

### Pestaña Emails
Configura qué correos se envían y a quién:
- **New order** — notifica al administrador de nuevos pedidos
- **Processing order** — se envía al cliente cuando se recibe el pago
- **Completed order** — se envía cuando el pedido se ha enviado/completado
- **Customer note** — cuando añades una nota a su pedido

Para cada correo, puedes:
- Activarlo/desactivarlo
- Cambiar el destinatario
- Personalizar el asunto
- Cambiar los colores de la plantilla de correo para que coincidan con tu marca

---

## Páginas de WooCommerce

WooCommerce crea automáticamente varias páginas:

| Página | Propósito |
|------|---------|
| **Shop** | Página de listado de productos |
| **Cart** | Carrito de compras |
| **Checkout** | Formulario de pago y envío |
| **My Account** | Panel de cuenta del cliente |

Estas páginas contienen **shortcodes de WooCommerce** que muestran el contenido correspondiente. No elimines estos shortcodes — puedes añadir contenido a su alrededor.

### Verificación de que las Páginas están Configuradas:
1. Ve a **WooCommerce → Settings → Advanced → Page Setup**
2. Verifica que cada página está asignada:
   - Cart Page → "Cart"
   - Checkout Page → "Checkout"
   - My Account Page → "My Account"
   - Terms and Conditions → tu página de términos (crea una si es necesario)

---

## Moneda e Impuestos Básicos

### Moneda
- Se configura en WooCommerce → Settings → General
- Elige tu **moneda** y la **posición de la moneda** (antes/después de la cantidad)
- Configura el **separador decimal** y el **separador de miles**

### Impuestos (Configuración Básica)
Si necesitas cobrar impuestos sobre las ventas:
1. Ve a **WooCommerce → Settings → General** → marca **"Enable taxes"**
2. Ve a la nueva pestaña **Tax** que aparece
3. En **Standard Rates**, haz clic en **"Insert Row"**
4. Introduce tu tasa impositiva:
   - Código de País (p. ej., "ES")
   - Código de Provincia (p. ej., "M")
   - Porcentaje % (p. ej., "21")
   - Nombre del Impuesto (p. ej., "IVA")
5. Haz clic en **"Save Changes"**

**Para configuraciones de impuestos complejas**, considera un plugin de impuestos como:
- **WooCommerce Tax** (de Automattic) — cálculos automáticos de impuestos
- **TaxJar** — impuestos de ventas automatizados para EE.UU.

---

## Ejercicios

1. **Instala WooCommerce**: Sigue los pasos de instalación y completa el asistente de configuración.

2. **Configura los ajustes generales**: Establece la dirección de tu tienda, moneda y ubicaciones de venta.

3. **Revisa las páginas de WooCommerce**: Verifica que las páginas Shop, Cart, Checkout y My Account existen y están correctamente asignadas.

4. **Configura los ajustes de correo**: Ve a WooCommerce → Settings → Emails y personaliza los colores de la plantilla de correo para que coincidan con tu marca.

5. **Visita la página de la tienda**: Ve a la página Shop de tu sitio para ver cómo se muestra (vacía por ahora — añadiremos productos a continuación).

6. **Activa el checkout como invitado**: En WooCommerce → Settings → Accounts & Privacy, asegúrate de que el checkout como invitado está permitido.

---

## Puntos Clave

- **WooCommerce** es gratuito y convierte WordPress en una tienda online completa
- El **asistente de configuración** te guía a través de la configuración inicial
- **Ajustes esenciales**: moneda, impuestos, ubicaciones de envío, opciones de checkout
- WooCommerce crea **páginas obligatorias** automáticamente (Shop, Cart, Checkout, My Account)
- Activa el **checkout como invitado** para reducir la fricción para los clientes
- Configura las **notificaciones por correo** para que tú y los clientes estéis informados
- Configura las **tasas impositivas** si son necesarias para tu ubicación
- WooCommerce añade las secciones **Products** y **WooCommerce** a la barra lateral del administrador

---

**Siguiente Lección:** [Lección 26 - Añadir Productos](lesson-26-adding-products.md)
