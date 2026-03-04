# Leccion 18: Construir una Pagina de Contacto con Formularios

## Objetivos
- Construir un diseno profesional de pagina de contacto
- Instalar y configurar un plugin de formulario de contacto
- Anadir un formulario a tu pagina usando Elementor
- Incluir mapas, informacion de contacto y horario comercial

---

## Estructura de la Pagina de Contacto

Una buena pagina de contacto incluye:
1. **Encabezado de pagina** — titulo y breve invitacion
2. **Formulario de contacto** — la caracteristica principal
3. **Datos de contacto** — telefono, email, direccion
4. **Mapa** — Google Map incrustado
5. **Horario comercial** (si aplica)

---

## Configurar un Plugin de Formulario de Contacto

Elementor Free no incluye un widget de formulario (esa es una funcion de Elementor Pro). Usaremos un plugin de formulario gratuito.

### Opcion 1: WPForms Lite (Recomendado para principiantes)

1. Ve a **Plugins → Add New Plugin**
2. Busca **"WPForms"**
3. Instala y activa **"WPForms Lite"**
4. Despues de la activacion, veras **WPForms** en la barra lateral

### Crear un Formulario de Contacto con WPForms

1. Ve a **WPForms → Add New**
2. Nombralo "Formulario de Contacto"
3. Selecciona la plantilla **"Simple Contact Form"**
4. El constructor de formularios se abre con campos preconfigurados:
   - Nombre
   - Email
   - Comentario o Mensaje
5. Personaliza si es necesario:
   - **Arrastra campos** para reordenar
   - **Haz clic en un campo** para editar su etiqueta, marcador de posicion y requisitos
   - **Anade campos** desde el panel izquierdo (Telefono, Asunto, etc.)
6. Haz clic en **Settings** en el panel izquierdo:
   - **General**: Nombre del formulario, texto del boton de envio, mensaje de confirmacion
   - **Notifications**: Establece la direccion de email donde se envian los envios (tu email)
   - **Confirmations**: Lo que el usuario ve despues de enviar (mensaje de exito o redireccion)
7. Haz clic en **"Save"**

### Anadir WPForms a Elementor

**Metodo 1: Shortcode**
1. En WPForms, ve a tu formulario, busca el shortcode (se ve como `[wpforms id="123"]`)
2. En Elementor, anade un widget **Shortcode**
3. Pega el shortcode

**Metodo 2: Widget de WPForms (si esta disponible)**
1. En Elementor, busca "WPForms" en el panel de widgets
2. Arrastra el widget de WPForms a tu pagina
3. Selecciona tu formulario del menu desplegable

### Opcion 2: Contact Form 7 (Alternativa)

1. Instala y activa el plugin **"Contact Form 7"**
2. Ve a **Contact → Add New**
3. Configura los campos de tu formulario
4. Copia el shortcode
5. En Elementor, usa un widget **Shortcode** y pegalo

---

## Construir la Pagina de Contacto

### Seccion 1: Encabezado de Pagina

1. **Anade una Seccion** — 1 columna
2. Background: Color primary o degradado sutil
3. Min Height: 250px, Vertical Align: Middle
4. Padding: 60px arriba y abajo

5. **Heading:** "Ponte en Contacto", H1, Centro, Blanco, 44px
6. **Text Editor:** "Nos encantaria saber de ti. Envianos un mensaje y te responderemos lo antes posible.", Centro, texto claro

---

### Seccion 2: Formulario + Informacion de Contacto (2 Columnas)

1. **Anade una Seccion** — 2 columnas (60/40 o 65/35)
2. Background: Blanco
3. Padding: 80px arriba y abajo

**Columna 1 (Formulario — mas ancha):**
- **Heading:** "Envianos un Mensaje", H3
- Widget **WPForms** o widget **Shortcode** con tu formulario

**Columna 2 (Informacion de Contacto — mas estrecha):**

Anade estos widgets:

**Heading:** "Informacion de Contacto", H3

**Icon List** widget (o widgets individuales Icon Box):
- Icono de telefono + "(555) 123-4567"
- Icono de email + "info@example.com"
- Icono de ubicacion + "Calle Empresa 123, Ciudad, CP 12345"

**Heading:** "Horario Comercial", H4
**Text Editor:**
```
Lunes - Viernes: 9:00 - 18:00
Sabado: 10:00 - 14:00
Domingo: Cerrado
```

**Social Icons** widget:
- Anade iconos para Facebook, Twitter/X, LinkedIn, Instagram
- Estilizalos para que coincidan con los colores de tu marca

---

### Seccion 3: Mapa

1. **Anade una Seccion** — 1 columna
2. Padding: 0 (sin padding — deja que el mapa ocupe de borde a borde)

**Widget Google Maps:**
- Arrastra el widget **Google Maps** a la seccion
- Introduce la direccion en el campo Location
- Establece el nivel de Zoom (14-16 es bueno para una ubicacion unica)
- Establece Height: 400px

**Nota:** Google Maps puede requerir una clave API para uso extendido. Para desarrollo local, normalmente funciona sin una.

**Alternativa — Incrustar un Mapa:**
1. Ve a Google Maps en tu navegador
2. Busca una direccion
3. Haz clic en Compartir → Insertar un mapa
4. Copia el codigo iframe
5. En Elementor, anade un widget **HTML** y pega el codigo de incrustacion

---

### Seccion 4: Seccion de Preguntas Frecuentes (Opcional)

Preguntas comunes que las personas podrian tener antes de contactarte:

1. **Anade una Seccion** — 1 columna
2. Background: Claro (#f8f9fa)
3. Padding: 80px arriba y abajo

4. **Heading:** "Preguntas Frecuentes", H2, Centro

5. Widget **Accordion**:
   - Elemento 1: "¿Cual es vuestro tiempo de respuesta habitual?" → "Respondemos a todas las consultas en un plazo de 24 horas laborables."
   - Elemento 2: "¿Ofreceis consultas gratuitas?" → "¡Si! Ofrecemos una consulta gratuita de 30 minutos para hablar sobre tu proyecto."
   - Elemento 3: "¿En que zonas prestais servicio?" → "Trabajamos con clientes de todo el mundo. Todos nuestros servicios se pueden ofrecer de forma remota."

---

## Dar Estilo al Formulario de Contacto

Los formularios de WPForms y Contact Form 7 se pueden estilizar con CSS. Anade esto al CSS Adicional del Personalizador (o en un widget Custom CSS en Elementor Pro):

### Estilo Basico del Formulario (WPForms):
```css
/* Campos de entrada */
.wpforms-form input[type="text"],
.wpforms-form input[type="email"],
.wpforms-form textarea {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 12px 15px;
    font-size: 16px;
    width: 100%;
}

/* Estado de enfoque */
.wpforms-form input:focus,
.wpforms-form textarea:focus {
    border-color: #1abc9c; /* tu color de acento */
    outline: none;
    box-shadow: 0 0 5px rgba(26, 188, 156, 0.3);
}

/* Boton de envio */
.wpforms-form button[type="submit"] {
    background-color: #e74c3c; /* tu color de acento */
    color: #ffffff;
    padding: 12px 30px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

.wpforms-form button[type="submit"]:hover {
    background-color: #c0392b; /* mas oscuro en hover */
}
```

---

## Probar Tu Formulario

### En Local WP:
- Local WP incluye **Mailhog** — una herramienta que captura los emails enviados por WordPress localmente
- En Local, haz clic en la pestana **"Tools"** → **"Open Mailhog"**
- Envia un formulario de prueba y comprueba Mailhog para ver el email

### Lista de Verificacion:
- [ ] Todos los campos obligatorios muestran errores de validacion cuando estan vacios
- [ ] El formulario se envia correctamente con un mensaje de confirmacion
- [ ] El email llega con todos los datos enviados
- [ ] El formulario se ve bien en movil
- [ ] El boton de envio es claramente visible

---

## Ejercicios

1. **Instala WPForms Lite**: Instala y activa el plugin.

2. **Crea un formulario de contacto**: Usa la plantilla Simple Contact Form. Anade un campo de Numero de Telefono y un desplegable de Asunto.

3. **Construye la pagina de contacto**: Sigue el diseno anterior — encabezado, formulario + informacion de contacto, mapa y preguntas frecuentes.

4. **Da estilo al formulario**: Anade CSS personalizado para que el formulario coincida con el diseno de tu sitio.

5. **Prueba el formulario**: Envia una entrada de prueba. Comprueba Mailhog (en Local WP) o la pagina de Entries de WPForms para confirmar que funciona.

6. **Comprueba en movil**: Previsualiza la pagina de contacto en movil y asegurate de que el diseno de 2 columnas se apila correctamente.

---

## Puntos Clave

- Usa **WPForms Lite** (gratuito) o **Contact Form 7** (gratuito) para formularios de contacto en Elementor Free
- Una buena pagina de contacto tiene: **formulario + datos de contacto + mapa**
- Usa un **diseno de 2 columnas**: columna mas ancha para el formulario, mas estrecha para la informacion de contacto
- **Prueba tu formulario** — usa Mailhog de Local WP para verificar que se envian los emails
- **Estiliza los formularios con CSS** para que coincidan con el diseno de tu sitio
- Una **seccion de preguntas frecuentes** puede responder consultas comunes y reducir las consultas innecesarias
- Incluye siempre **multiples formas de contacto** — formulario, email, telefono, redes sociales

---

**Siguiente Leccion:** [Leccion 19 - Templates, Guardar y Reutilizar Disenos](lesson-19-templates.md)
