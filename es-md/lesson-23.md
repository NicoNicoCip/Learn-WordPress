# Lección 23: Formularios de Contacto — WPForms y Contact Form 7

## Objetivos
- Crear diferentes tipos de formularios más allá del contacto básico
- Configurar notificaciones y confirmaciones de formularios
- Añadir lógica condicional a los formularios
- Insertar formularios en páginas de Elementor

---

## Más Allá del Formulario de Contacto Básico

En la Lección 18, configuramos un formulario de contacto básico. Ahora vamos a explorar más tipos de formularios y funciones avanzadas.

### Tipos Comunes de Formularios:
- **Formulario de contacto** — nombre, correo electrónico, mensaje (ya creado)
- **Formulario de solicitud de presupuesto** — selección de servicio, presupuesto, plazo
- **Suscripción a newsletter** — solo correo electrónico (o nombre + correo)
- **Formulario de opinión/encuesta** — valoración, opción múltiple, áreas de texto
- **Formulario de solicitud de empleo** — datos personales, carga de CV, carta de presentación
- **Registro de eventos** — nombre, correo electrónico, número de asistentes, requisitos dietéticos

---

## WPForms: Creación de Formularios Avanzados

### Creación de un Formulario de Solicitud de Presupuesto

1. Ve a **WPForms → Add New**
2. Nombre: "Solicitar un Presupuesto"
3. Empieza con un **Blank Form** (o la plantilla Suggestion Form)

4. **Añade campos** arrastrándolos desde el panel izquierdo:
   - **Name** (campo de texto simple o campo de nombre)
   - **Email** (campo de correo electrónico)
   - **Phone** (campo de teléfono)
   - **Dropdown**: "¿Qué servicio le interesa?"
     - Opciones: Diseño Web, SEO, E-Commerce, Marketing, Otro
   - **Number Slider o Dropdown**: "Presupuesto Estimado"
     - Opciones: Menos de 1.000 $; 1.000 $-5.000 $; 5.000 $-10.000 $; 10.000 $+
   - **Dropdown**: "Plazo"
     - Opciones: Lo antes posible, 1-2 meses, 3-6 meses, Sin prisa
   - **Paragraph Text**: "Cuéntenos sobre su proyecto"

5. **Configura cada campo:**
   - Haz clic en un campo para editar su etiqueta, texto de ayuda y si es obligatorio
   - Marca Nombre, Email y Servicio como **Required** (obligatorios)

6. Haz clic en **"Save"**

### Configuración de Notificaciones

1. En el constructor de formularios, haz clic en **Settings → Notifications**
2. **Send To Email Address**: Tu correo electrónico (o `{admin_email}`)
3. **Email Subject**: "Nueva Solicitud de Presupuesto de {field_id='1'}" (usa Smart Tags)
4. **From Email**: `{field_id='2'}` (el correo del remitente)
5. **Reply-To**: `{field_id='2'}`
6. **Message**: `{all_fields}` (incluye todos los datos del formulario)

### Configuración de Confirmaciones

1. Ve a **Settings → Confirmations**
2. Elige el **Tipo de Confirmación**:
   - **Message** — muestra un mensaje de agradecimiento en la misma página
   - **Show Page** — redirige a una página de agradecimiento
   - **Go to URL** — redirige a cualquier URL
3. Para la mayoría de formularios, usa un **Message**: "¡Gracias por tu solicitud! Nos pondremos en contacto contigo en un plazo de 24 horas."

---

## Contact Form 7 (Alternativa)

Contact Form 7 es el otro gran plugin gratuito de formularios. Utiliza un enfoque diferente: marcado similar a HTML.

### Creación de un Formulario en CF7

1. Ve a **Contact → Add New**
2. El formulario usa etiquetas de marcado:

```
<label>Your Name (required)
    [text* your-name]</label>

<label>Your Email (required)
    [email* your-email]</label>

<label>Subject
    [text your-subject]</label>

<label>Your Message
    [textarea your-message]</label>

[submit "Send"]
```

### CF7 vs WPForms

| Característica | WPForms Lite | Contact Form 7 |
|---------|-------------|----------------|
| **Constructor** | Arrastrar y soltar visual | Marcado similar a HTML |
| **Facilidad de uso** | Más fácil para principiantes | Requiere entender el marcado |
| **Plantillas** | Sí | No (empieza en blanco) |
| **Almacenamiento de envíos** | Sí (ver envíos en WP) | No (solo correo, a menos que añadas un plugin) |
| **Estilos** | Básicos incorporados | Requiere CSS personalizado |
| **Complementos** | Muchos (de pago) | Muchos (gratuitos) |

**Recomendación:** Usa **WPForms** si eres principiante. Usa **CF7** si te sientes cómodo con el código y quieres más flexibilidad gratuita.

---

## Insertar Formularios en Elementor

### Método 1: Widget de WPForms
- En Elementor, busca "WPForms" en el panel de widgets
- Arrástralo a tu página
- Selecciona tu formulario en el desplegable

### Método 2: Shortcode
- Copia el shortcode del formulario desde WPForms o CF7
- En Elementor, añade un widget de **Shortcode**
- Pega el shortcode

### Método 3: Bloque (en Gutenberg)
- Cuando uses el editor de bloques de WordPress (no Elementor), añade un bloque de WPForms o CF7

---

## Personalización de Estilos de los Formularios

### Personalización CSS de WPForms

Añade en **Appearance → Customize → Additional CSS**:

```css
/* Form container */
.wpforms-container {
    max-width: 600px;
}

/* Labels */
.wpforms-field-label {
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
}

/* Input fields */
.wpforms-field input,
.wpforms-field textarea,
.wpforms-field select {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 16px;
    transition: border-color 0.3s;
}

/* Focus state */
.wpforms-field input:focus,
.wpforms-field textarea:focus,
.wpforms-field select:focus {
    border-color: #1abc9c;
    outline: none;
}

/* Submit button */
.wpforms-submit-container button {
    background: #e74c3c;
    color: #fff;
    padding: 14px 40px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
}

.wpforms-submit-container button:hover {
    background: #c0392b;
}
```

---

## Buenas Prácticas para Formularios

### Diseño:
- Mantén los formularios **lo más cortos posible** — menos campos = más envíos
- Marca claramente los campos obligatorios
- Usa **texto de ejemplo** para guiar a los usuarios
- Haz que el botón de envío sea **visible** y descriptivo ("Solicitar Presupuesto" en lugar de simplemente "Enviar")

### Experiencia de Usuario:
- Muestra una **confirmación clara** después del envío
- Configura una **página de agradecimiento** para mejor seguimiento (puedes rastrear conversiones en analítica)
- Usa **validación de campos** — muestra errores de inmediato, no después del envío

### Técnico:
- **Prueba cada formulario** antes de publicar
- Configura las **notificaciones por correo** al destinatario correcto
- Usa **protección antispam** (reCAPTCHA, campos honeypot)
- En Local WP, revisa **Mailhog** para verificar que los correos se están enviando

---

## Ejercicios

1. **Crea un formulario de solicitud de presupuesto**: Construye el formulario descrito anteriormente con desplegable de servicio, presupuesto y plazo.

2. **Crea una suscripción a newsletter**: Construye un formulario simple con solo los campos Nombre y Email. Personaliza el botón de envío para que diga "Suscribirse".

3. **Configura las notificaciones**: Configura las notificaciones por correo para tu formulario de solicitud de presupuesto con el asunto y la dirección de respuesta adecuados.

4. **Dale estilo a tus formularios**: Añade CSS personalizado para que tus formularios coincidan con el diseño de tu sitio.

5. **Prueba todos los formularios**: Envía pruebas en cada formulario. Comprueba que los correos se reciben (usa Mailhog en Local WP).

6. **Crea una página de agradecimiento**: Crea una página simple que diga "¡Gracias! Nos pondremos en contacto pronto." Configura tu formulario para redirigir allí después del envío.

---

## Puntos Clave

- **WPForms** es el constructor de formularios más fácil para principiantes (arrastrar y soltar)
- Crea diferentes tipos de formularios: contacto, solicitud de presupuesto, newsletter, encuesta
- Configura las **notificaciones** (quién recibe el correo) y las **confirmaciones** (qué ve el usuario)
- Inserta formularios en Elementor usando el **widget de WPForms** o el **widget de Shortcode**
- **Personaliza los formularios con CSS** para que coincidan con el diseño de tu sitio
- Mantén los formularios **cortos** — cada campo adicional reduce los envíos
- Siempre **prueba los formularios** antes de publicar
- Usa **protección antispam** (honeypot, reCAPTCHA) en todos los formularios públicos

---

**Siguiente Lección:** [Lección 24 - Optimización de Imágenes y Rendimiento](lesson-24-image-optimization.md)
