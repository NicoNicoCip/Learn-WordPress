# Leccion 16: Construir una Pagina de Inicio desde Cero

## Objetivos
- Construir una pagina de inicio profesional completa con Elementor
- Aprender las secciones comunes que toda pagina de inicio necesita
- Practicar la combinacion de widgets, estilos y tecnicas de diseno
- Crear una pagina real digna de portfolio

---

## Anatomia de una Pagina de Inicio

La mayoria de las paginas de inicio profesionales siguen esta estructura:

1. **Seccion Hero** — titular grande, descripcion, boton CTA
2. **Servicios/Caracteristicas** — lo que ofreces (3-4 cajas de iconos)
3. **Seccion Sobre Nosotros** — breve introduccion con imagen
4. **Prueba Social** — testimonios, logotipos de clientes o estadisticas
5. **Llamada a la Accion (CTA)** — impulso final para contactar/registrarse
6. **Footer** — informacion de contacto, enlaces, copyright

Vamos a construir cada una.

---

## Antes de Empezar

1. Abre tu pagina "Inicio" en Elementor
2. Si tiene contenido anterior, selecciona todo y elimina (o comienza con una pagina nueva)
3. Asegurate de que tus **colores y fuentes globales** estan configurados (Leccion 15)
4. En los **Ajustes (icono de engranaje)** de la parte inferior izquierda, establece:
   - **Page Layout**: Elementor Full Width (sin barra lateral, sin header/footer del theme)
   - O **Elementor Canvas** (completamente en blanco — sin header/footer en absoluto)
   - Por ahora, usa **Elementor Full Width**

---

## Seccion 1: Seccion Hero

La seccion hero es lo primero que ven los visitantes. Haz que cuente.

### Construyela:

1. **Anade una Seccion** — una sola columna
2. **Ajustes de la Seccion:**
   - Pestana Content: Height → Min Height → `600px`, Vertical Align → Middle
   - Pestana Style: Background → Classic → sube una imagen relevante (o usa un color solido)
   - Pestana Style: Background Overlay → Color: negro (#000000), Opacity: 0.5 (esto oscurece la imagen para que el texto sea legible)
   - Pestana Advanced: Padding → 80px arriba y abajo

3. **Anade un widget Heading:**
   - Contenido: "Construye el Sitio Web de Tus Suenos"
   - HTML Tag: H1
   - Alineacion: Centro
   - Estilo: Color → Blanco, Tamano → 52px, Peso → Bold

4. **Anade un widget Text Editor:**
   - Contenido: "Disenamos y desarrollamos sitios web impresionantes que convierten visitantes en clientes."
   - Estilo: Color → Blanco (#f0f0f0), Tamano → 20px, Alineacion → Centro
   - Advanced: Max Width → 700px (establece en Advanced → Layout → Width → Max Width), Align Self → Center

5. **Anade un widget Button:**
   - Contenido: Text → "Comenzar", Link → `/contact`, Alineacion → Centro
   - Estilo: Background → tu color de acento, Typography → 16px SemiBold, Padding → 15px arriba/abajo 40px izquierda/derecha, Border Radius → 30px
   - Estilo (Hover): Background → un tono ligeramente mas oscuro

6. **Anade un Spacer** entre el encabezado y el texto (20px) y entre el texto y el boton (30px) si es necesario.

---

## Seccion 2: Servicios/Caracteristicas

Muestra lo que ofreces en una cuadricula limpia.

### Construyela:

1. **Anade una Seccion** — 3 columnas (ancho igual)
2. **Ajustes de la Seccion:**
   - Style: Background → color claro (#f8f9fa)
   - Advanced: Padding → 80px arriba y abajo

3. **Encima de las columnas, anade un encabezado centrado:**
   - Primero, anade una seccion con 1 columna encima de esta
   - O anade un encabezado en la primera columna, abarcando el ancho completo
   - Mejor enfoque: Crea primero una seccion de 1 columna para el encabezado, luego una seccion de 3 columnas debajo

**Seccion del Encabezado (1 columna):**
- Heading: "Nuestros Servicios"
- Tag: H2, alineado al centro
- Estilo: Tu color primary, 36px
- Debajo, anade un Text Editor: "Lo que podemos hacer por ti", alineado al centro, texto gris
- Anade un widget Divider: Width → 10%, Alignment → Center (crea una pequena linea de acento)

**Seccion de Servicios (3 columnas):**
En cada columna, anade un widget **Icon Box**:

**Columna 1:**
- Icono: Elige un icono de diseno web (ej., `fa-laptop-code`)
- Titulo: "Diseno Web"
- Descripcion: "Sitios web bonitos y responsivos que lucen genial en cualquier dispositivo."
- Estilo: Icon Color → tu color de acento, Alineacion → Centro

**Columna 2:**
- Icono: `fa-search` o similar
- Titulo: "Optimizacion SEO"
- Descripcion: "Posicionate mas alto en Google y genera trafico organico hacia tu sitio."
- Estilo: Igual que la Columna 1

**Columna 3:**
- Icono: `fa-shopping-cart` o similar
- Titulo: "E-Commerce"
- Descripcion: "Tiendas online completas que hacen que vender sea facil."
- Estilo: Igual que la Columna 1

---

## Seccion 3: Seccion Sobre Nosotros

Un diseno de imagen + texto que presenta tu empresa.

### Construyela:

1. **Anade una Seccion** — 2 columnas (50/50)
2. **Ajustes de la Seccion:**
   - Style: Background → Blanco
   - Advanced: Padding → 80px arriba y abajo

**Columna 1 (Imagen):**
- Anade un widget **Image**
- Sube una foto del equipo o de la oficina
- Estilo: Border Radius → 10px (esquinas ligeramente redondeadas)

**Columna 2 (Contenido):**
- Anade un **Heading**: "Sobre Nuestra Empresa", H2, alineado a la izquierda
- Anade un **Divider**: Width → 15%, color → color de acento, Weight → 3px
- Anade un **Text Editor**: Un par de parrafos sobre la empresa
- Anade un **Button**: "Saber Mas" → enlaza a `/about`, tu color secundario

---

## Seccion 4: Prueba Social (Testimonios)

Genera confianza con testimonios de clientes.

### Construyela:

1. **Anade una Seccion** — 3 columnas
2. **Ajustes de la Seccion:**
   - Style: Background → tu color primary/oscuro
   - Advanced: Padding → 80px arriba y abajo

**Anade una seccion de encabezado encima (1 columna):**
- Heading: "Lo Que Dicen Nuestros Clientes", H2, Centro, texto blanco

**En cada columna, anade un widget Testimonial:**

**Testimonio 1:**
- Contenido: "Transformaron nuestra presencia online. Nuestras ventas aumentaron un 40% en el primer mes."
- Nombre: "Sara Garcia"
- Titulo: "CEO, TechStartup S.L."
- Imagen: Sube una foto de perfil de ejemplo
- Estilo: Text Color → Blanco/Gris claro, Name Color → Blanco

**Testimonios 2 y 3:** Estructura similar con diferente contenido.

**Alternativa (sin el widget Testimonial):**
Usa un Icon Box o Text Editor con un icono de comillas para un aspecto personalizado.

---

## Seccion 5: Seccion de Estadisticas/Contador (Opcional)

Los numeros impresionantes generan credibilidad.

### Construyela:

1. **Anade una Seccion** — 4 columnas
2. **Ajustes de la Seccion:**
   - Style: Background → color de acento (o degradado)
   - Advanced: Padding → 60px arriba y abajo

En cada columna, anade un widget **Counter**:
- Columna 1: Number → 250, Title → "Proyectos Completados", Color → Blanco
- Columna 2: Number → 50, Title → "Clientes Satisfechos", Color → Blanco
- Columna 3: Number → 10, Title → "Anos de Experiencia", Color → Blanco
- Columna 4: Number → 15, Title → "Miembros del Equipo", Color → Blanco

---

## Seccion 6: Llamada a la Accion (CTA)

El impulso final para que los visitantes actuen.

### Construyela:

1. **Anade una Seccion** — 1 columna
2. **Ajustes de la Seccion:**
   - Content: Height → Min Height → 300px, Vertical Align → Middle
   - Style: Background → tu color primary o un degradado sutil
   - Advanced: Padding → 60px arriba y abajo

3. **Anade un Heading**: "¿Listo para Comenzar Tu Proyecto?"
   - Alineado al centro, Blanco, H2, 36px

4. **Anade un Text Editor**: "Hablemos sobre tus ideas y creemos algo increible juntos."
   - Centro, texto gris claro

5. **Anade un Button**: "Contactanos" → `/contact`
   - Fondo blanco, tu color primary para el texto
   - O: fondo transparente con borde blanco (boton de contorno/fantasma)
   - Border Radius → 30px

---

## Toques Finales

### Revisar el Espaciado
- Desplazate por toda la pagina
- Asegurate de que el espaciado entre secciones sea consistente (80px de padding es un buen estandar)
- Verifica que ninguna seccion se sienta demasiado apretada o demasiado espaciada

### Revisar la Alineacion
- Los titulares deben tener un tamano consistente
- El texto del cuerpo debe ser del mismo tamano en toda la pagina
- Los colores deben coincidir con tu paleta global

### Guardar y Previsualizar
1. Pulsa **Ctrl + S** para guardar
2. Haz clic en el **icono del ojo** (Preview Changes) en la parte inferior del panel
3. O clic derecho → Previsualizar en nueva pestana

---

## Ejercicios

1. **Construye la pagina de inicio completa**: Sigue las 6 secciones anteriores paso a paso.

2. **Personaliza el contenido**: Reemplaza el texto de ejemplo con contenido relevante para un negocio real o ficticio.

3. **Experimenta con los fondos**: Prueba diferentes fondos de seccion — colores solidos, degradados e imagenes con superposiciones.

4. **Anade efectos hover**: En los botones y cajas de iconos, configura cambios de color al pasar el raton.

5. **Comprueba la version responsive**: Haz clic en el boton de modo responsive y comprueba como se ve tu pagina de inicio en tablet y movil. Corrige todo lo que no se vea bien (cubriremos el diseno responsive en detalle en la Leccion 20).

6. **Guardar como Template**: Haz clic en el asa de la seccion → Save as Template en tu mejor seccion. Puedes reutilizarla en otras paginas mas adelante.

---

## Puntos Clave

- Una pagina de inicio profesional tiene una estructura clara: Hero → Servicios → Sobre Nosotros → Prueba Social → CTA
- **Comienza desde arriba y trabaja hacia abajo** — construye seccion por seccion
- Usa un **espaciado consistente** (80px de padding en las secciones es un buen valor predeterminado)
- Las **superposiciones de fondo** hacen el texto legible sobre imagenes (superposicion oscura + texto blanco)
- Usa **colores globales** en todas partes — haz clic en el icono del globo en lugar de elegir colores manualmente
- El **widget Counter** es excelente para estadisticas impresionantes
- Siempre **previsualiza tu pagina** despues de construirla — comprueba el espaciado, la alineacion y la legibilidad
- **Guarda secciones como templates** para reutilizarlas en otras paginas

---

**Siguiente Leccion:** [Leccion 17 - Construir una Pagina Sobre Nosotros con Diseno Responsive](lesson-17-about-page.md)
