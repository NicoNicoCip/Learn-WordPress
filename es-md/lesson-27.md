# Lección 27: Pasarelas de Pago y Configuración de Envíos

## Objetivos
- Configurar métodos de pago (Stripe, PayPal)
- Configurar zonas y tarifas de envío
- Entender tarifa plana, envío gratuito y envío calculado
- Configurar un entorno de pago de prueba/sandbox

---

## Pasarelas de Pago

Una pasarela de pago procesa pagos con tarjeta de crédito y pagos online. WooCommerce admite muchas opciones.

### Métodos de Pago Integrados

Ve a **WooCommerce → Settings → Payments**:

| Método | Descripción | Comisión |
|--------|------------|----------|
| **Direct bank transfer (BACS)** | El cliente paga por transferencia bancaria | Sin comisión |
| **Check payments** | El cliente envía un cheque | Sin comisión |
| **Cash on delivery (COD)** | El cliente paga al recibir el pedido | Sin comisión |

Estos son básicos — para pagos online, necesitas Stripe o PayPal.

### Configurar Stripe (Recomendado)

Stripe es el procesador de pagos más popular — acepta tarjetas de crédito, Apple Pay, Google Pay.

1. Ve a **Plugins → Add New** → busca **"WooCommerce Stripe Payment Gateway"**
2. Instala y activa
3. Ve a **WooCommerce → Settings → Payments**
4. Encuentra **"Stripe - Credit Card"** → haz clic en **"Manage"**
5. Marca **"Enable Stripe"**
6. **Test Mode**: Habilita el modo de prueba primero (para desarrollo)
7. **API Keys**:
   - Crea una cuenta de Stripe en https://stripe.com/
   - Ve a Stripe Dashboard → Developers → API Keys
   - Copia tu **Test Publishable Key** y **Test Secret Key**
   - Pégalas en WooCommerce
8. Guarda los cambios

### Números de Tarjeta de Crédito de Prueba
Cuando Stripe está en modo de prueba, usa estos números de tarjeta ficticios:
| Número de Tarjeta | Resultado |
|-------------------|-----------|
| `4242 4242 4242 4242` | Pago exitoso |
| `4000 0000 0000 0002` | Tarjeta rechazada |
| `4000 0000 0000 3220` | Autenticación 3D Secure requerida |
- Usa cualquier fecha de vencimiento futura (ej., 12/28)
- Usa cualquier CVC de 3 dígitos (ej., 123)

### Configurar PayPal

1. Ve a **WooCommerce → Settings → Payments**
2. Encuentra **"PayPal"** → haz clic en **"Manage"** (o instala el plugin WooCommerce PayPal Payments)
3. Marca **"Enable PayPal"**
4. Introduce tu **dirección de email de PayPal**
5. Habilita el **modo sandbox** para pruebas
6. Guarda los cambios

### Elegir Métodos de Pago
Para una tienda típica, ofrece:
- **Stripe** — para pagos con tarjeta de crédito/débito
- **PayPal** — muchos clientes prefieren PayPal
- **Ambos** — dar opciones a los clientes aumenta la conversión

---

## Configuración de Envíos

### Entender las Zonas de Envío

Las zonas de envío son áreas geográficas con métodos y tarifas de envío específicos.

Ejemplo:
- **Zona 1: Local** (tu ciudad) → Envío gratuito o tarifa plana 5€
- **Zona 2: Nacional** (resto del país) → Tarifa plana 10€
- **Zona 3: Internacional** → Tarifa plana 25€
- **Por defecto** (cualquier otro lugar) → Sin envío o tarifa plana alta

### Configurar Zonas de Envío

1. Ve a **WooCommerce → Settings → Shipping**
2. Haz clic en **"Add shipping zone"**

**Crear Zona 1: Envío Nacional**
1. **Zone Name**: "España" (o tu país)
2. **Zone Regions**: Selecciona tu país del desplegable
3. Haz clic en **"Add shipping method"**
4. Elige un método:

### Métodos de Envío

| Método | Cómo Funciona |
|--------|--------------|
| **Flat Rate** | Precio fijo (ej., 10€ por cualquier pedido) |
| **Free Shipping** | Sin cargo de envío (puede requerir pedido mínimo) |
| **Local Pickup** | El cliente recoge en tu ubicación (sin cargo) |

#### Configurar Tarifa Plana:
1. Después de añadir "Flat Rate", haz clic en **"Edit"** (bajo el método)
2. Configura:
   - **Cost**: El precio de envío (ej., `10.00`)
   - Puedes usar fórmulas: `10 + (2 * [qty])` = 10€ base + 2€ por artículo
3. Guarda

#### Configurar Envío Gratuito:
1. Añade el método "Free Shipping"
2. Edítalo:
   - **Requires**: Elige una condición:
     - Un cupón de envío gratuito válido
     - Un importe mínimo de pedido (ej., 50€)
     - Un cupón o importe mínimo
   - Establece el **importe mínimo de pedido** si aplica
3. Guarda

#### Añadir Múltiples Métodos por Zona:
Una zona puede tener múltiples métodos. Los clientes eligen en el checkout.

**Configuración común:**
- Envío Gratuito (para pedidos superiores a 50€)
- Tarifa Plana 7.99€ (envío estándar)
- Tarifa Plana 14.99€ (envío exprés — nómbralo "Express Shipping")

### Crear Envío Internacional

1. Añade otra zona de envío: "Internacional"
2. Zone Regions: Selecciona países o "Everywhere else"
3. Añade un método de Tarifa Plana con un precio más alto

### Clases de Envío

Para productos que necesitan tarifas de envío diferentes (artículos pesados, frágiles):

1. Ve a **WooCommerce → Settings → Shipping → Shipping Classes**
2. Haz clic en **"Add shipping class"**
3. Crea clases como:
   - "Heavy Items" (slug: heavy-items)
   - "Fragile" (slug: fragile)
4. Al editar la tarifa plana en una zona de envío, puedes establecer costes diferentes por clase de envío

### Sin Envío (para Productos Digitales)

Si vendes productos digitales/virtuales, no necesitan envío:
- Márcalos como **"Virtual"** en el editor de producto
- WooCommerce omite automáticamente el envío para productos virtuales

---

## Gestión de Pedidos

### Ver Pedidos
Ve a **WooCommerce → Orders** para ver todos los pedidos.

### Estados de Pedido

| Estado | Significado |
|--------|------------|
| **Pending payment** | Pedido realizado pero pago no confirmado |
| **Processing** | Pago recibido, pedido en preparación |
| **On hold** | Esperando acción (transferencia bancaria no recibida aún) |
| **Completed** | Pedido completado y entregado |
| **Cancelled** | Cancelado por admin o cliente |
| **Refunded** | Pago reembolsado |
| **Failed** | Pago fallido |

### Procesar un Pedido
1. Haz clic en un pedido para ver los detalles
2. Revisa los artículos del pedido, dirección de envío e info de pago
3. Añade **notas de pedido** (visibles para el cliente o privadas)
4. Cambia el estado a **"Completed"** cuando el pedido se haya enviado
5. Haz clic en **"Update"**

---

## Probar el Flujo Completo de Compra

### Pasos para Probar el Checkout:
1. Asegúrate de que el **modo de prueba de Stripe** está habilitado
2. Visita tu página de tienda
3. Añade un producto al carrito
4. Ve al carrito → procede al checkout
5. Rellena los datos de facturación (usa datos ficticios)
6. Introduce la tarjeta de prueba: `4242 4242 4242 4242`
7. Usa cualquier fecha de vencimiento futura y cualquier CVC
8. Realiza el pedido
9. Comprueba que:
   - Aparece la página de confirmación del pedido
   - El pedido aparece en WooCommerce → Orders
   - Se envía la notificación por email (revisa Mailhog en Local WP)

---

## Ejercicios

1. **Configura Stripe en modo de prueba**: Instala el plugin de Stripe, crea una cuenta de Stripe y configura con las claves API de prueba.

2. **Crea zonas de envío**: Configura al menos dos zonas — nacional (tu país) e internacional. Añade envío con tarifa plana a cada una.

3. **Configura envío gratuito**: Añade un método de envío gratuito para pedidos superiores a 50€ en tu zona nacional.

4. **Prueba una compra**: Completa una compra de prueba usando el número de tarjeta de crédito de prueba. Recorre todo el flujo desde la tienda hasta la confirmación del pedido.

5. **Procesa el pedido de prueba**: Encuentra el pedido de prueba en WooCommerce → Orders. Añade una nota y cambia el estado a Completed.

6. **Revisa los emails**: Verifica que se enviaron los emails de notificación del pedido (usa Mailhog en Local WP).

---

## Puntos Clave

- **Stripe** (tarjetas de crédito) y **PayPal** son las pasarelas de pago esenciales
- Siempre usa el **modo de prueba/sandbox** durante el desarrollo
- Las **zonas de envío** definen áreas geográficas con métodos de envío específicos
- Métodos de envío comunes: **Tarifa Plana**, **Envío Gratuito** (con pedido mínimo), **Recogida Local**
- Usa **clases de envío** para productos que necesitan tarifas diferentes
- Los **productos virtuales** omiten el envío automáticamente
- Prueba el **flujo completo de compra** antes de salir a producción
- Los estados de pedido rastrean el ciclo de vida: Pending → Processing → Completed

---

**Siguiente Lección:** [Lección 28 - Diseñar una Página de Tienda con Elementor](lesson-28-shop-design.md)
