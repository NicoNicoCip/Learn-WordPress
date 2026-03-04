# Leccion 17: Construir una Pagina Sobre Nosotros

## Objetivos
- Disenar una pagina Sobre Nosotros profesional usando Elementor
- Aprender los patrones de Image Box y Miembro del Equipo
- Practicar disenos de 2 columnas para combinaciones de imagen + texto
- Crear una pagina de narrativa visualmente atractiva

---

## Estructura de la Pagina Sobre Nosotros

Una buena pagina Sobre Nosotros normalmente incluye:

1. **Encabezado de Pagina** — titulo y breve introduccion
2. **Nuestra Historia** — historial/antecedentes de la empresa con imagenes
3. **Mision y Valores** — lo que representas
4. **Conoce al Equipo** — perfiles de los miembros del equipo
5. **CTA** — que hacer a continuacion

---

## Seccion 1: Encabezado de Pagina

1. **Anade una Seccion** — 1 columna
2. **Ajustes de la Seccion:**
   - Style: Background → tu color primary o una imagen hero con superposicion oscura
   - Content: Min Height → 300px, Vertical Align → Middle
   - Advanced: Padding → 60px arriba y abajo

3. **Anade un Heading:** "Sobre Nosotros"
   - H1, Centro, Blanco, 48px

4. **Anade un Text Editor:** "Conoce nuestro camino, nuestra mision y el equipo que hay detras de todo."
   - Centro, texto claro, 18px

---

## Seccion 2: Nuestra Historia

1. **Anade una Seccion** — 2 columnas (50/50)
2. **Ajustes de la Seccion:**
   - Style: Background → Blanco
   - Advanced: Padding → 80px arriba y abajo

**Columna 1 (Imagen):**
- Anade un widget **Image**
- Sube una imagen relevante (oficina, espacio de trabajo, producto)
- Estilo: Border Radius → 8px, Box Shadow → sombra sutil

**Columna 2 (Texto):**
- **Heading:** "Nuestra Historia", H2, alineado a la izquierda
- **Divider:** 15% de ancho, color de acento, 3px de grosor
- **Text Editor:** Escribe 2-3 parrafos sobre la historia de la empresa
  ```
  Fundada en 2020, comenzamos con una mision sencilla: ayudar a las
  pequenas empresas a prosperar en internet. Lo que empezo como un equipo
  de dos personas trabajando desde una oficina en casa ha crecido hasta
  convertirse en una agencia digital de servicio completo.

  A lo largo de los anos, hemos tenido el privilegio de trabajar con mas
  de 200 empresas, desde startups locales hasta empresas consolidadas.
  Cada proyecto nos ha ensenado algo nuevo y nos ha impulsado a seguir
  mejorando.
  ```

### Anadir una Segunda Seccion de Historia (Diseno Invertido)

1. **Anade otra seccion de 2 columnas** debajo
2. Esta vez, pon el **texto en la Columna 1** y la **imagen en la Columna 2**
3. Esto crea variedad visual con un diseno alternado

**Consejo:** Alternar imagen-izquierda/imagen-derecha crea un patron en zigzag que guia la vista hacia abajo en la pagina.

---

## Seccion 3: Mision y Valores

1. **Anade una Seccion** — 1 columna (para el encabezado)
2. Estilo: Background → gris claro (#f8f9fa)
3. Padding: 80px arriba, 20px abajo

4. **Anade un Heading:** "Nuestra Mision y Valores", H2, Centro

5. **Anade otra seccion debajo** — 3 columnas (aun con fondo gris claro)
6. Padding: 20px arriba, 80px abajo

En cada columna, anade un **Icon Box**:

**Columna 1:**
- Icono: `fa-bullseye` (diana)
- Titulo: "Nuestra Mision"
- Descripcion: "Ofrecer soluciones digitales que ayuden a las empresas a crecer y tener exito en internet."
- Alineacion: Centro

**Columna 2:**
- Icono: `fa-eye` (ojo)
- Titulo: "Nuestra Vision"
- Descripcion: "Un mundo donde cada empresa tenga acceso a herramientas digitales profesionales y efectivas."
- Alineacion: Centro

**Columna 3:**
- Icono: `fa-heart` (corazon)
- Titulo: "Nuestros Valores"
- Descripcion: "Calidad, transparencia, innovacion y poner a nuestros clientes en primer lugar en todo lo que hacemos."
- Alineacion: Centro

---

## Seccion 4: Conoce al Equipo

### Encabezado de la Seccion

1. **Anade una Seccion** — 1 columna
2. Background: Blanco
3. Padding: 80px arriba, 20px abajo

4. **Heading:** "Conoce al Equipo", H2, Centro
5. **Text Editor:** "Las personas con talento detras de nuestro exito", Centro, Gris

### Cuadricula del Equipo

1. **Anade una Seccion** — 3 o 4 columnas
2. Padding: 20px arriba, 80px abajo

Para cada miembro del equipo, anade estos widgets en una columna:

**Image:**
- Sube una foto de perfil (las fotos cuadradas funcionan mejor)
- Estilo: Border Radius → 50% (la convierte en circulo)
- O Border Radius → 8px (cuadrado redondeado)
- Alineacion: Centro

**Heading:**
- "Maria Garcia", H4, Centro, 20px

**Text Editor:**
- "Fundadora y CEO", Centro, texto gris, 14px
- Opcionalmente anade una breve biografia debajo

**Social Icons:**
- Anade el widget Social Icons
- Anade iconos de LinkedIn, Twitter/X
- Estilo: Size → 16px, Color → gris, Hover → color de acento
- Alineacion: Centro

### Repite para cada miembro del equipo (3-4 miembros).

---

## Seccion 5: Estadisticas de la Empresa (Opcional)

Entre la seccion del equipo y el CTA, puedes anadir una barra de estadisticas:

1. **Anade una Seccion** — 4 columnas
2. Background: Tu color primary o de acento
3. Padding: 40px arriba y abajo

Anade widgets **Counter**:
- "200+ Proyectos Completados"
- "50+ Clientes Satisfechos"
- "10 Anos de Experiencia"
- "15 Miembros del Equipo"
- Color: Blanco para todos los numeros y titulos

---

## Seccion 6: Seccion CTA

1. **Anade una Seccion** — 1 columna
2. Background: Claro (#f8f9fa) o tu color de acento
3. Min Height: 250px, Vertical Align: Middle
4. Padding: 60px arriba y abajo

5. **Heading:** "Trabajemos Juntos"
   - H2, Centro, 36px

6. **Text Editor:** "¿Tienes un proyecto en mente? Nos encantaria saber mas sobre el."
   - Centro, 18px

7. **Button:** "Contactanos" → `/contact`
   - Alineado al centro, con estilo acorde a tu diseno

---

## Consejos de Diseno para Paginas Sobre Nosotros

### Ritmo Visual
- Alterna entre secciones **imagen-izquierda/texto-derecha** y **texto-izquierda/imagen-derecha**
- Alterna entre fondos de seccion **blancos** y **gris claro**
- Esto crea ritmo visual y mantiene la pagina interesante

### Personalidad
- Usa **fotos reales** siempre que sea posible (no fotos de banco de imagenes)
- Escribe con un **tono calido y conversacional**
- Muestra la **personalidad de tu equipo** — las personas conectan con personas

### Mantenlo Escaneable
- Usa **encabezados** para separar el contenido
- Manten los parrafos **cortos** (3-4 frases como maximo)
- Usa **vietas** para listas de valores o servicios
- Anade **elementos visuales** (iconos, divisores, imagenes) para romper los bloques de texto

---

## Ejercicios

1. **Construye la pagina Sobre Nosotros completa** siguiendo las secciones anteriores.

2. **Usa contenido real o ficticio**: Escribe contenido real para una pagina Sobre Nosotros de un negocio real o imaginario. Haz que se sienta autentico.

3. **Anade miembros del equipo**: Crea al menos 3 tarjetas de miembros del equipo con fotos circulares, nombres, cargos e iconos sociales.

4. **Prueba el diseno en zigzag**: Crea dos secciones de imagen+texto donde la imagen alterne entre izquierda y derecha.

5. **Estilo consistente**: Asegurate de que todos los encabezados, textos y colores coincidan con tus estilos globales de la Leccion 15.

6. **Previsualiza en movil**: Comprueba como los disenos de 2 y 3 columnas se apilan en movil (deberian apilarse verticalmente de forma automatica).

---

## Puntos Clave

- Las paginas Sobre Nosotros cuentan tu historia — hazlas **personales y atractivas**
- Usa **disenos de 2 columnas** para combinaciones de imagen + texto
- **Alterna la posicion de la imagen** (izquierda/derecha) para variedad visual
- Las **imagenes circulares** (border-radius: 50%) funcionan genial para fotos de perfil del equipo
- Alterna los fondos de seccion entre **blanco y gris claro** para ritmo visual
- Manten el texto **escaneable** — parrafos cortos, encabezados, iconos
- Siempre termina con una **seccion CTA** — guia al visitante hacia su siguiente paso

---

**Siguiente Leccion:** [Leccion 18 - Construir una Pagina de Contacto con Formularios](lesson-18-contact-page.md)
